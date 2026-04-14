/**
 * TAG Enterprise Solution Corp
 * Enterprise-Grade JavaScript with i18n Support
 */

// ============================================
// Internationalization (i18n) System
// ============================================
const i18n = {
    currentLang: 'it',

    translations: {
        it: {
            // Top Bar
            'topBar.contact': 'Parla con un Esperto',

            // Logo
            'logo.tagline': 'AI & Software Solutions',

            // Navigation
            'nav.home': 'Home',
            'nav.products': 'Prodotti',
            'nav.services': 'Servizi',
            'nav.whyUs': 'Perché Noi',
            'nav.cases': 'Casi Studio',
            'nav.insights': 'Insights',
            'nav.contact': 'Contatti',

            // Hero Section
            'hero.badge': 'Scelto da aziende Fortune 500',
            'hero.title.line1': 'Trasformiamo i vostri dati in',
            'hero.title.line2': 'decisioni intelligenti',
            'hero.subtitle': 'Sviluppiamo architetture enterprise scalabili e soluzioni AI custom che riducono i costi operativi fino al 40% e aumentano l\'efficienza del 3x.',
            'hero.cta.primary': 'Richiedi una Consulenza Gratuita',
            'hero.cta.secondary': 'Vedi Casi Studio',
            'hero.trust.transactions': 'Transazioni/giorno',
            'hero.trust.uptime': 'Uptime SLA',
            'hero.trust.savings': 'Riduzione costi',
            'hero.card.title': 'Dashboard AI Processing',
            'hero.card.accuracy': 'Accuracy Rate',
            'hero.card.processed': 'Processati Oggi',
            'hero.card.latency': 'Latenza Media',
            'hero.floating.cloud': 'Infrastruttura Cloud',
            'hero.floating.models': 'Training Modelli',
            'hero.floating.requests': 'Richieste API',
            'hero.scroll': 'Scorri per esplorare',

            // Logos
            'logos.title': 'Scelto da leader mondiali',

            // Problem & Solution
            'problem.tag': 'La Sfida',
            'problem.title': 'I vostri processi sono stagnanti?',
            'problem.subtitle': 'L\'AI è la chiave per sbloccare la crescita esponenziale del vostro business',
            'problem.card1.title': 'Analisi dati lenta',
            'problem.card1.desc': 'Perdete ore preziose ad analizzare manualmente report senza ottenere insight tempestivi per decisioni strategiche.',
            'problem.card1.impact': '-15% efficienza',
            'problem.card2.title': 'Processi manuali',
            'problem.card2.desc': 'Il vostro team spreca tempo prezioso in attività ripetitive che potrebbero essere automatizzate intelligentemente.',
            'problem.card2.impact': '20+ ore/settimana',
            'problem.card3.title': 'Previsioni inaccurate',
            'problem.card3.desc': 'Le decisioni strategiche si basano su intuizioni anziché su dati predittivi con accuratezza verificabile.',
            'problem.card3.impact': '-30% revenue',
            'problem.impact': 'Business Impact:',
            'problem.solution.badge': 'La Soluzione',
            'problem.solution.title': 'Intelligenza Artificiale Enterprise-Grade',
            'problem.solution.desc': 'Trasformiamo questi problemi in opportunità misurabili. Le nostre soluzioni AI automatizzano i processi critici, accelerano l\'analisi dati di 10x e forniscono previsioni con accuratezza superiore al 95%.',
            'problem.solution.point1': 'Implementazione in 4-6 settimane',
            'problem.solution.point2': 'Integrazione seamless con sistemi esistenti',
            'problem.solution.point3': 'ROI misurabile entro 90 giorni',
            'problem.solution.metric1': 'Più veloci',
            'problem.solution.metric2': 'Accuratezza',
            'problem.solution.metric3': 'Risparmio costi',

            // Services
            'services.tag': 'La Nostra Expertise',
            'services.title': 'Servizi Enterprise Completi',
            'services.subtitle': 'Dal proof-of-concept al deployment su scala globale',
            'services.popular': 'Più Richiesto',
            'services.card1.title': 'AI Consulting & Strategy',
            'services.card1.desc': 'Definiamo la roadmap AI ottimale per il vostro business con analisi approfondita dei processi e pianificazione strategica dettagliata.',
            'services.card1.item1': 'AI Readiness Assessment',
            'services.card1.item2': 'ROI Analysis & Business Case',
            'services.card1.item3': 'Implementation Roadmap',
            'services.card1.item4': 'Team Training & Change Management',
            'services.card2.title': 'Custom Software Development',
            'services.card2.desc': 'Architetture software enterprise che integrano AI/ML nei vostri flussi di lavoro con scalabilità e sicurezza native.',
            'services.card2.item1': 'Microservices Architecture',
            'services.card2.item2': 'REST & GraphQL APIs',
            'services.card2.item3': 'Legacy System Integration',
            'services.card2.item4': 'Real-time Dashboards & Analytics',
            'services.card3.title': 'Machine Learning Solutions',
            'services.card3.desc': 'Modelli ML custom addestrati sui vostri dati per automatizzare decisioni e generare insight predittivi azionabili.',
            'services.card3.item1': 'Predictive Analytics Models',
            'services.card3.item2': 'NLP & Computer Vision',
            'services.card3.item3': 'LLM Fine-tuning & RAG Systems',
            'services.card3.item4': 'MLOps & Model Monitoring',
            'services.card4.title': 'Cloud & DevOps',
            'services.card4.desc': 'Infrastrutture cloud multi-provider con automazione DevOps per deployment continui e affidabilità enterprise.',
            'services.card4.item1': 'Multi-Cloud Strategy (AWS/Azure/GCP)',
            'services.card4.item2': 'CI/CD Pipeline Automation',
            'services.card4.item3': '24/7 Monitoring & Alerting',
            'services.card4.item4': 'Security & Compliance (SOC2, HIPAA)',
            'services.learnMore': 'Scopri di più →',
            'services.cta': 'Non vedi quello che cerchi? Personalizziamo ogni soluzione per le tue esigenze.',
            'services.ctaBtn': 'Parla con un Solutions Architect',

            // Products
            'products.tag': 'I Nostri Prodotti',
            'products.title': 'I Nostri Software Gestionali',
            'products.subtitle': 'Soluzioni pronte all\'uso per ottimizzare i processi aziendali',
            'products.popular': 'Più Popolare',
            'products.ironquote.title': 'Iron Quote',
            'products.ironquote.tagline': 'Gestionale per Preventivi e Ordini',
            'products.ironquote.desc': 'Piattaforma completa per la gestione di preventivi, ordini e fatturazione. Automatizza il flusso commerciale dalla richiesta del cliente all\'evasione dell\'ordine.',
            'products.ironquote.f1': 'Preventivi personalizzabili',
            'products.ironquote.f2': 'Tracking ordini in tempo reale',
            'products.ironquote.f3': 'Integrazione con sistemi di fatturazione',
            'products.ironquote.f4': 'Dashboard analytics e report',
            'products.lexmanage.title': 'Lex Manage',
            'products.lexmanage.tagline': 'Gestionale per Compliance e Documenti',
            'products.lexmanage.desc': 'Sistema avanzato per la gestione della compliance aziendale, archiviazione documentale e automazione dei flussi approvativi. Ideale per studi legali e aziende regolamentate.',
            'products.lexmanage.f1': 'Gestione documenti sicura',
            'products.lexmanage.f2': 'Workflow approvativi custom',
            'products.lexmanage.f3': 'Audit trail e versioning',
            'products.lexmanage.f4': 'Notifiche e scadenziario',
            'products.tryDemo': 'Prova Demo',
            'products.requestInfo': 'Richiedi Info',
            'products.cta': 'Hai bisogno di una soluzione personalizzata?',
            'products.ctaBtn': 'Parla con il Nostro Team',

            // Why Us
            'why.tag': 'Perché TAG Enterprise',
            'why.title': 'Il Partner Strategico per la Tua Trasformazione Digitale',
            'why.intro': 'Non siamo un fornitore di codice. Siamo il partner strategico che trasforma la tua visione in risultati misurabili.',
            'why.feature1.title': 'Team Interdisciplinare',
            'why.feature1.desc': 'Data Scientist, Software Engineer e Business Analyst collaborano per soluzioni tecnicamente eccellenti e commercialmente valide.',
            'why.feature2.title': 'ROI Garantito',
            'why.feature2.desc': 'Ogni progetto include KPI definiti e reporting continuo. Ottimizziamo finché non raggiungiamo gli obiettivi.',
            'why.feature3.title': 'Presenza Globale',
            'why.feature3.desc': 'Sede a Miami, clienti in 4 continenti. Combiniamo flessibilità locale con expertise globale.',
            'why.stat1': 'Progetti Enterprise',
            'why.stat2': 'Client Retention',
            'why.stat3': 'Dati processati/giorno',
            'why.stat4': 'Supporto dedicato',
            'why.certs': 'Certificazioni',

            // Case Studies
            'cases.tag': 'Casi Studio',
            'cases.title': 'Risultati Misurabili per Settori Diversi',
            'cases.subtitle': 'Scopri come abbiamo trasformato businesses reali con soluzioni AI su misura',
            'cases.challenge': 'Sfida:',
            'cases.solution': 'Soluzione:',
            'cases.case1.sector': 'Manufacturing & Logistics',
            'cases.case1.title': 'Ottimizzazione Supply Chain con AI Predittiva',
            'cases.case1.challenge': 'Gestione magazzino inefficiente con rotture di stock frequenti e eccesso di inventario',
            'cases.case1.solution': 'ML predittivo per demand forecasting + dashboard real-time per inventory management',
            'cases.case1.metric1': 'Errori inventario',
            'cases.case1.metric2': 'Risparmiate/mese',
            'cases.case1.metric3': 'Costi magazzino',
            'cases.case2.sector': 'Financial Services',
            'cases.case2.title': 'Rilevamento Frodi in Tempo Reale con Deep Learning',
            'cases.case2.challenge': 'Sistema legacy incapace di identificare frodi in tempo reale su 50K+ transazioni/giorno',
            'cases.case2.solution': 'Deep Learning per anomaly detection con processing in <50ms per transazione',
            'cases.case2.metric1': 'Frodi rilevate',
            'cases.case2.metric2': 'Falsi positivi',
            'cases.case2.metric3': 'Risparmiati/anno',
            'cases.case3.sector': 'Healthcare',
            'cases.case3.title': 'Automazione Documentazione Clinica con NLP',
            'cases.case3.challenge': '3 ore/giorno di personale medico perse in documentazione cartacea e digitale',
            'cases.case3.solution': 'NLP custom per trascrizione voice-to-text e classificazione automatica referti',
            'cases.case3.metric1': 'Tempo docs',
            'cases.case3.metric2': 'Accuratezza',
            'cases.case3.metric3': 'Pazienti/giorno',
            'cases.cta': 'Vuoi vedere come possiamo trasformare il tuo business?',
            'cases.ctaBtn': 'Richiedi una Demo Personalizzata',

            // Insights
            'insights.tag': 'Insights',
            'insights.title': 'Thought Leadership',
            'insights.subtitle': 'Analisi, trend e best practice dal mondo AI & Enterprise Software',
            'insights.cat1': 'AI Strategy',
            'insights.cat2': 'Technical',
            'insights.cat3': 'Industry',
            'insights.article1.title': 'Come Calcolare il ROI di un Progetto AI',
            'insights.article1.desc': 'Una framework pratica per valutare investimenti in AI con metriche concrete e timeline realistiche.',
            'insights.article2.title': 'LLM vs Traditional ML: Quando Usare Cosa',
            'insights.article2.desc': 'Guida comparativa per scegliere l\'approccio giusto in base a use case, budget e requisiti.',
            'insights.article3.title': 'AI in Finance: 5 Use Case del 2026',
            'insights.article3.desc': 'Dai frodi detection al customer service: come le istituzioni finanziarie stanno usando l\'AI.',
            'insights.readMore': 'Leggi di più →',
            'insights.viewAll': 'Vedi Tutti gli Insights →',

            // CTA Section
            'cta.tag': 'Inizia Ora',
            'cta.title': 'Pronto a Trasformare il Tuo Business con l\'AI?',
            'cta.desc': 'Non serve un\'altra riunione. Serve una conversazione strategica con esperti che hanno già risolto problemi simili.',
            'cta.primary': 'Prenota una Chiamata Strategica',
            'cta.secondary': 'Chiama Ora: +1 (305) 555-0123',
            'contact.location.label': 'Headquarters',
            'contact.location.value': '1450 Brickell Ave, Suite 1900, Miami, FL 33131',
            'contact.email.label': 'Email',
            'contact.web.label': 'Web',

            // Footer
            'footer.desc': 'Trasformiamo i dati in decisioni intelligenti. Il vostro partner strategico per l\'innovazione enterprise basata su AI.',
            'footer.services.title': 'Servizi',
            'footer.services.ai': 'AI Consulting',
            'footer.services.dev': 'Software Development',
            'footer.services.ml': 'Machine Learning',
            'footer.services.cloud': 'Cloud & DevOps',
            'footer.company.title': 'Azienda',
            'footer.company.about': 'Chi Siamo',
            'footer.company.cases': 'Casi Studio',
            'footer.company.insights': 'Insights',
            'footer.company.careers': 'Careers',
            'footer.company.contact': 'Contatti',
            'footer.legal.title': 'Legale',
            'footer.legal.privacy': 'Privacy Policy',
            'footer.legal.terms': 'Terms of Service',
            'footer.legal.cookies': 'Cookie Policy',
            'footer.legal.gdpr': 'GDPR Compliance',
            'footer.rights': 'Tutti i diritti riservati.',
            'footer.address': '1450 Brickell Ave, Suite 1900, Miami, FL 33131 | Tax ID: XX-XXXXXXX'
        },

        en: {
            // Top Bar
            'topBar.contact': 'Talk to an Expert',

            // Logo
            'logo.tagline': 'AI & Software Solutions',

            // Navigation
            'nav.home': 'Home',
            'nav.products': 'Products',
            'nav.services': 'Services',
            'nav.whyUs': 'Why Us',
            'nav.cases': 'Case Studies',
            'nav.insights': 'Insights',
            'nav.contact': 'Contact',

            // Hero Section
            'hero.badge': 'Trusted by Fortune 500 Companies',
            'hero.title.line1': 'We transform your data into',
            'hero.title.line2': 'intelligent decisions',
            'hero.subtitle': 'We build scalable enterprise architectures and custom AI solutions that reduce operational costs by up to 40% and increase efficiency 3x.',
            'hero.cta.primary': 'Request a Free Consultation',
            'hero.cta.secondary': 'View Case Studies',
            'hero.trust.transactions': 'Transactions/day',
            'hero.trust.uptime': 'Uptime SLA',
            'hero.trust.savings': 'Cost reduction',
            'hero.card.title': 'AI Processing Dashboard',
            'hero.card.accuracy': 'Accuracy Rate',
            'hero.card.processed': 'Processed Today',
            'hero.card.latency': 'Avg Latency',
            'hero.floating.cloud': 'Cloud Infrastructure',
            'hero.floating.models': 'Models Training',
            'hero.floating.requests': 'API Requests',
            'hero.scroll': 'Scroll to explore',

            // Logos
            'logos.title': 'Trusted by industry leaders worldwide',

            // Problem & Solution
            'problem.tag': 'The Challenge',
            'problem.title': 'Are your processes stagnant?',
            'problem.subtitle': 'AI is the key to unlocking exponential business growth',
            'problem.card1.title': 'Slow data analysis',
            'problem.card1.desc': 'You lose precious hours manually analyzing reports without getting timely insights for strategic decisions.',
            'problem.card1.impact': '-15% efficiency',
            'problem.card2.title': 'Manual processes',
            'problem.card2.desc': 'Your team wastes precious time on repetitive activities that could be intelligently automated.',
            'problem.card2.impact': '20+ hours/week',
            'problem.card3.title': 'Inaccurate predictions',
            'problem.card3.desc': 'Strategic decisions are based on intuitions rather than predictive data with verifiable accuracy.',
            'problem.card3.impact': '-30% revenue',
            'problem.impact': 'Business Impact:',
            'problem.solution.badge': 'The Solution',
            'problem.solution.title': 'Enterprise-Grade Artificial Intelligence',
            'problem.solution.desc': 'We transform these problems into measurable opportunities. Our AI solutions automate critical processes, accelerate data analysis 10x, and provide predictions with over 95% accuracy.',
            'problem.solution.point1': 'Implementation in 4-6 weeks',
            'problem.solution.point2': 'Seamless integration with existing systems',
            'problem.solution.point3': 'Measurable ROI within 90 days',
            'problem.solution.metric1': 'Faster',
            'problem.solution.metric2': 'Accuracy',
            'problem.solution.metric3': 'Cost savings',

            // Services
            'services.tag': 'Our Expertise',
            'services.title': 'Complete Enterprise Services',
            'services.subtitle': 'From proof-of-concept to global scale deployment',
            'services.popular': 'Most Popular',
            'services.card1.title': 'AI Consulting & Strategy',
            'services.card1.desc': 'We define the optimal AI roadmap for your business with in-depth process analysis and detailed strategic planning.',
            'services.card1.item1': 'AI Readiness Assessment',
            'services.card1.item2': 'ROI Analysis & Business Case',
            'services.card1.item3': 'Implementation Roadmap',
            'services.card1.item4': 'Team Training & Change Management',
            'services.card2.title': 'Custom Software Development',
            'services.card2.desc': 'Enterprise software architectures that integrate AI/ML into your workflows with native scalability and security.',
            'services.card2.item1': 'Microservices Architecture',
            'services.card2.item2': 'REST & GraphQL APIs',
            'services.card2.item3': 'Legacy System Integration',
            'services.card2.item4': 'Real-time Dashboards & Analytics',
            'services.card3.title': 'Machine Learning Solutions',
            'services.card3.desc': 'Custom ML models trained on your data to automate decisions and generate actionable predictive insights.',
            'services.card3.item1': 'Predictive Analytics Models',
            'services.card3.item2': 'NLP & Computer Vision',
            'services.card3.item3': 'LLM Fine-tuning & RAG Systems',
            'services.card3.item4': 'MLOps & Model Monitoring',
            'services.card4.title': 'Cloud & DevOps',
            'services.card4.desc': 'Multi-provider cloud infrastructures with DevOps automation for continuous deployment and enterprise reliability.',
            'services.card4.item1': 'Multi-Cloud Strategy (AWS/Azure/GCP)',
            'services.card4.item2': 'CI/CD Pipeline Automation',
            'services.card4.item3': '24/7 Monitoring & Alerting',
            'services.card4.item4': 'Security & Compliance (SOC2, HIPAA)',
            'services.learnMore': 'Learn more →',
            'services.cta': 'Don\'t see what you\'re looking for? We customize every solution to your needs.',
            'services.ctaBtn': 'Talk to a Solutions Architect',

            // Products
            'products.tag': 'Our Products',
            'products.title': 'Our Management Software',
            'products.subtitle': 'Ready-to-use solutions to optimize business processes',
            'products.popular': 'Most Popular',
            'products.ironquote.title': 'Iron Quote',
            'products.ironquote.tagline': 'Quotes & Orders Management',
            'products.ironquote.desc': 'Complete platform for managing quotes, orders, and invoicing. Automates the commercial flow from customer request to order fulfillment.',
            'products.ironquote.f1': 'Customizable quotes',
            'products.ironquote.f2': 'Real-time order tracking',
            'products.ironquote.f3': 'Integration with invoicing systems',
            'products.ironquote.f4': 'Analytics dashboard & reports',
            'products.lexmanage.title': 'Lex Manage',
            'products.lexmanage.tagline': 'Compliance & Document Management',
            'products.lexmanage.desc': 'Advanced system for corporate compliance management, document archiving, and approval workflow automation. Ideal for law firms and regulated industries.',
            'products.lexmanage.f1': 'Secure document management',
            'products.lexmanage.f2': 'Custom approval workflows',
            'products.lexmanage.f3': 'Audit trail & versioning',
            'products.lexmanage.f4': 'Notifications & deadline tracker',
            'products.tryDemo': 'Try Demo',
            'products.requestInfo': 'Request Info',
            'products.cta': 'Need a customized solution?',
            'products.ctaBtn': 'Talk to Our Team',

            // Why Us
            'why.tag': 'Why TAG Enterprise',
            'why.title': 'The Strategic Partner for Your Digital Transformation',
            'why.intro': 'We\'re not a code vendor. We\'re the strategic partner that transforms your vision into measurable results.',
            'why.feature1.title': 'Interdisciplinary Team',
            'why.feature1.desc': 'Data Scientists, Software Engineers, and Business Analysts collaborate for technically excellent and commercially viable solutions.',
            'why.feature2.title': 'Guaranteed ROI',
            'why.feature2.desc': 'Every project includes defined KPIs and continuous reporting. We optimize until we reach the objectives.',
            'why.feature3.title': 'Global Presence',
            'why.feature3.desc': 'Headquartered in Miami, clients across 4 continents. We combine local flexibility with global expertise.',
            'why.stat1': 'Enterprise Projects',
            'why.stat2': 'Client Retention',
            'why.stat3': 'Data processed/day',
            'why.stat4': 'Dedicated support',
            'why.certs': 'Certifications',

            // Case Studies
            'cases.tag': 'Case Studies',
            'cases.title': 'Measurable Results Across Industries',
            'cases.subtitle': 'Discover how we\'ve transformed real businesses with custom AI solutions',
            'cases.challenge': 'Challenge:',
            'cases.solution': 'Solution:',
            'cases.case1.sector': 'Manufacturing & Logistics',
            'cases.case1.title': 'Supply Chain Optimization with Predictive AI',
            'cases.case1.challenge': 'Inefficient warehouse management with frequent stockouts and excess inventory',
            'cases.case1.solution': 'Predictive ML for demand forecasting + real-time dashboard for inventory management',
            'cases.case1.metric1': 'Inventory errors',
            'cases.case1.metric2': 'Saved/month',
            'cases.case1.metric3': 'Warehouse costs',
            'cases.case2.sector': 'Financial Services',
            'cases.case2.title': 'Real-Time Fraud Detection with Deep Learning',
            'cases.case2.challenge': 'Legacy system unable to identify fraud in real-time on 50K+ transactions/day',
            'cases.case2.solution': 'Deep Learning for anomaly detection with processing in <50ms per transaction',
            'cases.case2.metric1': 'Frauds detected',
            'cases.case2.metric2': 'False positives',
            'cases.case2.metric3': 'Saved/year',
            'cases.case3.sector': 'Healthcare',
            'cases.case3.title': 'Clinical Documentation Automation with NLP',
            'cases.case3.challenge': '3 hours/day of medical staff lost on paperwork and digital documentation',
            'cases.case3.solution': 'Custom NLP for voice-to-text transcription and automatic report classification',
            'cases.case3.metric1': 'Doc time',
            'cases.case3.metric2': 'Accuracy',
            'cases.case3.metric3': 'Patients/day',
            'cases.cta': 'Want to see how we can transform your business?',
            'cases.ctaBtn': 'Request a Personalized Demo',

            // Insights
            'insights.tag': 'Insights',
            'insights.title': 'Thought Leadership',
            'insights.subtitle': 'Analysis, trends, and best practices from the AI & Enterprise Software world',
            'insights.cat1': 'AI Strategy',
            'insights.cat2': 'Technical',
            'insights.cat3': 'Industry',
            'insights.article1.title': 'How to Calculate ROI of an AI Project',
            'insights.article1.desc': 'A practical framework for evaluating AI investments with concrete metrics and realistic timelines.',
            'insights.article2.title': 'LLM vs Traditional ML: When to Use What',
            'insights.article2.desc': 'Comparative guide to choosing the right approach based on use case, budget, and requirements.',
            'insights.article3.title': 'AI in Finance: 5 Use Cases for 2026',
            'insights.article3.desc': 'From fraud detection to customer service: how financial institutions are using AI.',
            'insights.readMore': 'Read more →',
            'insights.viewAll': 'View All Insights →',

            // CTA Section
            'cta.tag': 'Get Started',
            'cta.title': 'Ready to Transform Your Business with AI?',
            'cta.desc': 'You don\'t need another meeting. You need a strategic conversation with experts who have already solved similar problems.',
            'cta.primary': 'Book a Strategic Call',
            'cta.secondary': 'Call Now: +1 (305) 555-0123',
            'contact.location.label': 'Headquarters',
            'contact.location.value': '1450 Brickell Ave, Suite 1900, Miami, FL 33131',
            'contact.email.label': 'Email',
            'contact.web.label': 'Web',

            // Footer
            'footer.desc': 'We transform data into intelligent decisions. Your strategic partner for AI-powered enterprise innovation.',
            'footer.services.title': 'Services',
            'footer.services.ai': 'AI Consulting',
            'footer.services.dev': 'Software Development',
            'footer.services.ml': 'Machine Learning',
            'footer.services.cloud': 'Cloud & DevOps',
            'footer.company.title': 'Company',
            'footer.company.about': 'About Us',
            'footer.company.cases': 'Case Studies',
            'footer.company.insights': 'Insights',
            'footer.company.careers': 'Careers',
            'footer.company.contact': 'Contact',
            'footer.legal.title': 'Legal',
            'footer.legal.privacy': 'Privacy Policy',
            'footer.legal.terms': 'Terms of Service',
            'footer.legal.cookies': 'Cookie Policy',
            'footer.legal.gdpr': 'GDPR Compliance',
            'footer.rights': 'All rights reserved.',
            'footer.address': '1450 Brickell Ave, Suite 1900, Miami, FL 33131 | Tax ID: XX-XXXXXXX'
        }
    },

    init() {
        // Check for saved language preference or default to 'it'
        const savedLang = localStorage.getItem('tag_lang') || 'it';
        this.setLanguage(savedLang);

        // Setup language switcher buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.dataset.lang;
                this.setLanguage(lang);
            });
        });
    },

    setLanguage(lang) {
        if (!this.translations[lang]) return;

        this.currentLang = lang;
        localStorage.setItem('tag_lang', lang);

        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.dataset.i18n;
            if (this.translations[lang][key]) {
                // Preserve HTML content for elements with HTML
                element.innerHTML = this.translations[lang][key];
            }
        });

        // Update button states
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Dispatch custom event for other modules to react
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    },

    t(key) {
        return this.translations[this.currentLang][key] || key;
    }
};

