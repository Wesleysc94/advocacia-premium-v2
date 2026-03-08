import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import PageLayout from '@/components/cinematic/PageLayout';

/* ──────────────────────────────────────────────
   Blog article data — informative legal content
   ────────────────────────────────────────────── */

interface BlogArticleData {
    title: string;
    category: string;
    date: string;
    author: string;
    authorRole: string;
    readTime: string;
    heroImage: string;
    summary: string;
    sections: { heading: string; paragraphs: string[] }[];
    conclusion: string;
    relatedSlugs: string[];
}

const blogArticlesData: Record<string, BlogArticleData> = {
    'nova-lei-licitacoes-2026': {
        title: 'Nova Lei de Licitações: o que muda para empresas em 2026',
        category: 'Direito Empresarial',
        date: '28 de Fevereiro de 2026',
        author: 'Dr. Ricardo Campos',
        authorRole: 'Especialista em Direito Empresarial',
        readTime: '8 min de leitura',
        heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=2069',
        summary: 'Entenda as principais alterações na legislação de contratações públicas e como sua empresa pode se preparar para as novas exigências de compliance e transparência.',
        sections: [
            {
                heading: 'O cenário atual das contratações públicas',
                paragraphs: [
                    'A Lei nº 14.133/2021, conhecida como Nova Lei de Licitações e Contratos Administrativos, trouxe mudanças significativas no regime de contratações públicas no Brasil. Com o encerramento definitivo da vigência da antiga Lei 8.666/93, todas as licitações e contratos públicos passaram a ser regidos exclusivamente pela nova legislação.',
                    'Para as empresas que fornecem bens ou serviços ao poder público, compreender essas mudanças não é apenas uma questão de conformidade legal — é uma vantagem competitiva. Organizações que se antecipam às novas exigências têm maiores chances de sucesso nos processos licitatórios.',
                ],
            },
            {
                heading: 'Principais mudanças da nova lei',
                paragraphs: [
                    'Entre as alterações mais impactantes, destacam-se a introdução do Diálogo Competitivo como nova modalidade de licitação, a obrigatoriedade do Portal Nacional de Contratações Públicas (PNCP) para divulgação de editais, e a exigência reforçada de programas de integridade e compliance para contratos de grande vulto.',
                    'A nova lei também estabelece critérios mais rigorosos para a qualificação técnica e econômico-financeira dos licitantes, com ênfase na capacidade de execução e na saúde financeira das empresas. Além disso, foram ampliadas as hipóteses de contratação direta, com novas regras para dispensa e inexigibilidade de licitação.',
                    'Outro ponto relevante é a introdução do seguro-garantia como alternativa à caução em dinheiro, o que pode representar uma oportunidade para empresas com boa saúde financeira e relacionamento com seguradoras.',
                ],
            },
            {
                heading: 'Impactos nos programas de compliance',
                paragraphs: [
                    'A nova legislação dá especial atenção ao compliance. Empresas que participam de licitações acima de determinados valores agora são obrigadas a implementar e manter programas de integridade. Isso inclui códigos de ética, canais de denúncia, treinamentos regulares e mecanismos de controle interno.',
                    'Para empresas que já possuem programas de compliance estruturados, a nova lei representa uma oportunidade de diferenciação. Já para aquelas que ainda não iniciaram essa jornada, o momento de agir é agora — o descumprimento das exigências pode resultar em desclassificação nos processos licitatórios.',
                ],
            },
            {
                heading: 'Como sua empresa pode se preparar',
                paragraphs: [
                    'A preparação deve começar com uma auditoria interna completa: revisão de documentos, certificações, registros e contratos vigentes. Em seguida, é fundamental investir na capacitação da equipe e na implementação ou fortalecimento de programas de integridade.',
                    'Recomendamos também a criação de um departamento ou comitê dedicado a acompanhar processos licitatórios, garantindo que todas as propostas estejam em total conformidade com a nova legislação. Contar com assessoria jurídica especializada nesse processo faz toda a diferença.',
                ],
            },
        ],
        conclusion: 'A Nova Lei de Licitações representa uma modernização importante no regime de contratações públicas brasileiras. Empresas que investirem em conformidade, transparência e organização estarão melhor posicionadas para competir no mercado público. Se sua empresa participa ou pretende participar de licitações, é essencial contar com orientação jurídica especializada para navegar esse novo cenário com segurança.',
        relatedSlugs: ['planejamento-sucessorio', 'reforma-tributaria-2026'],
    },

    'planejamento-sucessorio': {
        title: 'Planejamento Sucessório: proteja seu patrimônio com antecedência',
        category: 'Direito Civil',
        date: '15 de Fevereiro de 2026',
        author: 'Dra. Ana Monteiro',
        authorRole: 'Especialista em Direito Civil e Sucessório',
        readTime: '10 min de leitura',
        heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2069',
        summary: 'A importância do planejamento patrimonial e as ferramentas jurídicas disponíveis para garantir a segurança da sua família e herdeiros.',
        sections: [
            {
                heading: 'Por que planejar a sucessão patrimonial?',
                paragraphs: [
                    'O planejamento sucessório é uma das decisões mais importantes — e frequentemente adiadas — que uma pessoa ou família pode tomar. Trata-se do conjunto de estratégias jurídicas utilizadas para organizar a transmissão de bens e direitos de uma pessoa para seus herdeiros ou beneficiários.',
                    'Sem planejamento adequado, a sucessão pode resultar em processos de inventário longos e custosos, disputas familiares, pagamento excessivo de impostos e até a perda de patrimônio construído ao longo de décadas. O planejamento preventivo evita esses cenários e garante que a vontade do titular seja respeitada.',
                ],
            },
            {
                heading: 'Instrumentos jurídicos do planejamento sucessório',
                paragraphs: [
                    'Existem diversas ferramentas jurídicas que podem ser utilizadas no planejamento sucessório, cada uma com vantagens e aplicações específicas. O testamento é o instrumento mais conhecido, permitindo que o titular disponha sobre até 50% de seu patrimônio (a parte disponível) da forma que desejar.',
                    'A doação em vida é outra estratégia muito utilizada, especialmente com reserva de usufruto. Ela permite a transferência antecipada de bens aos herdeiros, mantendo o doador no controle e uso dos bens durante toda a sua vida. Isso pode reduzir significativamente os custos e o tempo do inventário.',
                    'Para empresários, a constituição de uma holding familiar é uma das estratégias mais eficientes. Ela permite centralizar o patrimônio em uma pessoa jurídica, facilitando a gestão, a sucessão e o planejamento tributário. As quotas da holding podem ser doadas gradualmente aos herdeiros, com cláusulas de proteção.',
                ],
            },
            {
                heading: 'Aspectos tributários da sucessão',
                paragraphs: [
                    'O principal tributo que incide sobre a transmissão de bens por herança ou doação é o ITCMD (Imposto sobre Transmissão Causa Mortis e Doação), cuja alíquota varia de estado para estado, podendo chegar a até 8% sobre o valor dos bens transmitidos.',
                    'Com a Reforma Tributária, há a previsão de que o ITCMD passe a ter alíquotas progressivas em todos os estados, o que pode aumentar significativamente o custo tributário da sucessão para patrimônios maiores. Planejar com antecedência pode representar uma economia substancial, aproveitando as alíquotas atuais.',
                    'Além do ITCMD, é importante considerar o Imposto de Renda sobre ganho de capital em bens doados ou transmitidos por herança, especialmente imóveis e participações societárias que podem ter valorizado ao longo dos anos.',
                ],
            },
            {
                heading: 'Quando começar o planejamento?',
                paragraphs: [
                    'A resposta curta é: agora. Não é necessário ter um patrimônio milionário para se beneficiar do planejamento sucessório. Qualquer pessoa que possua bens — imóveis, investimentos, participações em empresas ou até mesmo bens de valor sentimental — pode e deve organizar sua sucessão.',
                    'O ideal é iniciar o processo enquanto o titular está em plenas condições de saúde e capacidade, podendo tomar decisões de forma livre e consciente. Quanto mais cedo o planejamento for iniciado, maiores as opções disponíveis e menores os custos envolvidos.',
                ],
            },
        ],
        conclusion: 'O planejamento sucessório não é um tema para pensar "quando eu ficar mais velho". É uma decisão que impacta diretamente a segurança financeira e a harmonia da sua família. Com as ferramentas jurídicas certas e a orientação de advogados especializados, é possível transmitir seu patrimônio de forma eficiente, econômica e ao longo dos anos. Agende uma consulta e saiba como começar.',
        relatedSlugs: ['nova-lei-licitacoes-2026', 'reforma-tributaria-2026'],
    },

    'reforma-tributaria-2026': {
        title: 'Reforma Tributária 2026: impactos no seu negócio',
        category: 'Direito Tributário',
        date: '02 de Março de 2026',
        author: 'Dr. Ricardo Campos',
        authorRole: 'Especialista em Direito Tributário',
        readTime: '12 min de leitura',
        heroImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2069',
        summary: 'Uma análise detalhada das mudanças tributárias previstas e estratégias para minimizar a carga fiscal de forma legal e eficiente.',
        sections: [
            {
                heading: 'O que é a Reforma Tributária?',
                paragraphs: [
                    'A Reforma Tributária aprovada pela Emenda Constitucional nº 132/2023 representa a maior transformação no sistema de tributos sobre o consumo no Brasil desde a Constituição de 1988. Ela substitui cinco tributos — PIS, COFINS, IPI, ICMS e ISS — por dois novos tributos: a CBS (Contribuição sobre Bens e Serviços), de competência federal, e o IBS (Imposto sobre Bens e Serviços), de competência compartilhada entre estados e municípios.',
                    'A transição será gradual, com início em 2026 e conclusão prevista para 2033. Durante esse período, os tributos antigos coexistirão com os novos, criando um cenário complexo que exige atenção redobrada das empresas.',
                ],
            },
            {
                heading: 'Cronograma de implementação',
                paragraphs: [
                    'Em 2026, a CBS e o IBS começam a ser cobrados com alíquotas-teste de 0,9% e 0,1%, respectivamente. Esse período serve para calibrar o sistema e identificar ajustes necessários antes da implementação plena.',
                    'A partir de 2027, a CBS entra em vigor na alíquota cheia, substituindo completamente PIS e COFINS. O IPI também será zerado para a maioria dos produtos, mantendo apenas alíquota reduzida para produtos com similar na Zona Franca de Manaus. O ICMS e o ISS serão reduzidos gradualmente entre 2029 e 2032, sendo totalmente extintos em 2033.',
                    'Esse cronograma escalonado significa que as empresas precisam se preparar desde já, adaptando seus sistemas de gestão, política de preços e planejamento fiscal para operar em dois regimes simultaneamente.',
                ],
            },
            {
                heading: 'Setores mais impactados',
                paragraphs: [
                    'O setor de serviços tende a ser um dos mais impactados pela reforma, uma vez que atualmente recolhe ISS com alíquotas entre 2% e 5%, e passará a recolher CBS + IBS com alíquota combinada estimada entre 25% e 28%. Embora haja a possibilidade de creditamento de insumos, empresas de serviços intensivas em mão de obra — onde os salários não geram créditos — podem sentir um aumento na carga tributária.',
                    'Por outro lado, os setores industrial e de comércio tendem a se beneficiar, já que o novo sistema permite o creditamento amplo de tributos pagos na cadeia, eliminando a cumulatividade que existia em diversas situações.',
                    'A agropecuária e a indústria de alimentos terão tratamento diferenciado, com alíquotas reduzidas e isenções para produtos da cesta básica nacional.',
                ],
            },
            {
                heading: 'Estratégias para minimizar os impactos',
                paragraphs: [
                    'O primeiro passo é realizar um diagnóstico tributário completo da sua empresa, comparando a carga tributária atual com a projetada sob o novo regime. Isso permite identificar antecipadamente se o impacto será positivo ou negativo e planejar medidas de mitigação.',
                    'Para empresas do setor de serviços, pode ser estratégico reavaliar a estrutura de custos, buscando aumentar a proporção de insumos que gerem créditos tributários. A revisão de contratos com fornecedores também é fundamental para garantir o repasse adequado dos créditos na cadeia.',
                    'A escolha do regime tributário (Simples Nacional, Lucro Presumido ou Lucro Real) ganha ainda mais importância no contexto da reforma. Empresas que hoje optam pelo Lucro Presumido podem se beneficiar da migração para o Lucro Real, que permite o aproveitamento integral dos créditos de CBS e IBS.',
                ],
            },
        ],
        conclusion: 'A Reforma Tributária é uma realidade que já está em curso e impactará todas as empresas brasileiras. A complexidade da transição — com dois sistemas tributários coexistindo por quase uma década — exige planejamento cuidadoso e acompanhamento especializado. Empresas que começarem a se preparar agora estarão em vantagem competitiva significativa. Nossa equipe está pronta para auxiliar na análise de impactos e na implementação de estratégias para que sua empresa atravesse essa transição com segurança.',
        relatedSlugs: ['nova-lei-licitacoes-2026', 'planejamento-sucessorio'],
    },
};

