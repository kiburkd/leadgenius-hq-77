import { Bell, MessageSquare, Settings, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = {
    "Sales Tools": [
      { label: "Lead Scoring", path: "/lead-scoring" },
      { label: "Pipeline", path: "/pipeline" },
      { label: "Tasks", path: "/tasks" },
      { label: "Lead Enrichment", path: "/lead-enrichment" },
    ],
    "Insights": [
      { label: "Engagement History", path: "/engagement-history" },
      { label: "Analytics", path: "/analytics" },
      { label: "Reports", path: "/reports" },
      { label: "Leaderboard", path: "/leaderboard" },
    ],
    "Resources": [
      { label: "Content Library", path: "/content-library" },
      { label: "Email Templates", path: "/email-templates" },
      { label: "Documents", path: "/documents" },
      { label: "Resources", path: "/resources" },
    ],
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link to="/dashboard" className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              LeadGenius
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              {Object.entries(navigationItems).map(([category, items]) => (
                <DropdownMenu key={category}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-gray-600 hover:text-accent-500 transition-colors">
                    {category} <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {items.map((item) => (
                      <DropdownMenuItem key={item.path}>
                        <Link to={item.path} className="w-full">
                          {item.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5 text-gray-600" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-accent-500 rounded-full" />
            </Button>
            <Button variant="ghost" size="icon">
              <MessageSquare className="h-5 w-5 text-gray-600" />
            </Button>
            <Link to="/settings">
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5 text-gray-600" />
              </Button>
            </Link>
            <div className="h-9 w-9 rounded-full bg-gradient-to-r from-primary-600 to-accent-500 flex items-center justify-center">
              <span className="text-white text-sm font-medium">JD</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 mt-4 space-y-4">
            {Object.entries(navigationItems).map(([category, items]) => (
              <div key={category} className="space-y-2">
                <h3 className="font-medium text-gray-900">{category}</h3>
                {items.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block pl-4 text-gray-600 hover:text-accent-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;