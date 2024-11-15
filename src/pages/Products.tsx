import { useState } from "react";
import MainHeader from "@/components/shared/MainHeader";
import { Button } from "@/components/ui/button";
import { Plus, Search, Filter } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import AddProductDialog from "@/components/products/AddProductDialog";
import ProductDetailsDialog from "@/components/products/ProductDetailsDialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const Products = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const products = [
    {
      id: 1,
      name: "Sales CRM Pro",
      industry: "Technology",
      idealCustomer: "Mid-size businesses",
      features: ["Lead tracking", "Analytics", "Integration"],
      category: "software",
      priceRange: "enterprise",
    },
    {
      id: 2,
      name: "Marketing Suite",
      industry: "Marketing",
      idealCustomer: "Enterprise companies",
      features: ["Campaign management", "ROI tracking", "Automation"],
      category: "services",
      priceRange: "professional",
    },
  ];

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setIsDetailsDialogOpen(true);
  };

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
    if (filter === selectedCategory) setSelectedCategory("all");
    if (filter === selectedPriceRange) setSelectedPriceRange("all");
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.industry.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesPriceRange = selectedPriceRange === "all" || product.priceRange === selectedPriceRange;
    
    return matchesSearch && matchesCategory && matchesPriceRange;
  });

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

          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search products..." 
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select 
              value={selectedCategory}
              onValueChange={(value) => {
                setSelectedCategory(value);
                if (value !== "all" && !activeFilters.includes(value)) {
                  setActiveFilters([...activeFilters, value]);
                }
              }}
            >
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
            <Select 
              value={selectedPriceRange}
              onValueChange={(value) => {
                setSelectedPriceRange(value);
                if (value !== "all" && !activeFilters.includes(value)) {
                  setActiveFilters([...activeFilters, value]);
                }
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="starter">Starter</SelectItem>
                <SelectItem value="professional">Professional</SelectItem>
                <SelectItem value="enterprise">Enterprise</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={() => setIsAddDialogOpen(true)} className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add Product
            </Button>
          </div>

          {activeFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {activeFilters.map((filter) => (
                <Badge 
                  key={filter}
                  variant="secondary"
                  className="px-3 py-1 cursor-pointer"
                  onClick={() => removeFilter(filter)}
                >
                  {filter}
                  <span className="ml-2">×</span>
                </Badge>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
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