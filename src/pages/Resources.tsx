import PageHeader from "@/components/shared/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Target, ChartBar } from "lucide-react";
import { Link } from "react-router-dom";

const Resources = () => {
  const resources = [
    {
      title: "Lead Scoring Guide",
      icon: Target,
      description: "Learn how our lead scoring system works and how to interpret scores",
      link: "/resources/lead-scoring"
    },
    {
      title: "Best Practices",
      icon: BookOpen,
      description: "Discover the best practices for lead management and conversion",
      link: "/resources/best-practices"
    },
    {
      title: "Analytics Guide",
      icon: ChartBar,
      description: "Understanding your analytics and making data-driven decisions",
      link: "/resources/analytics-guide"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <PageHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent mb-3">
            Resources
          </h2>
          <p className="text-gray-600 text-lg">
            Helpful resources and guides for lead management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <Card key={resource.title} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-6">
                  <resource.icon className="h-12 w-12 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-6">{resource.description}</p>
                <Link to={resource.link}>
                  <Button variant="outline" className="w-full">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Resources;