import MainHeader from "@/components/shared/MainHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Workflow, ArrowRight, List, Filter } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Pipeline = () => {
  const { toast } = useToast();

  const handleStageUpdate = () => {
    toast({
      title: "Pipeline Updated",
      description: "Lead stage has been updated successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <MainHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent mb-3">
            Pipeline Management
          </h2>
          <p className="text-gray-600 text-lg">
            Track and manage your sales pipeline stages effectively.
          </p>
        </div>

        <div className="flex gap-4 mb-6">
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter Leads
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <List className="h-4 w-4" />
            View All
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Workflow className="h-5 w-5 text-primary-600" />
                New Leads
                <span className="ml-auto bg-primary-100 text-primary-600 px-2 py-1 rounded-full text-sm">
                  12
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Example Lead Cards */}
              <div className="bg-white p-4 rounded-lg shadow-sm border cursor-pointer hover:shadow-md transition-shadow">
                <h4 className="font-semibold">Acme Corp</h4>
                <p className="text-sm text-gray-600">Software Industry</p>
                <div className="flex items-center gap-2 mt-2">
                  <Button size="sm" variant="outline" onClick={handleStageUpdate}>
                    Move <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Workflow className="h-5 w-5 text-primary-600" />
                Qualified
                <span className="ml-auto bg-primary-100 text-primary-600 px-2 py-1 rounded-full text-sm">
                  8
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Example Lead Cards */}
              <div className="bg-white p-4 rounded-lg shadow-sm border cursor-pointer hover:shadow-md transition-shadow">
                <h4 className="font-semibold">Tech Solutions</h4>
                <p className="text-sm text-gray-600">Technology</p>
                <div className="flex items-center gap-2 mt-2">
                  <Button size="sm" variant="outline" onClick={handleStageUpdate}>
                    Move <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Workflow className="h-5 w-5 text-primary-600" />
                Proposal
                <span className="ml-auto bg-primary-100 text-primary-600 px-2 py-1 rounded-full text-sm">
                  5
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Example Lead Cards */}
              <div className="bg-white p-4 rounded-lg shadow-sm border cursor-pointer hover:shadow-md transition-shadow">
                <h4 className="font-semibold">Global Industries</h4>
                <p className="text-sm text-gray-600">Manufacturing</p>
                <div className="flex items-center gap-2 mt-2">
                  <Button size="sm" variant="outline" onClick={handleStageUpdate}>
                    Move <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Workflow className="h-5 w-5 text-primary-600" />
                Closed
                <span className="ml-auto bg-primary-100 text-primary-600 px-2 py-1 rounded-full text-sm">
                  3
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Example Lead Cards */}
              <div className="bg-white p-4 rounded-lg shadow-sm border cursor-pointer hover:shadow-md transition-shadow">
                <h4 className="font-semibold">Innovation Labs</h4>
                <p className="text-sm text-gray-600">Research</p>
                <div className="flex items-center gap-2 mt-2">
                  <Button size="sm" variant="outline" onClick={handleStageUpdate}>
                    Archive
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Pipeline;