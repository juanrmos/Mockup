import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import Certificates from "./pages/Certificates";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OrganizerDashboard from "./pages/OrganizerDashboard";
import DashboardActivities from "./pages/DashboardActivities";
import DashboardParticipants from "./pages/DashboardParticipants";
import DashboardCertificates from "./pages/DashboardCertificates";
import PagePlaceholder from "./pages/PagePlaceholder";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<OrganizerDashboard />} />
          <Route path="/dashboard/activities" element={<DashboardActivities />} />
          <Route path="/dashboard/participants" element={<DashboardParticipants />} />
          <Route path="/dashboard/certificates" element={<DashboardCertificates />} />
          <Route
            path="/programs"
            element={
              <PagePlaceholder
                title="Programas Académicos"
                description="Descubre nuestros programas académicos. Esta sección está en desarrollo."
              />
            }
          />
          <Route
            path="/about"
            element={
              <PagePlaceholder
                title="Sobre Nosotros"
                description="Conoce más sobre SIGEA y la UNAS. Esta sección está en desarrollo."
              />
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
