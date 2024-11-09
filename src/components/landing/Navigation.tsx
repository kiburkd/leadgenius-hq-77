import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-primary-900">
              Maroex
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-primary-600 hover:text-primary-900 transition-colors text-sm">
              Features
            </a>
            <a href="#pricing" className="text-primary-600 hover:text-primary-900 transition-colors text-sm">
              Pricing
            </a>
            <Link to="/dashboard" className="text-primary-600 hover:text-primary-900 transition-colors text-sm">
              Dashboard
            </Link>
            <Button asChild variant="outline" className="mr-2">
              <Link to="/dashboard">Sign In</Link>
            </Button>
            <Button asChild className="bg-primary-800 hover:bg-primary-900">
              <Link to="/dashboard">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary-900"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-100">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-primary-600 hover:text-primary-900 transition-colors text-sm">
                Features
              </a>
              <a href="#pricing" className="text-primary-600 hover:text-primary-900 transition-colors text-sm">
                Pricing
              </a>
              <Link to="/dashboard" className="text-primary-600 hover:text-primary-900 transition-colors text-sm">
                Dashboard
              </Link>
              <Button asChild variant="outline" className="w-full">
                <Link to="/dashboard">Sign In</Link>
              </Button>
              <Button asChild className="w-full bg-primary-800 hover:bg-primary-900">
                <Link to="/dashboard">Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;