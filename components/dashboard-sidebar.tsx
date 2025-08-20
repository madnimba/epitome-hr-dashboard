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
    description: "Key metrics and insights",
  },
  {
    id: "workforce",
    label: "Global Workforce & Mobility",
    icon: Globe,
    description: "Workforce distribution and mobility",
  },
  {
    id: "lifecycle",
    label: "Employee Lifecycle Navigator",
    icon: Users,
    description: "Journey from hire to exit",
  },
  {
    id: "performance",
    label: "Performance & Development",
    icon: TrendingUp,
    description: "Performance tracking and growth",
  },
  {
    id: "recruitment",
    label: "Recruitment & Onboarding",
    icon: UserPlus,
    description: "Talent acquisition and integration",
  },
  {
    id: "compensation",
    label: "Compensation & Rewards",
    icon: DollarSign,
    description: "Pay equity and rewards",
  },
  {
    id: "learning",
    label: "Learning & Development",
    icon: BookOpen,
    description: "Skills development and career growth",
  },
  {
    id: "systems",
    label: "HR Systems & Automation",
    icon: Settings,
    description: "Digital adoption and compliance",
  },
  {
    id: "culture",
    label: "Culture, ESG & Strategy",
    icon: Heart,
    description: "Culture integration and ESG",
  },
]

export function DashboardSidebar({ activeTab, onTabChange }: DashboardSidebarProps) {
  return (
    <div className="w-80 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo and Company Info */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Building2 className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-sans font-bold text-sidebar-foreground">FutureTech</h1>
            <p className="text-sm text-muted-foreground">HR Executive Dashboard</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id

          return (
            <Button
              key={item.id}
              variant={isActive ? "default" : "ghost"}
              className={cn(
                "w-full justify-start h-auto p-4 text-left",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground",
              )}
              onClick={() => onTabChange(item.id)}
            >
              <div className="flex items-start gap-3">
                <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm leading-tight">{item.label}</div>
                  <div className="text-xs opacity-70 mt-1 leading-tight">{item.description}</div>
                </div>
              </div>
            </Button>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="text-xs text-muted-foreground text-center">
          Total Employees: <span className="font-semibold text-sidebar-foreground">4,250</span>
        </div>
      </div>
    </div>
  )
}
