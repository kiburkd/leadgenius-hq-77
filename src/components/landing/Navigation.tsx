import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, Sparkles } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-accent-500" />
              LeadGenius
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-accent-500 transition-colors text-sm font-medium">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-accent-500 transition-colors text-sm font-medium">
              Pricing
            </a>
            <Link to="/dashboard" className="text-gray-600 hover:text-accent-500 transition-colors text-sm font-medium">
              Dashboard
            </Link>
            <Button asChild variant="outline" className="mr-2 border-accent-200 text-accent-700 hover:bg-accent-50">
              <Link to="/dashboard">Sign In</Link>
            </Button>
            <Button asChild className="bg-accent-500 hover:bg-accent-600">
              <Link to="/dashboard">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-accent-500 transition-colors text-sm font-medium">
                Features
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-accent-500 transition-colors text-sm font-medium">
                Pricing
              </a>
              <Link to="/dashboard" className="text-gray-600 hover:text-accent-500 transition-colors text-sm font-medium">
                Dashboard
              </Link>
              <Button asChild variant="outline" className="w-full border-accent-200 text-accent-700 hover:bg-accent-50">
                <Link to="/dashboard">Sign In</Link>
              </Button>
              <Button asChild className="w-full bg-accent-500 hover:bg-accent-600">
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