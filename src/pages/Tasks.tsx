import MainHeader from "@/components/shared/MainHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ListCheck, Clipboard, Calendar, Clock, CheckSquare } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Tasks = () => {
  const { toast } = useToast();

  const handleTaskComplete = () => {
    toast({
      title: "Task Completed",
      description: "The task has been marked as complete.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <MainHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent mb-3">
            Task Management
          </h2>
          <p className="text-gray-600 text-lg">
            Organize and track your sales tasks and follow-ups.
          </p>
        </div>

        <div className="flex gap-4 mb-6">
          <Input placeholder="Search tasks..." className="max-w-sm" />
          <Button variant="outline" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Filter by Date
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ListCheck className="h-5 w-5 text-primary-600" />
                Today's Tasks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold">Follow up with Acme Corp</h4>
                    <p className="text-sm text-gray-600">Due in 2 hours</p>
                  </div>
                  <Button size="sm" variant="outline" onClick={handleTaskComplete}>
                    <CheckSquare className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clipboard className="h-5 w-5 text-primary-600" />
                Upcoming Tasks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold">Prepare proposal</h4>
                    <p className="text-sm text-gray-600">Due tomorrow</p>
                  </div>
                  <Button size="sm" variant="outline" onClick={handleTaskComplete}>
                    <CheckSquare className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary-600" />
                Completed Tasks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border opacity-60">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold line-through">Send contract</h4>
                    <p className="text-sm text-gray-600">Completed today</p>
                  </div>
                  <Button size="sm" variant="outline" disabled>
                    <CheckSquare className="h-4 w-4" />
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

export default Tasks;