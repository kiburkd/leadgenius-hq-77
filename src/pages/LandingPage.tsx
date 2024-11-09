import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, BarChart2, Users, Zap, Globe, Shield, Sparkles } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 inline-block">
              Trusted by 1000+ companies worldwide
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
              Turn Prospects into <br className="hidden md:block" />
              <span className="text-blue-600">Loyal Partners</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              ClientIQ helps you identify, engage, and convert high-value leads with AI-powered insights 
              and automation that actually works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg bg-primary hover:bg-primary-700 transition-all transform hover:scale-105">
                <Link to="/dashboard" className="gap-2">
                  Start Free Trial <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg hover:bg-primary/5 transition-all">
                <a href="#features">See How It Works</a>
              </Button>
            </div>
          </div>
          <div className="mt-16 animate-fade-in delay-200">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent z-10 h-20 bottom-0"></div>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
                alt="Platform Preview"
                className="rounded-xl shadow-2xl border transform hover:scale-[1.02] transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-primary font-semibold">FEATURES</span>
            <h2 className="text-4xl font-bold text-primary mt-2 mb-4">Everything You Need to Scale</h2>
            <p className="text-xl text-gray-600">Powerful tools to help you manage and grow your business</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart2 className="h-8 w-8 text-primary" />,
                title: "AI-Powered Analytics",
                description: "Get deep insights into your leads' behavior and engagement patterns with our advanced AI algorithms"
              },
              {
                icon: <Globe className="h-8 w-8 text-primary" />,
                title: "Global Reach",
                description: "Connect with prospects worldwide and scale your business across borders effortlessly"
              },
              {
                icon: <Shield className="h-8 w-8 text-primary" />,
                title: "Enterprise Security",
                description: "Bank-grade security to protect your data and maintain compliance across all operations"
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "Smart Lead Scoring",
                description: "Automatically prioritize leads based on their likelihood to convert using ML models"
              },
              {
                icon: <Zap className="h-8 w-8 text-primary" />,
                title: "Automation Tools",
                description: "Streamline your workflow with powerful automation features that save hours daily"
              },
              {
                icon: <Sparkles className="h-8 w-8 text-primary" />,
                title: "Custom Integration",
                description: "Seamlessly integrate with your existing tools and customize workflows to your needs"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="p-6 rounded-xl border hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] hover:bg-gray-50 group"
              >
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  {feature.icon}
                </div>
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
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-primary font-semibold">PRICING</span>
            <h2 className="text-4xl font-bold text-primary mt-2 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Start free, upgrade when you're ready. No hidden fees.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "Free",
                features: ["500 leads/month", "Basic analytics", "Email support", "Core features"]
              },
              {
                name: "Pro",
                price: "$49/mo",
                features: ["Unlimited leads", "Advanced analytics", "Priority support", "API access", "Custom integrations"]
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: ["Custom solutions", "Dedicated support", "SLA guarantee", "Advanced security", "Custom training"]
              }
            ].map((plan, index) => (
              <div 
                key={index} 
                className={`bg-white p-8 rounded-xl border hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] ${
                  index === 1 ? 'border-primary shadow-lg relative' : ''
                }`}
              >
                {index === 1 && (
                  <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-4xl font-bold text-primary mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${index === 1 ? 'bg-primary hover:bg-primary-700' : ''}`}
                  variant={index === 1 ? "default" : "outline"}
                >
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
              <h4 className="text-lg font-semibold mb-4">ClientIQ</h4>
              <p className="text-primary-200">Empowering businesses worldwide</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-primary-200 hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-primary-200 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-primary-200 hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-primary-200 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-primary-200 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-primary-200 hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-primary-200 hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="text-primary-200 hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="text-primary-200 hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-700 text-center text-primary-200">
            <p>&copy; 2024 ClientIQ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;