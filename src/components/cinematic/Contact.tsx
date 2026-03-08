import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { toast } from 'sonner';

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.contact-anim',
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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const nome = formData.get('nome') as string;

        // Simulate form submission delay for realistic UX
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);

        toast.success('Solicitação enviada com sucesso!', {
            description: `Obrigado, ${nome}. Nossa equipe entrará em contato em até 2 horas úteis.`,
            duration: 6000,
        });

        // Reset form after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000);
        (e.target as HTMLFormElement).reset();
    };

    return (
        <section id="contato" ref={containerRef} className="py-10 lg:py-16 px-8 md:px-16 w-full max-w-7xl mx-auto">

            <div className="bg-card text-card-foreground rounded-[3rem] p-6 md:p-10 lg:p-12 relative overflow-hidden shadow-2xl border border-border/50">
                {/* Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} />

                <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between">

                    {/* Info */}
                    <div className="lg:w-1/2 flex flex-col gap-6 lg:gap-8">
                        <div>
                            <h2 className="contact-anim font-serif-drama text-4xl md:text-5xl lg:text-6xl text-primary mb-4">
                                Entre em Contato.
                            </h2>
                            <p className="contact-anim font-sans text-foreground/80 text-lg">
                                Nossa equipe está pronta para atender você. Agende uma reunião e descubra como podemos proteger seus interesses.
                            </p>
                        </div>

                        {/* Contact Info Cards */}
                        <div className="contact-anim flex flex-col gap-4">
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-background/50 border border-border/30">
                                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                </div>
                                <div>
                                    <div className="font-sans font-bold text-sm text-primary">Endereço</div>
                                    <div className="font-sans text-sm text-foreground/60">Av. Paulista, 1578 — Sala 1201, São Paulo - SP</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-background/50 border border-border/30">
                                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                </div>
                                <div>
                                    <div className="font-sans font-bold text-sm text-primary">Telefone & WhatsApp</div>
                                    <div className="font-sans text-sm text-foreground/60">(11) 99999-9999</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-background/50 border border-border/30">
                                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                </div>
                                <div>
                                    <div className="font-sans font-bold text-sm text-primary">Email</div>
                                    <div className="font-sans text-sm text-foreground/60">contato@advocaciapremium.com.br</div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="contact-anim w-full h-[200px] lg:h-[250px] rounded-2xl overflow-hidden shadow-lg border border-border/10 relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117036.78440029519!2d-46.47161821434969!3d-23.551821896792612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce66fee7ce4bc3%3A0xe138bb92fa68ec2e!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20State%20of%20S%C3%A3o%20Paulo!5e0!3m2!1sen!2sbr!4v1715015383562!5m2!1sen!2sbr"
                                width="100%"
                                height="100%"
                                style={{ border: 0, position: 'absolute', inset: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:w-1/2 flex items-center justify-center lg:justify-end">
                        <div className="contact-anim bg-background text-foreground rounded-[2rem] p-6 lg:p-8 w-full max-w-md shadow-xl flex flex-col gap-6 shadow-black/10">
                            <div className="text-center">
                                <h3 className="font-display font-bold text-2xl mb-2">Agende uma Reunião</h3>
                                <p className="font-sans text-sm text-foreground/70">
                                    Preencha seus dados e um de nossos especialistas entrará em contato.
                                </p>
                            </div>

                            {isSubmitted ? (
                                <div className="flex flex-col items-center gap-4 py-8">
                                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
                                    </div>
                                    <p className="font-display font-bold text-xl text-primary">Mensagem enviada!</p>
                                    <p className="font-sans text-sm text-foreground/60 text-center">Retornaremos em até 2 horas úteis.</p>
                                </div>
                            ) : (
                                <form
                                    className="flex flex-col gap-4 font-sans"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="nome" className="text-xs tracking-wider uppercase font-semibold text-foreground/60 pl-1">Seu Nome</label>
                                        <input required type="text" id="nome" name="nome" placeholder="Nome completo" className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all text-foreground" />
                                    </div>

                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="email" className="text-xs tracking-wider uppercase font-semibold text-foreground/60 pl-1">Email</label>
                                        <input required type="email" id="email" name="email" placeholder="seu@email.com" className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all text-foreground" />
                                    </div>

                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="telefone" className="text-xs tracking-wider uppercase font-semibold text-foreground/60 pl-1">Telefone / WhatsApp</label>
                                        <input required type="tel" id="telefone" name="telefone" placeholder="(11) 99999-9999" className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all text-foreground" />
                                    </div>

                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="area" className="text-xs tracking-wider uppercase font-semibold text-foreground/60 pl-1">Área de Interesse</label>
                                        <select required id="area" name="area" defaultValue="" className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all appearance-none text-foreground">
                                            <option value="" disabled>Selecione uma área</option>
                                            <option value="Direito Empresarial">Direito Empresarial</option>
                                            <option value="Direito Civil">Direito Civil</option>
                                            <option value="Direito Tributário">Direito Tributário</option>
                                            <option value="Direito Trabalhista">Direito Trabalhista</option>
                                            <option value="Consultoria Jurídica">Consultoria Jurídica</option>
                                            <option value="Outro">Outro / Não tenho certeza</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col gap-1.5 mb-2">
                                        <label htmlFor="mensagem" className="text-xs tracking-wider uppercase font-semibold text-foreground/60 pl-1">Mensagem (opcional)</label>
                                        <textarea id="mensagem" name="mensagem" placeholder="Descreva brevemente sua situação..." rows={3} className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all text-foreground resize-none" />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="flex items-center justify-center gap-3 w-full bg-gold text-dark py-4 rounded-xl font-sans font-bold text-lg hover:-translate-y-1 transition-all shadow-lg shadow-gold/20 mt-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                                                Enviando...
                                            </>
                                        ) : (
                                            <>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                                Solicitar Reunião
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}

                            <p className="font-sans text-xs text-center text-foreground/40 mt-[-10px]">
                                Sigilo profissional garantido. Seus dados estão protegidos pela <a href="/privacidade" className="underline hover:text-gold transition-colors">LGPD</a>.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;

