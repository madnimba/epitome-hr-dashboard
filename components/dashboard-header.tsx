"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, Settings, LogOut, User, ChevronDown } from "lucide-react"
import { navigationItems } from "@/components/navigation"

interface DashboardHeaderProps {
  activeTab?: string
  onTabChange?: (tab: string) => void
}

export function DashboardHeader({ activeTab, onTabChange }: DashboardHeaderProps) {
  return (
    <header className="h-16 bg-background border-b border-border flex items-center justify-between px-3 sm:px-6">
      {/* Branding */}
      <div className="flex items-center gap-3 min-w-0">
        <div className="leading-tight">
          <div className="text-base sm:text-lg font-sans font-semibold tracking-tight">FutureTech HR Dashboard</div>
          <div className="text-xs sm:text-sm text-muted-foreground">
            Designed by <span className="brand-accent font-medium">Arctic Wolves</span>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Nav Dropdown (visible when sidebar is hidden) */}
      <div className="lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
              {navigationItems.find((n) => n.id === activeTab)?.label || "Navigate"}
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
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
                  <span>{item.label}</span>
                  {isAppendix && (
                    <svg className="w-3 h-3 ml-auto opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </DropdownMenuItem>
              )
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Right side actions */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full text-xs flex items-center justify-center text-destructive-foreground">
            3
          </span>
        </Button>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                <AvatarFallback>HR</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Sarah Johnson</p>
                <p className="text-xs leading-none text-muted-foreground">HR Executive Director</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
