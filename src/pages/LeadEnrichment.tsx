import MainHeader from "@/components/shared/MainHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserPlus, Database, Search, Info, Link } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const LeadEnrichment = () => {
  const { toast } = useToast();

  const handleEnrich = () => {
    toast({
      title: "Lead Enrichment Started",
      description: "The enrichment process has been initiated.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <MainHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent mb-3">
            Lead Enrichment
          </h2>
          <p className="text-gray-600 text-lg">
            Enhance your lead data with additional insights and information.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5 text-primary-600" />
                Quick Enrichment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Enter company name or domain..." />
              <Button onClick={handleEnrich} className="w-full">
                Enrich Lead Data
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-primary-600" />
                Data Sources
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <div className="flex items-center gap-2">
                  <Link className="h-4 w-4 text-primary-600" />
                  <span>LinkedIn</span>
                </div>
                <span className="text-green-600">Connected</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <div className="flex items-center gap-2">
                  <Link className="h-4 w-4 text-primary-600" />
                  <span>Clearbit</span>
                </div>
                <Button variant="outline" size="sm">Connect</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserPlus className="h-5 w-5 text-primary-600" />
                Enrichment History
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <h4 className="font-semibold">Acme Corp</h4>
                <p className="text-sm text-gray-600">Enriched 2 hours ago</p>
                <div className="mt-2 text-sm">
                  <span className="text-green-600">+12 new data points</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary-600" />
                Enrichment Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span>Auto-enrich new leads</span>
                <Button variant="outline" size="sm">Enable</Button>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span>Daily enrichment limit</span>
                <span className="font-semibold">100/day</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default LeadEnrichment;