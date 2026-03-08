import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import IndexCinematic from "./pages/IndexCinematic";
import PracticeAreaPage from "./pages/PracticeAreaPage";
import BlogArticlePage from "./pages/BlogArticlePage";
import LegalPage from "./pages/LegalPage";
import NotFound from "./pages/NotFound";
import FloatingWhatsApp from "./components/cinematic/FloatingWhatsApp";
import { useEffect } from "react";

import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";

const queryClient = new QueryClient();

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen">
      {children}
    </div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={<PageTransition><IndexCinematic /></PageTransition>}
        />
        <Route
          path="/atuacao/:slug"
          element={<PageTransition><PracticeAreaPage /></PageTransition>}
        />
        <Route
          path="/blog/:slug"
          element={<PageTransition><BlogArticlePage /></PageTransition>}
        />
        <Route
          path="/privacidade"
          element={<PageTransition><LegalPage /></PageTransition>}
        />
        <Route
          path="/termos"
          element={<PageTransition><LegalPage /></PageTransition>}
        />
        <Route
          path="*"
          element={<PageTransition><NotFound /></PageTransition>}
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <ThemeProvider defaultTheme="dark">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatedRoutes />
          <ThemeToggle />
          <FloatingWhatsApp />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
