import { Button } from "@/components/spring-ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/spring-ui/dropdown-menu";
import { 
  DashboardIcon, 
  SettingsIcon, 
  EditIcon,
  UndoIcon,
  RedoIcon,
  SearchDefaultIcon,
  HelpCircleIcon,
  ChevronSmallDownIcon,
  MenuIcon,
  CodeIcon
} from "@/icons";

export function DropdownMenuExample() {
  return (
    <section id="dropdown-menu" className="mb-10">
      <h2 className="text-xl font-semibold mb-4">Dropdown Menu</h2>
      
      <div className="bg-[var(--bg-primary)] border border-[var(--border-default)] p-4 rounded-md">
        <p className="mb-4 text-sm text-[var(--text-secondary)]">Dropdown menu that appears anchored to a trigger element</p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Basic Dropdown</h3>
            
            <div className="flex flex-wrap gap-8">
              <div className="flex flex-col items-center">
                <div className="mb-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="comfortable">
                        Options
                        <ChevronSmallDownIcon className="ml-1 opacity-70" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <DashboardIcon size={16} className="mr-[4px]" />
                        Dashboard
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <SettingsIcon size={16} className="mr-[4px]" />
                        Settings
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <EditIcon size={16} className="mr-[4px]" />
                        Edit
                        <DropdownMenuShortcut className="ml-auto">⌘E</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem disabled>
                        <HelpCircleIcon size={16} className="mr-[4px]" />
                        Disabled Item
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">Basic dropdown</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="mb-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="comfortable">
                        Advanced Options
                        <ChevronSmallDownIcon className="ml-1 opacity-70" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="min-w-[220px]">
                      <DropdownMenuLabel>Application</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem checked>
                        Show toolbar
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Show statusbar
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuLabel>View</DropdownMenuLabel>
                      <DropdownMenuRadioGroup value="grid">
                        <DropdownMenuRadioItem value="grid">
                          Grid view
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="list">
                          List view
                        </DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                          <CodeIcon size={16} className="mr-[4px]" />
                          Export
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem>PDF</DropdownMenuItem>
                          <DropdownMenuItem>PNG</DropdownMenuItem>
                          <DropdownMenuItem>SVG</DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuSub>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">Advanced dropdown</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Menu Example</h3>
            
            <div className="flex items-start gap-8">
              <div className="flex flex-col items-center">
                <div className="mb-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="flex items-center justify-center w-[35px] h-[35px] bg-[var(--bg-secondary)] hover:bg-[var(--bg-raised)] border border-[var(--border-default)] rounded-sm cursor-pointer">
                        <MenuIcon size={20} className="text-[var(--text-primary)]" />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="min-w-[220px]">
                      <DropdownMenuItem>
                        <DashboardIcon size={16} className="mr-[4px]" />
                        Dashboard
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <SettingsIcon size={16} className="mr-[4px]" />
                        Site settings
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <EditIcon size={16} className="mr-[4px]" />
                        Editor
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <SearchDefaultIcon size={16} className="mr-[4px]" />
                        Quick find
                        <DropdownMenuShortcut className="ml-auto">⌘E/⌘K</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <UndoIcon size={16} className="mr-[4px]" />
                        Undo
                        <DropdownMenuShortcut className="ml-auto">⌘Z</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <RedoIcon size={16} className="mr-[4px]" />
                        Redo
                        <DropdownMenuShortcut className="ml-auto">⌘⇧Z</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">Click to open menu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 