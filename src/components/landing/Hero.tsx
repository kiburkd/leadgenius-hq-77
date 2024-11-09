import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-fade-in">
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 inline-block">
            Trusted by 1000+ companies worldwide
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Turn Prospects into <br className="hidden md:block" />
            Loyal Partners
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            ClientIQ helps you identify, engage, and convert high-value leads with AI-powered insights 
            and automation that actually works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 transition-all transform hover:scale-105 shadow-lg">
              <Link to="/dashboard" className="gap-2">
                Start Free Trial <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg hover:bg-primary/5 transition-all border-2">
              <a href="#features">See How It Works</a>
            </Button>
          </div>
        </div>
        <div className="mt-16 animate-fade-in delay-200">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent z-10 h-20 bottom-0"></div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
              alt="Platform Preview"
              className="rounded-xl shadow-2xl border transform hover:scale-[1.02] transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;