/* helper: map slug -> data for related articles */
const allSlugs = Object.keys(blogArticlesData);

/* ──────────────────────────────────────────────
   Page Component
   ────────────────────────────────────────────── */

const BlogArticlePage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const data = slug ? blogArticlesData[slug] : undefined;

    if (!data) return <Navigate to="/" replace />;

    const relatedArticles = data.relatedSlugs
        .filter((s) => blogArticlesData[s])
        .map((s) => ({ slug: s, ...blogArticlesData[s] }));

    return (
        <PageLayout
            title={data.title}
            subtitle={data.summary}
            tag={data.category}
            heroImage={data.heroImage}
            breadcrumb={[
                { label: 'Início', href: '/' },
                { label: 'Blog', href: '/#blog' },
                { label: data.title },
            ]}
        >
            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-4 mb-12 pb-8 border-b border-border/30">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center border border-gold/20">
                        <span className="font-sans font-bold text-gold text-sm">{data.author.split(' ').map(n => n[0]).join('').slice(0, 2)}</span>
                    </div>
                    <div>
                        <div className="font-sans font-bold text-sm text-primary">{data.author}</div>
                        <div className="font-sans text-xs text-primary/50">{data.authorRole}</div>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-xs text-primary/50 font-sans">
                    <span className="flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
                        {data.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                        {data.readTime}
                    </span>
                    <span className="bg-gold/10 text-gold px-3 py-1 rounded-full font-semibold uppercase tracking-wider">{data.category}</span>
                </div>
            </div>

            {/* Article Content */}
            <article className="mb-16">
                {data.sections.map((section, i) => (
                    <div key={i} className="mb-10">
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-6">{section.heading}</h2>
                        {section.paragraphs.map((p, j) => (
                            <p key={j} className="font-sans text-lg text-primary/80 leading-relaxed mb-5 last:mb-0">
                                {p}
                            </p>
                        ))}
                    </div>
                ))}

                {/* Conclusion */}
                <div className="bg-card border-l-4 border-gold rounded-r-2xl p-6 md:p-8 mt-12 shadow-sm">
                    <h3 className="font-sans font-bold text-lg text-primary mb-3 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--gold))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                        Conclusão
                    </h3>
                    <p className="font-sans text-primary/80 leading-relaxed">{data.conclusion}</p>
                </div>
            </article>

            {/* Related articles */}
            {relatedArticles.length > 0 && (
                <div className="mb-8">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-[1px] bg-gold" />
                        <span className="font-sans text-xs text-gold uppercase tracking-widest font-semibold">Leia Também</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {relatedArticles.map((article) => (
                            <Link
                                key={article.slug}
                                to={`/blog/${article.slug}`}
                                className="group bg-card border border-border/30 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="relative h-40 overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{ backgroundImage: `url(${article.heroImage})` }}
                                    />
                                    <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/20 transition-colors" />
                                    <span className="absolute top-3 left-3 bg-gold/90 text-dark text-xs font-sans font-bold px-3 py-1 rounded-full">{article.category}</span>
                                </div>
                                <div className="p-5">
                                    <span className="font-sans text-xs text-muted-foreground">{article.date}</span>
                                    <h4 className="font-display text-lg font-bold text-primary group-hover:text-gold transition-colors mt-1 leading-snug">{article.title}</h4>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </PageLayout>
    );
};

export default BlogArticlePage;
