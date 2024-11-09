import { useState } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import AddProductDialog from "@/components/products/AddProductDialog";

const Products = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Sales CRM Pro",
      industry: "Technology",
      idealCustomer: "Mid-size businesses",
      features: ["Lead tracking", "Analytics", "Integration"],
    },
    {
      id: 2,
      name: "Marketing Suite",
      industry: "Marketing",
      idealCustomer: "Enterprise companies",
      features: ["Campaign management", "ROI tracking", "Automation"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-2">Products</h2>
            <p className="text-gray-600">Manage your products and services</p>
          </div>
          <Button onClick={() => setIsDialogOpen(true)} className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Product
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <AddProductDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      </main>
    </div>
  );
};

export default Products;