"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Building2 } from "lucide-react"
import { navigationItems } from "@/components/navigation"

interface DashboardSidebarProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function DashboardSidebar({ activeTab, onTabChange }: DashboardSidebarProps) {
  return (
    <div className="hidden lg:flex w-64 bg-sidebar border-r border-sidebar-border flex-col corporate-shadow flex-shrink-0">
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-sidebar-accent rounded-lg flex items-center justify-center corporate-shadow">
            <Building2 className="w-6 h-6 text-sidebar-accent-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-sans font-bold text-sidebar-foreground">FutureTech</h1>
            <p className="text-xs text-sidebar-foreground/70 font-medium">Executive Dashboard</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-3 space-y-1">
        {navigationItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id
          const isAppendix = item.id === "appendix"

          return (
            <Button
              key={item.id}
              variant={isActive ? "default" : "ghost"}
              className={cn(
                "w-full justify-start h-11 px-3 text-left font-medium",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm"
                  : "text-sidebar-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground transition-colors",
              )}
              onClick={() => {
                if (isAppendix) {
                  window.open("https://docs.google.com/document/d/1JHO3fLIJZ27MKM4xkRGoVWgUphfRoJTNpfBSx0CMhks/edit?usp=sharing", "_blank")
                } else {
                  onTabChange(item.id)
                }
              }}
            >
              <div className="flex items-center gap-3">
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm font-medium truncate">{item.label}</span>
                {isAppendix && (
                  <svg className="w-3 h-3 ml-auto opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                )}
              </div>
            </Button>
          )
        })}
      </nav>

      <div className="p-4 border-t border-sidebar-border bg-sidebar/50">
        <div className="text-xs text-sidebar-foreground/70 text-center">
          <div className="font-medium">Total Employees</div>
          <div className="text-lg font-bold text-sidebar-foreground mt-1">4,250</div>
        </div>
      </div>
    </div>
  )
}
