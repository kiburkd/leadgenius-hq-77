import { BarChart2, Globe, Shield, Users, Zap, Sparkles } from "lucide-react";

const features = [
  {
    icon: <BarChart2 className="h-8 w-8 text-blue-600" />,
    title: "Advanced Analytics",
    description: "Get deep insights into your performance with our advanced AI algorithms"
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: "Global Reach",
    description: "Connect and scale your business across borders effortlessly"
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    title: "Enterprise Security",
    description: "Bank-grade security to protect your data and maintain compliance"
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "Team Collaboration",
    description: "Work together seamlessly with built-in collaboration tools"
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Lightning Fast",
    description: "Optimized performance for quick loading and real-time updates"
  },
  {
    icon: <Sparkles className="h-8 w-8 text-blue-600" />,
    title: "AI-Powered Tools",
    description: "Leverage the power of AI to automate and enhance your workflow"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-blue-600 font-semibold">FEATURES</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Everything You Need to Scale</h2>
          <p className="text-xl text-gray-600">Powerful tools to help you manage and grow your business</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-2xl border hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] hover:bg-blue-50/50 group"
            >
              <div className="mb-4 p-3 bg-blue-100/50 rounded-xl w-fit group-hover:bg-blue-100 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;