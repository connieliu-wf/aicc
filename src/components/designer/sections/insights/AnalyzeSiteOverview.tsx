"use client";

import React, { useState } from 'react';
import { Button } from '@/components/spring-ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/spring-ui/select';
import { IconButton } from '@/components/spring-ui/iconButton';
import { 
  ChevronSmallDownIcon,
  ArrowLeftIcon,
  DeviceDesktop24Icon,
  DateIcon,
  PageDefaultIcon,
  ElementButtonIcon,
  TabNewIcon
} from '@/icons';

export default function AnalyzeSiteOverview() {
  const [selectedGoal, setSelectedGoal] = useState("contact-clicks");
  const [selectedMetric, setSelectedMetric] = useState("total-sessions");

  return (
    <div className="flex-1 bg-[var(--bg-primary)] flex flex-col">
      {/* Title Bar */}
      <div className="flex items-center gap-2 p-2 border-b border-[var(--border-default)]">
        <IconButton variant="ghost" size="compact" className="h-6 w-6">
          <ArrowLeftIcon size={16} />
        </IconButton>
        <h1 className="flex-1 text-[var(--text-primary)] body-text-bold">Site overview</h1>
        
        {/* Device Selector */}
        <Select value="all-devices" onValueChange={() => {}}>
          <SelectTrigger className="w-32 h-6">
            <SelectValue placeholder="All devices" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-devices">All devices</SelectItem>
            <SelectItem value="desktop">Desktop</SelectItem>
            <SelectItem value="mobile">Mobile</SelectItem>
            <SelectItem value="tablet">Tablet</SelectItem>
          </SelectContent>
        </Select>

        {/* Date Range Selector */}
        <Select value="last-7-days" onValueChange={() => {}}>
          <SelectTrigger className="w-24 h-6">
            <SelectValue placeholder="Last 7 days" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="last-7-days">Last 7 days</SelectItem>
            <SelectItem value="last-30-days">Last 30 days</SelectItem>
            <SelectItem value="last-90-days">Last 90 days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Content Sections */}
      <div className="flex-1 overflow-y-auto p-3 space-y-4">
        {/* Top Row - Three Column Layout */}
        <div className="grid grid-cols-3 gap-3">
          {/* Goals Section - Left Column */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-[var(--text-secondary)] body-text-bold">Goals</h3>
            </div>
            
            <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] rounded-lg p-4 h-[315px]">
              <div className="space-y-3 h-full flex flex-col">
                <div className="space-y-1">
                  <label className="text-[var(--text-primary)] body-text">Current goal</label>
                  <div className="flex items-center gap-2">
                    <Select value={selectedGoal} onValueChange={setSelectedGoal}>
                      <SelectTrigger className="flex-1 h-8">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="contact-clicks">Contact clicks (non-navigation)</SelectItem>
                        <SelectItem value="form-submissions">Form submissions</SelectItem>
                        <SelectItem value="page-views">Page views</SelectItem>
                      </SelectContent>
                    </Select>
                    <IconButton variant="ghost" size="compact" className="h-6 w-6">
                      <TabNewIcon size={16} />
                    </IconButton>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-[var(--text-primary)] text-lg font-semibold">3.23% Conversion rate</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[var(--text-primary)] body-text">111</span>
                    <span className="text-[var(--text-secondary)] body-text opacity-50">Conversions</span>
                  </div>
                </div>

                {/* Mini Chart Placeholder */}
                <div className="flex-1 bg-[var(--bg-tertiary)] rounded border border-[var(--border-default)] flex items-center justify-center min-h-[130px]">
                  <span className="text-[var(--text-dimmed)] body-text">Chart visualization</span>
                </div>
              </div>
            </div>
          </div>

          {/* Total Views Section - Middle Column */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-[var(--text-secondary)] body-text-bold">Total views</h3>
            </div>
            
            <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] rounded-lg p-4 h-[315px]">
              <div className="space-y-3 h-full flex flex-col">
                {/* Metric Buttons */}
                <div className="flex border-b border-[var(--border-default)]">
                  <Button 
                    variant="ghost" 
                    size="compact" 
                    className="border-b-2 border-[var(--text-primary)] rounded-none"
                  >
                    Total sessions
                  </Button>
                  <Button variant="ghost" size="compact" className="rounded-none">
                    Unique visitors
                  </Button>
                </div>

                <div className="space-y-2">
                  <div className="text-[var(--text-primary)] text-2xl font-normal">5,294</div>
                  <div className="text-[var(--text-secondary)] body-text">Total sessions</div>
                </div>

                {/* Mini Chart Placeholder */}
                <div className="flex-1 bg-[var(--bg-tertiary)] rounded border border-[var(--border-default)] flex items-center justify-center min-h-[130px]">
                  <span className="text-[var(--text-dimmed)] body-text">Chart visualization</span>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Section - Right Column */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-[var(--text-secondary)] body-text-bold">Highlights</h3>
            </div>
            
            <div className="space-y-3 h-[315px] overflow-y-auto">
              {/* Bounce Rate Card */}
              <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-[var(--text-secondary)] body-text-bold">Bounce rate</h4>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--text-primary)] text-2xl">32%</span>
                  <div className="w-16 h-8 bg-[var(--bg-tertiary)] rounded border border-[var(--border-default)] flex items-center justify-center">
                    <span className="text-[var(--text-dimmed)] text-xs">↗</span>
                  </div>
                </div>
              </div>

              {/* Top Event Card */}
              <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-[var(--text-secondary)] body-text-bold">Top event</h4>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <ElementButtonIcon size={16} className="text-[var(--text-secondary)]" />
                    <span className="text-[var(--text-primary)] body-text-bold">Sign up form</span>
                  </div>
                  <div className="text-[var(--text-blue)] body-text">/blog/join-us</div>
                </div>
              </div>

              {/* Top Referrer Card */}
              <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-[var(--text-secondary)] body-text-bold">Top referrer</h4>
                </div>
                <div className="text-[var(--text-primary)] body-text-bold">google.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Pages Section */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-[var(--text-secondary)] body-text-bold">Top pages</h3>
            <Button variant="outline" size="compact" className="h-6">
              Show all
            </Button>
          </div>
          
          <div className="grid grid-cols-5 gap-3">
            {/* Page Cards */}
            {[
              { name: "Home", visits: "5,290", percentage: "35% of visits" },
              { name: "Talk to an expert", visits: "5,256", percentage: "35% of visits" },
              { name: "The New Currency of Loy...", visits: "5,256", percentage: "35% of visits" },
              { name: "Enterprise Solutions", visits: "5,256", percentage: "35% of visits" },
              { name: "Building a Culture of Real...", visits: "5,256", percentage: "35% of visits" }
            ].map((page, index) => (
              <div key={index} className="bg-[var(--bg-secondary)] border border-[var(--border-default)] rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <PageDefaultIcon size={16} className="text-[var(--text-secondary)]" />
                  <span className="text-[var(--text-primary)] body-text-bold flex-1">{page.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="text-[var(--text-primary)] text-2xl">{page.visits}</div>
                    <div className="text-[var(--text-secondary)] body-text">{page.percentage}</div>
                  </div>
                  <div className="w-16 h-8 bg-[var(--bg-tertiary)] rounded border border-[var(--border-default)] flex items-center justify-center">
                    <span className="text-[var(--text-dimmed)] text-xs">↗</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Events Section */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-[var(--text-secondary)] body-text-bold">Top events</h3>
          </div>
          
          <div className="grid grid-cols-5 gap-3">
            {/* Event Cards */}
            {[
              { name: "Sign up form", visits: "5,256", percentage: "35% of visits" },
              { name: "Contact form submission", visits: "3,142", percentage: "21% of visits" },
              { name: "Newsletter signup", visits: "2,891", percentage: "19% of visits" },
              { name: "Download PDF", visits: "2,456", percentage: "16% of visits" },
              { name: "Video play", visits: "1,823", percentage: "12% of visits" }
            ].map((event, index) => (
              <div key={index} className="bg-[var(--bg-secondary)] border border-[var(--border-default)] rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <ElementButtonIcon size={16} className="text-[var(--text-secondary)]" />
                  <span className="text-[var(--text-primary)] body-text-bold flex-1">{event.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="text-[var(--text-primary)] text-2xl">{event.visits}</div>
                    <div className="text-[var(--text-secondary)] body-text">{event.percentage}</div>
                  </div>
                  <div className="w-16 h-8 bg-[var(--bg-tertiary)] rounded border border-[var(--border-default)] flex items-center justify-center">
                    <span className="text-[var(--text-dimmed)] text-xs">↗</span>
                  </div>
                </div>
                <div className="mt-2 p-2 bg-[var(--bg-tertiary)] rounded flex items-center gap-2">
                  <PageDefaultIcon size={16} className="text-[var(--text-secondary)]" />
                  <span className="text-[var(--text-primary)] body-text">/contact</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Audience Section */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-[var(--text-secondary)] body-text-bold">Audience</h3>
          </div>
          
          <div className="grid grid-cols-4 gap-3">
            {/* Top Countries */}
            <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-[var(--text-secondary)] body-text-bold">Top countries</h4>
                <span className="text-[var(--text-secondary)] body-text-bold">Sessions</span>
              </div>
              <div className="space-y-3">
                {[
                  { country: "United States", sessions: "3,022", percentage: 90 },
                  { country: "Canada", sessions: "1,234", percentage: 70 },
                  { country: "United Kingdom", sessions: "987", percentage: 60 },
                  { country: "Germany", sessions: "654", percentage: 40 },
                  { country: "France", sessions: "432", percentage: 30 }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-[var(--bg-tertiary)] rounded border border-[var(--border-default)]" />
                      <span className="text-[var(--text-primary)] body-text">{item.country}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-1.5 bg-[var(--bg-tertiary)] rounded">
                        <div 
                          className="h-full bg-[var(--action-primary-bg)] rounded" 
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                      <span className="text-[var(--text-secondary)] body-text w-9 text-right">{item.sessions}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="compact" className="w-full mt-3 h-6">
                Show all
              </Button>
            </div>

            {/* Top Languages */}
            <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-[var(--text-secondary)] body-text-bold">Top languages</h4>
                <span className="text-[var(--text-secondary)] body-text-bold">Sessions</span>
              </div>
              <div className="space-y-3">
                {[
                  { language: "English", sessions: "4,123", percentage: 85 },
                  { language: "Spanish", sessions: "1,456", percentage: 60 },
                  { language: "French", sessions: "987", percentage: 45 },
                  { language: "German", sessions: "654", percentage: 35 },
                  { language: "Italian", sessions: "432", percentage: 25 }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-[var(--bg-tertiary)] rounded border border-[var(--border-default)]" />
                      <span className="text-[var(--text-primary)] body-text">{item.language}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-1.5 bg-[var(--bg-tertiary)] rounded">
                        <div 
                          className="h-full bg-[var(--action-primary-bg)] rounded" 
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                      <span className="text-[var(--text-secondary)] body-text w-9 text-right">{item.sessions}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="compact" className="w-full mt-3 h-6">
                Show all
              </Button>
            </div>

            {/* Device Types */}
            <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-[var(--text-secondary)] body-text-bold">Device types</h4>
                <span className="text-[var(--text-secondary)] body-text-bold">Sessions</span>
              </div>
              <div className="space-y-3">
                {[
                  { device: "Desktop", sessions: "3,456", percentage: 80 },
                  { device: "Mobile", sessions: "1,234", percentage: 60 },
                  { device: "Tablet", sessions: "432", percentage: 30 }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <DeviceDesktop24Icon size={16} className="text-[var(--text-secondary)]" />
                      <span className="text-[var(--text-primary)] body-text">{item.device}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-1.5 bg-[var(--bg-tertiary)] rounded">
                        <div 
                          className="h-full bg-[var(--action-primary-bg)] rounded" 
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                      <span className="text-[var(--text-secondary)] body-text w-9 text-right">{item.sessions}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Browsers */}
            <div className="bg-[var(--bg-secondary)] border border-[var(--border-default)] rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-[var(--text-secondary)] body-text-bold">Top browsers</h4>
                <span className="text-[var(--text-secondary)] body-text-bold">Sessions</span>
              </div>
              <div className="space-y-3">
                {[
                  { browser: "Chrome", sessions: "3,456", percentage: 75 },
                  { browser: "Safari", sessions: "1,234", percentage: 55 },
                  { browser: "Firefox", sessions: "432", percentage: 25 }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-[var(--bg-tertiary)] rounded border border-[var(--border-default)]" />
                      <span className="text-[var(--text-primary)] body-text">{item.browser}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-1.5 bg-[var(--bg-tertiary)] rounded">
                        <div 
                          className="h-full bg-[var(--action-primary-bg)] rounded" 
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                      <span className="text-[var(--text-secondary)] body-text w-9 text-right">{item.sessions}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="compact" className="w-full mt-3 h-6">
                Show all
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
