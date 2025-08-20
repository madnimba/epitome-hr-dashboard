"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { navigationItems } from "@/components/navigation"

interface DashboardHeaderProps {
  activeTab?: string
  onTabChange?: (tab: string) => void
}

export function DashboardHeader({ activeTab, onTabChange }: DashboardHeaderProps) {
  return (
    <header className="bg-background border-b border-border">
      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center justify-center px-6 h-20">
        {/* Branding */}
        <div className="text-center">
          <div className="text-2xl font-sans font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            FutureTech HR Dashboard
          </div>
          <div className="text-base text-muted-foreground mt-1">
            Designed by <span className="brand-accent font-semibold text-lg">Arctic Wolves</span>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden">
        {/* Branding Section */}
        <div className="px-3 py-4 border-b border-border/50">
          <div className="text-center">
            <div className="text-lg font-sans font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              FutureTech HR Dashboard
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              Designed by <span className="brand-accent font-semibold">Arctic Wolves</span>
            </div>
          </div>
        </div>

        {/* Navigation Menu Section */}
        <div className="px-3 py-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="w-full justify-between">
                <span className="truncate">{navigationItems.find((n) => n.id === activeTab)?.label || "Navigate"}</span>
                <ChevronDown className="w-4 h-4 ml-2 flex-shrink-0" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-full max-w-[calc(100vw-1.5rem)]">
              {navigationItems.map((item) => {
                const Icon = item.icon
                const isAppendix = item.id === "appendix"
                return (
                  <DropdownMenuItem 
                    key={item.id} 
                    onClick={() => {
                      if (isAppendix) {
                        window.open("https://docs.google.com/document/d/1JHO3fLIJZ27MKM4xkRGoVWgUphfRoJTNpfBSx0CMhks/edit?usp=sharing", "_blank")
                      } else {
                        onTabChange && onTabChange(item.id)
                      }
                    }}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    <span className="truncate">{item.label}</span>
                    {isAppendix && (
                      <svg className="w-3 h-3 ml-auto opacity-60 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    )}
                  </DropdownMenuItem>
                )
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
