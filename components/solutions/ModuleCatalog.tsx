"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, X } from "lucide-react";

const allModules = [
  {
    id: "transitopt",
    name: "TransitOpt",
    category: "optimization",
    description: "Frequency and schedule optimization for public transit systems",
    problem: "Inefficient schedules leading to overcrowding and delays",
    solution: "AI-driven frequency optimization based on real-time demand",
    dataSources: ["GTFS", "GTFS-RT", "AVL", "Ticketing"],
    kpis: ["On-Time Performance", "Wait Time", "Load Factor"],
    deployment: ["Cloud", "Hybrid"],
  },
  {
    id: "fleetopt",
    name: "FleetOpt",
    category: "optimization",
    description: "Vehicle allocation and routing optimization",
    problem: "Suboptimal vehicle deployment and routing",
    solution: "Dynamic fleet allocation with predictive analytics",
    dataSources: ["AVL", "GTFS", "Maintenance"],
    kpis: ["Fleet Utilization", "Empty KM", "Fuel Efficiency"],
    deployment: ["Cloud", "On-prem", "Hybrid"],
  },
  {
    id: "ridersense",
    name: "RiderSense",
    category: "analytics",
    description: "Passenger flow and crowding analysis",
    problem: "Lack of visibility into passenger patterns",
    solution: "Real-time passenger flow visualization and prediction",
    dataSources: ["Ticketing", "Sensors", "GTFS-RT"],
    kpis: ["Peak Load", "Comfort Index", "Crowding"],
    deployment: ["Cloud", "Hybrid"],
  },
  {
    id: "costlogic",
    name: "CostLogic",
    category: "analytics",
    description: "Operational cost analysis and optimization",
    problem: "Unclear cost drivers and optimization opportunities",
    solution: "Comprehensive cost modeling and optimization recommendations",
    dataSources: ["Financial", "Operational", "GTFS"],
    kpis: ["Cost per KM", "Savings", "ROI"],
    deployment: ["Cloud", "On-prem"],
  },
  {
    id: "drt",
    name: "DRT Optimizer",
    category: "optimization",
    description: "Demand-Responsive Transit optimization",
    problem: "Inefficient on-demand service routing",
    solution: "Dynamic routing algorithms for DRT services",
    dataSources: ["Booking", "AVL", "GTFS"],
    kpis: ["Response Time", "Utilization", "Satisfaction"],
    deployment: ["Cloud"],
  },
  {
    id: "accessibility",
    name: "Accessibility Monitor",
    category: "analytics",
    description: "Accessibility compliance and optimization",
    problem: "Ensuring equitable access to transit",
    solution: "Accessibility scoring and improvement recommendations",
    dataSources: ["GTFS", "Infrastructure", "Complaints"],
    kpis: ["Accessibility Score", "Coverage", "Compliance"],
    deployment: ["Cloud", "Hybrid"],
  },
  {
    id: "odmatrix",
    name: "OD Matrix Analyzer",
    category: "analytics",
    description: "Origin-Destination matrix analysis",
    problem: "Understanding passenger travel patterns",
    solution: "OD matrix generation and visualization from ticketing data",
    dataSources: ["Ticketing", "GTFS"],
    kpis: ["OD Pairs", "Demand Patterns", "Corridors"],
    deployment: ["Cloud", "On-prem"],
  },
  {
    id: "intelligence",
    name: "Intelligence Hub",
    category: "analytics",
    description: "AI-powered insights and recommendations",
    problem: "Data overload without actionable insights",
    solution: "Machine learning models for predictive analytics",
    dataSources: ["All Sources"],
    kpis: ["Prediction Accuracy", "Insights Generated", "Actions Recommended"],
    deployment: ["Cloud"],
  },
  {
    id: "gtfsrt",
    name: "GTFS-RT Manager",
    category: "integration",
    description: "Real-time GTFS data management",
    problem: "Complex real-time data integration",
    solution: "Unified GTFS-RT processing and distribution",
    dataSources: ["GTFS-RT"],
    kpis: ["Data Quality", "Latency", "Coverage"],
    deployment: ["Cloud", "Hybrid"],
  },
];

const categories = ["all", "optimization", "analytics", "integration"];
const deploymentTypes = ["all", "Cloud", "On-prem", "Hybrid"];

export default function ModuleCatalog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDeployment, setSelectedDeployment] = useState("all");

  const filteredModules = allModules.filter((module) => {
    const matchesSearch =
      module.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      module.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || module.category === selectedCategory;
    const matchesDeployment =
      selectedDeployment === "all" ||
      module.deployment.includes(selectedDeployment);

    return matchesSearch && matchesCategory && matchesDeployment;
  });

  return (
    <section className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by module name, KPI, or data source..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-background border-border"
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">Category:</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <span className="text-sm font-medium">Deployment:</span>
            {deploymentTypes.map((deployment) => (
              <Button
                key={deployment}
                variant={selectedDeployment === deployment ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedDeployment(deployment)}
              >
                {deployment.charAt(0).toUpperCase() + deployment.slice(1)}
              </Button>
            ))}
          </div>

          {(selectedCategory !== "all" ||
            selectedDeployment !== "all" ||
            searchQuery) && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSelectedCategory("all");
                setSelectedDeployment("all");
                setSearchQuery("");
              }}
            >
              <X className="w-4 h-4 mr-2" />
              Clear Filters
            </Button>
          )}
        </div>

        {/* Results Count */}
        <p className="text-sm text-muted-foreground mb-8">
          {filteredModules.length} module{filteredModules.length !== 1 ? "s" : ""} found
        </p>

        {/* Module Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="h-full hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <CardTitle className="text-2xl">{module.name}</CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Problem</h4>
                    <p className="text-sm text-muted-foreground">
                      {module.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Solution</h4>
                    <p className="text-sm text-muted-foreground">
                      {module.solution}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Data Sources</h4>
                    <div className="flex flex-wrap gap-2">
                      {module.dataSources.map((source) => (
                        <span
                          key={source}
                          className="text-xs px-2 py-1 bg-background rounded border border-border"
                        >
                          {source}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Key KPIs</h4>
                    <div className="flex flex-wrap gap-2">
                      {module.kpis.map((kpi) => (
                        <span
                          key={kpi}
                          className="text-xs px-2 py-1 bg-primary/20 text-primary rounded"
                        >
                          {kpi}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Deployment</h4>
                    <div className="flex flex-wrap gap-2">
                      {module.deployment.map((dep) => (
                        <span
                          key={dep}
                          className="text-xs px-2 py-1 bg-secondary/20 text-secondary rounded"
                        >
                          {dep}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
