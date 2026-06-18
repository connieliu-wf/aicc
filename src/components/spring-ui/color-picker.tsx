"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/spring-ui/popover';
import { Input } from '@/components/spring-ui/input';
import { IconButton } from '@/components/spring-ui/iconButton';
import { EyedropperMediumIcon } from '@/icons';
import { colorToHsba, hsbaToHex, HSBA } from '@/lib/color-utils';

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
  children: React.ReactNode;
}

export function ColorPicker({ color, onChange, children }: ColorPickerProps) {
  const [hsba, setHsba] = useState<HSBA>(() => colorToHsba(color));
  const [isOpen, setIsOpen] = useState(false);
  const colorAreaRef = useRef<HTMLDivElement>(null);
  const hueSliderRef = useRef<HTMLDivElement>(null);
  const alphaSliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragType = useRef<'color' | 'hue' | 'alpha' | null>(null);
  const hsbaRef = useRef<HSBA>(hsba);
  const onChangeRef = useRef(onChange);

  // Update refs
  useEffect(() => {
    hsbaRef.current = hsba;
  }, [hsba]);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  // Update HSBA when color prop changes
  useEffect(() => {
    setHsba(colorToHsba(color));
  }, [color]);

  // Convert HSBA to hex
  const updateColor = useCallback((newHsba: HSBA) => {
    setHsba(newHsba);
    hsbaRef.current = newHsba;
    const hex = hsbaToHex(newHsba);
    onChangeRef.current(hex);
  }, []);

  // Get color gradient for main color area
  const getColorAreaGradient = (h: number) => {
    const rgb = (() => {
      const c = 1;
      const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
      const m = 0;
      
      let r = 0, g = 0, b = 0;
      if (h >= 0 && h < 60) {
        r = c; g = x; b = 0;
      } else if (h >= 60 && h < 120) {
        r = x; g = c; b = 0;
      } else if (h >= 120 && h < 180) {
        r = 0; g = c; b = x;
      } else if (h >= 180 && h < 240) {
        r = 0; g = x; b = c;
      } else if (h >= 240 && h < 300) {
        r = x; g = 0; b = c;
      } else if (h >= 300 && h < 360) {
        r = c; g = 0; b = x;
      }
      
      return {
        r: Math.round((r + m) * 255),
        g: Math.round((g + m) * 255),
        b: Math.round((b + m) * 255)
      };
    })();
    
    return `linear-gradient(to bottom, #ffffff 0%, transparent 50%, #000000 100%), linear-gradient(to right, transparent 0%, rgb(${rgb.r}, ${rgb.g}, ${rgb.b}) 100%)`;
  };

  // Handle mouse events for color area
  const handleColorAreaMouseDown = (e: React.MouseEvent) => {
    if (!colorAreaRef.current) return;
    isDragging.current = true;
    dragType.current = 'color';
    handleColorAreaMove(e);
  };

  const handleColorAreaMove = useCallback((e: React.MouseEvent | MouseEvent) => {
    if (!colorAreaRef.current || dragType.current !== 'color') return;
    
    const rect = colorAreaRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
    
    const s = Math.round(x * 100);
    const b = Math.round((1 - y) * 100);
    
    updateColor({ ...hsbaRef.current, s, b });
  }, [updateColor]);

  // Handle mouse events for hue slider
  const handleHueMouseDown = (e: React.MouseEvent) => {
    if (!hueSliderRef.current) return;
    isDragging.current = true;
    dragType.current = 'hue';
    handleHueMove(e);
  };

  const handleHueMove = useCallback((e: React.MouseEvent | MouseEvent) => {
    if (!hueSliderRef.current || dragType.current !== 'hue') return;
    
    const rect = hueSliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const h = Math.round(x * 360);
    
    updateColor({ ...hsbaRef.current, h });
  }, [updateColor]);

  // Handle mouse events for alpha slider
  const handleAlphaMouseDown = (e: React.MouseEvent) => {
    if (!alphaSliderRef.current) return;
    isDragging.current = true;
    dragType.current = 'alpha';
    handleAlphaMove(e);
  };

  const handleAlphaMove = useCallback((e: React.MouseEvent | MouseEvent) => {
    if (!alphaSliderRef.current || dragType.current !== 'alpha') return;
    
    const rect = alphaSliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const a = Math.round(x * 100);
    
    updateColor({ ...hsbaRef.current, a });
  }, [updateColor]);

  // Global mouse move and up handlers
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      
      if (dragType.current === 'color') {
        handleColorAreaMove(e);
      } else if (dragType.current === 'hue') {
        handleHueMove(e);
      } else if (dragType.current === 'alpha') {
        handleAlphaMove(e);
      }
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      dragType.current = null;
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleColorAreaMove, handleHueMove, handleAlphaMove]);

  // Handle input changes
  const handleHexChange = (value: string) => {
    // Handle transparent
    if (value.toLowerCase() === 'transparent' || value.toLowerCase().startsWith('trans')) {
      updateColor({ ...hsba, a: 0 });
      return;
    }
    
    // Handle hex colors
    if (value.startsWith('#')) {
      const newHsba = colorToHsba(value);
      if (newHsba) {
        updateColor(newHsba);
      }
      return;
    }
    
    // Handle rgba colors
    if (value.toLowerCase().startsWith('rgba')) {
      const newHsba = colorToHsba(value);
      if (newHsba) {
        updateColor(newHsba);
      }
    }
  };

  const handleHueChange = (value: string) => {
    const h = parseInt(value, 10);
    if (!isNaN(h) && h >= 0 && h <= 360) {
      updateColor({ ...hsba, h });
    }
  };

  const handleSaturationChange = (value: string) => {
    const s = parseInt(value, 10);
    if (!isNaN(s) && s >= 0 && s <= 100) {
      updateColor({ ...hsba, s });
    }
  };

  const handleBrightnessChange = (value: string) => {
    const b = parseInt(value, 10);
    if (!isNaN(b) && b >= 0 && b <= 100) {
      updateColor({ ...hsba, b });
    }
  };

  const handleAlphaChange = (value: string) => {
    const a = parseInt(value, 10);
    if (!isNaN(a) && a >= 0 && a <= 100) {
      updateColor({ ...hsba, a });
    }
  };

  // Calculate selector positions
  const colorAreaX = (hsba.s / 100) * 100;
  const colorAreaY = (1 - hsba.b / 100) * 100;
  const hueSliderX = (hsba.h / 360) * 100;
  const alphaSliderX = (hsba.a / 100) * 100;

  // Get current color for alpha slider background
  const currentColorRgb = (() => {
    const c = (hsba.b / 100) * (hsba.s / 100);
    const x = c * (1 - Math.abs(((hsba.h / 60) % 2) - 1));
    const m = (hsba.b / 100) - c;
    
    let r = 0, g = 0, b = 0;
    if (hsba.h >= 0 && hsba.h < 60) {
      r = c; g = x; b = 0;
    } else if (hsba.h >= 60 && hsba.h < 120) {
      r = x; g = c; b = 0;
    } else if (hsba.h >= 120 && hsba.h < 180) {
      r = 0; g = c; b = x;
    } else if (hsba.h >= 180 && hsba.h < 240) {
      r = 0; g = x; b = c;
    } else if (hsba.h >= 240 && hsba.h < 300) {
      r = x; g = 0; b = c;
    } else if (hsba.h >= 300 && hsba.h < 360) {
      r = c; g = 0; b = x;
    }
    
    return {
      r: Math.round((r + m) * 255),
      g: Math.round((g + m) * 255),
      b: Math.round((b + m) * 255)
    };
  })();

  const currentHex = hsbaToHex(hsba);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild onClick={(e) => e.stopPropagation()}>
        {children}
      </PopoverTrigger>
      <PopoverContent 
        className="w-[280px] p-3 z-[200] rounded-[4px]"
        onOpenAutoFocus={(e) => e.preventDefault()}
        onInteractOutside={(e) => {
          // Prevent closing when interacting with color picker controls
          const target = e.target as HTMLElement;
          if (target.closest('[data-color-picker]')) {
            e.preventDefault();
          }
        }}
      >
        <div className="space-y-3" data-color-picker>
          {/* Main Color Selection Area */}
          <div
            ref={colorAreaRef}
            className="relative w-full h-[250px] rounded-[4px] cursor-crosshair select-none"
            style={{
              background: getColorAreaGradient(hsba.h),
            }}
            onMouseDown={handleColorAreaMouseDown}
            data-color-picker
          >
            {/* Selector */}
            <div
              className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{
                left: `${colorAreaX}%`,
                top: `${colorAreaY}%`,
              }}
            >
              <div className="w-full h-full rounded-full border-2 border-white" />
            </div>
          </div>

          {/* Controls Section: Eyedropper and Sliders */}
          <div className="flex items-start gap-2">
            {/* Eyedropper Button */}
            <IconButton
              variant="ghost"
              size="icon"
              className="w-6 h-6 rounded-[4px] bg-[var(--bg-secondary)] border border-[var(--text-blue)] flex-shrink-0"
              onClick={() => {
                // Placeholder for eyedropper functionality
              }}
            >
              <EyedropperMediumIcon size={16} className="text-[var(--text-secondary)]" />
            </IconButton>

            {/* Sliders Column */}
            <div className="flex-1 space-y-2">
              {/* Hue Slider */}
              <div
                ref={hueSliderRef}
                className="w-full h-6 rounded-[4px] cursor-pointer select-none relative"
                style={{
                  background: 'linear-gradient(to right, #ff0000 0%, #ff8000 8.33%, #ffff00 16.67%, #80ff00 25%, #00ff00 33.33%, #00ff80 41.67%, #00ffff 50%, #0080ff 58.33%, #0000ff 66.67%, #8000ff 75%, #ff00ff 83.33%, #ff0080 91.67%, #ff0000 100%)',
                }}
                onMouseDown={handleHueMouseDown}
                data-color-picker
              >
                {/* Marker */}
                <div
                  className="absolute top-0 w-1 h-full bg-white border border-white pointer-events-none"
                  style={{
                    left: `${hueSliderX}%`,
                  }}
                />
              </div>

              {/* Alpha Slider */}
              <div
                ref={alphaSliderRef}
                className="w-full h-6 rounded-[4px] cursor-pointer select-none relative"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, transparent 0%, rgb(${currentColorRgb.r}, ${currentColorRgb.g}, ${currentColorRgb.b}) 100%),
                    linear-gradient(45deg, #d0d0d0 25%, transparent 25%),
                    linear-gradient(-45deg, #d0d0d0 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, #d0d0d0 75%),
                    linear-gradient(-45deg, transparent 75%, #d0d0d0 75%)
                  `,
                  backgroundSize: '100% 100%, 8px 8px, 8px 8px, 8px 8px, 8px 8px',
                  backgroundPosition: '0 0, 0 0, 0 4px, 4px -4px, -4px 0px',
                }}
                onMouseDown={handleAlphaMouseDown}
                data-color-picker
              >
                {/* Marker */}
                <div
                  className="absolute top-0 w-1 h-full bg-white border border-white pointer-events-none"
                  style={{
                    left: `${alphaSliderX}%`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Input Fields Section */}
          <div className="space-y-2">
            {/* Input Fields Row */}
            <div className="flex items-center gap-1" data-color-picker>
              <div className="w-[100px]">
                <Input
                  value={currentHex === 'transparent' ? 'transparent' : currentHex}
                  onChange={(e) => handleHexChange(e.target.value)}
                  className="h-8 text-xs"
                  data-color-picker
                />
              </div>
              <div className="w-12">
                <Input
                  value={hsba.h.toString()}
                  onChange={(e) => handleHueChange(e.target.value)}
                  className="h-8 text-xs text-center"
                  data-color-picker
                />
              </div>
              <div className="w-12">
                <Input
                  value={hsba.s.toString()}
                  onChange={(e) => handleSaturationChange(e.target.value)}
                  className="h-8 text-xs text-center"
                  data-color-picker
                />
              </div>
              <div className="w-12">
                <Input
                  value={hsba.b.toString()}
                  onChange={(e) => handleBrightnessChange(e.target.value)}
                  className="h-8 text-xs text-center"
                  data-color-picker
                />
              </div>
              <div className="w-12">
                <Input
                  value={hsba.a.toString()}
                  onChange={(e) => handleAlphaChange(e.target.value)}
                  className="h-8 text-xs text-center"
                  data-color-picker
                />
              </div>
            </div>

            {/* Labels Row */}
            <div className="flex items-center gap-1">
              <div className="w-[100px] body-text text-[var(--text-secondary)] text-xs">HEX</div>
              <button className="w-12 body-text text-[var(--text-dimmed)] text-xs text-center hover:text-[var(--text-primary)] bg-[var(--bg-secondary)] rounded-[2px] py-0.5">H</button>
              <button className="w-12 body-text text-[var(--text-dimmed)] text-xs text-center hover:text-[var(--text-primary)] bg-[var(--bg-secondary)] rounded-[2px] py-0.5">S</button>
              <button className="w-12 body-text text-[var(--text-dimmed)] text-xs text-center hover:text-[var(--text-primary)] bg-[var(--bg-secondary)] rounded-[2px] py-0.5">B</button>
              <button className="w-12 body-text text-[var(--text-dimmed)] text-xs text-center hover:text-[var(--text-primary)] bg-[var(--bg-secondary)] rounded-[2px] py-0.5">A</button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

