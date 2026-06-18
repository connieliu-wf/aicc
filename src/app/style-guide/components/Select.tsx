import { 
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectValue,
  SelectSeparator
} from "@/components/spring-ui/select";
import { useState } from "react";

export function SelectExample() {
  return (
    <section id="select" className="mb-10">
      <h2 className="text-xl font-semibold mb-4">Select</h2>
      <div className="bg-[var(--bg-primary)] border border-[var(--border-default)] p-4 rounded-md">
        <p className="mb-4 text-sm text-[var(--text-secondary)]">Dropdown selection control for choosing from a list of options</p>
        
        <h3 className="text-lg font-medium mb-3">Select Variants</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <h4 className="text-sm font-medium mb-2">Default</h4>
            <div className="max-w-md">
              <Select>
                <SelectTrigger variant="default">
                  <SelectValue placeholder="Choose an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
              <p className="mt-2 text-xs text-[var(--text-secondary)]">variant="default" - Input style appearance</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-2">Button</h4>
            <div className="max-w-md">
              <Select>
                <SelectTrigger variant="button">
                  <SelectValue placeholder="Choose an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
              <p className="mt-2 text-xs text-[var(--text-secondary)]">variant="button" - Button style appearance</p>
            </div>
          </div>
        </div>
        
        <h3 className="text-lg font-medium mb-3">With Groups and Labels</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <h4 className="text-sm font-medium mb-2">Grouped Options</h4>
            <div className="max-w-md">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a fruit or vegetable" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="orange">Orange</SelectItem>
                  </SelectGroup>
                  <SelectSeparator />
                  <SelectGroup>
                    <SelectLabel>Vegetables</SelectLabel>
                    <SelectItem value="carrot">Carrot</SelectItem>
                    <SelectItem value="broccoli">Broccoli</SelectItem>
                    <SelectItem value="spinach">Spinach</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <p className="mt-2 text-xs text-[var(--text-secondary)]">Uses SelectGroup and SelectLabel for categorization</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-2">Disabled Items</h4>
            <div className="max-w-md">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Available option</SelectItem>
                  <SelectItem value="option2" disabled>Disabled option</SelectItem>
                  <SelectItem value="option3">Another available option</SelectItem>
                </SelectContent>
              </Select>
              <p className="mt-2 text-xs text-[var(--text-secondary)]">Some options can be disabled</p>
            </div>
          </div>
        </div>
        
        <h3 className="text-lg font-medium mb-3">Controlled Example</h3>
        <div className="max-w-md">
          <ControlledSelect />
          <p className="mt-2 text-xs text-[var(--text-secondary)]">Controlled select with state management</p>
        </div>
      </div>
    </section>
  );
}

function ControlledSelect() {
  const [value, setValue] = useState("");
  
  return (
    <div className="flex flex-col gap-2">
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger>
          <SelectValue placeholder="Select a color" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="red">Red</SelectItem>
          <SelectItem value="green">Green</SelectItem>
          <SelectItem value="blue">Blue</SelectItem>
        </SelectContent>
      </Select>
      {value && (
        <p className="text-sm">
          Selected value: <span className="font-medium">{value}</span>
        </p>
      )}
    </div>
  );
} 