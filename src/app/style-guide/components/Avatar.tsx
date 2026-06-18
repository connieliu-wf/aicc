import React from 'react';
import { Avatar, AvatarGroup } from '@/components/spring-ui/avatar';

export function AvatarExample() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-medium mb-2">Avatar & Avatar Group</h2>
      <p className="mb-4 text-sm text-[var(--text-secondary)]">Display user or entity pictures in various sizes and group arrangements</p>
      
      <div className="p-8 bg-[var(--bg-primary)] border border-[var(--border-default)] rounded-lg">
        <div className="mb-8">
          <h3 className="text-md font-medium mb-4">Avatar Sizes</h3>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-2">
              <Avatar size="sm" fallback="SM" />
              <span className="text-xs text-[var(--text-secondary)]">Small</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar size="md" fallback="MD" />
              <span className="text-xs text-[var(--text-secondary)]">Medium</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar size="lg" fallback="LG" />
              <span className="text-xs text-[var(--text-secondary)]">Large</span>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-md font-medium mb-4">With Image</h3>
          <div className="flex items-center gap-4">
            <Avatar 
              src="https://randomuser.me/api/portraits/women/17.jpg" 
              alt="Jane Doe"
              fallback="JD"
            />
            <Avatar 
              src="https://randomuser.me/api/portraits/men/32.jpg" 
              alt="John Smith"
              fallback="JS"
            />
            <Avatar 
              src="https://randomuser.me/api/portraits/women/44.jpg" 
              alt="Anna Johnson"
              fallback="AJ"
            />
            <Avatar 
              src="https://randomuser.me/api/portraits/men/51.jpg" 
              alt="Robert Williams"
              fallback="RW"
            />
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-md font-medium mb-4">With Fallback</h3>
          <div className="flex items-center gap-4">
            <Avatar fallback="JD" />
            <Avatar fallback="BR" />
            <Avatar fallback="AK" />
            <Avatar fallback="ZS" />
          </div>
        </div>
        
        <div>
          <h3 className="text-md font-medium mb-4">Avatar Groups</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-sm mb-3 text-[var(--text-secondary)]">Small Group (2 avatars)</h4>
              <AvatarGroup size="sm" 
                avatars={[
                  { src: "https://randomuser.me/api/portraits/women/17.jpg", fallback: "JD" },
                  { src: "https://randomuser.me/api/portraits/men/32.jpg", fallback: "JS" }
                ]}
              />
            </div>
            
            <div>
              <h4 className="text-sm mb-3 text-[var(--text-secondary)]">Medium Group (4 avatars)</h4>
              <AvatarGroup size="sm" 
                avatars={[
                  { src: "https://randomuser.me/api/portraits/women/17.jpg", fallback: "JD" },
                  { src: "https://randomuser.me/api/portraits/men/32.jpg", fallback: "JS" },
                  { src: "https://randomuser.me/api/portraits/women/44.jpg", fallback: "AJ" },
                  { src: "https://randomuser.me/api/portraits/men/51.jpg", fallback: "RW" }
                ]}
              />
            </div>
            
            <div>
              <h4 className="text-sm mb-3 text-[var(--text-secondary)]">Overflow Group (8 avatars, showing "+3")</h4>
              <AvatarGroup size="sm" 
                avatars={[
                  { src: "https://randomuser.me/api/portraits/women/17.jpg", fallback: "JD" },
                  { src: "https://randomuser.me/api/portraits/men/32.jpg", fallback: "JS" },
                  { src: "https://randomuser.me/api/portraits/women/44.jpg", fallback: "AJ" },
                  { src: "https://randomuser.me/api/portraits/men/51.jpg", fallback: "RW" },
                  { src: "https://randomuser.me/api/portraits/women/63.jpg", fallback: "ML" },
                  { fallback: "TK" },
                  { fallback: "PL" },
                  { fallback: "BN" }
                ]}
              />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
} 