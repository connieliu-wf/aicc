"use client"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from "@/components/spring-ui/dropdown-menu"
import { Check } from "lucide-react"
import { useMode } from "@/context/ModeContext"
import { useApp, AppSection } from "@/context/AppContext"
import { useMainAppTheme } from "@/context/MainAppThemeContext"
import { useTheme } from "@/context/ThemeContext"
import { 
  OptimizeIcon, 
  LocalizationIcon, 
  DesktopBreakpointIcon, 
  PageDefaultIcon, 
  CommentIcon, 
  ChevronSmallDownIcon, 
  MenuIcon,
  UndoIcon,
  RedoIcon,
  SettingsIcon,
  DashboardIcon,
  EditIcon,
  CodeIcon,
  HelpCircleIcon,
  HelpShortcutsIcon,
  SearchDefaultIcon,
  CssPreviewIcon,
  BrushIcon,
  CMSDefaultIcon,
  DesignIcon,
  AnalyzeIcon,
  IntersectSquareIcon,
  SunMoonIcon,
  WebflowIcon,
  LogicPreviewIcon,
  AnalyzePageIcon,
  AISparkleIcon
} from "@/icons"
import { Button } from "@/components/spring-ui/button"
import { IconButton } from "@/components/spring-ui/iconButton"
import { AvatarGroup } from "@/components/spring-ui/avatar"
import { usePages } from "@/context/PagesContext"

// Type for navigation items
interface NavItem {
  value: AppSection;
  label: string;
  icon: React.ReactNode;
}

