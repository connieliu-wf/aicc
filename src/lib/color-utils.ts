/**
 * Color utility functions for converting between different color formats
 */

export interface RGB {
  r: number;
  g: number;
  b: number;
}

export interface HSB {
  h: number; // 0-360
  s: number; // 0-100
  b: number; // 0-100
}

export interface HSBA extends HSB {
  a: number; // 0-100 (alpha)
}

/**
 * Convert hex color to RGB
 */
export function hexToRgb(hex: string): RGB | null {
  // Remove # if present
  hex = hex.replace('#', '');
  
  // Handle 3-digit hex
  if (hex.length === 3) {
    hex = hex.split('').map(char => char + char).join('');
  }
  
  if (hex.length !== 6) {
    return null;
  }
  
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    return null;
  }
  
  return { r, g, b };
}

/**
 * Convert RGB to hex
 */
export function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (n: number) => {
    const hex = Math.round(Math.max(0, Math.min(255, n))).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toLowerCase();
}

/**
 * Convert RGB to HSB
 */
export function rgbToHsb(r: number, g: number, b: number): HSB {
  r /= 255;
  g /= 255;
  b /= 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  
  let h = 0;
  if (delta !== 0) {
    if (max === r) {
      h = ((g - b) / delta) % 6;
    } else if (max === g) {
      h = (b - r) / delta + 2;
    } else {
      h = (r - g) / delta + 4;
    }
  }
  h = Math.round(h * 60);
  if (h < 0) h += 360;
  
  const s = max === 0 ? 0 : Math.round((delta / max) * 100);
  const brightness = Math.round(max * 100);
  
  return { h, s, b: brightness };
}

/**
 * Convert HSB to RGB
 */
export function hsbToRgb(h: number, s: number, b: number): RGB {
  s /= 100;
  b /= 100;
  
  const c = b * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = b - c;
  
  let r = 0, g = 0, blue = 0;
  
  if (h >= 0 && h < 60) {
    r = c; g = x; blue = 0;
  } else if (h >= 60 && h < 120) {
    r = x; g = c; blue = 0;
  } else if (h >= 120 && h < 180) {
    r = 0; g = c; blue = x;
  } else if (h >= 180 && h < 240) {
    r = 0; g = x; blue = c;
  } else if (h >= 240 && h < 300) {
    r = x; g = 0; blue = c;
  } else if (h >= 300 && h < 360) {
    r = c; g = 0; blue = x;
  }
  
  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((blue + m) * 255)
  };
}

/**
 * Parse color string to RGB and alpha
 */
export function parseColor(color: string): { rgb: RGB; alpha: number } | null {
  color = color.trim();
  
  // Handle hex
  if (color.startsWith('#')) {
    const rgb = hexToRgb(color);
    if (rgb) {
      return { rgb, alpha: 100 };
    }
  }
  
  // Handle rgb/rgba
  const rgbMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
  if (rgbMatch) {
    const r = parseInt(rgbMatch[1], 10);
    const g = parseInt(rgbMatch[2], 10);
    const b = parseInt(rgbMatch[3], 10);
    const alpha = rgbMatch[4] ? parseFloat(rgbMatch[4]) * 100 : 100;
    
    return { rgb: { r, g, b }, alpha };
  }
  
  // Handle named colors (basic set)
  const namedColors: Record<string, string> = {
    black: '#000000',
    white: '#ffffff',
    red: '#ff0000',
    green: '#008000',
    blue: '#0000ff',
    yellow: '#ffff00',
    cyan: '#00ffff',
    magenta: '#ff00ff',
    transparent: '#000000'
  };
  
  const lowerColor = color.toLowerCase();
  if (namedColors[lowerColor]) {
    const rgb = hexToRgb(namedColors[lowerColor]);
    if (rgb) {
      return { rgb, alpha: lowerColor === 'transparent' ? 0 : 100 };
    }
  }
  
  return null;
}

/**
 * Format any color to hex (or rgba if alpha < 100)
 */
export function formatToHex(color: string): string {
  const parsed = parseColor(color);
  if (!parsed) {
    return '#000000';
  }
  
  if (parsed.alpha === 0) {
    return 'transparent';
  }
  
  // Preserve rgba format if alpha is not 100
  if (parsed.alpha < 100) {
    const alpha = parsed.alpha / 100;
    return `rgba(${parsed.rgb.r}, ${parsed.rgb.g}, ${parsed.rgb.b}, ${alpha.toFixed(2)})`;
  }
  
  return rgbToHex(parsed.rgb.r, parsed.rgb.g, parsed.rgb.b);
}

/**
 * Convert color string to HSBA
 */
export function colorToHsba(color: string): HSBA {
  const parsed = parseColor(color);
  if (!parsed) {
    return { h: 0, s: 0, b: 0, a: 100 };
  }
  
  const hsb = rgbToHsb(parsed.rgb.r, parsed.rgb.g, parsed.rgb.b);
  return { ...hsb, a: parsed.alpha };
}

/**
 * Convert HSBA to rgba color string
 */
export function hsbaToRgba(hsba: HSBA): string {
  if (hsba.a === 0) {
    return 'transparent';
  }
  
  const rgb = hsbToRgb(hsba.h, hsba.s, hsba.b);
  const alpha = hsba.a / 100;
  
  if (hsba.a === 100) {
    return rgbToHex(rgb.r, rgb.g, rgb.b);
  }
  
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha.toFixed(2)})`;
}

/**
 * Convert HSBA to hex color string (or rgba if alpha < 100)
 */
export function hsbaToHex(hsba: HSBA): string {
  return hsbaToRgba(hsba);
}

