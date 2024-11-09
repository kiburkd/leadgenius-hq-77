import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, TrendingUp, Users } from "lucide-react";

interface LeadCardProps {
  company: string;
  industry: string;
  score: number;
  employees: string;
  growth: string;
}

const LeadCard = ({ company, industry, score, employees, growth }: LeadCardProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "bg-emerald-100 text-emerald-800";
    if (score >= 60) return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  return (
    <Card className="hover:shadow-md transition-shadow animate-fade-in">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-lg text-primary">{company}</h3>
            <p className="text-sm text-gray-500 mt-1">{industry}</p>
          </div>
          <Badge className={`${getScoreColor(score)} font-medium`}>
            {score}% Match
          </Badge>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="flex items-center text-sm text-gray-600">
            <Building2 className="h-4 w-4 mr-2" />
            {employees}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Users className="h-4 w-4 mr-2" />
            {industry}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <TrendingUp className="h-4 w-4 mr-2" />
            {growth}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadCard;