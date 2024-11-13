import MainHeader from "@/components/shared/MainHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Mail, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import LeadsList from "@/components/dashboard/LeadsList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LeadActivity = () => {
  const activities = [
    {
      title: "New Lead Qualifications",
      count: "5",
      icon: Target,
      link: "/lead-activity/qualifications",
      description: "Leads qualified in the last 24 hours"
    },
    {
      title: "Email Interactions",
      count: "12",
      icon: Mail,
      link: "/lead-activity/emails",
      description: "Email interactions in the last 24 hours"
    },
    {
      title: "Website Visits",
      count: "28",
      icon: Users,
      link: "/lead-activity/visits",
      description: "Website visits from leads today"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <MainHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent mb-3">
            Lead Activity
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            Monitor and analyze all lead interactions and engagement metrics in real-time.
          </p>
          <div className="flex gap-4">
            <Button asChild variant="outline">
              <Link to="/lead-activity/export">
                Export Activity Log
              </Link>
            </Button>
            <Button asChild>
              <Link to="/lead-activity/settings">
                Configure Tracking
              </Link>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="mb-12">
          <TabsList>
            <TabsTrigger value="all">All Activity</TabsTrigger>
            <TabsTrigger value="website">Website</TabsTrigger>
            <TabsTrigger value="email">Email</TabsTrigger>
            <TabsTrigger value="social">Social</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activities.map((activity) => (
                <Card key={activity.title} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <activity.icon className="h-8 w-8 text-primary-600" />
                      <span className="text-3xl font-bold text-primary-600">{activity.count}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{activity.title}</h3>
                    <p className="text-gray-600 mb-4">{activity.description}</p>
                    <Link to={activity.link}>
                      <Button variant="outline" className="w-full">
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="website">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Website Interactions</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="font-medium">Page Visit</p>
                        <p className="text-sm text-gray-500">Product Features</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">2 minutes ago</span>
                  </div>
                  {/* Add more website interactions as needed */}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="email">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Email Interactions</h3>
                {/* Add email interaction details here */}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="social">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Social Interactions</h3>
                {/* Add social interaction details here */}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-primary-900 mb-6">Recent Leads</h3>
          <LeadsList />
        </div>
      </main>
    </div>
  );
};

export default LeadActivity;
