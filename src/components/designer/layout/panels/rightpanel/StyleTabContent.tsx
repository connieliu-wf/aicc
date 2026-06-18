"use client";

import React, { useState } from 'react';
import Accordion from '@/components/spring-ui/accordion';
import { Input } from '@/components/spring-ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/spring-ui/select';
import { Button } from '@/components/spring-ui/button';
import { Checkbox } from '@/components/spring-ui/checkbox';
import { SegmentedControl, SegmentedControlItem } from '@/components/spring-ui/segmented-control';
import { IconButton } from '@/components/spring-ui/iconButton';
import { 
  TextAlignLeftIcon, 
  TextAlignCenterIcon, 
  TextAlignRightIcon, 
  TextAlignJustifyIcon,
  TextDecorationStrikeIcon,
  TextDecorationUnderlineIcon,
  TextDecorationOverlineIcon,
  MoreIcon,
  ChevronSmallRightIcon,
  OverflowVisibleIcon,
  OverflowHiddenIcon,
  OverflowScrollIcon,
  BorderRadiusAllIcon,
  BorderRadiusSingleIcon,
  BorderStyleSolidIcon,
  BorderStyleDashedIcon,
  BorderStyleDottedIcon,
  BorderTopIcon,
  BorderLeftIcon,
  BorderAllIcon,
  BorderRightIcon,
  BorderBottomIcon,
  AddIcon,
  CloseDefaultIcon,
  DesktopStarBreakpointIcon,
  ElementDivIcon,
  AISparkleIcon
} from '@/icons';
import { Slider } from '@/components/spring-ui/slider';
import { Tag } from '@/components/spring-ui/tag';
import { getImagePath } from '@/lib/utils';

