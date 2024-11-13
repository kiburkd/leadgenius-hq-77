import PageHeader from "@/components/shared/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Analytics = () => {
  const leadTrendsData = [
    { name: 'Jan', leads: 400, qualified: 300 },
    { name: 'Feb', leads: 300, qualified: 250 },
    { name: 'Mar', leads: 600, qualified: 450 },
    { name: 'Apr', leads: 800, qualified: 600 },
    { name: 'May', leads: 700, qualified: 550 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <PageHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent mb-3">
            Analytics Dashboard
          </h2>
          <p className="text-gray-600 text-lg">
            Comprehensive analytics and insights about your leads and conversions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Lead Conversion Rate</h3>
              <div className="text-4xl font-bold text-primary-600 mb-2">68%</div>
              <Link to="/analytics/conversion">
                <Button variant="outline" className="w-full mt-4">
                  View Conversion Details <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Average Lead Quality</h3>
              <div className="text-4xl font-bold text-primary-600 mb-2">8.4/10</div>
              <Link to="/analytics/quality">
                <Button variant="outline" className="w-full mt-4">
                  View Quality Metrics <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-6">Lead Generation Trends</h3>
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
            <Link to="/analytics/trends">
              <Button variant="outline" className="w-full mt-6">
                View Detailed Trends <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Analytics;