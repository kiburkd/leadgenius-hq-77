import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Settings from "./pages/Settings";
import Extension from "./pages/Extension";
import LandingPage from "./pages/LandingPage";
import PricingPage from "./pages/PricingPage";
import LeadActivity from "./pages/LeadActivity";
import Analytics from "./pages/Analytics";
import Resources from "./pages/Resources";
import SignIn from "./pages/SignIn";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/extension" element={<Extension />} />
          <Route path="/lead-activity/*" element={<LeadActivity />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/resources/*" element={<Resources />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;