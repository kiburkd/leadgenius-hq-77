import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  ArrowUpToLine,
  Database,
  Download,
  Building2,
  Users,
  TrendingUp,
  Globe,
  Mail,
  Phone,
  LinkedinIcon,
  Twitter,
  AlertCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Extension = () => {
  const [leadScore, setLeadScore] = useState(85);
  const [notes, setNotes] = useState("");
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
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

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-emerald-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const handleSectionClick = (section: string) => {
    setSelectedSection(section);
  };

  return (
    <div className="w-[400px] p-4 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-primary">ClientIQ</h1>
          <Badge variant="secondary">Chrome Extension</Badge>
        </div>
        <Button variant="ghost" size="icon" onClick={() => window.close()}>
          <AlertCircle className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="overview" className="mb-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
          <TabsTrigger value="contacts">Contacts</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card className="mb-4 cursor-pointer hover:shadow-md transition-shadow" onClick={() => handleSectionClick("leadScore")}>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Lead Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`text-3xl font-bold ${getScoreColor(leadScore)}`}>
                    {leadScore}%
                  </span>
                  <Badge className="bg-emerald-100 text-emerald-800">High Match</Badge>
                </div>
                <Progress value={leadScore} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card className="mb-4 cursor-pointer hover:shadow-md transition-shadow" onClick={() => handleSectionClick("companyProfile")}>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Company Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Building2 className="h-4 w-4" />
                <span>Technology Industry</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Users className="h-4 w-4" />
                <span>1000-5000 employees</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <TrendingUp className="h-4 w-4" />
                <span>High growth</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Globe className="h-4 w-4" />
                <span>www.company.com</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights">
          <Card className="mb-4 cursor-pointer hover:shadow-md transition-shadow" onClick={() => handleSectionClick("marketPosition")}>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Market Position</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Market Leader</Badge>
                  <Badge variant="outline">Enterprise Focus</Badge>
                  <Badge variant="outline">Global Presence</Badge>
                </div>
                <Separator />
                <div>
                  <h4 className="font-medium mb-2">Top Competitors</h4>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-600">• Competitor A Inc.</div>
                    <div className="text-sm text-gray-600">• Competitor B Corp.</div>
                    <div className="text-sm text-gray-600">• Competitor C Ltd.</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contacts">
          <Card className="mb-4 cursor-pointer hover:shadow-md transition-shadow" onClick={() => handleSectionClick("contacts")}>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Key Contacts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="h-4 w-4" />
                  <span>contact@company.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <LinkedinIcon className="h-4 w-4" />
                  <span>LinkedIn Profile</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Twitter className="h-4 w-4" />
                  <span>Twitter Profile</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="mb-4">
        <CardContent className="p-4">
          <Label htmlFor="notes">Notes</Label>
          <Input
            id="notes"
            placeholder="Add your notes here..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="mt-2"
          />
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
        <Button variant="secondary" className="w-full flex items-center gap-2">
          <ArrowUpToLine className="h-4 w-4" />
          Share Insights
        </Button>
      </div>

      <Dialog open={!!selectedSection} onOpenChange={() => setSelectedSection(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {selectedSection === "leadScore" && "Lead Score Details"}
              {selectedSection === "companyProfile" && "Company Profile Details"}
              {selectedSection === "marketPosition" && "Market Position Analysis"}
              {selectedSection === "contacts" && "Contact Information"}
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">
            {selectedSection === "leadScore" && (
              <div className="space-y-4">
                <div className={`text-3xl font-bold ${getScoreColor(leadScore)}`}>
                  {leadScore}%
                </div>
                <Progress value={leadScore} className="h-2" />
                <p className="text-gray-600">
                  This lead score is calculated based on company size, industry match,
                  and growth potential. A score above 80% indicates a high-value prospect.
                </p>
              </div>
            )}
            {selectedSection === "companyProfile" && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">Industry</h3>
                  <p className="text-gray-600">Technology Industry</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Company Size</h3>
                  <p className="text-gray-600">1000-5000 employees</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Growth Status</h3>
                  <p className="text-gray-600">High growth</p>
                </div>
              </div>
            )}
            {selectedSection === "marketPosition" && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">Market Position</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Market Leader</Badge>
                    <Badge variant="outline">Enterprise Focus</Badge>
                    <Badge variant="outline">Global Presence</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Competitors</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Competitor A Inc.</li>
                    <li>• Competitor B Corp.</li>
                    <li>• Competitor C Ltd.</li>
                  </ul>
                </div>
              </div>
            )}
            {selectedSection === "contacts" && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">Primary Contact</h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      contact@company.com
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Social Profiles</h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-center gap-2">
                      <LinkedinIcon className="h-4 w-4" />
                      LinkedIn Profile
                    </p>
                    <p className="flex items-center gap-2">
                      <Twitter className="h-4 w-4" />
                      Twitter Profile
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Extension;
