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
    if (score >= 80) return "text-emerald-600 bg-emerald-50";
    if (score >= 60) return "text-yellow-600 bg-yellow-50";
    return "text-red-600 bg-red-50";
  };

  return (
    <>
      <Card 
        className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer bg-white border-none shadow-md" 
        onClick={() => setShowDetails(true)}
      >
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-semibold text-lg text-primary mb-1">{company}</h3>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                {industry}
              </span>
            </div>
            <span className={`text-2xl font-bold ${getScoreColor(score)} px-4 py-2 rounded-full`}>
              {score}%
            </span>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
              <Users className="h-4 w-4 text-primary" />
              {employees} employees
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
              <TrendingUp className="h-4 w-4 text-primary" />
              {growth}
            </div>
          </div>
          <ContactInfo email={email} website={website} linkedin={linkedin} />
        </CardContent>
      </Card>

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-3 text-primary">
              <Building2 className="h-7 w-7" />
              {company}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary">
                  {industry}
                </span>
                <div className={`text-xl font-bold ${getScoreColor(score)} px-6 py-3 rounded-full`}>
                  Match Score: {score}%
                </div>
              </div>
            </div>
            
            <Separator className="my-6" />
            
            <div className="space-y-4 bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-700 mb-4">Company Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600 bg-white p-4 rounded-lg shadow-sm">
                  <Users className="h-5 w-5 text-primary" />
                  {employees} employees
                </div>
                <div className="flex items-center gap-3 text-gray-600 bg-white p-4 rounded-lg shadow-sm">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Growth Status: {growth}
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <ContactInfo email={email} website={website} linkedin={linkedin} />
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LeadCard;