import DashboardHeader from "@/components/dashboard/DashboardHeader";
import MetricsCards from "@/components/dashboard/MetricsCards";
import LeadsList from "@/components/dashboard/LeadsList";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-primary mb-2">Welcome back!</h2>
          <p className="text-gray-600">Here's what's happening with your leads today.</p>
        </div>
        <MetricsCards />
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-primary mb-2">Recent Leads</h3>
          <p className="text-gray-600">View and manage your latest leads.</p>
        </div>
        <LeadsList />
      </main>
    </div>
  );
};

export default Index;