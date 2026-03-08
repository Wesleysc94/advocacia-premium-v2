import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import PageLayout from '@/components/cinematic/PageLayout';

/* ──────────────────────────────────────────────
   Practice Area data — generic legal content
   ────────────────────────────────────────────── */

interface PracticeAreaData {
    title: string;
    tag: string;
    subtitle: string;
    heroImage: string;
    intro: string[];
    services: { title: string; description: string }[];
    process: { step: string; title: string; description: string }[];
    faqs: { question: string; answer: string }[];
}

const practiceAreasData: Record<string, PracticeAreaData> = {
    'direito-empresarial': {
        title: 'Direito Empresarial',
        tag: 'Área de Atuação',
        subtitle: 'Assessoria jurídica estratégica para empresas que buscam segurança, crescimento e conformidade.',
        heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2069',
        intro: [
            'O Direito Empresarial é o ramo jurídico que regula a atividade econômica organizada para a produção ou circulação de bens e serviços. Em um cenário de negócios cada vez mais complexo e regulamentado, contar com assessoria jurídica especializada não é um luxo — é uma necessidade estratégica.',
            'Nosso escritório atua com profundidade técnica em todas as fases da vida empresarial, desde a constituição societária até processos de fusões, aquisições e reestruturação corporativa. Trabalhamos lado a lado com empresários e gestores para que cada decisão esteja amparada por uma base jurídica sólida.',
            'Com mais de 15 anos de experiência no mercado, já assessoramos centenas de empresas de diferentes portes e segmentos, sempre com foco em resultados concretos e proteção patrimonial.',
        ],
        services: [
            { title: 'Constituição e Alteração Societária', description: 'Abertura de empresas, elaboração de contratos sociais, acordos de sócios, cisões, fusões e incorporações com segurança jurídica.' },
            { title: 'Contratos Comerciais', description: 'Elaboração, revisão e negociação de contratos de prestação de serviços, fornecimento, distribuição, franquia, licenciamento e parcerias estratégicas.' },
            { title: 'Governança Corporativa', description: 'Implementação de boas práticas de governança, compliance empresarial, códigos de conduta e políticas internas alinhadas à legislação vigente.' },
            { title: 'Fusões e Aquisições (M&A)', description: 'Assessoria completa em processos de compra e venda de empresas, due diligence jurídica, avaliação de riscos e estruturação de operações societárias.' },
            { title: 'Recuperação Judicial e Falência', description: 'Atuação em processos de recuperação judicial e extrajudicial, representação de credores e devedores, e elaboração de planos de reestruturação.' },
            { title: 'Propriedade Intelectual', description: 'Registro e proteção de marcas, patentes, direitos autorais, segredos industriais e combate à concorrência desleal.' },
        ],
        process: [
            { step: '01', title: 'Diagnóstico Empresarial', description: 'Analisamos a situação atual da empresa, identificando riscos jurídicos, oportunidades de otimização e necessidades prioritárias.' },
            { step: '02', title: 'Planejamento Estratégico', description: 'Desenvolvemos um plano de ação personalizado, com cronograma, metas claras e estratégias definidas para cada frente jurídica.' },
            { step: '03', title: 'Execução e Implementação', description: 'Colocamos o plano em prática, elaborando documentos, negociando acordos e executando as ações jurídicas necessárias.' },
            { step: '04', title: 'Acompanhamento Contínuo', description: 'Monitoramos os resultados, ajustamos a estratégia conforme necessário e mantemos a empresa sempre protegida e atualizada.' },
        ],
        faqs: [
            { question: 'Qual a importância de ter um advogado empresarial?', answer: 'Um advogado empresarial previne litígios, otimiza operações societárias, garante conformidade regulatória e protege o patrimônio dos sócios. A atuação preventiva reduz significativamente custos com processos judiciais no futuro.' },
            { question: 'Quando devo buscar assessoria para minha empresa?', answer: 'Idealmente, desde a constituição da empresa. Mas qualquer momento é válido: antes de assinar contratos importantes, em processos de expansão, ao enfrentar conflitos societários ou ao planejar uma reestruturação.' },
            { question: 'Vocês atendem empresas de que porte?', answer: 'Atendemos desde startups e pequenas empresas até grupos empresariais e multinacionais. Nossa abordagem é sempre personalizada, adaptada ao porte, segmento e necessidades específicas de cada cliente.' },
            { question: 'Como funciona o contrato de assessoria?', answer: 'Oferecemos diferentes modalidades: consultoria pontual para demandas específicas ou contratos de assessoria mensal, que incluem atendimento ilimitado, análise de contratos e suporte jurídico contínuo.' },
        ],
    },

    'direito-civil': {
        title: 'Direito Civil',
        tag: 'Área de Atuação',
        subtitle: 'Proteção patrimonial, contratos seguros e resolução de conflitos com excelência técnica.',
        heroImage: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=2069',
        intro: [
            'O Direito Civil é o pilar fundamental das relações jurídicas privadas. Ele regula desde os contratos mais simples do cotidiano até as questões patrimoniais mais complexas envolvendo família, herança e responsabilidade civil.',
            'Nossa equipe oferece assessoria jurídica completa em todas as vertentes do Direito Civil, com uma abordagem que prioriza a resolução consensual de conflitos sem abrir mão da firmeza na defesa dos interesses de nossos clientes quando necessário.',
            'Entendemos que cada caso envolve não apenas questões jurídicas, mas também aspectos emocionais e pessoais importantes. Por isso, atuamos com sensibilidade, ética e total confidencialidade.',
        ],
        services: [
            { title: 'Direito Contratual', description: 'Elaboração, revisão e execução de contratos civis — compra e venda, locação, empréstimo, prestação de serviços e contratos atípicos com segurança jurídica.' },
            { title: 'Responsabilidade Civil', description: 'Ações de indenização por danos materiais, morais e estéticos, acidentes de trânsito, erro médico, relações de consumo e vícios construtivos.' },
            { title: 'Direito Imobiliário', description: 'Assessoria em compra e venda de imóveis, usucapião, regularização fundiária, incorporações imobiliárias, locações e disputas possessórias.' },
            { title: 'Direito de Família', description: 'Divórcio, pensão alimentícia, guarda de filhos, regulamentação de visitas, união estável, investigação de paternidade e adoção.' },
            { title: 'Direito Sucessório', description: 'Inventário judicial e extrajudicial, testamentos, planejamento sucessório, partilha de bens e administração de espólio.' },
            { title: 'Direito do Consumidor', description: 'Defesa de direitos em relações de consumo, recalls, cobranças indevidas, vícios de produto e serviço, e ações coletivas.' },
        ],
        process: [
            { step: '01', title: 'Análise do Caso', description: 'Estudamos cada detalhe da situação apresentada, analisamos documentos e identificamos as melhores estratégias jurídicas disponíveis.' },
            { step: '02', title: 'Orientação Preventiva', description: 'Sempre que possível, buscamos soluções extrajudiciais: mediação, negociação direta e acordos que evitem o desgaste de um processo.' },
            { step: '03', title: 'Atuação Judicial', description: 'Quando a via judicial é necessária, atuamos com rigor técnico, apresentando uma tese sólida e acompanhando cada fase do processo de perto.' },
            { step: '04', title: 'Resolução e Acompanhamento', description: 'Garantimos o cumprimento das decisões judiciais, orientamos sobre próximos passos e mantemos o cliente informado até a conclusão definitiva.' },
        ],
        faqs: [
            { question: 'Quanto tempo demora um processo civil?', answer: 'O tempo varia conforme a complexidade do caso, a comarca e a instância. Processos mais simples podem ser resolvidos em meses, enquanto litígios complexos podem se estender por alguns anos. Sempre buscamos a solução mais ágil possível.' },
            { question: 'É possível resolver meu caso sem ir à Justiça?', answer: 'Sim, muitos casos podem ser resolvidos por mediação, conciliação ou acordos extrajudiciais. Priorizamos essas alternativas sempre que são viáveis e vantajosas para o cliente.' },
            { question: 'Como funciona o inventário extrajudicial?', answer: 'Quando todos os herdeiros são maiores, capazes e estão de acordo com a partilha, o inventário pode ser feito em cartório de forma muito mais rápida — geralmente em semanas, ao invés de meses ou anos.' },
        ],
    },

    'direito-tributario': {
        title: 'Direito Tributário',
        tag: 'Área de Atuação',
        subtitle: 'Planejamento fiscal inteligente e defesa eficaz contra cobranças indevidas.',
        heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2069',
        intro: [
            'O sistema tributário brasileiro é um dos mais complexos do mundo, com dezenas de tributos federais, estaduais e municipais que impactam diretamente a saúde financeira de empresas e profissionais. Nesse cenário, o planejamento tributário deixa de ser opcional e se torna uma ferramenta essencial de competitividade.',
            'Nosso escritório oferece consultoria tributária completa, ajudando empresas a otimizar sua carga fiscal de forma legal, segura e estratégica. Atuamos tanto na esfera consultiva — com planejamento e prevenção — quanto na contenciosa, defendendo nossos clientes em processos administrativos e judiciais.',
            'Acompanhamos de perto as constantes mudanças na legislação tributária brasileira, incluindo a Reforma Tributária em curso, para garantir que nossos clientes estejam sempre atualizados e preparados.',
        ],
        services: [
            { title: 'Planejamento Tributário', description: 'Análise da estrutura fiscal da empresa, identificação de oportunidades de economia tributária e implementação de estratégias legais para redução da carga fiscal.' },
            { title: 'Defesa em Processos Fiscais', description: 'Representação em autuações fiscais, impugnações, recursos administrativos junto ao CARF e processos judiciais tributários em todas as instâncias.' },
            { title: 'Recuperação de Créditos Tributários', description: 'Identificação e recuperação de tributos pagos indevidamente ou a maior, incluindo restituição, compensação e aproveitamento de créditos fiscais.' },
            { title: 'Consultoria sobre Regimes Tributários', description: 'Assessoria na escolha e migração entre regimes tributários (Simples Nacional, Lucro Presumido, Lucro Real), com análise comparativa e projeções financeiras.' },
            { title: 'Compliance Fiscal', description: 'Implementação de programas de conformidade fiscal, revisão de obrigações acessórias, adequação à legislação e prevenção de autuações.' },
            { title: 'Reforma Tributária', description: 'Análise dos impactos da Reforma Tributária no seu negócio, planejamento de transição e adaptação às novas regras do IBS e CBS.' },
        ],
        process: [
            { step: '01', title: 'Diagnóstico Fiscal', description: 'Realizamos uma auditoria completa da situação tributária, identificando contingências, riscos e oportunidades de economia fiscal.' },
            { step: '02', title: 'Estratégia Personalizada', description: 'Desenvolvemos um plano tributário sob medida, considerando o porte, segmento e objetivos específicos do cliente.' },
            { step: '03', title: 'Implementação Segura', description: 'Executamos o planejamento com segurança jurídica, garantindo conformidade com a legislação e documentação adequada de cada operação.' },
            { step: '04', title: 'Monitoramento e Atualização', description: 'Acompanhamos continuamente as mudanças legislativas e jurisprudenciais, ajustando a estratégia para manter a otimização fiscal.' },
        ],
        faqs: [
            { question: 'Planejamento tributário é legal?', answer: 'Sim, o planejamento tributário — também chamado de elisão fiscal — é uma prática totalmente legal e legítima. Ele consiste em utilizar os mecanismos previstos na própria legislação para reduzir a carga tributária. É diferente de evasão fiscal, que é ilegal.' },
            { question: 'Quanto posso economizar com planejamento tributário?', answer: 'A economia varia conforme o porte e segmento da empresa, mas é comum alcançar reduções de 15% a 40% na carga tributária total. Realizamos um diagnóstico gratuito para apresentar uma estimativa personalizada.' },
            { question: 'O que muda com a Reforma Tributária?', answer: 'A Reforma Tributária extinguirá cinco tributos (PIS, COFINS, IPI, ICMS e ISS), substituindo-os pelo IBS e CBS. A transição será gradual, com previsão de conclusão em 2033. Cada empresa será impactada de forma diferente, e é essencial planejar a transição com antecedência.' },
            { question: 'Posso recuperar tributos pagos indevidamente?', answer: 'Sim. Muitas empresas têm créditos tributários que desconhecem. Tributos pagos a maior ou indevidamente nos últimos 5 anos podem ser restituídos ou compensados com tributos futuros.' },
        ],
    },

    'direito-trabalhista': {
        title: 'Direito Trabalhista',
        tag: 'Área de Atuação',
        subtitle: 'Gestão preventiva de relações de trabalho e defesa estratégica em litígios.',
        heroImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=2069',
        intro: [
            'As relações de trabalho são regidas por um conjunto extenso e dinâmico de normas que impactam diretamente o dia a dia de empresas e profissionais. Do contrato de admissão à rescisão, passando por questões de jornada, benefícios e segurança do trabalho, cada decisão pode ter consequências jurídicas significativas.',
            'Nosso escritório atua de forma estratégica no Direito Trabalhista, oferecendo tanto consultoria preventiva — para evitar passivos e litígios — quanto representação contenciosa em reclamações trabalhistas e processos administrativos.',
            'Nosso diferencial está na combinação de conhecimento técnico sólido com visão empresarial. Entendemos que cada empresa tem suas particularidades e desenvolvemos soluções jurídicas que respeitam a legislação sem comprometer a eficiência operacional.',
        ],
        services: [
            { title: 'Consultoria Trabalhista Preventiva', description: 'Análise de práticas trabalhistas, revisão de contratos, adequação de jornadas e políticas internas para reduzir riscos de passivos trabalhistas.' },
            { title: 'Contencioso Trabalhista', description: 'Representação de empresas em reclamações trabalhistas, audiências, recursos e execuções na Justiça do Trabalho em todas as instâncias.' },
            { title: 'Compliance Trabalhista', description: 'Implementação de programas de conformidade trabalhista, canais de denúncia, políticas antiassédio e adequação às normas regulamentadoras.' },
            { title: 'Negociações Coletivas', description: 'Assessoria em negociações com sindicatos, elaboração e análise de acordos e convenções coletivas de trabalho.' },
            { title: 'Terceirização e Trabalho Remoto', description: 'Estruturação jurídica de contratos de terceirização, pejotização, teletrabalho e trabalho híbrido em conformidade com a legislação.' },
            { title: 'Rescisões e Acordos', description: 'Orientação em processos rescisórios, cálculos trabalhistas, homologação de rescisões e elaboração de acordos extrajudiciais.' },
        ],
        process: [
            { step: '01', title: 'Auditoria Trabalhista', description: 'Mapeamos todas as práticas trabalhistas da empresa, identificando irregularidades, passivos ocultos e pontos de atenção prioritários.' },
            { step: '02', title: 'Plano de Adequação', description: 'Elaboramos um plano detalhado para corrigir irregularidades, implementar boas práticas e criar uma cultura de conformidade trabalhista.' },
            { step: '03', title: 'Defesa Especializada', description: 'Quando há litígios, atuamos com uma defesa técnica robusta, utilizando jurisprudência atualizada e estratégias processuais eficazes.' },
            { step: '04', title: 'Prevenção Contínua', description: 'Mantemos um acompanhamento permanente para prevenir novos conflitos, atualizar políticas internas e treinar equipes sobre melhores práticas.' },
        ],
        faqs: [
            { question: 'Como posso reduzir o risco de ações trabalhistas?', answer: 'A melhor estratégia é a prevenção: manter documentação organizada, contratos bem redigidos, jornadas controladas e políticas internas claras. Nossa consultoria preventiva identifica e corrige vulnerabilidades antes que se transformem em processos.' },
            { question: 'Minha empresa pode ser responsabilizada por terceirizados?', answer: 'Sim. A empresa tomadora pode ter responsabilidade subsidiária — e em alguns casos solidária — pelas obrigações trabalhistas dos terceirizados. É fundamental estruturar a terceirização com contratos adequados e fiscalização contínua.' },
            { question: 'É obrigatório ter programa de compliance trabalhista?', answer: 'Embora nem sempre seja obrigatório por lei, o compliance trabalhista é altamente recomendado. Além de reduzir passivos, ele demonstra boa-fé da empresa e pode ser considerado como atenuante em eventuais ações judiciais.' },
        ],
    },

    'consultoria-juridica': {
        title: 'Consultoria Jurídica',
        tag: 'Área de Atuação',
        subtitle: 'Suporte jurídico permanente para decisões mais seguras e assertivas.',
        heroImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2069',
        intro: [
            'A Consultoria Jurídica vai além da resolução de problemas pontuais. É um serviço contínuo e proativo que tem como objetivo antecipar cenários, identificar riscos e criar oportunidades para empresas e profissionais que precisam tomar decisões amparadas pelo Direito.',
            'Nosso escritório oferece consultoria permanente com atendimento prioritário, canal direto com advogados especializados e análise regular de contratos, operações e cenários regulatórios. É como ter um departamento jurídico completo sem os custos fixos de uma equipe interna.',
            'Atendemos empresas de todos os portes, desde startups em fase inicial até grupos empresariais consolidados. Cada contrato de consultoria é desenhado sob medida, respeitando as necessidades e o orçamento de cada cliente.',
        ],
        services: [
            { title: 'Assessoria Jurídica Permanente', description: 'Canal direto com advogados especializados para consultas ilimitadas, análise de demandas e orientação jurídica sempre que necessário.' },
            { title: 'Análise de Contratos', description: 'Revisão, elaboração e negociação de contratos de qualquer natureza, garantindo que os interesses do cliente estejam sempre protegidos.' },
            { title: 'Conformidade Regulatória', description: 'Monitoramento de alterações legislativas que impactam o negócio, adequação às normas setoriais e implementação de boas práticas de compliance.' },
            { title: 'Análise de Riscos Jurídicos', description: 'Mapeamento de contingências, avaliação de riscos em operações, investimentos e decisões estratégicas com pareceres fundamentados.' },
            { title: 'Due Diligence', description: 'Investigação jurídica completa em processos de compra, venda, parceria ou investimento, identificando riscos ocultos e passivos potenciais.' },
            { title: 'Treinamento e Capacitação', description: 'Workshops e treinamentos para equipes sobre temas jurídicos relevantes: LGPD, contratos, compliance, Direito do consumidor e mais.' },
        ],
        process: [
            { step: '01', title: 'Reunião Inicial', description: 'Conhecemos a empresa, suas operações, desafios e objetivos para desenhar um plano de consultoria totalmente personalizado.' },
            { step: '02', title: 'Estruturação do Suporte', description: 'Definimos escopo, canais de comunicação, frequência de reuniões e métricas de acompanhamento para garantir um serviço eficiente.' },
            { step: '03', title: 'Atuação Proativa', description: 'Não esperamos os problemas aparecerem. Monitoramos riscos, analisamos contratos e antecipamos cenários para manter a empresa segura.' },
            { step: '04', title: 'Relatórios Periódicos', description: 'Entregamos relatórios regulares com status dos assuntos jurídicos, alertas de mudanças legislativas e recomendações estratégicas.' },
        ],
        faqs: [
            { question: 'Qual a diferença entre consultoria e assessoria jurídica?', answer: 'Na prática, os termos são usados de forma similar. A consultoria tende a ter um caráter mais estratégico e preventivo, enquanto a assessoria pode incluir também a execução de atos jurídicos. Em nosso escritório, oferecemos ambas as vertentes de forma integrada.' },
            { question: 'Preciso de um departamento jurídico interno?', answer: 'Nem sempre. A consultoria jurídica externa pode exercer todas as funções de um departamento interno com vantagens como: maior especialização, redução de custos fixos, independência nas recomendações e acesso a uma equipe multidisciplinar.' },
            { question: 'Como é cobrada a consultoria?', answer: 'Oferecemos planos mensais com valor fixo, que incluem quantidade definida de horas de atendimento, análises de contratos e consultas. Também realizamos projetos pontuais com orçamento fechado. Solicite uma proposta personalizada.' },
            { question: 'Vocês atendem empresas de outros estados?', answer: 'Sim. Atendemos clientes em todo o território nacional, utilizando ferramentas digitais para comunicação, assinatura de documentos e reuniões. Quando necessário, contamos com correspondentes jurídicos nas principais comarcas do país.' },
        ],
    },
};

