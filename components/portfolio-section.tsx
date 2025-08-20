import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, TrendingUp, Users, Globe, BarChart3 } from "lucide-react"

const projects = [
  {
    title: "Global Workforce Transformation",
    client: "Fortune 500 Technology Company",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Implemented comprehensive HR dashboard managing 15,000+ employees across 25 countries with real-time analytics.",
    results: [
      "40% reduction in HR processing time",
      "25% improvement in employee satisfaction",
      "60% faster decision making",
    ],
    tags: ["Workforce Analytics", "Global Operations", "Performance Management"],
    icon: Globe,
  },
  {
    title: "AI-Powered Recruitment Platform",
    client: "International Financial Services",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Developed intelligent recruitment system with predictive analytics and automated candidate screening.",
    results: ["50% faster time-to-hire", "35% improvement in hire quality", "70% reduction in manual screening"],
    tags: ["AI/ML", "Recruitment", "Automation"],
    icon: Users,
  },
  {
    title: "Performance & Engagement Suite",
    client: "Healthcare Conglomerate",
    image: "/placeholder.svg?height=300&width=400",
    description: "Built integrated performance management system with 360° feedback and engagement tracking.",
    results: [
      "30% increase in engagement scores",
      "45% improvement in performance reviews",
      "20% reduction in turnover",
    ],
    tags: ["Performance Management", "Employee Engagement", "Analytics"],
    icon: TrendingUp,
  },
  {
    title: "Compensation Analytics Platform",
    client: "Manufacturing Enterprise",
    image: "/placeholder.svg?height=300&width=400",
    description: "Created comprehensive compensation analysis tool with pay equity monitoring and market benchmarking.",
    results: ["15% improvement in pay equity", "25% better market positioning", "30% faster compensation decisions"],
    tags: ["Compensation", "Pay Equity", "Market Analysis"],
    icon: BarChart3,
  },
  {
    title: "Culture Integration Dashboard",
    client: "Merged Technology Companies",
    image: "/placeholder.svg?height=300&width=400",
    description: "Designed culture integration tracking system for post-merger workforce alignment and engagement.",
    results: ["85% successful culture integration", "40% faster merger completion", "20% higher retention rate"],
    tags: ["Culture Integration", "Change Management", "ESG"],
    icon: Users,
  },
  {
    title: "HR Automation Suite",
    client: "Retail Chain Network",
    image: "/placeholder.svg?height=300&width=400",
    description: "Implemented end-to-end HR automation covering payroll, onboarding, and compliance management.",
    results: ["80% process automation", "$2M annual cost savings", "95% compliance accuracy"],
    tags: ["Automation", "Process Optimization", "Compliance"],
    icon: BarChart3,
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-foreground mb-4">
            Success Stories & Case Studies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've transformed HR operations for leading enterprises across industries, delivering
            measurable results and strategic value.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-border hover:border-accent/50 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <project.icon className="h-5 w-5 text-accent" />
                  </div>
                </div>
              </div>

              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-xl font-sans font-bold text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-accent font-medium">{project.client}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div>
                  <h4 className="font-sans font-semibold text-foreground mb-2">Key Results:</h4>
                  <ul className="space-y-1">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors bg-transparent"
                >
                  View Case Study
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            View All Projects
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
