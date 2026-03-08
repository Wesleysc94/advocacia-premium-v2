import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const differentials = [
    {
        title: "Atendimento Personalizado",
        description: "Cada cliente é único. Desenvolvemos estratégias individualizadas, respeitando suas necessidades específicas e garantindo a máxima atenção em cada etapa do processo jurídico.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" /><path d="m18 15-2-2" /><path d="m15 18-2-2" /></svg>
        ),
    },
    {
        title: "Experiência Comprovada",
        description: "Mais de 15 anos de atuação com resultados consistentes em litígios complexos, negociações estratégicas e consultoria preventiva para empresas de diversos segmentos.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" /></svg>
        ),
    },
    {
        title: "Atuação Estratégica",
        description: "Não reagimos apenas a problemas — antecipamos cenários. Nossa abordagem preventiva reduz riscos e maximiza oportunidades para sua empresa ou patrimônio pessoal.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
        ),
    },
    {
        title: "Compromisso com Resultados",
        description: "Transparência total em cada fase. Nossos clientes acompanham o progresso de seus processos com relatórios claros e comunicação constante por canais dedicados.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>
        ),
    },
];

const FeatureCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => {
    return (
        <div className="feature-card bg-card backdrop-blur-md border border-border/30 rounded-[2rem] p-8 flex flex-col gap-6 hover:border-gold/40 hover:bg-card/80 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shadow-inner border border-gold/20">
                {icon}
            </div>
            <div>
                <h3 className="font-sans font-bold text-xl text-primary mb-3 drop-shadow-sm">{title}</h3>
                <p className="font-sans text-primary/70 leading-relaxed text-sm">
                    {description}
                </p>
            </div>
        </div>
    );
};

export const Features = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.feature-card',
                { y: 32, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
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
        <section id="diferenciais" ref={containerRef} className="py-16 lg:py-24 px-8 md:px-16 w-full max-w-7xl mx-auto">

            {/* Header */}
            <div className="mb-12 max-w-3xl">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-[1px] bg-gold" />
                    <span className="font-sans text-xs text-gold uppercase tracking-widest font-semibold">
                        Por Que Nos Escolher
                    </span>
                </div>

                <h2 className="font-serif-drama text-5xl md:text-7xl text-primary mb-6 leading-none">
                    Nossos Diferenciais.
                </h2>

                <p className="font-sans text-lg text-primary/70 max-w-xl">
                    Comprometimento, ética e excelência técnica são os pilares que sustentam a confiança de nossos clientes há mais de uma década.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {differentials.map((item, index) => (
                    <FeatureCard key={index} {...item} />
                ))}
            </div>

        </section>
    );
};

export default Features;
