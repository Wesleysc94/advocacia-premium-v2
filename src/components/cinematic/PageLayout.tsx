import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

interface PageLayoutProps {
    children: React.ReactNode;
    title: string;
    subtitle?: string;
    breadcrumb: { label: string; href?: string }[];
    heroImage: string;
    tag?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title, subtitle, breadcrumb, heroImage, tag }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-background text-foreground min-h-screen font-sans antialiased selection:bg-gold selection:text-dark">
            <Navbar />

            {/* Hero Section */}
            <section className="relative w-full min-h-[50vh] md:min-h-[60vh] flex flex-col items-center justify-end text-center px-4 md:px-16 overflow-hidden pt-32 pb-16">
                {/* Background */}
                <div className="absolute inset-0 z-0 bg-dark overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none scale-110"
                        style={{
                            backgroundImage: `url('${heroImage}')`,
                            backgroundPosition: 'center 30%',
                        }}
                    />
                    <div className="absolute inset-0 bg-dark/75 md:bg-dark/60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
                    <div
                        className="absolute bottom-[-2px] left-0 w-full h-32 pointer-events-none z-10"
                        style={{ background: 'linear-gradient(to top, hsl(var(--background)) 5%, transparent 100%)' }}
                    />
                </div>

                {/* Content */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="relative z-10 w-full max-w-4xl text-cream flex flex-col items-center gap-4"
                >
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 font-sans text-xs text-cream/50 uppercase tracking-widest mb-4">
                        {breadcrumb.map((item, i) => (
                            <React.Fragment key={i}>
                                {i > 0 && <span className="text-gold/40">/</span>}
                                {item.href ? (
                                    <Link to={item.href} className="hover:text-gold transition-colors">{item.label}</Link>
                                ) : (
                                    <span className="text-cream/80">{item.label}</span>
                                )}
                            </React.Fragment>
                        ))}
                    </nav>

                    {tag && (
                        <span className="font-sans text-xs text-gold uppercase tracking-[0.3em] font-semibold">
                            {tag}
                        </span>
                    )}

                    <h1 className="font-serif-drama text-4xl md:text-6xl lg:text-7xl text-cream leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="font-sans text-base md:text-lg text-cream/80 max-w-2xl font-light mt-2 leading-relaxed">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </section>

            {/* Page Content */}
            <main className="w-full max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-20">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {children}
                </motion.div>
            </main>

            {/* Back to top CTA */}
            <section className="w-full max-w-5xl mx-auto px-6 md:px-12 pb-16">
                <div className="bg-card border border-border/30 rounded-[2rem] p-8 md:p-12 text-center shadow-xl">
                    <h3 className="font-serif-drama text-3xl md:text-4xl text-primary mb-4">
                        Precisa de assessoria nesta área?
                    </h3>
                    <p className="font-sans text-primary/70 mb-8 max-w-lg mx-auto">
                        Nossa equipe está pronta para analisar seu caso e oferecer a melhor estratégia jurídica.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/#contato"
                            className="group relative overflow-hidden bg-gold text-dark px-8 py-4 rounded-[2.5rem] font-sans text-base font-bold hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_hsl(var(--gold)/0.3)] inline-flex items-center justify-center"
                        >
                            <span className="relative z-10">Agendar Consulta</span>
                            <div className="absolute inset-0 bg-dark/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </Link>
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[2.5rem] font-sans text-base font-bold border border-border/50 text-primary hover:border-gold/50 hover:text-gold transition-all duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
                            Voltar ao Início
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PageLayout;