export function Navbar() {
  const { mode, setMode } = useMode();
  const { currentSection, navigateTo, openStyleGuide } = useApp();
  const { theme } = useTheme();
  const { setMainAppMode } = useMainAppTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);
  const router = useRouter();

  const toggleTheme = () => {
    const newMode = theme.mode === "light" ? "dark" : "light";
    setMainAppMode(newMode);
  };

  // Define navigation items (without home/design)
  const navItems: NavItem[] = [
    {
      value: 'cms',
      label: 'CMS',
      icon: <CMSDefaultIcon size={16} className="opacity-70" />
    },
    {
      value: 'insights',
      label: 'Insights',
      icon: <AnalyzeIcon size={16} className="opacity-70" />
    }
  ];

  // Handle design button click when not in design section
  const handleDesignButtonClick = () => {
    if (currentSection !== 'home') {
      navigateTo('home');
    }
  };

  return (
    <nav className="flex h-[40px] items-center bg-[var(--bg-primary)] text-[var(--text-primary)] border-b border-[var(--border-default)] body-text pr-2">
      {/* Logo/Home with Menu Dropdown */}
      <div className="flex items-center justify-center w-10 h-[40px]">
        <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
          <DropdownMenuTrigger asChild>
            <div 
              className="flex items-center justify-center w-full h-full hover:bg-[var(--bg-tertiary)] cursor-pointer"
              onMouseEnter={() => setLogoHovered(true)}
              onMouseLeave={() => setLogoHovered(false)}
            >
              {menuOpen || logoHovered ? (
                <MenuIcon size={20} className="text-[var(--text-primary)]" />
              ) : (
                <WebflowIcon size={20} style={{ color: 'var(--text-secondary)' }} />
              )}
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="min-w-[220px]">
            <DropdownMenuItem onClick={() => {
              setMenuOpen(false);
              router.push('/dashboard');
            }}>
              <DashboardIcon size={16} className="mr-1" />
              Dashboard
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setMenuOpen(false)}>
              <SettingsIcon size={16} className="mr-1" />
              Site settings
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setMenuOpen(false)}>
              <EditIcon size={16} className="mr-1" />
              Editor
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setMenuOpen(false)}>
              <SearchDefaultIcon size={16} className="mr-1" />
              Quick find
              <DropdownMenuShortcut className="ml-auto">⌘E/⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setMenuOpen(false)}>
              <UndoIcon size={16} className="mr-1" />
              Undo
              <DropdownMenuShortcut className="ml-auto">⌘Z</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setMenuOpen(false)}>
              <RedoIcon size={16} className="mr-1" />
              Redo
              <DropdownMenuShortcut className="ml-auto">⌘⇧Z</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setMenuOpen(false)}>
              <CodeIcon size={16} className="mr-1" />
              Export code
              <DropdownMenuShortcut className="ml-auto">⇧E</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setMenuOpen(false)}>
              <HelpShortcutsIcon size={16} className="mr-1" />
              Keyboard shortcuts
              <DropdownMenuShortcut className="ml-auto">⇧?</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setMenuOpen(false)}>
              <CssPreviewIcon size={16} className="mr-1" />
              CSS preview
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setMenuOpen(false)}>
              <HelpCircleIcon size={16} className="mr-1" />
              Help & feedback
              <DropdownMenuShortcut className="ml-auto">⌃⇧/</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                toggleTheme();
                setMenuOpen(false);
              }}
            >
              <SunMoonIcon size={16} className="mr-1" />
              Switch to {theme.mode === "light" ? "dark" : "light"} theme
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              onClick={() => {
                setMenuOpen(false);
                router.push('/style-guide');
              }}
            >
              <BrushIcon size={16} className="mr-1" />
              Spring Design System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      {/* Left side - Top level navigation */}
      <div className="flex items-center ml-1 space-x-1">
        {/* Design button/dropdown - behaves differently based on current section */}
        {currentSection === 'home' ? (
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center h-6 px-2 bg-[var(--bg-tertiary)] hover:bg-[var(--bg-raised)] rounded-[4px] body-text focus:outline-none">
              <DesignIcon className="w-[16px] h-[16px] mr-2 opacity-70" />
              <span>{mode}</span>
              <ChevronSmallDownIcon className="opacity-50 ml-1" />
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="start"
              className="w-[280px] bg-[var(--bg-primary)] rounded-[4px] border-0 text-[var(--text-primary)] body-text [&>*]:gap-0 px-0"
            >
              <DropdownMenuItem 
                className="flex items-start py-[4px] px-[8px] focus:bg-[var(--bg-tertiary)] hover:bg-[var(--bg-tertiary)] focus:text-[var(--text-primary)] cursor-pointer gap-0 rounded-none"
                onClick={() => setMode('Design')}
              >
                <div className="w-[16px] h-[16px] flex items-center justify-center shrink-0">
                  {mode === 'Design' && <Check className="w-[16px] h-[16px] text-[var(--text-primary)]" strokeWidth={2} />}
                </div>
                <div className="ml-[4px]">
                  <div className="text-[var(--text-primary)]">Design</div>
                  <div className="text-[var(--text-secondary)]">Style elements and build layouts</div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="flex items-start py-[4px] px-[8px] focus:bg-[var(--bg-tertiary)] hover:bg-[var(--bg-tertiary)] focus:text-[var(--text-primary)] cursor-pointer gap-0 rounded-none"
                onClick={() => setMode('Build')}
              >
                <div className="w-[16px] h-[16px] flex items-center justify-center shrink-0">
                  {mode === 'Build' && <Check className="w-[16px] h-[16px] text-[var(--text-primary)]" strokeWidth={2} />}
                </div>
                <div className="ml-[4px]">
                  <div className="text-[var(--text-primary)]">Build</div>
                  <div className="text-[var(--text-secondary)]">Build pages with components and edit content</div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="flex items-start py-[4px] px-[8px] focus:bg-[var(--bg-tertiary)] hover:bg-[var(--bg-tertiary)] focus:text-[var(--text-primary)] cursor-pointer gap-0 rounded-none"
                onClick={() => setMode('Develop')}
              >
                <div className="w-[16px] h-[16px] flex items-center justify-center shrink-0">
                  {mode === 'Develop' && <Check className="w-[16px] h-[16px] text-white" strokeWidth={2} />}
                </div>
                <div className="ml-[4px]">
                  <div className="text-[var(--text-primary)]">Develop</div>
                  <div className="text-[var(--text-secondary)]">View and edit custom code on your site</div>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button 
            variant="ghost"
            size="comfortable" 
            className="h-6"
            onClick={handleDesignButtonClick}
          >
            <DesignIcon className="w-[16px] h-[16px] mr-1.5"/>
            <span>Design</span>
          </Button>
        )}
        
        {/* Other navigation items */}
        {navItems.map((item) => (
          <Button 
            key={item.value}
            variant={currentSection === item.value ? "subtle" : "ghost"}
            size="comfortable" 
            className={`h-6 ${currentSection === item.value ? 'bg-[var(--bg-raised)]' : ''}`}
            onClick={() => navigateTo(item.value)}
          >
            {item.icon}
            <span className="ml-1">{item.label}</span>
          </Button>
        ))}
      </div>

      {/* Center - Controls, only shown in home/design section */}
      <div className="flex-1 flex items-center justify-center">
        {currentSection === 'home' && (
          <div className="flex items-center">
            <Button variant="ghost" size="comfortable" className="h-6">
              <OptimizeIcon size={16} className="opacity-70" />
              <span>Base site</span>
              <ChevronSmallDownIcon size={16} className="opacity-70 ml-1" />
            </Button>
            
            <Button variant="ghost" size="comfortable" className="h-6 ml-1">
              <LocalizationIcon size={16} className="opacity-70" />
              <span>EN</span>
              <ChevronSmallDownIcon size={16} className="opacity-70 ml-1" />
            </Button>
            
            <div className="mx-2 h-4 border-r border-[var(--border-default)]"></div>
            
            <PageSelector />
          </div>
        )}
      </div>

      {/* Right side - Group Avatar, Action buttons */}
      <div className="flex items-center gap-2">
        {/* Group Avatar - Show collaborators */}
        <AvatarGroup 
          avatars={[
            { fallback: "JD" },
            { fallback: "SM" },
            { fallback: "AL" },
            { fallback: "KR" }
          ]}
          max={2}
          size="sm"
          className="ml-1"
        />
        
        <div className="flex items-center" style={{ gap: 'var(--space-xs)' }}>
          <IconButton variant="ghost" size="comfortable" className="h-6 w-6 text-[var(--text-secondary)]">
            <AISparkleIcon size={16} />
          </IconButton>
          <IconButton variant="ghost" size="comfortable" className="h-6 w-6 text-[var(--text-secondary)]">
            <AnalyzePageIcon size={16} />
          </IconButton>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <CommentIcon size={16} className="opacity-70" />
          </Button>
        </div>
        <IconButton variant="outline" size="comfortable" className="h-6 w-6 text-[var(--text-secondary)]">
          <LogicPreviewIcon size={16} />
        </IconButton>
        <Button variant="outline" size="comfortable" className="h-6">
          Share
        </Button>
        <Button variant="default" size="comfortable" className="h-6">
          Publish
          <ChevronSmallDownIcon size={16} className="ml-1" />
        </Button>
      </div>
    </nav>
  )
}

