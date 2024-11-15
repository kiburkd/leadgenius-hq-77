import MainHeader from "@/components/shared/MainHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Target, ChartBar, Award, Percent } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const LeadScoring = () => {
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

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary-600" />
                Behavioral Scoring
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Website Visits Weight</Label>
                <Slider defaultValue={[30]} max={100} step={1} />
              </div>
              <div className="space-y-2">
                <Label>Email Engagement Weight</Label>
                <Slider defaultValue={[40]} max={100} step={1} />
              </div>
              <div className="space-y-2">
                <Label>Social Media Interaction Weight</Label>
                <Slider defaultValue={[30]} max={100} step={1} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ChartBar className="h-5 w-5 text-primary-600" />
                Demographic Scoring
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Company Size Weight</Label>
                <Slider defaultValue={[25]} max={100} step={1} />
              </div>
              <div className="space-y-2">
                <Label>Industry Relevance Weight</Label>
                <Slider defaultValue={[35]} max={100} step={1} />
              </div>
              <div className="space-y-2">
                <Label>Budget Range Weight</Label>
                <Slider defaultValue={[40]} max={100} step={1} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary-600" />
                Qualification Rules
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Minimum Score for Qualification</Label>
                <Input type="number" placeholder="70" />
              </div>
              <div className="space-y-2">
                <Label>Auto-Disqualification Threshold</Label>
                <Input type="number" placeholder="30" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Percent className="h-5 w-5 text-primary-600" />
                Score Multipliers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>High-Value Industry Multiplier</Label>
                <Input type="number" placeholder="1.5" step="0.1" />
              </div>
              <div className="space-y-2">
                <Label>Referral Source Multiplier</Label>
                <Input type="number" placeholder="1.3" step="0.1" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 flex justify-end">
          <Button onClick={handleSave}>Save Changes</Button>
        </div>
      </main>
    </div>
  );
};

export default LeadScoring;