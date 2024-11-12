import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    quote: "LeadGenius has transformed our lead generation process. We've seen a 300% increase in qualified leads since implementing their solution."
  },
  {
    name: "Michael Chen",
    role: "Sales Manager",
    company: "GrowthWorks",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    quote: "The AI-powered insights have helped us identify and connect with our ideal customers more effectively than ever before."
  },
  {
    name: "Emily Rodriguez",
    role: "CEO",
    company: "Innovate Inc",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    quote: "LeadGenius has become an indispensable part of our sales strategy. The ROI has been phenomenal."
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-primary-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-800 font-medium">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mt-2 mb-4">
            Trusted by our private beta users
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our exclusive group of early adopters who have been helping shape LeadGenius
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-white">
              <Quote className="h-8 w-8 text-primary-800 mb-4" />
              <p className="text-gray-600 mb-6">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <img src={testimonial.image} alt={testimonial.name} />
                </Avatar>
                <div>
                  <h4 className="font-semibold text-primary-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}, {testimonial.company}
                    <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary-100 text-primary-800">
                      Beta User
                    </span>
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;