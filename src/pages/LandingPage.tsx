import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, BarChart2, Users, Zap } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary">LeadGenius</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-primary">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-primary">Pricing</a>
              <Link to="/dashboard" className="text-primary hover:text-primary-700">Login</Link>
              <Button asChild>
                <Link to="/dashboard">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Turn Prospects into Partners
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            LeadGenius helps you identify, engage, and convert high-value leads with AI-powered insights and automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg">
              <Link to="/dashboard" className="gap-2">
                Start Free Trial <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg">
              <a href="#features">Learn More</a>
            </Button>
          </div>
          <div className="mt-12">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
              alt="Platform Preview"
              className="rounded-lg shadow-2xl border"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600">Everything you need to scale your lead generation</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart2 className="h-8 w-8 text-primary" />,
                title: "AI-Powered Analytics",
                description: "Get deep insights into your leads' behavior and engagement patterns"
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "Smart Lead Scoring",
                description: "Automatically prioritize leads based on their likelihood to convert"
              },
              {
                icon: <Zap className="h-8 w-8 text-primary" />,
                title: "Automation Tools",
                description: "Streamline your workflow with powerful automation features"
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Simple Pricing</h2>
            <p className="text-xl text-gray-600">Start free, upgrade when you're ready</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "Free",
                features: ["500 leads/month", "Basic analytics", "Email support"]
              },
              {
                name: "Pro",
                price: "$49/mo",
                features: ["Unlimited leads", "Advanced analytics", "Priority support", "API access"]
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: ["Custom solutions", "Dedicated support", "SLA", "Advanced security"]
              }
            ].map((plan, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold text-primary mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">LeadGenius</h4>
              <p className="text-primary-200">Making lead generation smarter</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-primary-200 hover:text-white">Features</a></li>
                <li><a href="#pricing" className="text-primary-200 hover:text-white">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-primary-200 hover:text-white">About</a></li>
                <li><a href="#" className="text-primary-200 hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-primary-200 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-primary-200 hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-700 text-center text-primary-200">
            <p>&copy; 2024 LeadGenius. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;