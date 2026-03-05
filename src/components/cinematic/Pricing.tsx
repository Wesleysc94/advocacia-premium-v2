import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const plans = [
    {
        name: "Prevenção Essencial",
        price: "Check-up",
        desc: "A base da saúde bucal. Ideal para manutenção preventiva e limpeza profunda.",
        features: [
            "Avaliação Clínica Completa",
            "Limpeza e Profilaxia",
            "Aplicação de Flúor",
            "Instrução de Higiene Oral"
        ],
        highlight: false,
    },
    {
        name: "Cuidado Completo",
        price: "Tratamento",
        desc: "Resolva problemas antes que se agravem. Foco em restaurações e saúde das gengivas.",
        features: [
            "Restaurações Estéticas",
            "Tratamento de Cáries",
            "Tratamento Gengival Básica",
            "Sessões de Acompanhamento",
            "Prioridade de Agendamento"
        ],
        highlight: true,
    },
    {
        name: "Reabilitação",
        price: "Prótese",
        desc: "Recupere a função e a estética com próteses sob medida e implantes.",
        features: [
            "Próteses Fixas e Removíveis",
            "Coroas de Porcelana",
            "Planejamento de Implantes",
            "Acompanhamento Contínuo",
            "Materiais de Alta Qualidade"
        ],
        highlight: false,
    }
];

export const Pricing = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.pricing-card',
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-20 px-8 md:px-16 w-full max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="font-serif-drama text-5xl md:text-6xl text-primary mb-4">Planos de Tratamento.</h2>
                <p className="font-sans-outfit text-primary/70 max-w-2xl mx-auto text-lg">
                    Não trabalhamos com orçamentos superficiais. Desenvolvemos projetos de saúde integrados, adequados ao seu objetivo clínico.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {plans.map((plan, i) => (
                    <div
                        key={plan.name}
                        className={`pricing-card relative rounded-[2.5rem] p-10 flex flex-col transition-transform duration-500 hover:-translate-y-2
              ${plan.highlight
                                ? 'bg-primary text-primary-foreground shadow-2xl scale-100 md:scale-105 z-10 border border-primary/20'
                                : 'bg-background border border-border text-primary'
                            }
            `}
                    >
                        <div className="mb-8">
                            <span className={`font-mono-data text-xs uppercase tracking-widest pl-3 border-l-2
                ${plan.highlight ? 'text-accent border-accent' : 'text-primary/60 border-primary/20'}
              `}>
                                Pacote
                            </span>
                            <h3 className="font-sans-bold text-3xl mt-4 mb-2">{plan.name}</h3>
                            <div className={`font-serif-drama text-4xl mb-4 ${plan.highlight ? 'text-accent' : 'text-primary'}`}>
                                {plan.price}.
                            </div>
                            <p className={`font-sans-outfit text-sm leading-relaxed ${plan.highlight ? 'text-primary-foreground/70' : 'text-primary/70'}`}>
                                {plan.desc}
                            </p>
                        </div>

                        <ul className="flex-1 flex flex-col gap-4 mb-10">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <svg className={`shrink-0 w-5 h-5 mt-0.5 ${plan.highlight ? 'text-accent' : 'text-primary/40'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <span className={`font-sans-outfit text-sm ${plan.highlight ? 'text-primary-foreground/90' : 'text-primary/80'}`}>
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <button className={`w-full py-4 rounded-full font-sans-outfit text-sm font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]
              ${plan.highlight
                                ? 'bg-accent text-accent-foreground shadow-[0_0_20px_hsl(var(--accent)/0.3)] hover:shadow-[0_0_30px_hsl(var(--accent)/0.5)]'
                                : 'bg-primary/5 hover:bg-primary/10 text-primary'
                            }
            `}>
                            Iniciar Projeto
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pricing;
