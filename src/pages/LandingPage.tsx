import MainHeader from "@/components/shared/MainHeader";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Testimonials from "@/components/landing/Testimonials";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Target, ChartBar } from "lucide-react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <MainHeader />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-white to-accent-100/30 -z-10 animate-pulse-slow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center lg:text-left lg:flex lg:items-center lg:gap-12">
            <div className="lg:w-1/2 animate-slide-in">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-100 text-accent-600 text-sm font-medium mb-8 animate-float">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Lead Qualification
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Transform Your <br />
                <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                  Lead Generation
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Qualify and convert leads faster with AI-powered insights and automated scoring.
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

      {/* Core Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features for Lead Management
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to qualify, track, and convert your leads effectively.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all">
              <Target className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered Scoring</h3>
              <p className="text-gray-600">Automatically qualify leads based on behavior and engagement.</p>
            </div>
            <div className="p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all">
              <ChartBar className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Pipeline Management</h3>
              <p className="text-gray-600">Track and manage leads through your sales pipeline efficiently.</p>
            </div>
            <div className="p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all">
              <Sparkles className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
              <p className="text-gray-600">Get insights into your lead generation and conversion metrics.</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;