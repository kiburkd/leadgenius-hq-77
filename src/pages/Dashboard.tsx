import DashboardHeader from "@/components/dashboard/DashboardHeader";
import MetricsCards from "@/components/dashboard/MetricsCards";
import LeadsList from "@/components/dashboard/LeadsList";
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Dashboard = () => {
  const chartData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 700 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <DashboardHeader />
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

        {/* Growth Trends Section */}
        <div className="mt-16 mb-12 animate-fade-in">
          <h3 className="text-2xl font-bold text-primary-900 mb-6">Growth Trends</h3>
          <Card>
            <CardContent className="p-6">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="mb-12 animate-fade-in">
          <h3 className="text-2xl font-bold text-primary-900 mb-6">Recent Activity</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Analytics Dashboard" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-lg font-semibold mb-2">Enhanced Analytics</h4>
                <p className="text-gray-600 mb-4">
                  Track your lead generation performance with our new analytics dashboard.
                </p>
                <Button variant="outline" className="w-full">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                  alt="Integration Features" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-lg font-semibold mb-2">New Integrations</h4>
                <p className="text-gray-600 mb-4">
                  Connect with your favorite tools and streamline your workflow.
                </p>
                <Button variant="outline" className="w-full">
                  Explore Integrations <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-8 mt-16 animate-fade-in">
          <h3 className="text-2xl font-bold text-primary-900 mb-3">Recent Leads</h3>
          <p className="text-gray-600">View and manage your latest leads.</p>
        </div>
        <LeadsList />

        {/* Resources Section */}
        <div className="mt-16 mb-12 animate-fade-in">
          <h3 className="text-2xl font-bold text-primary-900 mb-6">Resources & Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-2">Lead Generation Guide</h4>
                <p className="text-gray-600 mb-4">Learn the best practices for generating high-quality leads.</p>
                <Button variant="link" className="px-0">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-2">Webinar Recordings</h4>
                <p className="text-gray-600 mb-4">Watch our latest webinars on lead qualification strategies.</p>
                <Button variant="link" className="px-0">
                  Watch Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-2">Case Studies</h4>
                <p className="text-gray-600 mb-4">Discover how other companies achieved success with our platform.</p>
                <Button variant="link" className="px-0">
                  View Cases <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;