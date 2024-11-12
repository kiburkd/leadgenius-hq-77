import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Users, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-white to-accent-100/30 -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-1/2 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-100 text-accent-600 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              Transform your lead generation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Generate High-Quality <br />
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                Leads That Convert
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              LeadGenius helps you identify and connect with your ideal customers using advanced AI and data analytics.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600 w-full sm:w-auto">
                <Link to="/dashboard" className="gap-2">
                  Start Free Trial <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-accent-200 text-accent-700 hover:bg-accent-50">
                <Link to="#features">See How It Works</Link>
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-lg mx-auto lg:mx-0">
              {[
                { label: "Active Users", value: "10K+", icon: Users },
                { label: "Leads Generated", value: "1M+", icon: Sparkles },
                { label: "Success Rate", value: "89%", icon: Zap },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <stat.icon className="h-6 w-6 text-accent-500 mx-auto mb-2" />
                  <div className="font-bold text-2xl text-primary-700">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
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