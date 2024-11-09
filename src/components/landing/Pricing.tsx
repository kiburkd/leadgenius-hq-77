import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for trying out LeadGenius",
    features: [
      "Up to 100 leads/month",
      "Basic lead search",
      "Email support",
      "Core features"
    ]
  },
  {
    name: "Professional",
    price: "$49",
    period: "/month",
    description: "Everything you need to grow",
    features: [
      "Unlimited leads",
      "Advanced search & filtering",
      "Priority support",
      "API access",
      "Team collaboration",
      "Custom integrations"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Custom solutions",
      "Dedicated support",
      "SLA guarantee",
      "Advanced security",
      "Custom training",
      "Premium features"
    ]
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-800 font-medium">Pricing</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mt-2 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Start with our free plan and upgrade as you grow. No hidden fees.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded-2xl transition-all duration-300 ${
                index === 1 
                  ? 'border-2 border-primary-800 shadow-xl relative' 
                  : 'border border-gray-100 hover:shadow-lg'
              }`}
            >
              {index === 1 && (
                <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-800 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-primary-900 mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold text-primary-900">{plan.price}</span>
                {plan.period && <span className="text-gray-600 ml-1">{plan.period}</span>}
              </div>
              <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
              <Button 
                className={`w-full mb-8 ${
                  index === 1 
                    ? 'bg-primary-800 hover:bg-primary-900' 
                    : 'bg-primary-100 hover:bg-primary-200 text-primary-900'
                }`}
              >
                Get Started
              </Button>
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-primary-800 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;