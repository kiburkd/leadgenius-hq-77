import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">ClientIQ</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">Pricing</a>
            <Link to="/dashboard" className="text-primary hover:text-primary-700 transition-colors">Login</Link>
            <Button asChild className="bg-primary hover:bg-primary-700 transition-colors">
              <Link to="/dashboard">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;