import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-fade-in">
          <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6 inline-block">
            Trusted by 1000+ companies worldwide
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Empower your digital <br className="hidden md:block" />
            life with ClientIQ
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Build powerful websites and applications with our intuitive platform. 
            Save time and boost productivity with AI-powered tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg bg-blue-600 hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg group">
              <Link to="/dashboard" className="gap-2">
                Start Free Trial <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg hover:bg-blue-50 transition-all border-2">
              <a href="#features">See How It Works</a>
            </Button>
          </div>
        </div>
        <div className="mt-16 animate-fade-in delay-200">
          <div className="relative rounded-2xl overflow-hidden border bg-white p-4">
            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-10 h-20 bottom-0"></div>
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