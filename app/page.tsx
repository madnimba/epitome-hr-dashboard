"use client"

import { useState } from "react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { OverviewPage } from "@/components/pages/overview-page"
import { GlobalWorkforcePage } from "@/components/pages/global-workforce-page"
import { EmployeeLifecyclePage } from "@/components/pages/employee-lifecycle-page"
import { PerformancePage } from "@/components/pages/performance-page"
import { RecruitmentOnboardingPage } from "@/components/pages/recruitment-onboarding-page"
import { CompensationPage } from "@/components/pages/compensation-page"
import { HRSystemsPage } from "@/components/pages/hr-systems-page"
import { CultureESGPage } from "@/components/pages/culture-esg-page"
import { LearningDevelopmentPage } from "@/components/pages/learning-development-page"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const renderActivePage = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewPage />
      case "workforce":
        return <GlobalWorkforcePage />
      case "lifecycle":
        return <EmployeeLifecyclePage />
      case "performance":
        return <PerformancePage />
      case "recruitment":
        return <RecruitmentOnboardingPage />
      case "compensation":
        return <CompensationPage />
      case "systems":
        return <HRSystemsPage />
      case "culture":
        return <CultureESGPage />
      case "learning":
        return <LearningDevelopmentPage />
      default:
        return <OverviewPage />
    }
  }

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto p-6">{renderActivePage()}</main>
      </div>
    </div>
  )
}
