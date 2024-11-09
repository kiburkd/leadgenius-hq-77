import { BarChart2, Globe, Users, Zap } from "lucide-react";

const features = [
  {
    icon: <Globe className="h-6 w-6 text-gray-900" />,
    title: "Market Research",
    description: "Research everything that you need to know about your target market"
  },
  {
    icon: <Users className="h-6 w-6 text-gray-900" />,
    title: "User Experience",
    description: "Design and optimize the user experience for maximum engagement"
  },
  {
    icon: <Zap className="h-6 w-6 text-gray-900" />,
    title: "Digital Marketing",
    description: "Implement effective digital marketing strategies for growth"
  },
  {
    icon: <BarChart2 className="h-6 w-6 text-gray-900" />,
    title: "SEO Services",
    description: "Optimize your online presence for better search engine rankings"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Build a customer-centric<br />marketing strategy
          </h2>
          <p className="text-gray-600">
            Focus on creating meaningful connections with your target audience
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center p-3 bg-gray-50 rounded-xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;