"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp } from "lucide-react";

export default function ROICalculator() {
  const [citySize, setCitySize] = useState(1000000);
  const [vehicles, setVehicles] = useState(500);
  const [annualBudget, setAnnualBudget] = useState(10000000);

  // Calculate estimated savings (18% cost reduction as per proof metrics)
  const estimatedSavings = Math.round(annualBudget * 0.18);
  const monthlySavings = Math.round(estimatedSavings / 12);
  const roiPercentage = Math.round((estimatedSavings / annualBudget) * 100);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              ROI <span className="text-gradient">Calculator</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Estimate potential savings for your city
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calculator className="w-5 h-5" />
                  <span>Input Parameters</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    City Population
                  </label>
                  <Input
                    type="number"
                    value={citySize}
                    onChange={(e) => setCitySize(Number(e.target.value))}
                    min={100000}
                    step={100000}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Number of Vehicles
                  </label>
                  <Input
                    type="number"
                    value={vehicles}
                    onChange={(e) => setVehicles(Number(e.target.value))}
                    min={10}
                    step={10}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Annual Transit Budget (USD)
                  </label>
                  <Input
                    type="number"
                    value={annualBudget}
                    onChange={(e) => setAnnualBudget(Number(e.target.value))}
                    min={1000000}
                    step={100000}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5" />
                  <span>Estimated Results</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 bg-background-secondary rounded-xl">
                    <p className="text-sm text-muted-foreground mb-1">
                      Annual Savings
                    </p>
                    <p className="text-3xl font-bold text-primary">
                      ${estimatedSavings.toLocaleString()}
                    </p>
                  </div>
                  <div className="p-4 bg-background-secondary rounded-xl">
                    <p className="text-sm text-muted-foreground mb-1">
                      Monthly Savings
                    </p>
                    <p className="text-3xl font-bold text-secondary">
                      ${monthlySavings.toLocaleString()}
                    </p>
                  </div>
                  <div className="p-4 bg-background-secondary rounded-xl">
                    <p className="text-sm text-muted-foreground mb-1">
                      ROI Percentage
                    </p>
                    <p className="text-3xl font-bold text-primary">
                      {roiPercentage}%
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    * Based on average 18% cost reduction from OW platform
                    implementation. Actual results may vary.
                  </p>
                  <Button asChild className="w-full" size="lg">
                    <a href="/contact">Request Detailed Analysis</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