// ============================================
// Navigation Module
// ============================================
const Navigation = {
    navbar: null,
    navToggle: null,
    navLinks: null,

    init() {
        this.navbar = document.getElementById('navbar');
        this.navToggle = document.getElementById('navToggle');
        this.navLinks = document.getElementById('navLinks');

        if (!this.navbar || !this.navToggle) return;

        this.bindEvents();
    },

    bindEvents() {
        window.addEventListener('scroll', () => this.handleScroll());
        this.navToggle.addEventListener('click', () => this.toggleMobileMenu());

        this.navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => this.closeMobileMenu());
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeMobileMenu();
        });
    },

    handleScroll() {
        if (window.scrollY > 50) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }
    },

    toggleMobileMenu() {
        this.navLinks.classList.toggle('active');
        this.navToggle.classList.toggle('active');

        // Accessibility
        const expanded = this.navLinks.classList.contains('active');
        this.navToggle.setAttribute('aria-expanded', expanded);
    },

    closeMobileMenu() {
        this.navLinks.classList.remove('active');
        this.navToggle.classList.remove('active');
        this.navToggle.setAttribute('aria-expanded', 'false');
    }
};

// ============================================
// Hero Animation Module (Network Visualization)
// ============================================
const HeroAnimation = {
    container: null,
    nodes: [],
    svg: null,
    animationFrame: null,

    init() {
        this.container = document.getElementById('heroAnimation');
        if (!this.container) return;

        this.createNodes();
        this.animate();

        // Handle resize
        window.addEventListener('resize', () => {
            this.nodes.forEach(node => node.element.remove());
            this.nodes = [];
            if (this.svg) this.svg.remove();
            this.createNodes();
        });
    },

    createNodes() {
        const nodeCount = Math.min(40, Math.floor(window.innerWidth / 30));
        const colors = ['#3b82f6', '#8b5cf6', '#0ea5e9', '#6366f1'];

        for (let i = 0; i < nodeCount; i++) {
            const node = document.createElement('div');
            node.className = 'network-node';
            node.style.left = Math.random() * 100 + '%';
            node.style.top = Math.random() * 100 + '%';
            node.style.background = colors[Math.floor(Math.random() * colors.length)];

            const size = Math.random() * 4 + 3;
            node.style.width = size + 'px';
            node.style.height = size + 'px';
            node.style.opacity = Math.random() * 0.5 + 0.3;

            this.container.appendChild(node);
            this.nodes.push({
                element: node,
                x: parseFloat(node.style.left),
                y: parseFloat(node.style.top),
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3
            });
        }

        // Create SVG for connections
        this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.svg.setAttribute('class', 'network-svg');
        this.container.appendChild(this.svg);
    },

    animate() {
        const container = this.container.getBoundingClientRect();

        this.nodes.forEach(node => {
            node.x += node.vx;
            node.y += node.vy;

            // Bounce off edges
            if (node.x <= 0 || node.x >= 100) node.vx *= -1;
            if (node.y <= 0 || node.y >= 100) node.vy *= -1;

            node.element.style.left = node.x + '%';
            node.element.style.top = node.y + '%';
        });

        this.drawConnections();
        this.animationFrame = requestAnimationFrame(() => this.animate());
    },

    drawConnections() {
        while (this.svg.firstChild) {
            this.svg.removeChild(this.svg.firstChild);
        }

        const maxDistance = 20;

        for (let i = 0; i < this.nodes.length; i++) {
            for (let j = i + 1; j < this.nodes.length; j++) {
                const dx = this.nodes[i].x - this.nodes[j].x;
                const dy = this.nodes[i].y - this.nodes[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxDistance) {
                    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                    const opacity = (1 - distance / maxDistance) * 0.4;

                    line.setAttribute('x1', this.nodes[i].x + '%');
                    line.setAttribute('y1', this.nodes[i].y + '%');
                    line.setAttribute('x2', this.nodes[j].x + '%');
                    line.setAttribute('y2', this.nodes[j].y + '%');
                    line.setAttribute('stroke', `rgba(59, 130, 246, ${opacity})`);
                    line.setAttribute('stroke-width', '1');

                    this.svg.appendChild(line);
                }
            }
        }
    },

    destroy() {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
        }
    }
};

