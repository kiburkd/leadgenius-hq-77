import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, TrendingUp } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import ContactInfo from "./ContactInfo";

interface LeadCardProps {
  company: string;
  industry: string;
  score: number;
  employees: string;
  growth: string;
  email?: string;
  website?: string;
  linkedin?: string;
}

const LeadCard = ({ 
  company, 
  industry, 
  score, 
  employees, 
  growth,
  email,
  website,
  linkedin 
}: LeadCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-emerald-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <>
      <Card 
        className="hover:shadow-md transition-shadow cursor-pointer" 
        onClick={() => setShowDetails(true)}
      >
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-semibold text-lg">{company}</h3>
              <p className="text-sm text-gray-500">{industry}</p>
            </div>
            <span className={`text-2xl font-bold ${getScoreColor(score)}`}>
              {score}%
            </span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Users className="h-4 w-4" />
              {employees} employees
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <TrendingUp className="h-4 w-4" />
              {growth}
            </div>
          </div>
          <ContactInfo email={email} website={website} linkedin={linkedin} />
        </CardContent>
      </Card>

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
              <Building2 className="h-6 w-6" />
              {company}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-700">Company Overview</h3>
              <p className="text-gray-600">{industry}</p>
              <div className={`text-xl font-bold ${getScoreColor(score)} mt-2`}>
                Match Score: {score}%
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-700">Company Details</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="h-4 w-4" />
                  {employees} employees
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <TrendingUp className="h-4 w-4" />
                  Growth Status: {growth}
                </div>
                <ContactInfo email={email} website={website} linkedin={linkedin} />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LeadCard;