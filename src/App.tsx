import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";

import Index from "./pages/Index";
import Services from "./pages/Services";
import MontazhKrovli from "./pages/MontazhKrovli";
import DemontazhKrovli from "./pages/DemontazhKrovli";
import RemontKrovli from "./pages/RemontKrovli";
import Contacts from "./pages/Contacts";
import Graphics3D from "./pages/Graphics3D";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/uslugi" element={<Services />} />
            <Route path="/uslugi/montazh" element={<MontazhKrovli />} />
            <Route path="/uslugi/demontazh" element={<DemontazhKrovli />} />
            <Route path="/uslugi/remont" element={<RemontKrovli />} />
            <Route path="/kontakty" element={<Contacts />} />
            <Route path="/3d-grafika" element={<Graphics3D />} />

            {/* Юридические страницы */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;