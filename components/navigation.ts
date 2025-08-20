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

export type NavigationItem = {
  id: string
  label: string
  icon: typeof Building2
}

export const navigationItems: NavigationItem[] = [
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


