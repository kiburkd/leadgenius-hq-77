import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { Sparkles, Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const SignUp = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Account created!",
      description: "Welcome to LeadGenius. Let's get started!",
    });
    window.location.href = "/dashboard";
  };

  const features = [
    "AI-powered lead scoring",
    "Advanced analytics dashboard",
    "Email campaign automation",
    "CRM integration",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8 items-center">
        <div className="hidden md:block space-y-6">
          <h2 className="text-2xl font-bold">Transform your lead generation with AI</h2>
          <div className="space-y-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-primary-100 flex items-center justify-center">
                  <Check className="h-3 w-3 text-primary-600" />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <Card>
          <CardHeader className="space-y-2 text-center">
            <div className="flex justify-center mb-4">
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-accent-500" />
                LeadGenius
              </Link>
            </div>
            <CardTitle className="text-2xl font-bold">Create your account</CardTitle>
            <CardDescription>
              Get started with your free trial, no credit card required
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Work email</Label>
                <Input id="email" type="email" placeholder="name@company.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" required />
                <label htmlFor="terms" className="text-sm text-gray-500">
                  I agree to the{" "}
                  <Link to="/terms" className="text-primary-600 hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-primary-600 hover:underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" className="w-full">Create Account</Button>
              <div className="text-sm text-center">
                Already have an account?{" "}
                <Link to="/sign-in" className="text-primary-600 hover:underline">
                  Sign in
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;