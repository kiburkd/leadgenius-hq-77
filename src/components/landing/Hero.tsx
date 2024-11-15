import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-white to-accent-100/30 -z-10 animate-pulse-slow" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-1/2 animate-slide-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-100 text-accent-600 text-sm font-medium mb-8 animate-float">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Lead Generation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your <br />
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                Lead Generation
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Generate and convert high-quality leads with our AI-powered platform. Get started today and see the difference.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link to="/sign-up" className="gap-2">
                  Get Started Free <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/2 animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
              <img
                src="/dashboard-preview.png"
                alt="Dashboard Preview"
                className="rounded-xl shadow-2xl border border-gray-200"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;