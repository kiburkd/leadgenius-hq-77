import { BarChart2, Globe, Users, Zap, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <Globe className="h-6 w-6 text-primary-800" />,
    title: "Global Reach",
    description: "Connect with potential customers worldwide through our advanced platform"
  },
  {
    icon: <Users className="h-6 w-6 text-primary-800" />,
    title: "Team Collaboration",
    description: "Work seamlessly with your team to achieve better results faster"
  },
  {
    icon: <Zap className="h-6 w-6 text-primary-800" />,
    title: "Instant Insights",
    description: "Get real-time analytics and actionable insights for your business"
  },
  {
    icon: <BarChart2 className="h-6 w-6 text-primary-800" />,
    title: "Performance Tracking",
    description: "Monitor and optimize your business performance with detailed metrics"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-primary-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-800 font-medium">Features</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mt-2 mb-4">
            Everything you need to grow
          </h2>
          <p className="text-primary-600 max-w-2xl mx-auto">
            Our comprehensive suite of tools and features helps you make data-driven decisions
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-primary-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center p-3 bg-primary-100 rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">{feature.title}</h3>
              <p className="text-primary-600 text-sm mb-4">{feature.description}</p>
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