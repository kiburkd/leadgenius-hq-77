import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in relative">
          <div className="absolute top-0 left-1/4 w-12 h-12 bg-purple-100 rounded-full blur-xl opacity-70" />
          <div className="absolute top-20 right-1/4 w-12 h-12 bg-yellow-100 rounded-full blur-xl opacity-70" />
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
            We Help With Your Company's<br />Business Growth
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get precise and accurate data you need to make better business decisions and high growth rate.
          </p>
          <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black">
            <Link to="/dashboard" className="gap-2">
              GET STARTED <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="mt-16 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Dashboard</h3>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-sm">JM</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">2034</div>
                <div className="h-2 bg-yellow-400 rounded-full w-3/4" />
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">234</div>
                <div className="h-2 bg-purple-400 rounded-full w-1/2" />
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">5420</div>
                <div className="h-2 bg-blue-400 rounded-full w-4/5" />
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">23</div>
                <div className="h-2 bg-green-400 rounded-full w-1/4" />
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="grid grid-cols-6 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-16 bg-white rounded-md" />
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