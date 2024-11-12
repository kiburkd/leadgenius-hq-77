import DashboardHeader from "@/components/dashboard/DashboardHeader";
import MetricsCards from "@/components/dashboard/MetricsCards";
import LeadsList from "@/components/dashboard/LeadsList";

const Dashboard = () => {
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
        <div className="mb-8 mt-16 animate-fade-in">
          <h3 className="text-2xl font-bold text-primary-900 mb-3">Recent Leads</h3>
          <p className="text-gray-600">View and manage your latest leads.</p>
        </div>
        <LeadsList />
      </main>
    </div>
  );
};

export default Dashboard;