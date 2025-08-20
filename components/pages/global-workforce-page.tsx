"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"
import { TrendingUp, TrendingDown, Users, MapPin, ArrowUpRight } from "lucide-react"

export function GlobalWorkforcePage() {
  const [attritionRate, setAttritionRate] = useState([8.4])

  const calculateCostImpact = (rate: number) => {
    return (rate * 0.25).toFixed(1) // Simplified calculation
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-sans font-bold text-foreground">Global Workforce & Mobility</h1>
          <p className="text-muted-foreground mt-1">Workforce size, distribution, and mobility at a glance</p>
        </div>
        <Badge variant="outline" className="text-sm">
          Last updated: 2 hours ago
        </Badge>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4,250</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +2.3% from last month
              </span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Attrition</CardTitle>
            <TrendingDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.4%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-600">⚠ Above target of 7%</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vertical Promotions</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12%</div>
            <p className="text-xs text-muted-foreground">510 employees promoted</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lateral Moves</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8%</div>
            <p className="text-xs text-muted-foreground">340 employees relocated</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Subsidiary Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Subsidiary Breakdown</CardTitle>
            <CardDescription>Employee distribution across companies</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Core Company</span>
                <span className="text-sm text-muted-foreground">2,200 (52%)</span>
              </div>
              <Progress value={52} className="h-2" />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">CodexHub</span>
                <span className="text-sm text-muted-foreground">750 (18%)</span>
              </div>
              <Progress value={18} className="h-2" />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">MindNest AI</span>
                <span className="text-sm text-muted-foreground">500 (12%)</span>
              </div>
              <Progress value={12} className="h-2" />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Triluxe</span>
                <span className="text-sm text-muted-foreground">450 (11%)</span>
              </div>
              <Progress value={11} className="h-2" />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">GridWave</span>
                <span className="text-sm text-muted-foreground">350 (8%)</span>
              </div>
              <Progress value={8} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Attrition Simulator */}
        <Card>
          <CardHeader>
            <CardTitle>Attrition Impact Simulator</CardTitle>
            <CardDescription>Adjust attrition rate to see cost impact</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Attrition Rate</span>
                <span className="text-2xl font-bold">{attritionRate[0]}%</span>
              </div>
              <Slider
                value={attritionRate}
                onValueChange={setAttritionRate}
                max={15}
                min={3}
                step={0.1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>3%</span>
                <span>15%</span>
              </div>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <div className="text-sm font-medium mb-2">Cost Impact Analysis</div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Annual Cost:</span>
                  <span className="text-sm font-semibold">${calculateCostImpact(attritionRate[0])}M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Affected Employees:</span>
                  <span className="text-sm font-semibold">{Math.round((4250 * attritionRate[0]) / 100)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">vs Target (7%):</span>
                  <span className={`text-sm font-semibold ${attritionRate[0] > 7 ? "text-red-600" : "text-green-600"}`}>
                    {attritionRate[0] > 7 ? "+" : ""}
                    {(attritionRate[0] - 7).toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mobility Heatmap */}
      <Card>
        <CardHeader>
          <CardTitle>Mobility Cube (Employee Movement)</CardTitle>
          <CardDescription>Employee mobility patterns across different categories</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">12%</div>
              <div className="text-sm font-medium mb-1">Vertical Promotions</div>
              <div className="text-xs text-muted-foreground">510 employees promoted</div>
            </div>

            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <div className="text-3xl font-bold text-secondary mb-2">8%</div>
              <div className="text-sm font-medium mb-1">Lateral Moves</div>
              <div className="text-xs text-muted-foreground">340 employees relocated</div>
            </div>

            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <div className="text-3xl font-bold text-accent mb-2">6%</div>
              <div className="text-sm font-medium mb-1">Gig/Project Assignments</div>
              <div className="text-xs text-muted-foreground">255 temporary assignments</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
