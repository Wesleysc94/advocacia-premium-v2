import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/cinematic/Navbar';
import Footer from '@/components/cinematic/Footer';

const LegalPage: React.FC = () => {
    const location = useLocation();
    const isPrivacy = location.pathname === '/privacidade';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="bg-background text-foreground min-h-screen font-sans antialiased selection:bg-gold selection:text-dark">
            <Navbar />

            {/* Hero */}
            <section className="relative w-full min-h-[40vh] flex flex-col items-center justify-end text-center px-4 md:px-16 overflow-hidden pt-32 pb-12">
                <div className="absolute inset-0 z-0 bg-dark overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-dark via-navy-dark to-dark" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-gold/5 rounded-full blur-[100px]" />
                    <div className="absolute bottom-[-2px] left-0 w-full h-24 pointer-events-none z-10" style={{ background: 'linear-gradient(to top, hsl(var(--background)) 5%, transparent 100%)' }} />
                </div>
                <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="relative z-10 text-cream">
                    <nav className="flex items-center gap-2 font-sans text-xs text-cream/50 uppercase tracking-widest mb-4 justify-center">
                        <Link to="/" className="hover:text-gold transition-colors">Início</Link>
                        <span className="text-gold/40">/</span>
                        <span className="text-cream/80">{isPrivacy ? 'Política de Privacidade' : 'Termos de Uso'}</span>
                    </nav>
                    <h1 className="font-serif-drama text-4xl md:text-5xl lg:text-6xl drop-shadow-lg">
                        {isPrivacy ? 'Política de Privacidade' : 'Termos de Uso'}
                    </h1>
                    <p className="font-sans text-sm text-cream/60 mt-4">Última atualização: 01 de Março de 2026</p>
                </motion.div>
            </section>

            {/* Content */}
            <main className="w-full max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-16">
                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
                    {isPrivacy ? <PrivacyContent /> : <TermsContent />}
                </motion.div>

                <div className="mt-16 text-center">
                    <Link to="/" className="inline-flex items-center gap-2 px-8 py-4 rounded-[2.5rem] font-sans text-base font-bold border border-border/50 text-primary hover:border-gold/50 hover:text-gold transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
                        Voltar ao Início
                    </Link>
                </div>
            </main>

            <Footer />
        </div>
    );
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="font-display text-2xl font-bold text-primary mt-10 mb-4">{children}</h2>
);

const P = ({ children }: { children: React.ReactNode }) => (
    <p className="font-sans text-base text-primary/75 leading-relaxed mb-4">{children}</p>
);

const PrivacyContent = () => (
    <div>
        <P>A Advocacia Premium ("nós", "nosso") está comprometida em proteger a privacidade dos visitantes do nosso site e dos nossos clientes. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).</P>

        <SectionTitle>1. Dados Coletados</SectionTitle>
        <P>Coletamos os seguintes tipos de dados pessoais quando você interage com nosso site:</P>
        <ul className="list-disc list-inside font-sans text-primary/75 mb-4 space-y-1 pl-4">
            <li><strong>Dados de identificação:</strong> nome completo, e-mail e telefone, fornecidos voluntariamente através do formulário de contato.</li>
            <li><strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas acessadas e tempo de permanência, coletados automaticamente por cookies e ferramentas de análise.</li>
            <li><strong>Dados de comunicação:</strong> mensagens enviadas através do formulário de contato ou WhatsApp.</li>
        </ul>

        <SectionTitle>2. Finalidade do Tratamento</SectionTitle>
        <P>Utilizamos seus dados pessoais exclusivamente para as seguintes finalidades:</P>
        <ul className="list-disc list-inside font-sans text-primary/75 mb-4 space-y-1 pl-4">
            <li>Responder a solicitações de contato e agendamento de reuniões.</li>
            <li>Prestar serviços jurídicos contratados.</li>
            <li>Enviar comunicações relevantes sobre alterações legislativas (mediante seu consentimento).</li>
            <li>Melhorar a experiência de navegação no site.</li>
            <li>Cumprir obrigações legais e regulatórias.</li>
        </ul>

        <SectionTitle>3. Base Legal</SectionTitle>
        <P>O tratamento de dados é realizado com base no consentimento do titular (Art. 7º, I, LGPD), na execução de contrato (Art. 7º, V) e no legítimo interesse do controlador (Art. 7º, IX), conforme aplicável a cada situação.</P>

        <SectionTitle>4. Compartilhamento de Dados</SectionTitle>
        <P>Não compartilhamos, vendemos ou alugamos seus dados pessoais a terceiros. Os dados podem ser compartilhados apenas com:</P>
        <ul className="list-disc list-inside font-sans text-primary/75 mb-4 space-y-1 pl-4">
            <li>Prestadores de serviços essenciais (hospedagem, e-mail), sob cláusulas de confidencialidade.</li>
            <li>Autoridades judiciais ou administrativas, quando exigido por lei.</li>
        </ul>

        <SectionTitle>5. Segurança dos Dados</SectionTitle>
        <P>Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda, alteração ou destruição, incluindo criptografia SSL/TLS em todas as comunicações e controles de acesso restritos.</P>

        <SectionTitle>6. Direitos do Titular</SectionTitle>
        <P>Em conformidade com a LGPD, você tem direito a: acessar seus dados; solicitar correção de dados incompletos ou desatualizados; solicitar a exclusão de dados desnecessários; revogar o consentimento a qualquer momento; e solicitar a portabilidade dos dados. Para exercer seus direitos, entre em contato pelo e-mail contato@advocaciapremium.com.br.</P>

        <SectionTitle>7. Cookies</SectionTitle>
        <P>Nosso site utiliza cookies estritamente necessários para o funcionamento do site e cookies de análise para compreender o uso do site. Você pode gerenciar suas preferências de cookies nas configurações do seu navegador.</P>

        <SectionTitle>8. Retenção de Dados</SectionTitle>
        <P>Seus dados são mantidos pelo tempo necessário para cumprir as finalidades descritas nesta política, ou conforme exigido por obrigações legais. Dados de clientes são mantidos pelo período de prescrição legal aplicável ao serviço prestado.</P>
    </div>
);

