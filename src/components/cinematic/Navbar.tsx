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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 lg:px-16 py-4 flex items-center justify-between w-full
          ${isScrolled
            ? 'bg-dark/90 backdrop-blur-xl border-b border-white/5 shadow-lg'
            : 'bg-transparent'
          }
        `}
      >
        {/* Brand */}
        <div
          className="font-display font-bold text-xl tracking-tight drop-shadow-sm cursor-pointer"
          onClick={() => handleNavClick('inicio')}
        >
          <span className="text-gold">Advocacia</span> <span className="text-cream">Premium</span>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-x-8 lg:gap-x-10 font-sans text-[13px] lg:text-sm font-medium uppercase tracking-wider">
          {navLinks.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className="cursor-pointer text-cream/70 hover:text-gold font-medium whitespace-nowrap transition-colors duration-300"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <div className="w-px h-6 bg-white/10" />
          <button
            onClick={() => handleNavClick('contato')}
            className="group relative overflow-hidden bg-transparent text-gold px-6 py-2.5 border border-gold/40 font-sans text-xs font-bold uppercase tracking-widest hover:bg-gold hover:text-dark transition-all duration-300 flex-shrink-0"
          >
            <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
              Agendar Consulta
            </span>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${isMobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${isMobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${isMobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
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
