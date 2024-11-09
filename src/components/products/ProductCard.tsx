import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Settings2, Users, Target } from "lucide-react";

interface ProductCardProps {
  name: string;
  industry: string;
  idealCustomer: string;
  features: string[];
  onClick: () => void;
}

const ProductCard = ({ name, industry, idealCustomer, features, onClick }: ProductCardProps) => {
  return (
    <Card 
      className="hover:shadow-md transition-shadow animate-fade-in cursor-pointer"
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-semibold text-lg text-primary">{name}</h3>
            <p className="text-sm text-gray-500 mt-1">{industry}</p>
          </div>
          <Settings2 className="h-5 w-5 text-gray-400 hover:text-primary" />
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center text-sm text-gray-600">
            <Target className="h-4 w-4 mr-2" />
            {idealCustomer}
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Users className="h-4 w-4 mr-2" />
            Target Industry: {industry}
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {features.map((feature) => (
              <Badge key={feature} variant="secondary">
                {feature}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;