// New component for page selection
function PageSelector() {
  const { selectedPage, setSelectedPage } = usePages();
  
  // Map paths to readable names
  const getPageName = (path: string) => {
    switch(path) {
      case '/': return 'Home';
      case '/contact': return 'Contact Us';
      case '/styles': return '[Draft] Styles';
      case '/testimonials': return 'Testimonials Template';
      case '/password': return 'Password';
      case '/404': return '404';
      default: return 'Select a Page';
    }
  };
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="compact" className="h-6">
          <PageDefaultIcon size={16} className="opacity-70" />
          <span>{getPageName(selectedPage)}</span>
          <ChevronSmallDownIcon className="opacity-70" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="min-w-[160px]">
        <DropdownMenuItem onClick={() => setSelectedPage('/')}>
          <PageDefaultIcon size={16} className="mr-[4px]" />
          Home
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setSelectedPage('/contact')}>
          <PageDefaultIcon size={16} className="mr-[4px]" />
          Contact Us
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setSelectedPage('/styles')}>
          <PageDefaultIcon size={16} className="mr-[4px] text-[var(--text-orange)]" />
          [Draft] Styles
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setSelectedPage('/testimonials')}>
          <PageDefaultIcon size={16} className="mr-[4px]" />
          Testimonials Template
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setSelectedPage('/password')}>
          <PageDefaultIcon size={16} className="mr-[4px]" />
          Password
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setSelectedPage('/404')}>
          <PageDefaultIcon size={16} className="mr-[4px]" />
          404
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 