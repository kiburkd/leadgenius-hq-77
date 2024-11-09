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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {metrics.map((metric) => (
        <Card key={metric.title} className="animate-fade-in">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="bg-primary/10 p-2 rounded-lg">
                <metric.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="flex items-center text-emerald-600 text-sm font-medium">
                {metric.change}
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-500">{metric.title}</h3>
              <p className="text-2xl font-bold text-primary mt-1">{metric.value}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MetricsCards;