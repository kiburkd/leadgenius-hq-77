import { 
  BarChart2, Globe, Users, Zap, Search, 
  Target, Mail, Database, Shield, ArrowUpRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Search,
    title: "Smart Lead Discovery",
    description: "Find your ideal customers using AI-powered search and filtering"
  },
  {
    icon: Target,
    title: "Precise Targeting",
    description: "Segment and target leads based on detailed criteria and behavior"
  },
  {
    icon: Mail,
    title: "Automated Outreach",
    description: "Create and manage personalized email campaigns at scale"
  },
  {
    icon: Database,
    title: "Rich Data Insights",
    description: "Access comprehensive data about your leads and their companies"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work seamlessly with your team on lead generation campaigns"
  },
  {
    icon: Shield,
    title: "Data Security",
    description: "Enterprise-grade security to protect your valuable lead data"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-primary-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary-800 font-medium">Features</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mt-2 mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive suite of tools helps you find, engage, and convert high-quality leads
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 animate-float"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center p-3 bg-primary-100 rounded-lg mb-4 animate-pulse-slow">
                <feature.icon className="h-6 w-6 text-primary-800" />
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
              <Button variant="ghost" size="sm" className="text-primary-800 hover:text-primary-900 p-0 h-auto">
                Learn more <ArrowUpRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;