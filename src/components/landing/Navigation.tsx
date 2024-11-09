import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed w-full bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900">
              Maroex
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Features</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Pages</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Shop</a>
            <Link to="/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Sign In</Link>
            <Button asChild className="bg-black text-white hover:bg-gray-800">
              <Link to="/dashboard">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;