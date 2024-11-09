import { BarChart2, Globe, Shield, Users, Zap, Sparkles } from "lucide-react";

const features = [
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
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold">FEATURES</span>
          <h2 className="text-4xl font-bold text-primary mt-2 mb-4">Everything You Need to Scale</h2>
          <p className="text-xl text-gray-600">Powerful tools to help you manage and grow your business</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
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
  );
};

export default Features;