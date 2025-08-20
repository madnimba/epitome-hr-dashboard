"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Globe,
  Users,
  TrendingUp,
  DollarSign,
  Settings,
  Heart,
  Building2,
  LayoutDashboard,
  UserPlus,
  BookOpen,
} from "lucide-react"

interface DashboardSidebarProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const navigationItems = [
  {
    id: "overview",
    label: "Executive Overview",
    icon: LayoutDashboard,
  },
  {
    id: "workforce",
    label: "Global Workforce",
    icon: Globe,
  },
  {
    id: "lifecycle",
    label: "Employee Lifecycle",
    icon: Users,
  },
  {
    id: "performance",
    label: "Performance",
    icon: TrendingUp,
  },
  {
    id: "recruitment",
    label: "Recruitment",
    icon: UserPlus,
  },
  {
    id: "compensation",
    label: "Compensation",
    icon: DollarSign,
  },
  {
    id: "learning",
    label: "Learning & Development",
    icon: BookOpen,
  },
  {
    id: "systems",
    label: "HR Systems",
    icon: Settings,
  },
  {
    id: "culture",
    label: "Culture & ESG",
    icon: Heart,
  },
]

export function DashboardSidebar({ activeTab, onTabChange }: DashboardSidebarProps) {
  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col corporate-shadow">
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
              onClick={() => onTabChange(item.id)}
            >
              <div className="flex items-center gap-3">
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm font-medium truncate">{item.label}</span>
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
