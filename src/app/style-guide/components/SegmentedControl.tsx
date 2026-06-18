import { useState } from "react";
import { SegmentedControl, SegmentedControlItem } from "@/components/spring-ui/segmented-control";
import { 
  ListIcon,
  GridIcon,
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
  SettingsIcon,
  FilterIcon,
  MoreIcon
} from "@/icons";

export function SegmentedControlExample() {
  const [viewMode, setViewMode] = useState("list");
  const [alignment, setAlignment] = useState("left");
  const [period, setPeriod] = useState("day");
  const [chartType, setChartType] = useState("bar");

  return (
    <section id="segmented-control" className="mb-10">
      <h2 className="text-xl font-semibold mb-4">Segmented Control</h2>
      
      <div className="bg-[var(--bg-primary)] border border-[var(--border-default)] p-4 rounded-md">
        <p className="mb-4 text-sm text-[var(--text-secondary)]">Mutually exclusive selection control for switching between views or options</p>
        
        <h3 className="text-lg font-medium mb-3">Basic Usage</h3>
        <div className="flex flex-wrap gap-4 mb-6 items-center">
          <div className="flex flex-col gap-2">
            <SegmentedControl value={period} onValueChange={setPeriod}>
              <SegmentedControlItem value="day">Day</SegmentedControlItem>
              <SegmentedControlItem value="week">Week</SegmentedControlItem>
              <SegmentedControlItem value="month">Month</SegmentedControlItem>
            </SegmentedControl>
            <span className="text-xs text-[var(--text-secondary)]">Time period selector</span>
          </div>
        </div>
        
        <h3 className="text-lg font-medium mb-3">With Icons</h3>
        <div className="flex flex-wrap gap-4 mb-6 items-center">
          <div className="flex flex-col gap-2">
            <SegmentedControl value={viewMode} onValueChange={setViewMode}>
              <SegmentedControlItem value="list" isIcon>
                <ListIcon size={16} />
              </SegmentedControlItem>
              <SegmentedControlItem value="grid" isIcon>
                <GridIcon size={16} />
              </SegmentedControlItem>
            </SegmentedControl>
            <span className="text-xs text-[var(--text-secondary)]">View mode toggle</span>
          </div>
          
          <div className="flex flex-col gap-2">
            <SegmentedControl value={alignment} onValueChange={setAlignment}>
              <SegmentedControlItem value="left" isIcon>
                <TextAlignLeftIcon size={16} />
              </SegmentedControlItem>
              <SegmentedControlItem value="center" isIcon>
                <TextAlignCenterIcon size={16} />
              </SegmentedControlItem>
              <SegmentedControlItem value="right" isIcon>
                <TextAlignRightIcon size={16} />
              </SegmentedControlItem>
            </SegmentedControl>
            <span className="text-xs text-[var(--text-secondary)]">Text alignment</span>
          </div>
          
          <div className="flex flex-col gap-2">
            <SegmentedControl value={chartType} onValueChange={setChartType}>
              <SegmentedControlItem value="bar" isIcon>
                <SettingsIcon size={16} />
              </SegmentedControlItem>
              <SegmentedControlItem value="pie" isIcon>
                <FilterIcon size={16} />
              </SegmentedControlItem>
              <SegmentedControlItem value="line" isIcon>
                <MoreIcon size={16} />
              </SegmentedControlItem>
            </SegmentedControl>
            <span className="text-xs text-[var(--text-secondary)]">Chart type selector</span>
          </div>
        </div>
        
        <h3 className="text-lg font-medium mb-3">Mixed Content</h3>
        <div className="flex flex-wrap gap-4 mb-6 items-center">
          <div className="flex flex-col gap-2">
            <SegmentedControl value="text" onValueChange={() => {}}>
              <SegmentedControlItem value="text">
                <TextAlignLeftIcon size={14} className="mr-1" />
                Text
              </SegmentedControlItem>
              <SegmentedControlItem value="chart">
                <SettingsIcon size={14} className="mr-1" />
                Chart
              </SegmentedControlItem>
            </SegmentedControl>
            <span className="text-xs text-[var(--text-secondary)]">Icon + text combination</span>
          </div>
        </div>
        
        <h3 className="text-lg font-medium mb-3">Full Width</h3>
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex flex-col gap-2">
            <SegmentedControl value="overview" onValueChange={() => {}} fullWidth>
              <SegmentedControlItem value="overview">Overview</SegmentedControlItem>
              <SegmentedControlItem value="details">Details</SegmentedControlItem>
              <SegmentedControlItem value="settings">Settings</SegmentedControlItem>
            </SegmentedControl>
            <span className="text-xs text-[var(--text-secondary)]">Full width segmented control</span>
          </div>
        </div>
        
        <h3 className="text-lg font-medium mb-3">Long Options</h3>
        <div className="flex flex-wrap gap-4 mb-6 items-center">
          <div className="flex flex-col gap-2">
            <SegmentedControl value="quarterly" onValueChange={() => {}}>
              <SegmentedControlItem value="daily">Daily Report</SegmentedControlItem>
              <SegmentedControlItem value="weekly">Weekly Summary</SegmentedControlItem>
              <SegmentedControlItem value="monthly">Monthly Overview</SegmentedControlItem>
              <SegmentedControlItem value="quarterly">Quarterly Analysis</SegmentedControlItem>
            </SegmentedControl>
            <span className="text-xs text-[var(--text-secondary)]">Longer text options</span>
          </div>
        </div>
      </div>
    </section>
  );
} 