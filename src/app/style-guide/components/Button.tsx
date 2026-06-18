import { Button } from "@/components/spring-ui/button";
import { 
  SettingsIcon,
  ChevronSmallDownIcon,
  SearchDefaultIcon,
  ArrowUpRightIcon
} from "@/icons";
import { useRef } from "react";

export function ButtonExample() {
  return (
    <section id="button" className="mb-10">
      <h2 className="text-xl font-semibold mb-4">Button</h2>
      
      <div className="bg-[var(--bg-primary)] border border-[var(--border-default)] p-4 rounded-md">
        <p className="mb-4 text-sm text-[var(--text-secondary)]">Standard button component with multiple variants</p>
        
        <h3 className="text-lg font-medium mb-3">Button Options</h3>
        <div className="mb-6 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[var(--border-default)]">
                <th className="py-2 px-4 text-left font-medium">Style / Color</th>
                <th className="py-2 px-4 text-left font-medium">Default</th>
                <th className="py-2 px-4 text-left font-medium">Primary</th>
                <th className="py-2 px-4 text-left font-medium">Success</th>
                <th className="py-2 px-4 text-left font-medium">Destructive</th>
                <th className="py-2 px-4 text-left font-medium">Warning</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[var(--border-default)]">
                <td className="py-3 px-4 font-medium text-[var(--text-secondary)]">Default</td>
                <td className="py-3 px-4"><Button variant="default" size="compact">Button</Button></td>
                <td className="py-3 px-4"><Button variant="primary" size="compact">Button</Button></td>
                <td className="py-3 px-4"><Button variant="success" size="compact">Button</Button></td>
                <td className="py-3 px-4"><Button variant="destructive" size="compact">Button</Button></td>
                <td className="py-3 px-4"><Button variant="warning" size="compact">Button</Button></td>
              </tr>
              <tr className="border-b border-[var(--border-default)]">
                <td className="py-3 px-4 font-medium text-[var(--text-secondary)]">Outline</td>
                <td className="py-3 px-4"><Button variant="outline" size="compact">Button</Button></td>
                <td className="py-3 px-4"><Button variant="outline-primary" size="compact">Button</Button></td>
                <td className="py-3 px-4"><Button variant="outline-success" size="compact">Button</Button></td>
                <td className="py-3 px-4"><Button variant="outline-destructive" size="compact">Button</Button></td>
                <td className="py-3 px-4"><Button variant="outline-warning" size="compact">Button</Button></td>
              </tr>
              <tr className="border-b border-[var(--border-default)]">
                <td className="py-3 px-4 font-medium text-[var(--text-secondary)]">Subtle</td>
                <td className="py-3 px-4"><Button variant="subtle" size="compact">Button</Button></td>
                <td className="py-3 px-4"><Button variant="subtle-primary" size="compact">Button</Button></td>
                <td className="py-3 px-4"><Button variant="subtle-success" size="compact">Button</Button></td>
                <td className="py-3 px-4"><Button variant="subtle-destructive" size="compact">Button</Button></td>
                <td className="py-3 px-4"><Button variant="subtle-warning" size="compact">Button</Button></td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-[var(--text-secondary)]">Ghost</td>
                <td className="py-3 px-4"><Button variant="ghost" size="compact">Button</Button></td>
                <td className="py-3 px-4"><Button variant="ghost-primary" size="compact">Button</Button></td>
                <td className="py-3 px-4"><Button variant="ghost-success" size="compact">Button</Button></td>
                <td className="py-3 px-4"><Button variant="ghost-destructive" size="compact">Button</Button></td>
                <td className="py-3 px-4"><Button variant="ghost-warning" size="compact">Button</Button></td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-lg font-medium mb-3">Button Sizes</h3>
        <div className="flex flex-wrap gap-2 mb-4 items-center">
          <div className="flex flex-col items-center gap-2">
            <Button variant="primary" size="compact">Compact</Button>
            <span className="text-xs text-[var(--text-secondary)]">size="compact"</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button variant="primary" size="comfortable">Comfortable</Button>
            <span className="text-xs text-[var(--text-secondary)]">size="comfortable"</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button variant="primary" size="icon">
              <SettingsIcon size={16} />
            </Button>
            <span className="text-xs text-[var(--text-secondary)]">size="icon"</span>
          </div>
        </div>
        
        <h3 className="text-lg font-medium mb-3">Button with Icons</h3>
        <div className="flex flex-wrap gap-2 mb-4 items-center">
          <div className="flex flex-col items-center gap-2">
            <Button variant="primary">
              <SearchDefaultIcon size={16} />
              Leading Icon
            </Button>
            <span className="text-xs text-[var(--text-secondary)]">Icon before text</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <Button variant="primary">
              Trailing Icon
              <ArrowUpRightIcon size={16} />
            </Button>
            <span className="text-xs text-[var(--text-secondary)]">Icon after text</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <Button variant="primary">
              <SearchDefaultIcon size={16} />
              Both Icons
              <ChevronSmallDownIcon size={16} />
            </Button>
            <span className="text-xs text-[var(--text-secondary)]">Icons on both sides</span>
          </div>
        </div>
        
        <h3 className="text-lg font-medium mb-3">Button States</h3>
        <div className="flex flex-wrap gap-2 mb-4 items-center">
          <Button variant="primary">Default</Button>
          <Button variant="primary" disabled>Disabled</Button>
          <Button variant="primary">Loading</Button>
        </div>
      </div>
    </section>
  );
} 