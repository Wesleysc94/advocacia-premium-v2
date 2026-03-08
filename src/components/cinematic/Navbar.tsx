import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation, useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -50',
        onUpdate: (self) => {
          setIsScrolled(self.direction === 1 || self.progress > 0);
        },
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileOpen(false);
    if (id === 'inicio') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (location.pathname !== '/') {
      navigate(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { label: 'Início', id: 'inicio' },
    { label: 'O Escritório', id: 'sobre' },
    { label: 'Atuação', id: 'atuacao' },
    { label: 'Blog', id: 'blog' },
    { label: 'Contato', id: 'contato' },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-[3rem] px-5 md:px-8 py-3 md:py-4 flex items-center justify-between gap-4 md:gap-12 w-[95%] max-w-5xl
          ${isScrolled
            ? 'bg-dark/95 backdrop-blur-xl border border-gold/10 shadow-lg text-cream'
            : 'bg-transparent text-white'
          }
        `}
      >
        {/* Brand */}
        <div
          className="font-display font-bold text-xl tracking-tight drop-shadow-sm cursor-pointer"
          onClick={() => handleNavClick('inicio')}
        >
          <span className="text-gold">Advocacia</span> Premium
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-x-6 lg:gap-x-8 font-sans text-sm lg:text-base font-medium">
          {navLinks.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className="cursor-pointer hover:text-gold font-semibold whitespace-nowrap transition-colors hover:-translate-y-[1px] transform drop-shadow-sm"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Desktop */}
        <button
          onClick={() => handleNavClick('contato')}
          className="hidden md:flex group relative overflow-hidden bg-gradient-to-r from-gold/90 to-gold text-dark px-6 py-2.5 rounded-[2rem] font-sans text-sm font-bold hover:scale-105 transition-transform duration-300 flex-shrink-0 shadow-[0_0_15px_hsl(var(--gold)/0.3)]"
        >
          <span className="relative z-10 flex items-center gap-2 whitespace-nowrap drop-shadow-sm">
            Agendar Consulta
          </span>
          <div className="absolute inset-0 bg-dark/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 bg-dark/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="font-display text-3xl text-cream hover:text-gold transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contato')}
            className="mt-4 bg-gold text-dark px-8 py-3 rounded-full font-sans font-bold text-lg"
          >
            Agendar Consulta
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
