import MainHeader from "@/components/shared/MainHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const LeadScoring = () => {
  const [scoreCriteria, setScoreCriteria] = useState<string>("");
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Scoring Model Updated",
      description: "Your lead scoring criteria has been updated successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <MainHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent mb-3">
            Lead Scoring Settings
          </h2>
          <p className="text-gray-600 text-lg">
            Customize your lead scoring model to better prioritize leads based on specific criteria.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Lead Scoring Criteria</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="criteria">Scoring Criteria</Label>
              <Input 
                id="criteria" 
                placeholder="Enter your scoring criteria..." 
                value={scoreCriteria}
                onChange={(e) => setScoreCriteria(e.target.value)} 
              />
            </div>
            <div className="space-y-2">
              <Label>Scoring Model</Label>
              <p className="text-sm text-gray-500">Adjust your scoring model based on lead behavior and characteristics.</p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 flex justify-end">
          <Button onClick={handleSave}>Save Changes</Button>
        </div>
      </main>
    </div>
  );
};

export default LeadScoring;
