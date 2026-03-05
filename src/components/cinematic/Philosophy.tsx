import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Philosophy = () => {
    const containerRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Background Parallax
            gsap.fromTo(
                bgRef.current,
                { yPercent: -20 },
                {
                    yPercent: 20,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                }
            );

            // Text Reveal (Line by line fade-up since we don't have SplitText premium plugin)
            const lines = gsap.utils.toArray('.reveal-line');

            gsap.fromTo(
                lines,
                {
                    y: 60,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: "top 75%", // Triggers when top of text hits 75% down viewport
                    },
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-dark px-8 py-20"
        >
            {/* Background Image with Overlay and Solid Fallback */}
            <div
                ref={bgRef}
                className="absolute inset-x-0 top-[-20%] h-[140%] w-full bg-primary bg-cover bg-center opacity-30 mix-blend-overlay pointer-events-none"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542273183-4a6c2fc4900f?q=80&w=2070&auto=format&fit=crop")' }}
            />

            {/* Content */}
            <div ref={textRef} className="relative z-10 max-w-5xl mx-auto flex flex-col gap-12">
                {/* Neutral State */}
                <div className="reveal-line font-sans-outfit text-xl md:text-3xl text-cream/50 max-w-3xl">
                    Muitos procuram o dentista sentindo medo ou dor, esperando <br />
                    <span className="text-cream/80 line-through decoration-cream/30">procedimentos rápidos sem explicação.</span>
                </div>

                {/* Contrast State (The Manifesto) */}
                <div className="reveal-line font-serif-drama text-5xl md:text-7xl lg:text-8xl text-cream leading-[0.9] pr-8">
                    Nós focamos em <br />
                    <span className="text-accent italic">Saúde e Conforto</span>,
                    explicando cada passo para que você volte a sorrir sem medo.
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
