import { useState } from "react";
import MainHeader from "@/components/shared/MainHeader";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import AddProductDialog from "@/components/products/AddProductDialog";
import ProductDetailsDialog from "@/components/products/ProductDetailsDialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Products = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

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

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setIsDetailsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <MainHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent mb-3">
            Products & Services
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Manage your product catalog and track performance metrics for each offering.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input placeholder="Search products..." className="pl-9" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="software">Software</SelectItem>
                <SelectItem value="services">Services</SelectItem>
                <SelectItem value="hardware">Hardware</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={() => setIsAddDialogOpen(true)} className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add Product
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              {...product} 
              onClick={() => handleProductClick(product)}
            />
          ))}
        </div>
        <AddProductDialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen} />
        {selectedProduct && (
          <ProductDetailsDialog
            open={isDetailsDialogOpen}
            onOpenChange={setIsDetailsDialogOpen}
            product={selectedProduct}
          />
        )}
      </main>
    </div>
  );
};

export default Products;
