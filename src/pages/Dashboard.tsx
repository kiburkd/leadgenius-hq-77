import MainHeader from "@/components/shared/MainHeader";
import MetricsCards from "@/components/dashboard/MetricsCards";
import LeadsList from "@/components/dashboard/LeadsList";
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Button } from "@/components/ui/button";
import { ArrowRight, Plus, Bell, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const leadTrendsData = [
    { name: 'Jan', leads: 400, qualified: 300 },
    { name: 'Feb', leads: 300, qualified: 250 },
    { name: 'Mar', leads: 600, qualified: 450 },
    { name: 'Apr', leads: 800, qualified: 600 },
    { name: 'May', leads: 700, qualified: 550 },
  ];

  const upcomingTasks = [
    { title: "Follow up with TechCorp", due: "Today, 2:00 PM" },
    { title: "Review lead scoring model", due: "Tomorrow, 10:00 AM" },
    { title: "Prepare weekly report", due: "Friday, 4:00 PM" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <MainHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome back!</h1>
            <p className="text-gray-600 mt-1">Here's what's happening with your leads today.</p>
          </div>
          <div className="flex gap-3">
            <Button asChild>
              <Link to="/lead-activity/new" className="gap-2">
                <Plus className="h-4 w-4" /> Add New Lead
              </Link>
            </Button>
            <Button variant="outline">
              <Bell className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <MetricsCards />

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="md:col-span-2">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Lead Generation Trends</h2>
                  <Link to="/analytics">
                    <Button variant="ghost" size="sm" className="gap-2">
                      View Analytics <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
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

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Upcoming Tasks</h2>
                <Calendar className="h-5 w-5 text-gray-400" />
              </div>
              <div className="space-y-4">
                {upcomingTasks.map((task) => (
                  <div key={task.title} className="p-3 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900">{task.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{task.due}</p>
                  </div>
                ))}
                <Link to="/tasks">
                  <Button variant="outline" className="w-full mt-2">
                    View All Tasks <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Recent Leads</h2>
            <Link to="/lead-activity">
              <Button variant="outline" className="gap-2">
                View All <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <LeadsList />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;