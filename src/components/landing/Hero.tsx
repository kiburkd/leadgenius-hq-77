import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white -z-10" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-8">
            Welcome to Maroex
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary-900 to-primary-700 bg-clip-text text-transparent">
            Transform Your Business<br />With Smart Analytics
          </h1>
          <p className="text-lg text-primary-600 mb-8 max-w-2xl mx-auto">
            Get precise and accurate data you need to make better business decisions and achieve unprecedented growth.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary-800 hover:bg-primary-900">
              <Link to="/dashboard" className="gap-2">
                Get Started <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="#features">Learn More</Link>
            </Button>
          </div>
        </div>

        <div className="relative mt-20 animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
          <div className="bg-white rounded-2xl shadow-2xl p-6 border border-primary-100">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary-100 flex items-center justify-center">
                  <span className="text-primary-800 font-semibold">M</span>
                </div>
                <h3 className="text-lg font-semibold text-primary-900">Dashboard Overview</h3>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-sm text-primary-800 font-medium">JD</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-8">
              {[
                { value: "2,034", label: "Total Leads", color: "bg-blue-500" },
                { value: "234", label: "New Today", color: "bg-green-500" },
                { value: "5,420", label: "Conversions", color: "bg-yellow-500" },
                { value: "23%", label: "Growth Rate", color: "bg-purple-500" }
              ].map((stat, i) => (
                <div key={i} className="bg-primary-50/50 p-4 rounded-lg">
                  <div className="text-lg font-semibold text-primary-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-primary-600 mb-2">{stat.label}</div>
                  <div className={`h-2 ${stat.color} rounded-full w-${Math.floor(Math.random() * 4 + 6)}/12`} />
                </div>
              ))}
            </div>
            <div className="bg-primary-50/50 rounded-lg p-6">
              <div className="grid grid-cols-7 gap-2 h-32">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div key={i} className="relative">
                    <div 
                      className="absolute bottom-0 w-full bg-primary-200 rounded-t-lg"
                      style={{ height: `${Math.floor(Math.random() * 60 + 40)}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;