import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.hero-stagger',
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.12,
                    ease: 'power3.out',
                    delay: 0.1,
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center text-center px-4 md:px-16 overflow-hidden pt-32 pb-16 md:py-0"
        >
            {/* Background */}
            <div className="absolute inset-0 z-0 bg-dark overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none scale-110"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069')",
                        backgroundPosition: 'center 30%',
                        animation: 'breathe 20s infinite alternate ease-in-out'
                    }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-dark/75 md:bg-dark/55" />

                {/* Radial mask */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,30,46,0.7)_0%,rgba(15,30,46,0)_80%)] pointer-events-none" />

                {/* Gold accent glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

                {/* Section transition gradient */}
                <div
                    className="absolute bottom-[-2px] left-0 w-full h-32 pointer-events-none z-10"
                    style={{ background: 'linear-gradient(to top, hsl(var(--background)) 5%, transparent 100%)' }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-4xl text-cream flex flex-col items-center gap-4 mt-8 md:mt-16 mb-4 md:mb-0 text-center">

                <div className="flex flex-col items-center relative z-20">
                    <h1 className="flex flex-col gap-1 md:gap-2 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] text-center">
                        <span className="hero-stagger font-sans text-xs sm:text-sm md:text-base text-gold uppercase tracking-[0.3em] font-semibold mb-2">
                            Assessoria Jurídica Estratégica
                        </span>
                        <span className="hero-stagger font-serif-drama text-[2.75rem] leading-[1] md:text-7xl lg:text-8xl text-cream md:leading-[0.9] mt-2">
                            Excelência Jurídica para<br className="md:hidden" /> <span className="text-gold italic font-light">Empresas e Profissionais.</span>
                        </span>
                    </h1>

                    <p className="hero-stagger font-sans text-base md:text-xl text-cream/85 max-w-2xl font-light mt-6 md:mt-8 leading-relaxed drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] px-2">
                        Oferecemos consultoria e contencioso estratégico com foco em segurança jurídica, protegendo seus interesses com experiência e sofisticação.
                    </p>
                </div>

                {/* CTAs */}
                <div className="hero-stagger mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-xl mx-auto">
                    <button
                        onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group relative w-full sm:w-1/2 overflow-hidden bg-gradient-to-r from-gold/90 to-gold text-dark px-8 py-4 rounded-[2.5rem] font-sans text-base font-bold hover:scale-105 transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] shadow-[0_0_20px_hsl(var(--gold)/0.4)] flex justify-center hover:shadow-[0_0_30px_hsl(var(--gold)/0.6)]"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2 drop-shadow-sm w-full">
                            Agendar Consulta
                        </span>
                        <div className="absolute inset-0 bg-dark/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>

                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            alert('[ MODO DEMONSTRAÇÃO ]\n\nNa versão ativa, este botão abrirá diretamente o WhatsApp do escritório.');
                        }}
                        className="group relative w-full sm:w-1/2 overflow-hidden bg-gradient-to-r from-[#25D366]/90 to-[#25D366] text-white px-8 py-4 rounded-[2.5rem] font-sans text-base font-bold hover:scale-105 transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] shadow-[0_0_20px_rgba(37,211,102,0.4)] flex justify-center hover:shadow-[0_0_30px_rgba(37,211,102,0.6)]"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2 drop-shadow-md w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                            Falar no WhatsApp
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                </div>

                {/* Social Proof */}
                <div className="hero-stagger mt-10 grid grid-cols-3 gap-2 sm:gap-8 border-y border-white/10 py-5 w-full max-w-2xl bg-dark/30 backdrop-blur-sm sm:rounded-3xl sm:border-x px-2 mx-auto transition-all duration-500 hover:bg-dark/50 hover:backdrop-blur-md hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(200,169,106,0.1)] hover:border-gold/20 cursor-default group">
                    <div className="flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-1">
                        <span className="font-sans font-bold text-gold text-lg mb-1 drop-shadow-md">+500</span>
                        <span className="text-[9px] sm:text-xs text-cream/60 uppercase tracking-widest font-sans text-center group-hover:text-cream transition-colors duration-300">Clientes</span>
                    </div>
                    <div className="flex flex-col items-center border-x border-white/10 px-2 sm:px-4 transition-transform duration-300 delay-75 group-hover:-translate-y-1">
                        <span className="font-sans font-bold text-gold text-lg mb-1 drop-shadow-md">+15 Anos</span>
                        <span className="text-[9px] sm:text-xs text-cream/60 uppercase tracking-widest font-sans text-center group-hover:text-cream transition-colors duration-300">Experiência</span>
                    </div>
                    <div className="flex flex-col items-center px-2 transition-transform duration-300 delay-150 group-hover:-translate-y-1">
                        <span className="font-sans font-bold text-gold text-lg mb-1 drop-shadow-md">98%</span>
                        <span className="text-[9px] sm:text-xs text-cream/60 uppercase tracking-widest font-sans text-center group-hover:text-cream transition-colors duration-300">Satisfação</span>
                    </div>
                </div>
            </div>

            {/* Scroll CTA */}
            <div className="hero-stagger mt-6 mb-12 md:mt-8 md:mb-16 w-full z-10 flex justify-center">
                <div
                    className="flex flex-col items-center gap-2 cursor-pointer group bg-dark/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 hover:bg-dark/60 transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,0,0,0.3)]"
                    onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    <span className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-cream font-bold text-center whitespace-nowrap">Conheça o Escritório</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold animate-bounce"><path d="m6 9 6 6 6-6" /></svg>
                </div>
            </div>
        </section>
    );
};

export default Hero;
