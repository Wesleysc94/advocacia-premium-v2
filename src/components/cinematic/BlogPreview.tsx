import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
    {
        title: "Nova Lei de Licitações: o que muda para empresas em 2026",
        slug: "nova-lei-licitacoes-2026",
        summary: "Entenda as principais alterações na legislação de contratações públicas e como sua empresa pode se preparar para as novas exigências.",
        category: "Direito Empresarial",
        date: "28 Fev 2026",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Planejamento Sucessório: proteja seu patrimônio com antecedência",
        slug: "planejamento-sucessorio",
        summary: "A importância do planejamento patrimonial e as ferramentas jurídicas disponíveis para garantir a segurança da sua família e herdeiros.",
        category: "Direito Civil",
        date: "15 Fev 2026",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Reforma Tributária 2026: impactos no seu negócio",
        slug: "reforma-tributaria-2026",
        summary: "Uma análise detalhada das mudanças tributárias previstas e estratégias para minimizar a carga fiscal de forma legal e eficiente.",
        category: "Direito Tributário",
        date: "02 Mar 2026",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    },
];

export const BlogPreview = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.blog-card',
                { y: 40, opacity: 0 },
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
        <section id="blog" ref={containerRef} className="py-24 lg:py-32 px-8 md:px-16 w-full max-w-7xl mx-auto">

            {/* Header */}
            <div className="mb-12 max-w-3xl flex flex-col items-center mx-auto text-center">
                <div className="flex items-center gap-4 mb-6">
                    <span className="w-8 h-[1px] bg-gold" />
                    <span className="font-sans text-xs text-gold uppercase tracking-widest font-semibold">
                        Conteúdo Jurídico
                    </span>
                    <span className="w-8 h-[1px] bg-gold" />
                </div>

                <h2 className="font-serif-drama text-5xl md:text-6xl text-primary mb-6 leading-none">
                    Blog & Artigos.
                </h2>

                <p className="font-sans text-lg text-primary/70 max-w-xl">
                    Informação jurídica de qualidade para ajudar você a tomar decisões mais seguras e estratégicas.
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                    <Link
                        key={index}
                        to={`/blog/${post.slug}`}
                        className="blog-card group bg-card rounded-lg overflow-hidden border border-border/20 hover:border-gold/20 transition-all duration-500 block"
                    >
                        {/* Image */}
                        <div className="relative h-52 overflow-hidden">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110"
                                style={{ backgroundImage: `url(${post.image})` }}
                            />
                            <div className="absolute inset-0 bg-dark/30 group-hover:bg-dark/10 transition-colors duration-500" />

                            {/* Category badge */}
                            <div className="absolute top-4 left-4 bg-gold/90 text-dark text-[10px] font-sans font-bold px-3 py-1 uppercase tracking-wider backdrop-blur-sm">
                                {post.category}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col gap-3">
                            <span className="font-sans text-xs text-muted-foreground uppercase tracking-wider">{post.date}</span>
                            <h3 className="font-display text-xl font-bold text-primary group-hover:text-gold transition-colors duration-300 leading-snug">
                                {post.title}
                            </h3>
                            <p className="font-sans text-sm text-primary/70 leading-relaxed">
                                {post.summary}
                            </p>
                            <span className="flex items-center gap-2 text-gold font-sans font-bold text-xs uppercase tracking-[0.2em] mt-2 w-fit group/btn">
                                <span>Ler Artigo</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default BlogPreview;
