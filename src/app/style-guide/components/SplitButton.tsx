import { SplitButton } from "@/components/spring-ui/split-button";
import {
  DropdownMenuItem,
  DropdownMenuSeparator
} from "@/components/spring-ui/dropdown-menu";
import { 
  EditIcon, 
  CssPreviewIcon, 
  CodeIcon 
} from "@/icons";

export function SplitButtonExample() {
  return (
    <section id="split-button" className="mb-10">
      <h2 className="text-xl font-semibold mb-4">Split Button</h2>
      
      <div className="bg-[var(--bg-primary)] border border-[var(--border-default)] p-4 rounded-md">
        <p className="mb-4 text-sm text-[var(--text-secondary)]">A button that combines a primary action with a dropdown menu for related actions</p>
        
        <h3 className="text-lg font-medium mb-3">Split Button Variants</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          <SplitButton 
            variant="default" 
            menuContent={
              <>
                <DropdownMenuItem>
                  <EditIcon size={16} className="mr-[4px]" />
                  Edit file
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CssPreviewIcon size={16} className="mr-[4px]" />
                  Preview
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <CodeIcon size={16} className="mr-[4px]" />
                  Export code
                </DropdownMenuItem>
              </>
            }
          >
            Primary
          </SplitButton>
          
          <SplitButton 
            variant="outline" 
            menuContent={
              <>
                <DropdownMenuItem>
                  <EditIcon size={16} className="mr-[4px]" />
                  Edit file
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CssPreviewIcon size={16} className="mr-[4px]" />
                  Preview
                </DropdownMenuItem>
              </>
            }
          >
            Secondary
          </SplitButton>
          
          <SplitButton 
            variant="warning" 
            menuContent={
              <>
                <DropdownMenuItem>
                  <EditIcon size={16} className="mr-[4px]" />
                  Edit file
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CssPreviewIcon size={16} className="mr-[4px]" />
                  Preview
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="default">
                  <CodeIcon size={16} className="mr-[4px]" />
                  Save branch
                </DropdownMenuItem>
              </>
            }
          >
            Save branch
          </SplitButton>
        </div>
        
        
      </div>
    </section>
  );
} 