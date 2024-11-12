import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import LeadCard from "./LeadCard";

const LeadsList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const leads = [
    {
      company: "TechCorp Solutions",
      industry: "Software",
      score: 85,
      employees: "1000-5000",
      growth: "High Growth",
      email: "contact@techcorp.com",
      website: "https://techcorp.com",
      linkedin: "https://linkedin.com/company/techcorp",
    },
    {
      company: "Global Industries",
      industry: "Manufacturing",
      score: 72,
      employees: "5000+",
      growth: "Stable",
      email: "info@globalind.com",
      website: "https://globalindustries.com",
      linkedin: "https://linkedin.com/company/globalind",
    },
    {
      company: "Future Finance",
      industry: "FinTech",
      score: 91,
      employees: "500-1000",
      growth: "Very High Growth",
      email: "hello@futurefinance.com",
      website: "https://futurefinance.com",
      linkedin: "https://linkedin.com/company/futurefinance",
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search leads..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 bg-white border-gray-200"
          />
        </div>
        <Button variant="outline" className="flex items-center gap-2 border-gray-200">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {leads.map((lead, index) => (
          <div
            key={lead.company}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <LeadCard {...lead} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadsList;