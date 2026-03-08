import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const differentials = [
    {
        title: "Atendimento Personalizado",
        description: "Cada cliente é único. Desenvolvemos estratégias individualizadas, respeitando suas necessidades específicas e garantindo a máxima atenção em cada etapa do processo jurídico.",
    },
    {
        title: "Experiência Comprovada",
        description: "Mais de 15 anos de atuação com resultados consistentes em litígios complexos, negociações estratégicas e consultoria preventiva para empresas de diversos segmentos.",
    },
    {
        title: "Atuação Estratégica",
        description: "Não reagimos apenas a problemas — antecipamos cenários. Nossa abordagem preventiva reduz riscos e maximiza oportunidades para sua empresa ou patrimônio pessoal.",
    },
    {
        title: "Compromisso com Resultados",
        description: "Transparência total em cada fase. Nossos clientes acompanham o progresso de seus processos com relatórios claros e comunicação constante por canais dedicados.",
    },
];

const FeatureCard = ({ title, description, index }: { title: string; description: string; index: number }) => {
    return (
        <div className="feature-card group bg-card border border-border/20 rounded-lg p-8 flex flex-col gap-6 hover:border-gold/30 transition-all duration-500">
            <span className="font-serif-drama text-5xl text-gold/20 group-hover:text-gold/40 transition-colors duration-500">
                {String(index + 1).padStart(2, '0')}
            </span>
            <div>
                <h3 className="font-sans font-bold text-lg text-primary mb-3 uppercase tracking-wide">{title}</h3>
                <p className="font-sans text-primary/60 leading-relaxed text-sm">
                    {description}
                </p>
            </div>
            <div className="w-8 h-px bg-gold/20 group-hover:w-16 group-hover:bg-gold/50 transition-all duration-500" />
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
                    <FeatureCard key={index} index={index} {...item} />
                ))}
            </div>

        </section>
    );
};

export default Features;
