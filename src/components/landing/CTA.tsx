import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform your lead generation?
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            Join thousands of businesses using LeadGenius to find and convert their ideal customers. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary-900 hover:bg-primary-50">
              <Link to="/dashboard" className="gap-2">
                Start Free Trial <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-primary-800">
              <Link to="#features">Schedule Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;