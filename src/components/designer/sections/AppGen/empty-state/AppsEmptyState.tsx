"use client";

import React from 'react';
import { Button } from '@/components/spring-ui/button';
import { Tag } from '@/components/spring-ui/tag';
import { IconButton } from '@/components/spring-ui/iconButton';
import { Textarea } from '@/components/spring-ui/textarea';
import { Link } from '@/components/spring-ui/link';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator 
} from '@/components/spring-ui/dropdown-menu';
import { AddIcon, ArrowRightIcon, TabNewIcon, CMSDefaultIcon, ElementComponentIcon, VariableIcon } from '@/icons';

interface AppsEmptyStateProps {
  onSubmit?: () => void;
}

export default function AppsEmptyState({ onSubmit }: AppsEmptyStateProps) {
  return (
    <div className="flex-1 bg-[var(--bg-primary)] flex items-center justify-center px-18">
      <div className="max-w-[540px] w-full">
        <div className="flex flex-col gap-8">
          {/* Header Section */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <h1 className="text-[60px] font-semibold text-[var(--text-primary)] leading-[1.04] tracking-[0.6px]">
                  App gen
                </h1>
              </div>
              <p className="text-[14px] text-[var(--text-secondary)] leading-[1.65]">
                Generate, customize, and publish an app — all in Webflow.
              </p>
            </div>
          </div>

          {/* Input Section */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <p className="body-text text-[var(--text-primary)]">
                What would you like to create?
              </p>
              <div className="relative">
                <Textarea
                  placeholder="Build an interactive pricing estimator. Let users choose a plan, add-ons, and billing cycle and show real-time cost updates."
                  className="h-[140px] pl-10 pr-20"
                />
                <div className="absolute bottom-2 left-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <IconButton variant="ghost" size="comfortable" className="bg-[var(--bg-raised)]">
                        <AddIcon size={16} />
                      </IconButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-48">
                      <DropdownMenuItem>
                        <CMSDefaultIcon size={16} className="mr-2" />
                        CMS
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <ElementComponentIcon size={16} className="mr-2" />
                        Components
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <VariableIcon size={16} className="mr-2" />
                        Variables
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                        <div className="absolute bottom-2 right-2">
                          <IconButton 
                            variant="subtle-primary" 
                            size="comfortable" 
                            onClick={onSubmit}
                          >
                            <ArrowRightIcon size={16} />
                          </IconButton>
                        </div>
              </div>
            </div>
            <div className="flex">
              <Link variant="primary" href="#" suffixIcon={<TabNewIcon size={16} />}>
                Learn more about App gen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
