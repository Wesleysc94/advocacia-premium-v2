import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const practiceAreas = [
    {
        title: "Direito Empresarial",
        slug: "direito-empresarial",
        description: "Assessoria completa para empresas, incluindo constituição societária, contratos comerciais, fusões, aquisições e governança corporativa.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" /><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" /><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" /><path d="M10 6h4" /><path d="M10 10h4" /><path d="M10 14h4" /><path d="M10 18h4" /></svg>
        ),
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Direito Civil",
        slug: "direito-civil",
        description: "Atuação em questões patrimoniais, contratos, responsabilidade civil, direito imobiliário, família e sucessões com abordagem estratégica.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" /></svg>
        ),
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Direito Tributário",
        slug: "direito-tributario",
        description: "Planejamento tributário, defesa em processos fiscais, consultoria sobre regimes de tributação e recuperação de créditos tributários.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
        ),
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Direito Trabalhista",
        slug: "direito-trabalhista",
        description: "Representação em ações trabalhistas, elaboração de pareceres, compliance trabalhista e gestão preventiva de conflitos laborais.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
        ),
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Consultoria Jurídica",
        slug: "consultoria-juridica",
        description: "Suporte permanente para tomadas de decisão, análise de riscos e conformidade regulatória para empresas de todos os portes.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
        ),
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
    },
];

const PracticeAreaCard = ({ title, slug, description, icon, image }: { title: string; slug: string; description: string; icon: React.ReactNode; image: string }) => {
    return (
        <Link to={`/atuacao/${slug}`} className="practice-card relative h-[380px] w-full rounded-[2rem] overflow-hidden bg-dark/20 shadow-xl group cursor-pointer border border-border/10 isolate block">
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] md:group-hover:scale-110"
                style={{ backgroundImage: `url(${image})` }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-dark/70 backdrop-blur-[1px] opacity-50 transition-opacity duration-700 group-hover:opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/50 to-transparent opacity-90" />

            <div className="absolute inset-0 p-8 flex flex-col justify-end text-cream translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold mb-4 border border-gold/30">
                    {icon}
                </div>
                <h3 className="font-sans font-bold text-2xl mb-2 text-white drop-shadow-md">{title}</h3>
                <p className="font-sans text-white/80 text-sm mb-4 drop-shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 leading-relaxed">
                    {description}
                </p>
                <span className="flex items-center gap-2 text-gold font-sans font-bold text-sm uppercase tracking-wider relative overflow-hidden group/btn w-fit">
                    <span>Saiba Mais</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gold -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300" />
                </span>
            </div>
        </Link>
    );
};

export const PracticeAreas = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.practice-card',
                { y: 48, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="atuacao" ref={containerRef} className="py-24 lg:py-32 px-8 md:px-16 w-full max-w-7xl mx-auto">

            {/* Header */}
            <div className="mb-12 max-w-3xl flex flex-col items-center mx-auto text-center">
                <div className="flex items-center gap-4 mb-6">
                    <span className="w-8 h-[1px] bg-gold" />
                    <span className="font-sans text-xs text-gold uppercase tracking-widest font-semibold">
                        Especialidades
                    </span>
                    <span className="w-8 h-[1px] bg-gold" />
                </div>

                <h2 className="font-serif-drama text-5xl md:text-6xl text-primary mb-6 leading-none">
                    Áreas de Atuação.
                </h2>

                <p className="font-sans text-lg text-primary/70 max-w-xl">
                    Atuamos nas principais áreas do Direito com profundidade técnica e visão estratégica para proteger seus interesses.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {practiceAreas.slice(0, 3).map((area, index) => (
                    <PracticeAreaCard key={index} {...area} />
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
                {practiceAreas.slice(3).map((area, index) => (
                    <PracticeAreaCard key={index + 3} {...area} />
                ))}
            </div>

        </section>
    );
};

export default PracticeAreas;
