import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowUpToLine, Database, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Extension = () => {
  const [leadScore, setLeadScore] = useState(85);
  const { toast } = useToast();

  const handleSync = () => {
    toast({
      title: "Synced to CRM",
      description: "Lead data has been successfully synced to your CRM.",
    });
  };

  const handleExport = () => {
    toast({
      title: "Data Exported",
      description: "Lead data has been exported successfully.",
    });
  };

  return (
    <div className="w-[400px] p-4 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold text-primary">ClientIQ</h1>
        <Badge variant="secondary">Chrome Extension</Badge>
      </div>

      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="space-y-4">
            <div>
              <Label>Lead Score</Label>
              <div className="mt-2 flex items-center gap-2">
                <div className="text-3xl font-bold text-primary">{leadScore}%</div>
                <Badge className="bg-emerald-100 text-emerald-800">High Match</Badge>
              </div>
            </div>

            <div>
              <Label>Company Insights</Label>
              <div className="mt-2 text-sm text-gray-600">
                <p>Industry: Technology</p>
                <p>Size: 1000-5000 employees</p>
                <p>Growth: High growth</p>
              </div>
            </div>

            <div>
              <Label>Competitors</Label>
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge variant="outline">Competitor A</Badge>
                <Badge variant="outline">Competitor B</Badge>
                <Badge variant="outline">Competitor C</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3">
        <Button onClick={handleSync} className="w-full flex items-center gap-2">
          <Database className="h-4 w-4" />
          Sync to CRM
        </Button>
        <Button onClick={handleExport} variant="outline" className="w-full flex items-center gap-2">
          <Download className="h-4 w-4" />
          Export Data
        </Button>
      </div>
    </div>
  );
};

export default Extension;