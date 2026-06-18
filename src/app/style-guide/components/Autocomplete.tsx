import React, { useState } from 'react';
import { Autocomplete } from '@/components/spring-ui/autocomplete';

export function AutocompleteExample() {
  const [value1, setValue1] = useState<string[]>([]);
  const [value2, setValue2] = useState<string[]>(['apple', 'banana']);
  
  const fruits = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Blueberry', value: 'blueberry' },
    { label: 'Grapes', value: 'grapes' },
    { label: 'Orange', value: 'orange' },
    { label: 'Pineapple', value: 'pineapple' },
    { label: 'Strawberry', value: 'strawberry' },
    { label: 'Watermelon', value: 'watermelon' },
  ];
  
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-medium mb-2">Autocomplete</h2>
      <p className="mb-4 text-sm text-[var(--text-secondary)]">Input with suggestions that appear as the user types</p>
      
      <div className="p-8 bg-[var(--bg-primary)] border border-[var(--border-default)] rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-2">Basic</h3>
            <p className="mb-4 text-sm text-[var(--text-secondary)]">Type to search or select from dropdown</p>
            
            <Autocomplete
              options={fruits}
              value={value1}
              onChange={setValue1}
              placeholder="Select fruits..."
              allowCreate
            />
            
            <div className="mt-2 text-sm text-[var(--text-secondary)]">
              <p>Features:</p>
              <ul className="list-disc ml-4">
                <li>Search through existing options</li>
                <li>Select multiple options</li>
                <li>Create new options by typing and pressing Enter</li>
                <li>Tags appear in input field</li>
                <li>Click tag's close button to remove</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Pre-populated</h3>
            <p className="mb-4 text-sm text-[var(--text-secondary)]">With initial selected values</p>
            
            <Autocomplete
              options={fruits}
              value={value2}
              onChange={setValue2}
              placeholder="Select fruits..."
            />
            
            <div className="mt-4">
              <h3 className="text-lg font-medium mb-2">Without create option</h3>
              <p className="mb-4 text-sm text-[var(--text-secondary)]">Only select from existing options</p>
              
              <Autocomplete
                options={fruits}
                value={value1}
                onChange={setValue1}
                placeholder="Select fruits..."
                allowCreate={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 