const TermsContent = () => (
    <div>
        <P>Bem-vindo ao site da Advocacia Premium. Ao acessar e utilizar este site, você concorda com os termos e condições aqui descritos. Leia atentamente antes de prosseguir.</P>

        <SectionTitle>1. Identificação</SectionTitle>
        <P>Este site é de propriedade e operado por Advocacia Premium, escritório de advocacia inscrito na OAB/SP, com sede na Av. Paulista, 1578 — Sala 1201, São Paulo - SP, CEP 01310-200.</P>

        <SectionTitle>2. Natureza do Conteúdo</SectionTitle>
        <P>O conteúdo publicado neste site — incluindo artigos, informações sobre áreas de atuação e materiais educativos — tem caráter exclusivamente informativo e não constitui aconselhamento jurídico. A relação advogado-cliente somente se estabelece mediante contrato formal de prestação de serviços.</P>

        <SectionTitle>3. Propriedade Intelectual</SectionTitle>
        <P>Todo o conteúdo deste site — textos, imagens, logotipos, design, layout e código-fonte — é protegido por direitos autorais e de propriedade intelectual. É proibida a reprodução, distribuição ou utilização de qualquer material sem autorização prévia e expressa.</P>

        <SectionTitle>4. Uso do Site</SectionTitle>
        <P>O visitante compromete-se a utilizar o site de forma lícita, respeitando a legislação aplicável e os direitos de terceiros. É vedado: utilizar o site para fins ilícitos; tentar acessar áreas restritas; transmitir vírus ou códigos maliciosos; ou coletar dados de outros usuários.</P>

        <SectionTitle>5. Formulário de Contato</SectionTitle>
        <P>As informações enviadas através do formulário de contato serão tratadas de forma confidencial e utilizadas exclusivamente para responder à sua solicitação. O sigilo profissional inerente à advocacia é garantido desde o primeiro contato.</P>

        <SectionTitle>6. Links Externos</SectionTitle>
        <P>Este site pode conter links para sites externos. Não nos responsabilizamos pelo conteúdo, práticas de privacidade ou disponibilidade desses sites. O acesso a sites de terceiros é de inteira responsabilidade do usuário.</P>

        <SectionTitle>7. Limitação de Responsabilidade</SectionTitle>
        <P>A Advocacia Premium não se responsabiliza por danos diretos ou indiretos decorrentes do uso ou impossibilidade de uso deste site, incluindo, mas não se limitando a, erros, omissões, interrupções, vírus ou falhas de funcionamento.</P>

        <SectionTitle>8. Alterações nos Termos</SectionTitle>
        <P>Reservamo-nos o direito de alterar estes termos a qualquer momento, publicando a versão atualizada nesta página. Recomendamos a consulta periódica desta seção. A data da última atualização será sempre indicada no topo da página.</P>

        <SectionTitle>9. Legislação Aplicável</SectionTitle>
        <P>Estes Termos de Uso são regidos pela legislação brasileira. Fica eleito o foro da Comarca de São Paulo - SP para dirimir quaisquer controvérsias decorrentes da utilização deste site.</P>
    </div>
);

export default LegalPage;
