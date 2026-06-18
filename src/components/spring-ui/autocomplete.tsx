import * as React from "react"
import { cn } from "@/lib/utils"
import { CloseDefaultIcon, ChevronSmallDownIcon, CheckboxIcon, AddIcon } from "@/icons"
import { Input } from "./input"
import { Tag } from "./tag"
import * as Popover from '@radix-ui/react-popover'

export interface AutocompleteOption {
  label: string;
  value: string;
}

export interface AutocompleteProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  options: AutocompleteOption[];
  value?: string[];
  onChange?: (value: string[]) => void;
  placeholder?: string;
  allowCreate?: boolean;
}

const Autocomplete = React.forwardRef<HTMLInputElement, AutocompleteProps>(
  ({ className, options, value = [], onChange, placeholder, allowCreate = true, ...props }, ref) => {
    const [open, setOpen] = React.useState(false);
    const [inputValue, setInputValue] = React.useState('');
    const inputRef = React.useRef<HTMLInputElement>(null);
    
    // Merge the forwarded ref with our input ref
    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const filteredOptions = React.useMemo(() => {
      // Don't show options that are already selected
      const uniqueOptions = options.filter(option => !value.includes(option.value));
      
      if (!inputValue) return uniqueOptions;
      
      return uniqueOptions.filter(option => 
        option.label.toLowerCase().includes(inputValue.toLowerCase())
      );
    }, [options, inputValue, value]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      if (!open) setOpen(true);
    };

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      // If user presses Enter, add the current input as a new option
      if (e.key === 'Enter' && inputValue.trim() && allowCreate) {
        e.preventDefault();
        const newOption = {
          label: inputValue.trim(),
          value: inputValue.trim()
        };
        
        // Check if this option already exists in the filtered options
        const existingOption = options.find(opt => 
          opt.label.toLowerCase() === inputValue.toLowerCase() ||
          opt.value.toLowerCase() === inputValue.toLowerCase()
        );
        
        if (existingOption) {
          // Add the existing option if it's not already selected
          if (!value.includes(existingOption.value)) {
            onChange?.([...value, existingOption.value]);
          }
        } else {
          // Add the new custom option
          onChange?.([...value, newOption.value]);
        }
        
        setInputValue('');
      }
    };

    const handleSelectOption = (optionValue: string) => {
      onChange?.([...value, optionValue]);
      setInputValue('');
      inputRef.current?.focus();
    };

    const handleRemoveOption = (optionValue: string) => {
      onChange?.(value.filter(v => v !== optionValue));
    };

    const createOption = React.useMemo(() => {
      if (!allowCreate || !inputValue.trim() || filteredOptions.some(opt => opt.label.toLowerCase() === inputValue.toLowerCase())) {
        return null;
      }

      return {
        label: inputValue.trim(),
        value: inputValue.trim()
      };
    }, [allowCreate, inputValue, filteredOptions]);

    return (
      <Popover.Root open={open} onOpenChange={setOpen}>
        <div className={cn("relative w-full", className)}>
          <div className={cn(
            "flex flex-wrap items-center w-full rounded-[4px] border border-solid py-0",
            "body-text",
            "bg-[var(--input-bg)] border-[var(--input-border)]",
            "focus-within:outline-none focus-within:border-[var(--input-border-focus)]",
            "hover:border-[var(--input-border-hover)]",
            "disabled:opacity-40 disabled:cursor-not-allowed disabled:bg-[var(--input-disabled-bg)]",
            "[.theme-designer_&]:min-h-6 [.theme-dashboard_&]:min-h-8",
            "[.theme-designer_&]:px-1 [.theme-dashboard_&]:px-2",
            "[.theme-designer_&]:gap-0.5 [.theme-dashboard_&]:gap-1",
          )}>
            {value.map(val => {
              const option = options.find(opt => opt.value === val) || { label: val, value: val };
              
              return (
                <Tag
                  key={val}
                  variant="blue"
                  size="compact"
                  styleType="tinted"
                  onRemove={() => handleRemoveOption(val)}
                >
                  {option.label}
                </Tag>
              );
            })}
            
            <Popover.Anchor className="flex-1 min-w-[80px]">
              <input
                ref={inputRef}
                className={cn(
                  "flex-1 min-w-[80px] bg-transparent border-none outline-none body-text py-0 px-0",
                  "placeholder:text-[var(--input-placeholder)]",
                  "text-[var(--text-primary)]",
                )}
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                placeholder={value.length ? "" : placeholder}
                {...props}
              />
            </Popover.Anchor>
            
            <div className="flex items-center">
              <Popover.Trigger asChild>
                <button type="button" className="flex items-center justify-center p-0 h-4 w-4">
                  <ChevronSmallDownIcon size={16} style={{ color: 'var(--text-secondary)' }} />
                </button>
              </Popover.Trigger>
            </div>
          </div>
          
          <Popover.Portal>
            <Popover.Content
              className={cn(
                "z-50 min-w-[8rem] overflow-hidden rounded-[4px] border-0",
                "bg-[var(--bg-tertiary)] text-[var(--text-primary)] shadow-[var(--shadow-menu-elevated)]",
                "w-[var(--radix-popover-trigger-width)]",
                "max-h-[240px] overflow-y-auto",
              )}
              sideOffset={4}
            >
              <div className="p-1 flex flex-col gap-1">
                {filteredOptions.length === 0 && !createOption && (
                  <div className="text-sm text-[var(--text-secondary)] [.theme-designer_&]:px-1 [.theme-dashboard_&]:px-2 [.theme-designer_&]:py-0.5 [.theme-dashboard_&]:py-1">
                    No options found
                  </div>
                )}
                
                {filteredOptions.map(option => (
                  <button
                    key={option.value}
                    className={cn(
                      "flex items-center justify-between w-full text-left rounded text-sm",
                      "hover:bg-[var(--bg-raised)] focus:bg-[var(--bg-raised)] outline-none",
                      "[.theme-designer_&]:px-1 [.theme-dashboard_&]:px-2",
                      "[.theme-designer_&]:py-0.5 [.theme-dashboard_&]:py-1",
                    )}
                    onClick={() => handleSelectOption(option.value)}
                  >
                    {option.label}
                    {value.includes(option.value) && (
                      <CheckboxIcon size={16} style={{ color: 'var(--text-secondary)' }} />
                    )}
                  </button>
                ))}
                
                {createOption && (
                  <button
                    className={cn(
                      "flex items-center w-full text-left rounded text-sm",
                      "hover:bg-[var(--bg-raised)] focus:bg-[var(--bg-raised)] outline-none",
                      "[.theme-designer_&]:px-1 [.theme-dashboard_&]:px-2",
                      "[.theme-designer_&]:py-0.5 [.theme-dashboard_&]:py-1",
                      "[.theme-designer_&]:gap-0.5 [.theme-dashboard_&]:gap-1",
                    )}
                    onClick={() => handleSelectOption(createOption.value)}
                  >
                    <AddIcon size={16} style={{ color: 'var(--text-secondary)' }} />
                    Create "{createOption.label}"
                  </button>
                )}
              </div>
            </Popover.Content>
          </Popover.Portal>
        </div>
      </Popover.Root>
    )
  }
)

Autocomplete.displayName = "Autocomplete"

export { Autocomplete } 