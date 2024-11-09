import { Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const DashboardHeader = () => {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-primary">ClientIQ</h1>
          <nav className="hidden md:flex items-center space-x-4">
            <Button variant="link" className="text-gray-600 hover:text-primary">Dashboard</Button>
            <Button variant="link" className="text-gray-600 hover:text-primary">Leads</Button>
            <Button variant="link" className="text-gray-600 hover:text-primary">Products</Button>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5 text-gray-600" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5 text-gray-600" />
          </Button>
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-white text-sm font-medium">JD</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;