"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import { DollarSign, TrendingUp, Scale, Award, AlertTriangle, Target, PieChart, BarChart3, Users } from "lucide-react"

export function CompensationPage() {
  const [payAdjustment, setPayAdjustment] = useState([0])

  const calculateCompensationImpact = (adjustment: number) => {
    const retentionIncrease = (adjustment / 10) * 6 // 6% retention per 10% pay increase
    const annualCost = (adjustment / 100) * 2.5 // $2.5M per 10% increase
    return {
      retentionIncrease: retentionIncrease.toFixed(1),
      annualCost: annualCost.toFixed(1),
      adjustment: adjustment,
    }
  }

  const impact = calculateCompensationImpact(payAdjustment[0])

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-sans font-bold text-foreground">Compensation, Rewards & Equity</h1>
          <p className="text-muted-foreground mt-1">Monitor pay fairness, competitiveness, and incentive structures</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-sm">
            Last updated: 1 hour ago
          </Badge>
          <Button size="sm">Generate Equity Report</Button>
        </div>
      </div>

      {/* Key Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Global Pay Gap</CardTitle>
            <Scale className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">-7%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-destructive">⚠ Target: &lt;3%</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Market Competitiveness</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground">Alignment with market rates</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Performance Alignment</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">85%</div>
            <p className="text-xs text-muted-foreground">Pay-for-performance correlation</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Rewards Budget</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$312M</div>
            <p className="text-xs text-muted-foreground">Annual compensation spend</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Tabs */}
      <Tabs defaultValue="salary-bands" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="salary-bands">Salary Bands & Equity</TabsTrigger>
          <TabsTrigger value="rewards-mix">Rewards Structure</TabsTrigger>
          <TabsTrigger value="compensation-tools">Adjustment Tools</TabsTrigger>
        </TabsList>

        <TabsContent value="salary-bands" className="space-y-6">
          {/* Job Grades Salary Bands */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Job Grades Salary Bands
                </CardTitle>
                <CardDescription>Salary ranges across job levels and subsidiaries</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">JG1 (Entry Level)</span>
                      <Badge variant="secondary">$80K - $120K</Badge>
                    </div>
                    <Progress value={25} className="h-2" />
                    <div className="text-xs text-muted-foreground mt-1">850 employees</div>
                  </div>

                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">JG3 (Mid-Level)</span>
                      <Badge variant="secondary">$120K - $180K</Badge>
                    </div>
                    <Progress value={35} className="h-2" />
                    <div className="text-xs text-muted-foreground mt-1">1,200 employees</div>
                  </div>

                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">JG5 (Senior Level)</span>
                      <Badge variant="secondary">$180K - $280K</Badge>
                    </div>
                    <Progress value={25} className="h-2" />
                    <div className="text-xs text-muted-foreground mt-1">950 employees</div>
                  </div>

                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">JG7 (Principal)</span>
                      <Badge variant="secondary">$280K - $450K</Badge>
                    </div>
                    <Progress value={10} className="h-2" />
                    <div className="text-xs text-muted-foreground mt-1">380 employees</div>
                  </div>

                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">JG8+ (Executive)</span>
                      <Badge variant="secondary">$800K - $1.5M+</Badge>
                    </div>
                    <Progress value={5} className="h-2" />
                    <div className="text-xs text-muted-foreground mt-1">120 employees</div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="text-sm font-medium mb-2">Subsidiary Adjustments:</div>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span>Core Company</span>
                      <span className="font-semibold">Baseline</span>
                    </div>
                    <div className="flex justify-between">
                      <span>CodexHub</span>
                      <span className="font-semibold text-green-600">+15%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>MindNest AI</span>
                      <span className="font-semibold text-green-600">+12%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Triluxe</span>
                      <span className="font-semibold">+5%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="h-5 w-5" />
                  Pay Equity Analysis
                </CardTitle>
                <CardDescription>Gender and demographic pay gap analysis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                    <span className="text-sm font-medium text-destructive">Critical Pay Gap Issues</span>
                  </div>
                  <div className="text-2xl font-bold text-destructive mb-1">-7% Global</div>
                  <div className="text-xs text-muted-foreground">Target: &lt;3% gap</div>
                </div>

                <div className="space-y-4">
                  <div className="text-sm font-medium">Pay Gap by Subsidiary:</div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                      <span className="text-sm font-medium">CodexHub</span>
                      <span className="text-sm font-bold text-red-600">-9%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                      <span className="text-sm font-medium">Triluxe</span>
                      <span className="text-sm font-bold text-yellow-600">-4%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm font-medium">MindNest AI</span>
                      <span className="text-sm font-bold text-green-600">-2%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm font-medium">Core Company</span>
                      <span className="text-sm font-bold text-green-600">-1%</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="text-sm font-medium mb-2">Remediation Progress:</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Positions Reviewed</span>
                      <span className="font-semibold">2,847 / 4,250</span>
                    </div>
                    <Progress value={67} className="h-2" />
                    <div className="flex justify-between text-xs">
                      <span>Adjustments Made</span>
                      <span className="font-semibold">156 positions</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Reward Philosophy Metrics */}
          <Card>
            <CardHeader>
              <CardTitle>Reward Philosophy Alignment</CardTitle>
              <CardDescription>How well compensation aligns with organizational values</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
                  <div className="text-sm font-medium mb-1">Performance-Driven</div>
                  <div className="text-xs text-muted-foreground">Pay correlates with performance ratings</div>
                </div>

                <div className="text-center p-6 bg-yellow-50 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">78%</div>
                  <div className="text-sm font-medium mb-1">Market-Competitive</div>
                  <div className="text-xs text-muted-foreground">Salaries align with market benchmarks</div>
                </div>

                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">70%</div>
                  <div className="text-sm font-medium mb-1">Values-Driven</div>
                  <div className="text-xs text-muted-foreground">Rewards support company values</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rewards-mix" className="space-y-6">
          {/* Reward Mix */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5" />
                  Total Rewards Mix
                </CardTitle>
                <CardDescription>Breakdown of compensation components</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-500 rounded"></div>
                        Fixed Pay (Base Salary)
                      </span>
                      <span className="text-sm font-bold">65%</span>
                    </div>
                    <Progress value={65} className="h-3" />
                    <div className="text-xs text-muted-foreground">$202.8M annual</div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded"></div>
                        Variable Pay (Bonus)
                      </span>
                      <span className="text-sm font-bold">20%</span>
                    </div>
                    <Progress value={20} className="h-3" />
                    <div className="text-xs text-muted-foreground">$62.4M annual</div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium flex items-center gap-2">
                        <div className="w-3 h-3 bg-purple-500 rounded"></div>
                        Benefits
                      </span>
                      <span className="text-sm font-bold">10%</span>
                    </div>
                    <Progress value={10} className="h-3" />
                    <div className="text-xs text-muted-foreground">$31.2M annual</div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium flex items-center gap-2">
                        <div className="w-3 h-3 bg-orange-500 rounded"></div>
                        Equity/Stock Options
                      </span>
                      <span className="text-sm font-bold">5%</span>
                    </div>
                    <Progress value={5} className="h-3" />
                    <div className="text-xs text-muted-foreground">$15.6M annual</div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="text-sm font-medium mb-2">Industry Comparison:</div>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span>Fixed Pay Ratio</span>
                      <span className="font-semibold text-green-600">Competitive (65% vs 68% avg)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Variable Pay Ratio</span>
                      <span className="font-semibold text-green-600">Above Average (20% vs 15% avg)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Benefits Utilization</CardTitle>
                <CardDescription>Employee engagement with benefit programs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium">Health Insurance</span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">98%</div>
                      <div className="text-xs text-muted-foreground">Enrollment rate</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium">401(k) Retirement</span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">87%</div>
                      <div className="text-xs text-muted-foreground">Participation rate</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm font-medium">Professional Development</span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-purple-600">73%</div>
                      <div className="text-xs text-muted-foreground">Utilization rate</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <span className="text-sm font-medium">Wellness Programs</span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-yellow-600">45%</div>
                      <div className="text-xs text-muted-foreground">Participation rate</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <span className="text-sm font-medium">Flexible Work Benefits</span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-orange-600">92%</div>
                      <div className="text-xs text-muted-foreground">Adoption rate</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="text-sm font-medium mb-2">Cost per Employee:</div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">$7,350</div>
                    <div className="text-xs text-muted-foreground">Annual benefits cost</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="compensation-tools" className="space-y-6">
          {/* Compensation Adjustment Control */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Compensation Adjustment Simulator
                </CardTitle>
                <CardDescription>Model the impact of pay adjustments on retention and costs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Pay Band Adjustment</span>
                    <span className="text-2xl font-bold">
                      {payAdjustment[0] > 0 ? "+" : ""}
                      {payAdjustment[0]}%
                    </span>
                  </div>
                  <Slider
                    value={payAdjustment}
                    onValueChange={setPayAdjustment}
                    max={25}
                    min={-10}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>-10%</span>
                    <span>+25%</span>
                  </div>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <div className="text-sm font-medium mb-3">Projected Impact</div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Retention Change:</span>
                      <span
                        className={`text-sm font-semibold ${Number.parseFloat(impact.retentionIncrease) >= 0 ? "text-green-600" : "text-red-600"}`}
                      >
                        {Number.parseFloat(impact.retentionIncrease) > 0 ? "+" : ""}
                        {impact.retentionIncrease}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Annual Cost Impact:</span>
                      <span
                        className={`text-sm font-semibold ${Number.parseFloat(impact.annualCost) >= 0 ? "text-red-600" : "text-green-600"}`}
                      >
                        {Number.parseFloat(impact.annualCost) > 0 ? "+" : ""}${impact.annualCost}M
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Affected Employees:</span>
                      <span className="text-sm font-semibold">4,250 (All)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">ROI Timeline:</span>
                      <span className="text-sm font-semibold">
                        {payAdjustment[0] > 0 ? "18-24 months" : "Immediate"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button size="sm" className="w-full" disabled={payAdjustment[0] === 0}>
                    Apply Adjustment
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full bg-transparent"
                    onClick={() => setPayAdjustment([0])}
                  >
                    Reset to Baseline
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Targeted Adjustments</CardTitle>
                <CardDescription>Focus compensation changes on specific groups</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                      <span className="text-sm font-medium">High Priority</span>
                    </div>
                    <div className="text-sm mb-2">CodexHub Pay Equity</div>
                    <div className="text-xs text-muted-foreground mb-3">
                      Address -9% gender pay gap affecting 750 employees
                    </div>
                    <div className="flex justify-between text-xs mb-2">
                      <span>Estimated Cost:</span>
                      <span className="font-semibold">$2.8M</span>
                    </div>
                    <Button size="sm" className="w-full">
                      Create Adjustment Plan
                    </Button>
                  </div>

                  <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="h-4 w-4 text-yellow-600" />
                      <span className="text-sm font-medium">Medium Priority</span>
                    </div>
                    <div className="text-sm mb-2">High Performer Retention</div>
                    <div className="text-xs text-muted-foreground mb-3">Market adjustments for top 25% performers</div>
                    <div className="flex justify-between text-xs mb-2">
                      <span>Estimated Cost:</span>
                      <span className="font-semibold">$4.2M</span>
                    </div>
                    <Button size="sm" variant="outline" className="w-full bg-transparent">
                      Review Proposal
                    </Button>
                  </div>

                  <div className="p-4 border border-blue-200 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium">Strategic Initiative</span>
                    </div>
                    <div className="text-sm mb-2">Engineering Talent Acquisition</div>
                    <div className="text-xs text-muted-foreground mb-3">Competitive positioning for tech roles</div>
                    <div className="flex justify-between text-xs mb-2">
                      <span>Estimated Cost:</span>
                      <span className="font-semibold">$6.1M</span>
                    </div>
                    <Button size="sm" variant="outline" className="w-full bg-transparent">
                      Schedule Review
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Market Benchmarking */}
          <Card>
            <CardHeader>
              <CardTitle>Market Benchmarking</CardTitle>
              <CardDescription>Competitive positioning analysis across key roles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 border rounded-lg">
                  <div className="text-sm font-medium mb-2">Software Engineers</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Our Range</span>
                      <span className="font-semibold">$120K-$180K</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Market P50</span>
                      <span className="font-semibold">$135K</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Position</span>
                      <span className="font-semibold text-yellow-600">Below Market</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="text-sm font-medium mb-2">Sales Managers</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Our Range</span>
                      <span className="font-semibold">$95K-$140K</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Market P50</span>
                      <span className="font-semibold">$115K</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Position</span>
                      <span className="font-semibold text-green-600">Competitive</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="text-sm font-medium mb-2">Product Managers</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Our Range</span>
                      <span className="font-semibold">$140K-$200K</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Market P50</span>
                      <span className="font-semibold">$165K</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Position</span>
                      <span className="font-semibold text-green-600">Above Market</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="text-sm font-medium mb-2">Data Scientists</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Our Range</span>
                      <span className="font-semibold">$110K-$160K</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Market P50</span>
                      <span className="font-semibold">$145K</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Position</span>
                      <span className="font-semibold text-red-600">Significantly Below</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