// ============================================
// Counter Animation Module
// ============================================
const CounterAnimation = {
    init() {
        this.setupObserver();
    },

    setupObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        document.querySelectorAll('.stat-number[data-count], .trust-number[data-count]').forEach(counter => {
            observer.observe(counter);
        });
    },

    animateCounter(element) {
        const target = parseInt(element.dataset.count);
        const suffix = element.nextElementSibling?.classList.contains('trust-suffix')
            ? element.nextElementSibling.textContent
            : '';
        const duration = 2500;
        const startTime = performance.now();

        const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

        const update = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutQuart(progress);
            const current = Math.floor(target * easedProgress);

            element.textContent = current.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = target.toLocaleString();
            }
        };

        requestAnimationFrame(update);
    }
};

// ============================================
// Case Studies Slider Module
// ============================================
const CaseStudiesSlider = {
    cards: [],
    currentIndex: 0,
    autoPlay: null,

    init() {
        this.cards = document.querySelectorAll('.case-card-large');
        if (!this.cards.length) return;

        this.createControls();
        this.updateSlider();
        this.startAutoPlay();
    },

    createControls() {
        const container = document.querySelector('.case-studies-container');
        if (!container) return;

        const controls = document.createElement('div');
        controls.className = 'case-controls';
        controls.innerHTML = `
            <button class="case-control prev" aria-label="Previous case">←</button>
            <div class="case-dots"></div>
            <button class="case-control next" aria-label="Next case">→</button>
        `;

        // Insert after the last case card
        const lastCard = this.cards[this.cards.length - 1];
        lastCard.parentNode.insertBefore(controls, lastCard.nextSibling);

        this.dotsContainer = controls.querySelector('.case-dots');
        this.createDots();

        controls.querySelector('.prev').addEventListener('click', () => this.prev());
        controls.querySelector('.next').addEventListener('click', () => this.next());
    },

    createDots() {
        this.cards.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = 'case-dot' + (index === 0 ? ' active' : '');
            dot.setAttribute('aria-label', `Go to case ${index + 1}`);
            dot.addEventListener('click', () => {
                this.currentIndex = index;
                this.updateSlider();
            });
            this.dotsContainer.appendChild(dot);
        });
    },

    updateSlider() {
        this.cards.forEach((card, index) => {
            if (index === this.currentIndex) {
                card.style.display = 'grid';
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            } else {
                card.style.display = 'none';
                card.style.opacity = '0';
                card.style.transform = 'scale(0.98)';
            }
        });

        const dots = this.dotsContainer.querySelectorAll('.case-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    },

    startAutoPlay() {
        this.autoPlay = setInterval(() => this.next(), 6000);

        // Pause on hover
        const container = document.querySelector('.case-studies-container');
        container?.addEventListener('mouseenter', () => clearInterval(this.autoPlay));
        container?.addEventListener('mouseleave', () => this.startAutoPlay());
    },

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
        this.updateSlider();
    },

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.cards.length;
        this.updateSlider();
    }
};