/* ──────────────────────────────────────────────
   Page Component
   ────────────────────────────────────────────── */

const PracticeAreaPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const data = slug ? practiceAreasData[slug] : undefined;

    if (!data) return <Navigate to="/" replace />;

    return (
        <PageLayout
            title={data.title}
            subtitle={data.subtitle}
            tag={data.tag}
            heroImage={data.heroImage}
            breadcrumb={[
                { label: 'Início', href: '/' },
                { label: 'Áreas de Atuação', href: '/#atuacao' },
                { label: data.title },
            ]}
        >
            {/* Introduction */}
            <div className="mb-16">
                {data.intro.map((p, i) => (
                    <p key={i} className="font-sans text-lg text-primary/80 leading-relaxed mb-6 last:mb-0">
                        {p}
                    </p>
                ))}
            </div>

            {/* Services */}
            <div className="mb-20">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-[1px] bg-gold" />
                    <span className="font-sans text-xs text-gold uppercase tracking-widest font-semibold">Nossos Serviços</span>
                </div>
                <h2 className="font-serif-drama text-3xl md:text-4xl text-primary mb-10">
                    O que fazemos por você.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data.services.map((s, i) => (
                        <div key={i} className="bg-card border border-border/30 rounded-2xl p-6 hover:border-gold/40 transition-colors duration-300 shadow-sm hover:shadow-md">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0 mt-1 border border-gold/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4" /><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /></svg>
                                </div>
                                <div>
                                    <h3 className="font-sans font-bold text-lg text-primary mb-2">{s.title}</h3>
                                    <p className="font-sans text-sm text-primary/70 leading-relaxed">{s.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Process */}
            <div className="mb-20">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-[1px] bg-gold" />
                    <span className="font-sans text-xs text-gold uppercase tracking-widest font-semibold">Como Trabalhamos</span>
                </div>
                <h2 className="font-serif-drama text-3xl md:text-4xl text-primary mb-10">
                    Nosso processo de trabalho.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.process.map((p, i) => (
                        <div key={i} className="relative bg-card border border-border/30 rounded-2xl p-6 shadow-sm">
                            <span className="font-sans text-5xl font-bold text-gold/15 absolute top-4 right-6">{p.step}</span>
                            <div className="relative z-10">
                                <h3 className="font-sans font-bold text-base text-primary mb-3 mt-8">{p.title}</h3>
                                <p className="font-sans text-sm text-primary/70 leading-relaxed">{p.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* FAQ */}
            <div className="mb-8">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-[1px] bg-gold" />
                    <span className="font-sans text-xs text-gold uppercase tracking-widest font-semibold">Perguntas Frequentes</span>
                </div>
                <h2 className="font-serif-drama text-3xl md:text-4xl text-primary mb-10">
                    Dúvidas comuns.
                </h2>
                <div className="flex flex-col gap-4">
                    {data.faqs.map((faq, i) => (
                        <details key={i} className="bg-card border border-border/30 rounded-2xl overflow-hidden group shadow-sm">
                            <summary className="px-6 py-5 cursor-pointer font-sans font-bold text-primary hover:text-gold transition-colors list-none flex items-center justify-between">
                                <span>{faq.question}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold shrink-0 ml-4 transition-transform group-open:rotate-180"><path d="m6 9 6 6 6-6" /></svg>
                            </summary>
                            <div className="px-6 pb-5 font-sans text-sm text-primary/70 leading-relaxed border-t border-border/20 pt-4">
                                {faq.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </PageLayout>
    );
};

export default PracticeAreaPage;
