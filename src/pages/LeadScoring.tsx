import { useState } from "react";
import MainHeader from "@/components/shared/MainHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartBar, Settings, History, Target } from "lucide-react";

const LeadScoring = () => {
  const [activeTab, setActiveTab] = useState("model");

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <MainHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent mb-3">
            Lead Scoring
          </h2>
          <p className="text-gray-600 text-lg">
            AI-powered lead scoring and insights to prioritize your sales efforts.
          </p>
        </div>

        <Tabs defaultValue="model" className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 gap-4">
            <TabsTrigger value="model" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Scoring Model
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center gap-2">
              <History className="h-4 w-4" />
              Score History
            </TabsTrigger>
            <TabsTrigger value="breakdown" className="flex items-center gap-2">
              <ChartBar className="h-4 w-4" />
              Score Breakdown
            </TabsTrigger>
            <TabsTrigger value="next-steps" className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              Next Steps
            </TabsTrigger>
          </TabsList>

          <TabsContent value="model">
            <Card>
              <CardHeader>
                <CardTitle>Lead Scoring Model Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-4">Engagement Criteria</h4>
                      {/* Add engagement criteria settings */}
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-4">Demographic Criteria</h4>
                      {/* Add demographic criteria settings */}
                    </CardContent>
                  </Card>
                </div>
                <Button className="w-full md:w-auto">Save Model Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Score History</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Add score history visualization */}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="breakdown">
            <Card>
              <CardHeader>
                <CardTitle>Score Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Add score breakdown visualization */}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="next-steps">
            <Card>
              <CardHeader>
                <CardTitle>Recommended Next Steps</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Add recommended actions */}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default LeadScoring;