// ============================================
// Scroll Animations Module
// ============================================
const ScrollAnimations = {
    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe elements
        document.querySelectorAll('.service-card, .problem-card, .why-feature, .case-card-large, .insight-card').forEach((el, index) => {
            el.classList.add('animate-on-scroll');
            el.classList.add(`stagger-${(index % 4) + 1}`);
            observer.observe(el);
        });
    }
};

// ============================================
// Smooth Scroll Module
// ============================================
const SmoothScroll = {
    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href === '#' || href === '') return;

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const headerOffset = 120;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    Navigation.closeMobileMenu();
                }
            });
        });
    }
};

// ============================================
// Add CSS for network animation
// ============================================
function addNetworkStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .network-node {
            position: absolute;
            border-radius: 50%;
            pointer-events: none;
        }

        .network-svg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }

        .case-controls {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            margin-top: 2rem;
        }

        .case-control {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            border: 2px solid var(--primary-200);
            background: var(--white);
            color: var(--primary-600);
            font-size: 1.25rem;
            cursor: pointer;
            transition: all 0.2s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .case-control:hover {
            background: var(--primary-600);
            color: var(--white);
            border-color: var(--primary-600);
        }

        .case-dots {
            display: flex;
            gap: 0.5rem;
        }

        .case-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: var(--slate-300);
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
            padding: 0;
        }

        .case-dot.active {
            background: var(--primary-600);
            width: 32px;
            border-radius: 5px;
        }

        @media (max-width: 768px) {
            .case-controls {
                gap: 0.75rem;
            }

            .case-control {
                width: 38px;
                height: 38px;
            }
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// Initialize Everything
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    addNetworkStyles();
    i18n.init();
    Navigation.init();
    HeroAnimation.init();
    CounterAnimation.init();
    CaseStudiesSlider.init();
    ScrollAnimations.init();
    SmoothScroll.init();

    // Log initialization
    console.log('TAG Enterprise website initialized');
});

// Handle page visibility changes (pause animations when tab is hidden)
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        HeroAnimation.animationFrame && cancelAnimationFrame(HeroAnimation.animationFrame);
    } else {
        HeroAnimation.animate();
    }
});
