import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const REVIEWS = [
    {
        name: "Carlos Eduardo Silva",
        role: "Direito Empresarial",
        text: "O escritório foi fundamental na reestruturação societária da minha empresa. Profissionais extremamente competentes, com uma visão estratégica que fez total diferença no resultado.",
        initial: "CE"
    },
    {
        name: "Fernanda Oliveira",
        role: "Consultoria Tributária",
        text: "Estou impressionada com o nível de atenção e a clareza com que explicaram cada detalhe do planejamento tributário. Reduziram nossa carga fiscal de forma totalmente legal e segura.",
        initial: "FO"
    },
    {
        name: "Marcos Vinícius Andrade",
        role: "Direito Trabalhista",
        text: "Precisava de orientação urgente sobre uma questão trabalhista complexa. O atendimento foi rápido, humano e resolveram tudo com extrema competência. Recomendo sem hesitar.",
        initial: "MV"
    },
    {
        name: "Patrícia Almeida",
        role: "Direito Civil",
        text: "Contratei para um caso de inventário que parecia impossível. A equipe do escritório conduziu tudo com maestria, mantendo total transparência em cada etapa. Resultado impecável.",
        initial: "PA"
    }
];

export const Reviews = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState<'right' | 'left'>('right');
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (isAnimating) return;
        const timer = setTimeout(() => {
            handleTransition('next');
        }, 10000);
        return () => clearTimeout(timer);
    }, [activeIndex, isAnimating]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.review-header',
                { y: 30, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
                    scrollTrigger: { trigger: containerRef.current, start: "top 75%" }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const handleTransition = (dir: 'next' | 'prev') => {
        if (isAnimating) return;
        setIsAnimating(true);
        setDirection(dir === 'next' ? 'right' : 'left');

        setTimeout(() => {
            if (dir === 'next') {
                setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
            } else {
                setActiveIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
            }
            setTimeout(() => {
                setIsAnimating(false);
            }, 50);
        }, 300);
    };

    const nextSlide = () => handleTransition('next');
    const prevSlide = () => handleTransition('prev');

    return (
        <section id="depoimentos" ref={containerRef} className="py-24 px-4 w-full max-w-7xl mx-auto md:px-12 lg:px-16 overflow-hidden">
            <div className="bg-dark/95 border border-gold/10 rounded-[2.5rem] w-full relative overflow-hidden px-6 md:px-16 py-16 md:py-20 shadow-2xl flex flex-col">
                {/* Background accents */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-gold/5 to-transparent opacity-60 pointer-events-none" />
                <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-16 relative z-10 review-header">
                    <div className="lg:w-2/3 flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-[1px] bg-gold/50" />
                            <span className="font-sans text-xs text-gold/90 uppercase tracking-[0.2em] font-medium flex-shrink-0">
                                Depoimentos
                            </span>
                        </div>

                        <h2 className="font-serif-drama text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.1]">
                            A confiança dos nossos<br className="hidden md:block" /> clientes é nosso maior patrimônio.
                        </h2>
                    </div>
                </div>

                {/* Carousel */}
                <div className="relative w-full overflow-hidden flex-grow min-h-[300px] flex items-center py-4">
                    {REVIEWS.map((review, index) => {
                        const isActive = index === activeIndex;

                        let transformClass = 'translate-x-0 opacity-100 scale-100 relative z-10';
                        if (!isActive) {
                            transformClass = isAnimating
                                ? (direction === 'right' ? '-translate-x-full opacity-0 scale-95 absolute inset-0 z-0' : 'translate-x-full opacity-0 scale-95 absolute inset-0 z-0')
                                : 'opacity-0 scale-95 absolute inset-0 z-0 pointer-events-none hidden';
                        }

                        return (
                            <div
                                key={index}
                                className={`w-full flex-shrink-0 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${transformClass} flex flex-col md:flex-row gap-6 md:gap-16 items-start`}
                            >
                                {/* Quote desktop */}
                                <div className="hidden md:flex flex-col items-start shrink-0 pt-2">
                                    <span className="font-serif-drama text-gold/20 text-[8rem] leading-none select-none drop-shadow-sm">"</span>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-grow relative w-full">
                                    <div className="md:hidden mb-4 relative z-0">
                                        <span className="font-serif-drama text-gold/20 text-[5rem] leading-none select-none block h-10 -ml-1">"</span>
                                    </div>

                                    <p className="font-serif-drama text-[1.25rem] sm:text-[1.5rem] md:text-[2.2rem] text-cream/95 italic leading-normal md:leading-snug font-medium tracking-wide drop-shadow-sm mb-8 md:mb-10 min-h-[120px] sm:min-h-[140px] md:min-h-[160px] relative z-10 w-full lg:w-[90%]">
                                        {review.text}
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center gap-4 sm:gap-5 mt-auto pt-2">
                                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full p-[2px] bg-gradient-to-br from-gold/60 to-gold/10 shadow-[0_0_20px_rgba(200,169,106,0.3)] shrink-0 m-3 relative z-20">
                                            <div className="w-full h-full rounded-full bg-dark flex items-center justify-center border border-dark">
                                                <span className="font-sans font-bold text-cream text-lg sm:text-xl drop-shadow-sm tracking-widest">{review.initial}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <span className="font-sans font-bold text-base sm:text-lg md:text-xl text-cream tracking-wide">{review.name}</span>
                                            <span className="font-sans text-[10px] sm:text-xs text-gold font-bold uppercase tracking-[0.2em] mt-1">{review.role}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Controls */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm self-center md:self-auto">
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg key={star} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="hsl(var(--gold))" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                            ))}
                        </div>
                        <span className="text-xs text-cream/80 font-medium tracking-wide border-l border-white/20 pl-2 ml-1">Satisfação comprovada</span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <div className="flex gap-2 order-2 sm:order-1">
                            {REVIEWS.map((_, idx) => (
                                <button
                                    key={idx}
                                    aria-label={`Ir para depoimento ${idx + 1}`}
                                    onClick={() => {
                                        if (isAnimating || activeIndex === idx) return;
                                        setDirection(idx > activeIndex ? 'right' : 'left');
                                        setIsAnimating(true);
                                        setTimeout(() => {
                                            setActiveIndex(idx);
                                            setTimeout(() => setIsAnimating(false), 50);
                                        }, 300);
                                    }}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-6 bg-gold' : 'w-1.5 bg-white/20 hover:bg-white/40'}`}
                                />
                            ))}
                        </div>

                        <div className="flex items-center gap-3 order-1 sm:order-2 shrink-0">
                            <button
                                onClick={prevSlide}
                                disabled={isAnimating}
                                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-cream hover:bg-white/5 hover:border-gold/50 transition-all duration-300 disabled:opacity-50 group hover:shadow-[0_0_15px_rgba(200,169,106,0.15)] bg-dark/50"
                                aria-label="Depoimento Anterior"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><path d="m15 18-6-6 6-6" /></svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                disabled={isAnimating}
                                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-cream hover:bg-white/5 hover:border-gold/50 transition-all duration-300 disabled:opacity-50 group hover:shadow-[0_0_15px_rgba(200,169,106,0.15)] bg-dark/50"
                                aria-label="Próximo Depoimento"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="m9 18 6-6-6-6" /></svg>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Reviews;
