import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Rocket, BarChart3, CheckCircle2, Zap, TrendingUp, MousePointerClick, ShieldCheck, Check, Star, Crown, Code2, PenLine, Search } from 'lucide-react';

const Home: React.FC = () => {
    const [isAnnual, setIsAnnual] = useState(true);

    const plans = [
        {
            name: "Essential",
            description: "La base sólida para digitalizar tu negocio.",
            priceMonthly: 499,
            priceAnnual: 4990, // 2 months free
            icon: <Zap className="w-6 h-6 text-cyan-400" />,
            features: [
                "Consultoría Previa y Estrategia",
                "Diseño y Desarrollo Web App a Medida",
                "Hosting, Dominio y SSL Incluidos",
                "Mantenimiento y Cambios (Técnicos)",
                "Optimización SEO Inicial"
            ],
            cta: "Comenzar Essential",
            highlight: false
        },
        {
            name: "Professional",
            description: "Para negocios que buscan escalar y vender.",
            priceMonthly: 1299,
            priceAnnual: 12990,
            icon: <Star className="w-6 h-6 text-white" />,
            features: [
                "Todo lo incluido en Essential",
                "Copywriting Persuasivo de Ventas",
                "Estrategia SEO de Crecimiento",
                "Mantenimiento y Cambios Ilimitados",
                "Integración de Analítica Avanzada",
                "Soporte Prioritario"
            ],
            cta: "Elegir Professional",
            highlight: true
        },
        {
            name: "Authority",
            description: "Liderazgo de mercado y tecnología punta.",
            priceMonthly: 2999,
            priceAnnual: 29990,
            icon: <Crown className="w-6 h-6 text-gold" />,
            features: [
                "Todo lo incluido en Professional",
                "Consultoría de Negocio Recurrente",
                "Desarrollo de Funcionalidades Avanzadas",
                "Funnels de Venta Automatizados",
                "Gestor de Cuenta Dedicado",
                "Soporte VIP 24/7"
            ],
            cta: "Contactar para Authority",
            highlight: false
        }
    ];

    return (
        <div className="space-y-24">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-10 md:pt-0">
                {/* Background Effects */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute top-[-20%] right-[-10%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-blue-600/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[-20%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-500/10 rounded-full blur-[60px] md:blur-[100px]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-900/10 backdrop-blur-sm">
                        <span className="text-cyan-400 text-[10px] md:text-xs font-bold tracking-widest uppercase">Ingeniería de Ventas & IA</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 md:mb-8 tracking-tight max-w-5xl mx-auto">
                        Diseño que Impacta. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-500">
                            Estrategia que Factura.
                        </span>
                    </h1>

                    <p className="text-base md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 md:mb-12 font-light leading-relaxed px-4 md:px-0">
                        La estética sin estrategia es solo decoración. En Smilelife creamos <strong className="text-white font-semibold">Activos Digitales</strong> que fusionan Neuromarketing e IA para convertir visitas en facturación real. Tú enfócate en liderar tu negocio; nosotros nos encargamos de construir el motor que lo hace crecer las 24/7 los 365 días del año.
                    </p>
                    
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 px-4">
                        <Link to="/contact" className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2">
                            ¡Me interesa!
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features / Value Props */}
            <section className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            tag: "TECNOLOGÍA",
                            icon: <Code2 className="w-6 h-6 text-cyan-400" />,
                            title: "Desarrollo con IA",
                            desc: "No solo escribimos código; construimos infraestructura blindada. Implementamos soluciones ultrarrápidas y escalables que eliminan la fricción tecnológica, garantizando una experiencia de usuario impecable y segura."
                        },
                        {
                            tag: "PSICOLOGÍA",
                            icon: <PenLine className="w-6 h-6 text-purple-400" />,
                            title: "Copywriting Persuasivo",
                            desc: "Transformamos la indiferencia en deseo. Utilizamos arquitectura de persuasión y gatillos mentales éticos para comunicar tu valor con tal claridad que tus clientes sentirán que eres la única opción lógica."
                        },
                        {
                            tag: "AUTORIDAD",
                            icon: <Search className="w-6 h-6 text-emerald-400" />,
                            title: "SEO Dominante",
                            desc: "Deja de perseguir el algoritmo y empieza a liderar tu sector. Construimos una reputación digital sólida a largo plazo que posiciona a tu marca como la referencia indiscutible ante tus competidores."
                        }
                    ].map((feature, idx) => (
                        <div key={idx} className="group relative p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    {feature.icon}
                                </div>
                                <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase bg-slate-900 px-2 py-1 rounded border border-slate-800 group-hover:text-cyan-400 group-hover:border-cyan-500/20 transition-colors">
                                    {feature.tag}
                                </span>
                            </div>
                            
                            <h3 className="text-xl font-display font-bold mb-4 text-white group-hover:text-cyan-100 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Detailed Value Section */}
            <section className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Dynamic Asset Visualization */}
                    <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center group perspective-1000">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-blue-600/10 to-purple-500/20 rounded-full blur-[60px] md:blur-[80px] animate-pulse"></div>
                        
                        {/* Main Card (Simulating a high-converting Dashboard/App) - Scaled down on mobile */}
                        <div className="relative z-20 bg-slate-900/90 backdrop-blur-xl border border-slate-700 rounded-2xl p-4 md:p-6 w-full max-w-[320px] md:max-w-md shadow-2xl transform transition-all duration-700 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-[0_20px_50px_rgba(6,182,212,0.3)] scale-[0.9] md:scale-100">
                            {/* Header UI */}
                            <div className="flex items-center justify-between mb-6 md:mb-8 border-b border-slate-800 pb-4">
                                <div className="flex gap-2">
                                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/80"></div>
                                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-emerald-500/80"></div>
                                </div>
                                <div className="text-[10px] md:text-xs text-slate-500 font-mono bg-slate-950 px-2 py-1 rounded">dashboard_analytics.tsx</div>
                            </div>

                            {/* Graph Area */}
                            <div className="flex justify-between items-end h-32 md:h-40 gap-2 mb-6 md:mb-8 px-2">
                                {[30, 45, 35, 60, 50, 75, 90].map((h, i) => (
                                    <div key={i} className="w-full bg-slate-800 rounded-t relative group-hover:bg-slate-700 transition-colors overflow-hidden" style={{ height: `${h}%` }}>
                                        {/* Animated fill */}
                                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-cyan-600 to-cyan-300 opacity-80 transition-all duration-1000" style={{ height: i === 6 ? '100%' : '0%', animation: `fillUp 1s ease-out ${i * 0.1}s forwards` }}></div>
                                    </div>
                                ))}
                            </div>

                            {/* Stats Row */}
                            <div className="grid grid-cols-3 gap-3 md:gap-4">
                                <div className="bg-slate-950 p-2 md:p-3 rounded-xl border border-slate-800">
                                    <div className="text-[10px] md:text-xs text-slate-400 mb-1">Visitantes</div>
                                    <div className="text-sm md:text-lg font-bold text-white flex items-center gap-1">
                                        12.5K <TrendingUp className="w-3 h-3 text-emerald-400" />
                                    </div>
                                </div>
                                <div className="bg-slate-950 p-2 md:p-3 rounded-xl border border-slate-800">
                                    <div className="text-[10px] md:text-xs text-slate-400 mb-1">Conversión</div>
                                    <div className="text-sm md:text-lg font-bold text-emerald-400">+4.8%</div>
                                </div>
                                <div className="bg-slate-950 p-2 md:p-3 rounded-xl border border-slate-800">
                                    <div className="text-[10px] md:text-xs text-slate-400 mb-1">ROI</div>
                                    <div className="text-sm md:text-lg font-bold text-cyan-400">310%</div>
                                </div>
                            </div>

                            {/* CTA Button Mockup */}
                            <div className="mt-6 w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-center text-white font-bold text-sm shadow-lg opacity-90">
                                Generar Ingresos
                            </div>
                        </div>

                        {/* Floating Badges - Repositioned for mobile to avoid clipping */}
                        <div className="absolute top-0 md:top-10 right-4 md:right-0 z-30 bg-slate-800/90 backdrop-blur p-3 rounded-xl border border-slate-700 shadow-xl animate-[bounce_3s_infinite] scale-[0.8] md:scale-100 origin-top-right">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-emerald-500/20 rounded-lg">
                                    <Zap className="w-5 h-5 text-emerald-400" />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-400">Velocidad</div>
                                    <div className="text-sm font-bold text-white">99/100 Google</div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-10 md:bottom-20 left-4 md:left-0 z-30 bg-slate-800/90 backdrop-blur p-3 rounded-xl border border-slate-700 shadow-xl animate-[bounce_4s_infinite] scale-[0.8] md:scale-100 origin-bottom-left">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-purple-500/20 rounded-lg">
                                    <ShieldCheck className="w-5 h-5 text-purple-400" />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-400">Seguridad</div>
                                    <div className="text-sm font-bold text-white">Enterprise SSL</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 md:mb-8 leading-tight">
                            No construimos webs.<br />
                            <span className="text-cyan-400">Construimos Activos.</span>
                        </h2>
                        <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed">
                            La mayoría de agencias entregan un diseño bonito que no vende. 
                            En Smilelife, la estética es solo el principio. Cada pixel tiene un propósito: 
                            generar ingresos, capturar leads y posicionar autoridad.
                        </p>
                        <ul className="space-y-4 mb-10 text-left inline-block">
                            {[
                                "Automatización de procesos de venta 24/7.",
                                "Diseño 'Mobile-First' para la generación smartphone.",
                                "Integración profunda de analítica de datos."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 shrink-0 mt-0.5" />
                                    <span className="text-slate-200 font-medium text-sm md:text-base">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-center lg:justify-start">
                            <Link to="/services" className="text-cyan-400 font-bold hover:text-cyan-300 flex items-center gap-2 group">
                                Explorar nuestros métodos
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

             {/* Pricing Section (Added) */}
             <section className="container mx-auto px-6 py-24 border-t border-slate-900">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-slate-700 bg-slate-900/50 backdrop-blur-sm">
                        <span className="text-cyan-400 text-[10px] md:text-xs font-bold tracking-widest uppercase">Inversión Estratégica</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Planes de Crecimiento</h2>
                    <p className="text-slate-400 text-lg md:text-xl">
                        Elige la velocidad a la que quieres escalar tu negocio. Sin contratos de permanencia ocultos.
                    </p>

                    {/* Toggle Switch */}
                    <div className="flex items-center justify-center mt-10 gap-4">
                        <span className={`text-sm font-bold transition-colors ${!isAnnual ? 'text-white' : 'text-slate-500'}`}>Mensual</span>
                        <button 
                            onClick={() => setIsAnnual(!isAnnual)}
                            className="relative w-16 h-8 rounded-full bg-slate-800 border border-slate-700 transition-colors focus:outline-none"
                        >
                            <div className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-transform duration-300 ${isAnnual ? 'translate-x-8' : 'translate-x-0'}`}></div>
                        </button>
                        <span className={`text-sm font-bold transition-colors ${isAnnual ? 'text-white' : 'text-slate-500'}`}>
                            Anual <span className="text-cyan-400 text-xs ml-1">(2 Meses Gratis)</span>
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    {plans.map((plan, idx) => (
                        <div 
                            key={idx} 
                            className={`relative flex flex-col p-6 md:p-8 rounded-3xl border transition-all duration-500 ${
                                plan.highlight 
                                    ? 'bg-slate-900/80 border-cyan-500/50 shadow-[0_0_40px_rgba(6,182,212,0.15)] md:scale-105 z-20' 
                                    : 'bg-slate-950/50 border-slate-800 hover:border-slate-600'
                            }`}
                        >
                            {/* Header with Icon and sleek Badge */}
                            <div className="flex justify-between items-start mb-6">
                                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center ${plan.highlight ? 'bg-cyan-500 text-white' : 'bg-slate-900 border border-slate-800'}`}>
                                    {plan.icon}
                                </div>

                                {plan.highlight && (
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)] backdrop-blur-md">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                                        </span>
                                        <span className="text-[10px] font-bold text-cyan-300 tracking-widest uppercase">Recomendado</span>
                                    </div>
                                )}
                            </div>

                            <div className="mb-8">
                                <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                                <p className="text-slate-400 text-sm h-10">{plan.description}</p>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-end gap-1">
                                    <span className="text-3xl md:text-4xl font-bold text-white">
                                        {isAnnual ? plan.priceAnnual.toLocaleString() : plan.priceMonthly.toLocaleString()} €
                                    </span>
                                    <span className="text-slate-500 mb-1">
                                        /{isAnnual ? 'año' : 'mes'}
                                    </span>
                                </div>
                                {isAnnual && (
                                    <p className="text-xs text-emerald-400 mt-2 font-bold">
                                        Ahorras {(plan.priceMonthly * 12 - plan.priceAnnual).toLocaleString()} € al año
                                    </p>
                                )}
                            </div>

                            <div className="flex-grow mb-8">
                                <ul className="space-y-4">
                                    {plan.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-3">
                                            <div className={`mt-1 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${plan.highlight ? 'bg-cyan-500/20' : 'bg-slate-800'}`}>
                                                <Check className={`w-2.5 h-2.5 ${plan.highlight ? 'text-cyan-400' : 'text-slate-400'}`} />
                                            </div>
                                            <span className="text-slate-300 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link 
                                to="/contact" 
                                className={`w-full py-4 rounded-xl font-bold text-center transition-all duration-300 flex items-center justify-center gap-2 group ${
                                    plan.highlight 
                                        ? 'bg-white text-slate-900 hover:bg-cyan-50' 
                                        : 'bg-slate-900 text-white border border-slate-700 hover:border-slate-500 hover:bg-slate-800'
                                }`}
                            >
                                {plan.cta}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-6 py-24">
                <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-3xl p-8 md:p-24 text-center relative overflow-hidden border border-slate-800">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[100px] rounded-full"></div>
                    
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
                            ¿Listo para liderar tu sector?
                        </h2>
                        <p className="text-blue-200 text-lg md:text-xl mb-10">
                            Deja de competir por precio y empieza a competir por valor.
                            Tu transformación digital comienza con una decisión.
                        </p>
                        <Link 
                            to="/contact" 
                            className="inline-flex px-8 md:px-10 py-4 md:py-5 bg-white text-slate-900 rounded-full font-bold text-lg md:text-xl hover:bg-cyan-50 hover:scale-105 transition-all duration-300"
                        >
                            Agendar Consultoría Estratégica
                        </Link>
                    </div>
                </div>
            </section>
            
             {/* CSS for custom animation injection */}
             <style>{`
                @keyframes fillUp {
                    from { height: 0%; }
                    to { height: 100%; }
                }
            `}</style>
        </div>
    );
};

export default Home;