import MainHeader from "@/components/shared/MainHeader";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import MetricsCards from "@/components/dashboard/MetricsCards";
import LeadsList from "@/components/dashboard/LeadsList";
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const leadTrendsData = [
    { name: 'Jan', leads: 400, qualified: 300 },
    { name: 'Feb', leads: 300, qualified: 250 },
    { name: 'Mar', leads: 600, qualified: 450 },
    { name: 'Apr', leads: 800, qualified: 600 },
    { name: 'May', leads: 700, qualified: 550 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <MainHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent mb-3">
            Welcome back!
          </h2>
          <p className="text-gray-600 text-lg">
            Here's what's happening with your leads today.
          </p>
        </div>

        <MetricsCards />

        {/* Lead Generation Trends */}
        <div className="mt-16 mb-12 animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-primary-900">Lead Generation Trends</h3>
            <Link to="/analytics">
              <Button variant="outline" className="flex items-center gap-2">
                View Full Analytics <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <Card>
            <CardContent className="p-6">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={leadTrendsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="leads" stroke="#6366f1" strokeWidth={2} name="Total Leads" />
                    <Line type="monotone" dataKey="qualified" stroke="#10b981" strokeWidth={2} name="Qualified Leads" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Lead Activity */}
        <div className="mb-12 animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-primary-900">Recent Lead Activity</h3>
            <Link to="/lead-activity">
              <Button variant="outline" className="flex items-center gap-2">
                View All Activity <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-2">New Lead Qualifications</h4>
                <p className="text-gray-600 mb-4">
                  5 new leads qualified in the last 24 hours
                </p>
                <Link to="/lead-activity/qualifications">
                  <Button variant="outline" className="w-full">
                    View Qualifications <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-2">Lead Score Updates</h4>
                <p className="text-gray-600 mb-4">
                  10 lead scores updated based on recent activities
                </p>
                <Link to="/lead-activity/scores">
                  <Button variant="outline" className="w-full">
                    View Score Updates <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Lead Management Resources */}
        <div className="mb-8 mt-16 animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-primary-900">Lead Management Resources</h3>
            <Link to="/resources">
              <Button variant="outline" className="flex items-center gap-2">
                View All Resources <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-2">Lead Scoring Guide</h4>
                <p className="text-gray-600 mb-4">Learn how our lead scoring system works and how to interpret scores.</p>
                <Link to="/resources/lead-scoring">
                  <Button variant="link" className="px-0">
                    Read Guide <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-2">Qualification Criteria</h4>
                <p className="text-gray-600 mb-4">Understand the criteria used to qualify leads in your pipeline.</p>
                <Link to="/resources/qualification-criteria">
                  <Button variant="link" className="px-0">
                    View Criteria <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-2">Lead Analytics</h4>
                <p className="text-gray-600 mb-4">Deep dive into your lead generation and conversion metrics.</p>
                <Link to="/resources/analytics-guide">
                  <Button variant="link" className="px-0">
                    Explore Analytics <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-8 mt-16 animate-fade-in">
          <h3 className="text-2xl font-bold text-primary-900 mb-6">Recent Leads</h3>
          <LeadsList />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
