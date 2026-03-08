import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

export const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (path: string, hash?: string) => {
        if (location.pathname !== path) {
            navigate(hash ? `${path}#${hash}` : path);
        } else if (hash) {
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <footer className="w-full bg-dark text-cream pt-16 pb-8 px-6 md:px-12 relative border-t border-white/5">

            {/* CTA */}
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-5 mb-12 border-b border-white/10 pb-12 mt-4">
                <h2 className="font-serif-drama text-4xl md:text-5xl lg:text-6xl text-cream leading-tight drop-shadow-md">
                    Precisa de orientação jurídica especializada?
                </h2>
                <p className="font-sans text-cream/70 text-lg md:text-xl max-w-xl font-light">
                    Entre em contato e descubra como nosso escritório pode proteger seus interesses e fortalecer suas decisões com segurança jurídica.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full justify-center max-w-xl">
                    <button
                        onClick={() => handleNavClick('/', 'contato')}
                        className="w-full sm:w-auto bg-gold text-dark px-10 py-4 font-sans text-sm font-bold uppercase tracking-widest hover:bg-gold/90 transition-all duration-300"
                    >
                        <span>Agendar Consulta</span>
                    </button>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            alert('[ MODO DEMONSTRAÇÃO ]\n\nNa versão ativa, este botão abrirá diretamente o WhatsApp do escritório.');
                        }}
                        className="w-full sm:w-auto border border-white/20 text-white px-10 py-4 font-sans text-sm font-bold uppercase tracking-widest hover:border-[#25D366] hover:text-[#25D366] transition-all duration-300 flex justify-center"
                    >
                        <span className="flex flex-row items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                            Falar no WhatsApp
                        </span>
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">

                {/* Brand */}
                <div className="flex flex-col gap-6 max-w-sm">
                    <div className="font-display font-bold text-3xl tracking-tight text-cream">
                        <span className="text-gold">Advocacia</span> Premium
                    </div>
                    <p className="font-sans text-cream/60 text-sm leading-relaxed">
                        Escritório de advocacia de alto padrão na Av. Paulista. Excelência jurídica, assessoria estratégica e compromisso com resultados para empresas e profissionais.
                    </p>

                    <div className="mt-4 flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2 w-max">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                        </span>
                        <span className="font-sans text-xs text-cream/80 uppercase tracking-widest font-medium">
                            Atendimento Ativo
                        </span>
                    </div>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-2xl font-sans">
                    <div className="flex flex-col gap-5">
                        <h4 className="font-sans text-xs text-gold uppercase tracking-widest flex items-center gap-2 font-semibold">
                            <span className="w-2 h-[1px] bg-gold"></span> O Escritório
                        </h4>
                        <div className="flex flex-col gap-3 text-sm">
                            <button onClick={() => handleNavClick('/', 'sobre')} className="text-left text-cream/50 xl:text-cream/70 hover:text-white hover:translate-x-1 transition-all duration-300">Quem Somos</button>
                            <button onClick={() => handleNavClick('/', 'diferenciais')} className="text-left text-cream/50 xl:text-cream/70 hover:text-white hover:translate-x-1 transition-all duration-300">Nossos Diferenciais</button>
                            <button onClick={() => handleNavClick('/', 'depoimentos')} className="text-left text-cream/50 xl:text-cream/70 hover:text-white hover:translate-x-1 transition-all duration-300">Depoimentos</button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h4 className="font-sans text-xs text-gold uppercase tracking-widest flex items-center gap-2 font-semibold">
                            <span className="w-2 h-[1px] bg-gold"></span> Áreas de Atuação
                        </h4>
                        <div className="flex flex-col gap-3 text-sm">
                            <Link to="/atuacao/direito-empresarial" className="text-left text-cream/50 xl:text-cream/70 hover:text-white hover:translate-x-1 transition-all duration-300">Direito Empresarial</Link>
                            <Link to="/atuacao/direito-civil" className="text-left text-cream/50 xl:text-cream/70 hover:text-white hover:translate-x-1 transition-all duration-300">Direito Civil</Link>
                            <Link to="/atuacao/direito-tributario" className="text-left text-cream/50 xl:text-cream/70 hover:text-white hover:translate-x-1 transition-all duration-300">Direito Tributário</Link>
                            <Link to="/atuacao/direito-trabalhista" className="text-left text-cream/50 xl:text-cream/70 hover:text-white hover:translate-x-1 transition-all duration-300">Direito Trabalhista</Link>
                            <Link to="/atuacao/consultoria-juridica" className="text-left text-cream/50 xl:text-cream/70 hover:text-white hover:translate-x-1 transition-all duration-300">Consultoria Jurídica</Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 col-span-1 md:col-span-2 lg:col-span-1">
                        <h4 className="font-sans text-xs text-gold uppercase tracking-widest flex items-center gap-2 font-semibold">
                            <span className="w-2 h-[1px] bg-gold"></span> Contato
                        </h4>
                        <div className="flex flex-col gap-3 text-sm">
                            <span className="text-cream/50 xl:text-cream/70 block">Av. Paulista, 1578 — Sala 1201</span>
                            <span className="text-cream/50 xl:text-cream/70 block">São Paulo - SP | CEP 01310-200</span>
                            <span className="text-cream/50 xl:text-cream/70 block">WhatsApp: (11) 99999-9999</span>
                            <button
                                onClick={() => handleNavClick('/', 'contato')}
                                className="text-left text-gold border-b border-gold/30 hover:border-gold hover:text-white transition-all w-max pb-0.5 mt-2"
                            >
                                Agendar Consulta &rarr;
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 font-sans text-xs text-cream/40 px-4">
                <span>&copy; {new Date().getFullYear()} Advocacia Premium. Todos os direitos reservados.</span>
                <div className="flex gap-6">
                    <Link to="/privacidade" className="hover:text-cream/80 transition-colors">Privacidade</Link>
                    <Link to="/termos" className="hover:text-cream/80 transition-colors">Termos</Link>
                    <Link to="/termos" className="hover:text-cream/80 transition-colors">Código de Ética</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