const StyleTabContent: React.FC = () => {
  const [alignValue, setAlignValue] = useState("left");
  const [decorValue, setDecorValue] = useState("none");
  const [overflowValue, setOverflowValue] = useState("visible");
  const [borderStyleValue, setBorderStyleValue] = useState("solid");
  const [borderRadiusValue, setBorderRadiusValue] = useState([0]);
  const [opacityValue, setOpacityValue] = useState([100]);
  const [outlineValue, setOutlineValue] = useState("none");
  const [eventsValue, setEventsValue] = useState("auto");
  const [displayValue, setDisplayValue] = useState("flex");
  const [selectedClass, setSelectedClass] = useState("Page wrapper");
  const [positionValue, setPositionValue] = useState("static");
  const [fontValue, setFontValue] = useState("satoshi");
  const [weightValue, setWeightValue] = useState("500");
  const [clippingValue, setClippingValue] = useState("none");
  const [blendingValue, setBlendingValue] = useState("normal");
  const [cursorValue, setCursorValue] = useState("auto");

  return (
    <div className="overflow-y-auto">
      <div className="px-2 pt-2 pb-0 border-b border-[var(--border-default)]">
        <div className="flex items-center justify-between mb-1">
          <span className="body-text text-[var(--text-secondary)]">Style selector</span>
          <div>
            <span className="body-text text-[var(--text-secondary)]">Inheriting </span>
            <span className="body-text text-[var(--text-orange)]">1 selector</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <div className="flex-1 relative">
              <div className="relative">
                <Select value="" onValueChange={(value: string) => {
                  if (value === "page-wrapper") setSelectedClass("");
                  else if (value === "parent-element") setSelectedClass("Parent element");
                  else if (value === "child-element") setSelectedClass("Child element");
                }}>
                  <SelectTrigger className="w-full pl-8 bg-[var(--input-bg)] border-[var(--input-border)] rounded-sm" style={{ height: "34px" }}>
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="page-wrapper">Page wrapper</SelectItem>
                    <SelectItem value="parent-element">Parent element</SelectItem>
                    <SelectItem value="child-element">Child element</SelectItem>
                  </SelectContent>
                </Select>
                
                <div className="absolute left-1 top-1/2 transform -translate-y-1/2 z-10">
                  <IconButton 
                    variant="default" 
                    size="comfortable" 
                    aria-label="Select desktop breakpoint"
                    className="h-6 w-6"
                  >
                    <DesktopStarBreakpointIcon size={16} />
                  </IconButton>
                </div>
                
                <div className="absolute left-8 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <Tag 
                    variant="blue" 
                    styleType="solid"
                    size="comfort"
                    className="h-6 px-2 flex items-center"
                  >
                    <span>{selectedClass}</span>
                  </Tag>
                </div>
               
              </div>
            </div>
          </div>
          
          <div className="body-text mb-2">
            1 on this page, 1 on other pages.
          </div>
          
        </div>
      </div>
      <div className="flex items-center justify-between px-2 pt-2 pb-2 border-b border-[var(--border-default)]">
        <div className="body-text text-[var(--text-secondary)]">
          Variable modes
        </div>
        <Button variant="ghost" className="p-0 h-5 w-5 flex items-center justify-center text-[var(--text-secondary)]">
          <AddIcon size={14} />
        </Button>
      </div>

      <Accordion title="Layout" defaultOpen={true}>
        <div className="px-2 pb-2">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[var(--text-secondary)] body-text">
              <span className="w-[49px]">Display</span>
              <SegmentedControl 
                className="flex-1" 
                fullWidth 
                value={displayValue} 
                onValueChange={setDisplayValue}
              >
                <SegmentedControlItem value="block">
                  Block
                </SegmentedControlItem>
                <SegmentedControlItem value="flex">
                  Flex
                </SegmentedControlItem>
                <SegmentedControlItem value="grid">
                  Grid
                </SegmentedControlItem>
                <SegmentedControlItem value="none">
                  None
                </SegmentedControlItem>
              </SegmentedControl>
            </div>
          </div>
        </div>
      </Accordion>

      <Accordion title="Spacing" defaultOpen={true}>
        <div className="px-2 pb-2">
          <div className="w-full flex justify-center">
            <img 
              src={getImagePath("/images/spacing-box-model.png")}
              alt="Margin and Padding Box Model" 
              className="w-full"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </Accordion>

      <Accordion title="Size" defaultOpen={true}>
        <div className="px-2 pb-2">
          <div className="flex items-center gap-2 mb-2 text-[var(--text-secondary)] body-text">
            <span className="w-[52px]">Width</span>
            <div className="flex-1 relative">
              <Input defaultValue="Auto" />
            </div>
            <span className="w-[52px]">Height</span>
            <div className="flex-1 relative">
              <Input defaultValue="Auto" />
            </div>
          </div>

          <div className="flex items-center gap-2 mb-2 text-[var(--text-secondary)] body-text">
            <span className="w-[52px]">Min W</span>
            <div className="flex-1 relative">
              <Input defaultValue="0" />
              <span className="absolute right-1 top-1/2 transform -translate-y-1/2 text-[var(--text-dimmed)] text-[9px]">PX</span>
            </div>
            <span className="w-[52px]">Min H</span>
            <div className="flex-1 relative">
              <Input defaultValue="0" />
              <span className="absolute right-1 top-1/2 transform -translate-y-1/2 text-[var(--text-dimmed)] text-[9px]">PX</span>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-2 text-[var(--text-secondary)] body-text">
            <span className="w-[52px]">Max W</span>
            <div className="flex-1 relative">
              <Input defaultValue="None" />
            </div>
            <span className="w-[52px]">Max H</span>
            <div className="flex-1 relative">
              <Input defaultValue="None" />
            </div>
          </div>

          <div className="flex items-center gap-2 mb-2 text-[var(--text-secondary)] body-text">
            <span className="w-[49px]">Overflow</span>
            <SegmentedControl 
              className="flex-1" 
              fullWidth 
              value={overflowValue} 
              onValueChange={setOverflowValue}
            >
              <SegmentedControlItem value="visible" isIcon>
                <OverflowVisibleIcon size={16} />
              </SegmentedControlItem>
              <SegmentedControlItem value="hidden" isIcon>
                <OverflowHiddenIcon size={16} />
              </SegmentedControlItem>
              <SegmentedControlItem value="scroll" isIcon>
                <OverflowScrollIcon size={16} />
              </SegmentedControlItem>
              <SegmentedControlItem value="auto" isIcon>
                <span className="transform rotate-90">⇅</span>
              </SegmentedControlItem>
              <SegmentedControlItem value="auto-text">
                <span className="text-xs">Auto</span>
              </SegmentedControlItem>
            </SegmentedControl>
          </div>

          <Button variant="outline" className="w-full mt-1 flex items-center justify-center gap-1 text-[var(--text-secondary)]">
            <ChevronSmallRightIcon size={14} />
            More size options
          </Button>
        </div>
      </Accordion>

      <Accordion title="Position" defaultOpen={true}>
        <div className="px-2 pb-2 text-[var(--text-secondary)]">
          <div className="grid grid-cols-1 gap-2">
            <div className="flex items-center">
              <span className="body-text w-[49px]">Position</span>
              <Select value={positionValue} onValueChange={setPositionValue}>
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Static" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="static">Static</SelectItem>
                  <SelectItem value="relative">Relative</SelectItem>
                  <SelectItem value="absolute">Absolute</SelectItem>
                  <SelectItem value="fixed">Fixed</SelectItem>
                  <SelectItem value="sticky">Sticky</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col">
              <Button variant="outline" className="w-full mt-1 flex items-center justify-center gap-1 text-[var(--text-secondary)]">
                <ChevronSmallRightIcon size={14} />
                Float and clear
              </Button>
            </div>
          </div>
        </div>
      </Accordion>

      <Accordion title="Typography" defaultOpen={true}>
        <div className="px-2 pb-2">
          <div className="flex flex-col gap-2 text-[var(--text-secondary)]">
            <div className="flex items-center">
              <span className="body-text w-[49px]">Font</span>
              <Select value={fontValue} onValueChange={setFontValue}>
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Satoshi" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="satoshi">Satoshi</SelectItem>
                  <SelectItem value="inter">Inter</SelectItem>
                  <SelectItem value="sans-serif">Sans Serif</SelectItem>
                  <SelectItem value="monospace">Monospace</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center">
              <span className="body-text w-[49px]">Weight</span>
              <Select value={weightValue} onValueChange={setWeightValue}>
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="500 - Medium" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="300">300 - Light</SelectItem>
                  <SelectItem value="400">400 - Regular</SelectItem>
                  <SelectItem value="500">500 - Medium</SelectItem>
                  <SelectItem value="600">600 - Semi-Bold</SelectItem>
                  <SelectItem value="700">700 - Bold</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center">
              <span className="body-text w-[49px]">Size</span>
              <div className="flex-1 relative">
                <Input defaultValue="16" />
                <span className="absolute right-1 top-1/2 transform -translate-y-1/2 text-[var(--text-dimmed)] text-[9px]">PX</span>
              </div>
              <span className="text-[var(--text-yellow)] body-text w-[49px] text-center">Height</span>
              <div className="flex-1 relative">
                <Input defaultValue="20" />
                <span className="absolute right-1 top-1/2 transform -translate-y-1/2 text-[var(--text-dimmed)] text-[9px]">PX</span>
              </div>
            </div>
            
            <div className="flex items-center">
              <span className="body-text w-[49px]">Size</span>
              <div className="flex-1 relative">
                <Input defaultValue="White" />
              </div>
            </div>
            
            <div className="flex items-center">
              <span className="body-text w-[49px]">Align</span>
              <SegmentedControl 
                className="flex-1" 
                fullWidth 
                value={alignValue} 
                onValueChange={setAlignValue}
              >
                <SegmentedControlItem value="left" isIcon>
                  <TextAlignLeftIcon size={16} />
                </SegmentedControlItem>
                <SegmentedControlItem value="center" isIcon>
                  <TextAlignCenterIcon size={16} />
                </SegmentedControlItem>
                <SegmentedControlItem value="right" isIcon>
                  <TextAlignRightIcon size={16} />
                </SegmentedControlItem>
                <SegmentedControlItem value="justify" isIcon>
                  <TextAlignJustifyIcon size={16} />
                </SegmentedControlItem>
              </SegmentedControl>
            </div>
            
            <div className="flex items-center">
              <span className="body-text w-[49px]">Decor</span>
              <div className="flex-1 flex gap-1">
                <SegmentedControl 
                  className="flex-1"
                  fullWidth 
                  value={decorValue} 
                  onValueChange={setDecorValue}
                >
                  <SegmentedControlItem value="none" isIcon>
                    <TextDecorationStrikeIcon size={16} />
                  </SegmentedControlItem>
                  <SegmentedControlItem value="underline" isIcon>
                    <TextDecorationUnderlineIcon size={16} />
                  </SegmentedControlItem>
                  <SegmentedControlItem value="overline" isIcon>
                    <TextDecorationOverlineIcon size={16} />
                  </SegmentedControlItem>
                  <SegmentedControlItem value="line-through" isIcon>
                    <TextDecorationStrikeIcon size={16} />
                  </SegmentedControlItem>
                </SegmentedControl>
                <Button variant="ghost" className="aspect-square h-6 p-0 flex justify-center items-center">
                  <MoreIcon size={16} />
                </Button>
              </div>
            </div>
            
            <Button variant="outline" className="w-full mt-1 flex items-center justify-center gap-1 text-[var(--text-secondary)]">
            <ChevronSmallRightIcon size={14} />
              More type options
            </Button>
          </div>
        </div>
      </Accordion>

      <Accordion title="Backgrounds" defaultOpen={true}>
        <div className="px-2 pb-2">
          <div className="flex items-center gap-2 mb-2 text-[var(--text-secondary)] body-text">
            <span className="w-full">Image & gradient</span>
            <AddIcon size={16} />
          </div>
          <div className="flex items-center gap-2 mb-2 text-[var(--text-secondary)] body-text">
            <span className="w-[49px]">Color</span>
            <div className="flex-1 flex items-center gap-2">
              <Input 
                defaultValue="transparent" 
                className="flex-1 text-[var(--text-primary)]"
              />
            </div>
          </div>
        </div>
      </Accordion>

      <Accordion title="Effects" defaultOpen={true}>
        <div className="px-2 pb-2">
          <div className="flex items-center gap-2 mb-2 text-[var(--text-secondary)] body-text">
            <span className="w-[49px]">Clipping</span>
            <div className="flex-1">
              <Select value={clippingValue} onValueChange={setClippingValue}>
                <SelectTrigger>
                  <SelectValue placeholder="None" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="circle">Circle</SelectItem>
                  <SelectItem value="ellipse">Ellipse</SelectItem>
                  <SelectItem value="polygon">Polygon</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </Accordion>

      <Accordion title="Borders" defaultOpen={true}>
        <div className="px-2 pb-2">
          <div className="flex items-center gap-2 mb-2 text-[var(--text-secondary)] body-text">
            <span className="w-[49px]">Radius</span>
            <div className="flex items-center gap-2">
              <Button variant="ghost" className="h-6 w-6 flex justify-center items-center bg-[var(--action-secondary-bg)]">
                <BorderRadiusAllIcon size={16} />
              </Button>
              <Button variant="ghost" className="h-6 w-6 flex justify-center items-center">
                <BorderRadiusSingleIcon size={16} />
              </Button>
              <Slider 
                className="w-16 mx-1" 
                value={borderRadiusValue}
                min={0}
                max={100}
                step={1}
                onValueChange={(value) => setBorderRadiusValue(value)}
              />
              <div className="flex-1 relative">
                <Input 
                  value={borderRadiusValue[0]} 
                  onChange={(e) => setBorderRadiusValue([parseInt(e.target.value) || 0])}
                />
                <span className="absolute right-1 top-1/2 transform -translate-y-1/2 text-[var(--text-dimmed)] text-[9px]">PX</span>
              </div>
            </div>
          </div>
          
          <div className="flex-row items-center gap-2 mb-2 text-[var(--text-secondary)] body-text">
            <div className="w-[49px]">Borders</div>
            <div className="flex items-center gap-3">
              <div className="grid grid-cols-3 gap-0 max-w-[72px]">
                {/* Top row */}
                <div></div>
                <Button variant="ghost" className="h-6 w-6 flex justify-center items-center">
                  <BorderTopIcon size={16} />
                </Button>
                <div></div>
                
                {/* Middle row */}
                <Button variant="ghost" className="h-6 w-6 flex justify-center items-center">
                  <BorderLeftIcon size={16} />
                </Button>
                <Button variant="ghost" className="h-6 w-6 flex justify-center items-center">
                  <BorderAllIcon size={16} />
                </Button>
                <Button variant="ghost" className="h-6 w-6 flex justify-center items-center">
                  <BorderRightIcon size={16} />
                </Button>
                
                {/* Bottom row */}
                <div></div>
                <Button variant="ghost" className="h-6 w-6 flex justify-center items-center">
                  <BorderBottomIcon size={16} />
                </Button>
                <div></div>
              </div>

              <div className="flex-1 flex flex-col gap-2">
                {/* Style control */}
                <div className="flex items-center gap-2">
                  <span className="w-12 text-xs">Style</span>
                  <SegmentedControl 
                    className="flex-1" 
                    fullWidth 
                    value={borderStyleValue} 
                    onValueChange={setBorderStyleValue}
                  >
                    <SegmentedControlItem value="solid" isIcon>
                      <BorderStyleSolidIcon size={16} />
                    </SegmentedControlItem>
                    <SegmentedControlItem value="dashed" isIcon>
                      <BorderStyleDashedIcon size={16} />
                    </SegmentedControlItem>
                    <SegmentedControlItem value="dotted" isIcon>
                      <BorderStyleDottedIcon size={16} />
                    </SegmentedControlItem>
                    <SegmentedControlItem value="double" isIcon>
                      <span className="text-xs">=</span>
                    </SegmentedControlItem>
                  </SegmentedControl>
                </div>

                {/* Width control */}
                <div className="flex items-center gap-2">
                  <span className="w-12 text-xs">Width</span>
                  <div className="flex-1 relative">
                    <Input defaultValue="0" />
                    <span className="absolute right-1 top-1/2 transform -translate-y-1/2 text-[var(--text-dimmed)] text-[9px]">PX</span>
                  </div>
                </div>

                {/* Color control */}
                <div className="flex items-center gap-2">
                  <span className="w-12 text-xs">Color</span>
                  <div className="flex-1 flex items-center gap-2">
                    <div className="w-6 h-6 bg-black border border-[var(--border-default)] rounded-[4px]"></div>
                    <Input 
                      defaultValue="black" 
                      className="flex-1 text-[var(--text-primary)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Accordion>

      <Accordion title="Effects" defaultOpen={true}>
        <div className="px-2 pb-2">
          <div className="flex items-center gap-2 mb-2 text-[var(--text-secondary)] body-text">
            <span className="w-[60px]">Blending</span>
            <div className="flex-1">
              <Select value={blendingValue} onValueChange={setBlendingValue}>
                <SelectTrigger>
                  <SelectValue placeholder="Normal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="multiply">Multiply</SelectItem>
                  <SelectItem value="screen">Screen</SelectItem>
                  <SelectItem value="overlay">Overlay</SelectItem>
                  <SelectItem value="darken">Darken</SelectItem>
                  <SelectItem value="lighten">Lighten</SelectItem>
                  <SelectItem value="color-dodge">Color Dodge</SelectItem>
                  <SelectItem value="color-burn">Color Burn</SelectItem>
                  <SelectItem value="hard-light">Hard Light</SelectItem>
                  <SelectItem value="soft-light">Soft Light</SelectItem>
                  <SelectItem value="difference">Difference</SelectItem>
                  <SelectItem value="exclusion">Exclusion</SelectItem>
                  <SelectItem value="hue">Hue</SelectItem>
                  <SelectItem value="saturation">Saturation</SelectItem>
                  <SelectItem value="color">Color</SelectItem>
                  <SelectItem value="luminosity">Luminosity</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex items-center gap-2 mb-2 text-[var(--text-secondary)] body-text">
            <span className="w-[60px]">Opacity</span>
            <Slider 
              className="flex-1" 
              value={opacityValue}
              min={0}
              max={100}
              step={1}
              onValueChange={(value) => setOpacityValue(value)}
            />
            <div className="w-14 relative">
              <Input 
                value={opacityValue[0]} 
                onChange={(e) => setOpacityValue([parseInt(e.target.value) || 0])}
              />
              <span className="absolute right-1 top-1/2 transform -translate-y-1/2 text-[var(--text-dimmed)] text-[9px]">%</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 mb-2 text-[var(--text-secondary)] body-text">
            <span className="w-[60px]">Outline</span>
            <SegmentedControl 
              className="flex-1" 
              fullWidth 
              value={outlineValue} 
              onValueChange={setOutlineValue}
            >
              <SegmentedControlItem value="none" isIcon>
                <CloseDefaultIcon size={16} />
              </SegmentedControlItem>
              <SegmentedControlItem value="solid" isIcon>
                <BorderStyleSolidIcon size={16} />
              </SegmentedControlItem>
              <SegmentedControlItem value="dashed" isIcon>
                <BorderStyleDashedIcon size={16} />
              </SegmentedControlItem>
              <SegmentedControlItem value="dotted" isIcon>
                <BorderStyleDottedIcon size={16} />
              </SegmentedControlItem>
            </SegmentedControl>
          </div>
        </div>
      </Accordion>

      <Accordion title="Actions" defaultOpen={true}>
        <div className="px-2 pb-2">
          <div className="flex items-center gap-2 mb-2 text-[var(--text-secondary)] body-text">
            <span className="w-[49px]">Cursor</span>
            <Button variant="ghost" className="p-1 h-6 w-6 flex items-center justify-center text-[var(--text-secondary)]">
              <AISparkleIcon size={14} />
            </Button>
            <Select value={cursorValue} onValueChange={setCursorValue} />
          </div>
          <div className="flex items-center gap-2 mb-2 text-[var(--text-secondary)] body-text">
            <span className="w-[49px]">Events</span>
            <Button variant="ghost" className="p-1 h-6 w-6 flex items-center justify-center text-[var(--text-secondary)]">
              <AISparkleIcon size={14} />
            </Button>
            <Select value={eventsValue} onValueChange={setEventsValue} />
          </div>
          <div className="flex items-center gap-2 mb-2 text-[var(--text-secondary)] body-text">
            <span className="w-[49px]">Z-Index</span>
            <Button variant="ghost" className="p-1 h-6 w-6 flex items-center justify-center text-[var(--text-secondary)]">
              <AISparkleIcon size={14} />
            </Button>
            <Input defaultValue="Auto" />
          </div>
          <div className="flex items-center gap-2 mb-2 text-[var(--text-secondary)] body-text">
            <span className="w-[49px]">Backface</span>
            <Button variant="ghost" className="p-1 h-6 w-6 flex items-center justify-center text-[var(--text-secondary)]">
              <AISparkleIcon size={14} />
            </Button>
            <Checkbox />
          </div>
          <div className="flex items-center gap-2 mb-2 text-[var(--text-secondary)] body-text">
            <span className="w-[49px]">Will Change</span>
            <Button variant="ghost" className="p-1 h-6 w-6 flex items-center justify-center text-[var(--text-secondary)]">
              <AISparkleIcon size={14} />
            </Button>
            <Input defaultValue="Auto" />
          </div>
          <div className="flex items-center gap-2 mb-2 text-[var(--text-secondary)] body-text">
            <span className="w-[49px]">Perspective</span>
            <Button variant="ghost" className="p-1 h-6 w-6 flex items-center justify-center text-[var(--text-secondary)]">
              <AISparkleIcon size={14} />
            </Button>
            <Input defaultValue="None" />
          </div>
        </div>
      </Accordion>

      <Accordion title="Custom Properties" defaultOpen={false}>
        <div className="px-2 pb-2">
          <div className="flex items-center gap-2 mb-2 text-[var(--text-secondary)] body-text">
            <span className="body-text">Custom CSS Property</span>
          </div>
          
          <div className="mt-2">
            <Button 
              variant="ghost" 
              className="w-full text-left justify-start hover:bg-[var(--action-secondary-bg-hover)]"
            >
              + Add Custom CSS Property
            </Button>
          </div>
        </div>
      </Accordion>
    </div>
  );
};

export default StyleTabContent; 