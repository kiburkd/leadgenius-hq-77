import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, TrendingUp } from "lucide-react";

const LeadMetrics = () => {
  const metrics = [
    {
      title: "Total Leads",
      value: "1,234",
      change: "+12.3%",
      icon: Users,
    },
    {
      title: "Qualified Leads",
      value: "456",
      change: "+8.7%",
      icon: Target,
    },
    {
      title: "Conversion Rate",
      value: "23.4%",
      change: "+5.2%",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {metric.title}
            </CardTitle>
            <metric.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className="text-xs text-muted-foreground">
              {metric.change} from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default LeadMetrics;