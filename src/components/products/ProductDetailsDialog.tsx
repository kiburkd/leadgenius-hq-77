import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Target, Users, Settings2 } from "lucide-react";

interface ProductDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: {
    name: string;
    industry: string;
    idealCustomer: string;
    features: string[];
  };
}

const ProductDetailsDialog = ({ open, onOpenChange, product }: ProductDetailsDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary flex items-center gap-2">
            <Settings2 className="h-6 w-6" />
            {product.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-700">Industry Focus</h3>
            <p className="text-gray-600">{product.industry}</p>
          </div>
          
          <Separator />
          
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-700 flex items-center gap-2">
              <Target className="h-4 w-4" />
              Ideal Customer Profile
            </h3>
            <p className="text-gray-600">{product.idealCustomer}</p>
          </div>
          
          <Separator />
          
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-700 flex items-center gap-2">
              <Users className="h-4 w-4" />
              Target Market
            </h3>
            <p className="text-gray-600">{product.industry}</p>
          </div>
          
          <Separator />
          
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-700">Key Features</h3>
            <div className="flex flex-wrap gap-2">
              {product.features.map((feature) => (
                <Badge key={feature} variant="secondary" className="text-sm">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailsDialog;