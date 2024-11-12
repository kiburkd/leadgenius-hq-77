import { ArrowUpRight, Users, Target, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const MetricsCards = () => {
  const metrics = [
    {
      title: "Total Leads",
      value: "1,234",
      change: "+12.3%",
      icon: Users,
    },
    {
      title: "Qualified Leads",
      value: "856",
      change: "+8.1%",
      icon: Target,
    },
    {
      title: "Average Score",
      value: "76%",
      change: "+5.4%",
      icon: Zap,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {metrics.map((metric, index) => (
        <Card 
          key={metric.title} 
          className="animate-fade-in hover:shadow-lg transition-all duration-300"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="bg-gradient-to-br from-primary-100 to-accent-100 p-3 rounded-lg">
                <metric.icon className="h-6 w-6 text-primary-600" />
              </div>
              <div className="flex items-center text-emerald-600 text-sm font-medium">
                {metric.change}
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-500">{metric.title}</h3>
              <p className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent mt-1">
                {metric.value}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MetricsCards;