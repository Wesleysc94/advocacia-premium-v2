import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-6">
        <div className="font-serif-drama text-8xl md:text-9xl text-gold/30 mb-4">404</div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">Página não encontrada</h1>
        <p className="font-sans text-lg text-foreground/60 mb-8 max-w-md mx-auto">
          A página que você está procurando não existe ou foi movida para outro endereço.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-dark rounded-[2.5rem] font-sans font-bold hover:scale-105 transition-transform shadow-lg shadow-gold/20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
          Voltar ao Início
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
