import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, PenTool, Search, ArrowRight, Check, BarChart, Globe, MessageSquare, DollarSign, MousePointer2, Layers, Zap, Target, TrendingUp, CreditCard } from 'lucide-react';

const Services: React.FC = () => {
    const services = [
        {
            id: 'web',
            icon: <Monitor className="w-12 h-12 text-cyan-400" />,
            title: "Diseño Web Inteligente",
            subtitle: "Arquitectura Digital",
            description: "Creamos ecosistemas digitales completos. Utilizamos IA para analizar patrones de navegación y diseñar interfaces que guían intuitivamente al usuario hacia la compra.",
            features: ["UX/UI basada en datos", "Velocidad de carga < 1s", "Arquitectura escalable", "Integraciones CRM/ERP"],
            visual: (
                <div className="relative w-full h-full bg-slate-950 flex items-center justify-center overflow-hidden group perspective-1000">
                    {/* Background Grid & Glow */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full"></div>

                    {/* Main Interface Container (Tilted) - Scaled for Mobile */}
                    <div className="relative w-[280px] bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl transform transition-all duration-700 group-hover:rotate-y-6 group-hover:scale-105 z-20 p-4 scale-[0.85] md:scale-100 origin-center">
                        {/* Browser Header */}
                        <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-2">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                            </div>
                            <div className="px-2 py-0.5 bg-slate-950 rounded text-[10px] text-slate-500 font-mono">main_layout.tsx</div>
                        </div>

                        {/* UI Components Construction */}
                        <div className="space-y-3">
                            {/* Hero Block */}
                            <div className="h-24 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 relative overflow-hidden group-hover:border-cyan-500/30 transition-colors">
                                <div className="absolute top-3 left-3 w-16 h-2 bg-slate-700 rounded-full"></div>
                                <div className="absolute top-7 left-3 w-24 h-2 bg-slate-700/50 rounded-full"></div>
                                <div className="absolute bottom-3 right-3 px-3 py-1 bg-cyan-500 rounded-md text-[8px] text-white font-bold shadow-[0_0_10px_rgba(6,182,212,0.4)]">CTA</div>
                            </div>

                            {/* Grid Blocks */}
                            <div className="grid grid-cols-2 gap-2">
                                <div className="h-16 rounded-lg bg-slate-900 border border-slate-800 p-2">
                                    <div className="w-6 h-6 rounded-full bg-slate-800 mb-2"></div>
                                    <div className="w-full h-1.5 bg-slate-800 rounded-full"></div>
                                </div>
                                <div className="h-16 rounded-lg bg-slate-900 border border-slate-800 p-2">
                                    <div className="w-6 h-6 rounded-full bg-slate-800 mb-2"></div>
                                    <div className="w-full h-1.5 bg-slate-800 rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Floating 'Code' Badge */}
                        <div className="absolute -right-8 top-10 bg-slate-800/90 backdrop-blur border border-slate-600 px-3 py-2 rounded-lg shadow-xl transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                            <div className="flex items-center gap-2">
                                <Zap className="w-3 h-3 text-yellow-400" />
                                <div className="text-[10px] font-mono text-slate-300">
                                    <span className="text-purple-400">const</span> ui = <span className="text-emerald-400">optimized</span>;
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Mobile Layer */}
                    <div className="absolute bottom-8 left-12 w-16 h-28 bg-slate-900 border border-slate-600 rounded-lg shadow-2xl z-30 transform rotate-12 group-hover:rotate-0 transition-transform duration-500 flex flex-col p-1 scale-[0.85] md:scale-100">
                        <div className="w-full h-full bg-slate-950 rounded border border-slate-800"></div>
                    </div>
                </div>
            )
        },
        {
            id: 'seo',
            icon: <Search className="w-12 h-12 text-purple-400" />,
            title: "SEO & Posicionamiento",
            subtitle: "Dominio de Mercado",
            description: "No buscamos que aparezcas. Buscamos que domines. Nuestra estrategia de SEO semántico y técnico garantiza que tu marca sea la referencia en tu nicho de mercado.",
            features: ["Auditoría técnica profunda", "Estrategia de contenidos IA", "Linkbuilding de autoridad", "SEO Local y Global"],
            visual: (
                <div className="relative w-full h-full bg-slate-950 flex items-center justify-center overflow-hidden group">
                    {/* Radar Background */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-20 scale-[0.8] md:scale-100">
                        <div className="w-64 h-64 border border-purple-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                        <div className="absolute w-48 h-48 border border-purple-500/30 rounded-full"></div>
                        <div className="absolute w-32 h-32 border border-purple-500/30 rounded-full"></div>
                    </div>

                    {/* Dashboard Card - Scaled for Mobile */}
                    <div className="relative z-20 w-[280px] md:w-[300px] bg-slate-900/90 backdrop-blur-xl border border-slate-700 rounded-xl p-5 shadow-[0_0_40px_rgba(168,85,247,0.15)] transform transition-transform duration-500 group-hover:-translate-y-2 scale-[0.85] md:scale-100 origin-center">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Ranking Global</div>
                                <div className="text-xl font-bold text-white flex items-center gap-2">
                                    Top #1 <Target className="w-4 h-4 text-purple-400" />
                                </div>
                            </div>
                            <div className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-xs text-purple-300 font-bold">
                                +245%
                            </div>
                        </div>

                        {/* Chart Visualization */}
                        <div className="h-24 flex items-end justify-between gap-2 mb-4">
                            {[25, 40, 35, 55, 45, 70, 60, 90].map((h, i) => (
                                <div key={i} className="w-full bg-slate-800 rounded-sm relative overflow-hidden group-hover:bg-slate-700 transition-colors">
                                    <div 
                                        className="absolute bottom-0 w-full bg-gradient-to-t from-purple-600 to-purple-400 transition-all duration-1000" 
                                        style={{ 
                                            height: `${h}%`,
                                            opacity: i > 4 ? 1 : 0.5,
                                            transitionDelay: `${i * 50}ms`
                                        }}
                                    ></div>
                                </div>
                            ))}
                        </div>

                        {/* Keyword List Pill */}
                        <div className="flex gap-2 overflow-hidden">
                            <div className="px-3 py-1 bg-slate-950 rounded-full border border-slate-800 text-[10px] text-slate-400 whitespace-nowrap">
                                seo_strategy
                            </div>
                            <div className="px-3 py-1 bg-slate-950 rounded-full border border-slate-800 text-[10px] text-slate-400 whitespace-nowrap">
                                organic_growth
                            </div>
                            <div className="px-3 py-1 bg-purple-500 rounded-full text-[10px] text-white font-bold whitespace-nowrap shadow-lg">
                                dominance
                            </div>
                        </div>
                    </div>

                    {/* Glow */}
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-purple-900/20 blur-[60px]"></div>
                </div>
            )
        },
        {
            id: 'copy',
            icon: <PenTool className="w-12 h-12 text-emerald-400" />,
            title: "Copywriting Persuasivo",
            subtitle: "Ingeniería de Ventas",
            description: "El diseño atrae, el copy vende. Nuestros expertos en psicología del consumidor redactan textos que derriban objeciones y disparan los gatillos mentales de compra.",
            features: ["Páginas de Ventas (VSL)", "Email Marketing Funnels", "Guiones de Video", "Microcopy UX"],
            visual: (
                <div className="relative w-full h-full bg-slate-950 flex items-center justify-center overflow-hidden group">
                     {/* Background Flow */}
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-slate-950 to-slate-950"></div>

                     {/* Conversion Funnel Container - Scaled for Mobile */}
                     <div className="relative z-20 flex flex-col items-center gap-4 transform transition-transform duration-500 group-hover:scale-105 scale-[0.85] md:scale-100 origin-center">
                        
                        {/* Step 1: The Hook (Message) */}
                        <div className="w-48 bg-slate-900 border border-slate-700 p-3 rounded-xl rounded-bl-none shadow-lg flex gap-3 relative">
                            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                                <MessageSquare className="w-4 h-4 text-emerald-400" />
                            </div>
                            <div className="space-y-1.5 w-full">
                                <div className="h-2 bg-slate-700 rounded w-3/4"></div>
                                <div className="h-2 bg-slate-700 rounded w-1/2"></div>
                            </div>
                            {/* Arrow Connection */}
                            <div className="absolute -bottom-6 left-4 w-0.5 h-6 bg-emerald-500/30"></div>
                        </div>

                        {/* Step 2: The Trigger (Button) */}
                        <div className="w-40 py-2 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-lg shadow-[0_0_20px_rgba(16,185,129,0.3)] text-center transform translate-y-2">
                            <div className="text-[10px] font-bold text-white uppercase tracking-wider flex items-center justify-center gap-1">
                                Comprar Ahora <MousePointer2 className="w-3 h-3 fill-white" />
                            </div>
                        </div>

                        {/* Step 3: The Result (Revenue Card) */}
                        <div className="w-56 bg-white/5 backdrop-blur-md border border-emerald-500/30 p-4 rounded-xl mt-2 flex items-center justify-between shadow-2xl opacity-90 group-hover:opacity-100 transition-opacity">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-emerald-500/20 rounded-lg">
                                    <CreditCard className="w-5 h-5 text-emerald-400" />
                                </div>
                                <div>
                                    <div className="text-[10px] text-slate-400 uppercase font-bold">Ingresos</div>
                                    <div className="text-lg font-bold text-white">2.450 €</div>
                                </div>
                            </div>
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        </div>
                     </div>

                     {/* Floating Particles */}
                     <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-20"></div>
                     <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-40"></div>
                </div>
            )
        }
    ];

    return (
        <div className="pt-12 pb-24 container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Nuestras Soluciones</h1>
                <p className="text-slate-400 text-lg md:text-xl">
                    Un enfoque holístico de 360° para marcas que buscan la excelencia digital.
                </p>
            </div>

            <div className="space-y-24 md:space-y-32">
                {services.map((service, idx) => (
                    <div key={service.id} className={`flex flex-col lg:flex-row gap-12 md:gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                        {/* Text Content */}
                        <div className="flex-1 order-2 lg:order-1">
                            <div className="mb-6 inline-flex p-4 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg">
                                {service.icon}
                            </div>
                            <div className="text-cyan-500 font-bold tracking-widest uppercase text-sm mb-2">{service.subtitle}</div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{service.title}</h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                {service.description}
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {service.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0">
                                            <Check className="w-3 h-3 text-cyan-400" />
                                        </div>
                                        <span className="text-slate-300 font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link 
                                to="/contact"
                                className="inline-flex items-center gap-2 text-white border-b border-cyan-400 pb-1 hover:text-cyan-400 transition-colors font-bold"
                            >
                                Solicitar Presupuesto
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Visual Content */}
                        <div className="flex-1 relative w-full order-1 lg:order-2">
                            <div className="absolute inset-0 bg-gradient-to-tr from-slate-800 to-slate-900 rounded-3xl transform rotate-3 opacity-50"></div>
                            <div className="relative bg-slate-950 border border-slate-800 rounded-3xl p-0 h-[350px] md:h-[400px] overflow-hidden shadow-2xl flex items-center justify-center">
                                {service.visual}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Methodology Section */}
            <div className="mt-32 p-6 md:p-12 rounded-3xl bg-slate-900/50 border border-slate-800 text-center">
                <h3 className="text-3xl font-display font-bold mb-12">El Método Smilelife</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 z-0"></div>
                    
                    {[
                        { step: "01", title: "Descubrimiento", desc: "Análisis profundo de tu marca." },
                        { step: "02", title: "Estrategia", desc: "Planificación IA personalizada." },
                        { step: "03", title: "Ejecución", desc: "Desarrollo ágil y preciso." },
                        { step: "04", title: "Optimización", desc: "Mejora continua basada en data." }
                    ].map((item, i) => (
                        <div key={i} className="relative z-10 bg-slate-900 p-6 rounded-xl border border-slate-800">
                            <div className="text-4xl md:text-5xl font-display font-bold text-slate-800 mb-4">{item.step}</div>
                            <h4 className="text-lg md:text-xl font-bold text-white mb-2">{item.title}</h4>
                            <p className="text-slate-400 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;