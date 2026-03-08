import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.about-reveal',
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                    }
                }
            );

            gsap.fromTo('.about-image',
                { scale: 0.9, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="sobre" ref={containerRef} className="py-24 lg:py-32 px-8 md:px-16 w-full max-w-7xl mx-auto overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-16 items-center">

                {/* Content */}
                <div className="lg:w-1/2 flex flex-col gap-6">
                    <div className="about-reveal flex items-center gap-4 mb-2">
                        <div className="w-12 h-[1px] bg-gold" />
                        <span className="font-sans text-xs text-gold uppercase tracking-widest font-semibold">
                            Quem Somos
                        </span>
                    </div>

                    <h2 className="about-reveal font-serif-drama text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
                        Tradição, estratégia e compromisso com a excelência jurídica.
                    </h2>

                    <p className="about-reveal font-sans text-lg text-primary/80 font-light mt-4 leading-relaxed">
                        O escritório Advocacia Premium foi fundado com a missão de oferecer assessoria jurídica de alto nível para empresas e profissionais que buscam segurança, eficiência e resultados concretos em todas as esferas do Direito.
                    </p>

                    <p className="about-reveal font-sans text-lg text-primary/80 font-light leading-relaxed">
                        Com mais de 15 anos de atuação no mercado, unimos experiência prática, atualização constante e um profundo compromisso ético para entregar soluções personalizadas e estratégicas aos nossos clientes.
                    </p>

                    {/* Founders */}
                    <div className="about-reveal mt-8 pb-4 border-b border-border flex flex-col sm:flex-row gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center border-2 border-gold/20">
                                <span className="font-sans font-bold text-gold text-lg">RC</span>
                            </div>
                            <div>
                                <div className="font-sans font-bold text-primary text-base">Dr. Ricardo Campos</div>
                                <div className="font-sans text-sm text-primary/60">Sócio-Fundador · OAB/SP 123.456</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center border-2 border-gold/20">
                                <span className="font-sans font-bold text-gold text-lg">AM</span>
                            </div>
                            <div>
                                <div className="font-sans font-bold text-primary text-base">Dra. Ana Monteiro</div>
                                <div className="font-sans text-sm text-primary/60">Sócia-Fundadora · OAB/SP 654.321</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image */}
                <div className="lg:w-1/2 relative h-[500px] md:h-[600px] w-full mt-10 lg:mt-0">
                    <div
                        className="about-image absolute inset-0 rounded-[3rem] bg-cover bg-center shadow-2xl"
                        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200")' }}
                    />
                    {/* Decorative */}
                    <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gold/10 rounded-full blur-3xl -z-10" />
                    <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
                </div>

            </div>
        </section>
    );
};

export default About;
