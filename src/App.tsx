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
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import LeadScoring from "./pages/LeadScoring";
import Pipeline from "./pages/Pipeline";
import Tasks from "./pages/Tasks";
import LeadEnrichment from "./pages/LeadEnrichment";
import EngagementHistory from "./pages/EngagementHistory";
import ContentLibrary from "./pages/ContentLibrary";
import Reports from "./pages/Reports";
import TeamManagement from "./pages/TeamManagement";
import EmailTemplates from "./pages/EmailTemplates";
import Leaderboard from "./pages/Leaderboard";
import Documents from "./pages/Documents";
import Feedback from "./pages/Feedback";

const queryClient = new QueryClient();

const App = () => {
  const isAuthenticated = () => {
    return localStorage.getItem("isAuthenticated") === "true";
  };

  const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    return isAuthenticated() ? <>{children}</> : <Navigate to="/sign-in" />;
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Protected routes */}
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/products" element={<PrivateRoute><Products /></PrivateRoute>} />
            <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
            <Route path="/extension" element={<PrivateRoute><Extension /></PrivateRoute>} />
            <Route path="/lead-activity/*" element={<PrivateRoute><LeadActivity /></PrivateRoute>} />
            <Route path="/analytics" element={<PrivateRoute><Analytics /></PrivateRoute>} />
            <Route path="/resources/*" element={<PrivateRoute><Resources /></PrivateRoute>} />
            
            {/* New protected routes */}
            <Route path="/lead-scoring" element={<PrivateRoute><LeadScoring /></PrivateRoute>} />
            <Route path="/pipeline" element={<PrivateRoute><Pipeline /></PrivateRoute>} />
            <Route path="/tasks" element={<PrivateRoute><Tasks /></PrivateRoute>} />
            <Route path="/lead-enrichment" element={<PrivateRoute><LeadEnrichment /></PrivateRoute>} />
            <Route path="/engagement-history" element={<PrivateRoute><EngagementHistory /></PrivateRoute>} />
            <Route path="/content-library" element={<PrivateRoute><ContentLibrary /></PrivateRoute>} />
            <Route path="/reports" element={<PrivateRoute><Reports /></PrivateRoute>} />
            <Route path="/team-management" element={<PrivateRoute><TeamManagement /></PrivateRoute>} />
            <Route path="/email-templates" element={<PrivateRoute><EmailTemplates /></PrivateRoute>} />
            <Route path="/leaderboard" element={<PrivateRoute><Leaderboard /></PrivateRoute>} />
            <Route path="/documents" element={<PrivateRoute><Documents /></PrivateRoute>} />
            <Route path="/feedback" element={<PrivateRoute><Feedback /></PrivateRoute>} />

            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;