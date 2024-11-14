import { Bell, Settings, Menu, Sparkles, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MainHeader = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path ? "text-accent-500" : "text-gray-600";
  };

  const isLoggedIn = !["/", "/pricing", "/sign-in", "/sign-up", "/forgot-password"].includes(location.pathname);

  const salesTools = [
    { path: "/lead-scoring", label: "Lead Scoring" },
    { path: "/pipeline", label: "Pipeline" },
    { path: "/tasks", label: "Tasks" },
    { path: "/lead-enrichment", label: "Lead Enrichment" },
  ];

  const insights = [
    { path: "/engagement-history", label: "Engagement History" },
    { path: "/analytics", label: "Analytics" },
    { path: "/reports", label: "Reports" },
    { path: "/leaderboard", label: "Leaderboard" },
  ];

  const resources = [
    { path: "/content-library", label: "Content Library" },
    { path: "/email-templates", label: "Email Templates" },
    { path: "/documents", label: "Documents" },
    { path: "/resources", label: "Resources" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-accent-500" />
            LeadGenius
          </Link>

          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex items-center space-x-6">
              {!isLoggedIn ? (
                <>
                  <a href="#features" className="text-gray-600 hover:text-accent-500 transition-colors text-sm font-medium">
                    Features
                  </a>
                  <Link to="/pricing" className={`${isActive("/pricing")} hover:text-accent-500 transition-colors text-sm font-medium`}>
                    Pricing
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/dashboard" className={`${isActive("/dashboard")} hover:text-accent-500 transition-colors font-medium`}>
                    Dashboard
                  </Link>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger className="hover:text-accent-500 transition-colors font-medium">
                      Sales Tools
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {salesTools.map((tool) => (
                        <DropdownMenuItem key={tool.path}>
                          <Link to={tool.path} className="w-full">
                            {tool.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DropdownMenu>
                    <DropdownMenuTrigger className="hover:text-accent-500 transition-colors font-medium">
                      Insights
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {insights.map((insight) => (
                        <DropdownMenuItem key={insight.path}>
                          <Link to={insight.path} className="w-full">
                            {insight.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DropdownMenu>
                    <DropdownMenuTrigger className="hover:text-accent-500 transition-colors font-medium">
                      Resources
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {resources.map((resource) => (
                        <DropdownMenuItem key={resource.path}>
                          <Link to={resource.path} className="w-full">
                            {resource.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              )}
            </nav>
            
            {!isLoggedIn ? (
              <div className="hidden md:flex items-center space-x-4">
                <Button asChild variant="outline" className="border-accent-200 text-accent-700 hover:bg-accent-50">
                  <Link to="/sign-in">Sign In</Link>
                </Button>
                <Button asChild className="bg-accent-500 hover:bg-accent-600">
                  <Link to="/sign-up">Get Started</Link>
                </Button>
              </div>
            ) : (
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
              </div>
            )}
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
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 mt-4 space-y-4">
            {!isLoggedIn ? (
              <>
                <a href="#features" className="block text-gray-600 hover:text-accent-500 transition-colors text-sm font-medium">
                  Features
                </a>
                <Link to="/pricing" className="block text-gray-600 hover:text-accent-500 transition-colors text-sm font-medium">
                  Pricing
                </Link>
                <Button asChild variant="outline" className="w-full border-accent-200 text-accent-700 hover:bg-accent-50">
                  <Link to="/sign-in">Sign In</Link>
                </Button>
                <Button asChild className="w-full bg-accent-500 hover:bg-accent-600">
                  <Link to="/sign-up">Get Started</Link>
                </Button>
              </>
            ) : (
              <>
                <Link to="/dashboard" className={`block ${isActive("/dashboard")} hover:text-accent-500 transition-colors font-medium`}>
                  Dashboard
                </Link>
                {[...salesTools, ...insights, ...resources].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block ${isActive(item.path)} hover:text-accent-500 transition-colors font-medium`}
                  >
                    {item.label}
                  </Link>
                ))}
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default MainHeader;