import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Zap, Star, Crown, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
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
        <div className="pt-12 pb-24 container mx-auto px-6">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-slate-700 bg-slate-900/50 backdrop-blur-sm">
                    <span className="text-cyan-400 text-[10px] md:text-xs font-bold tracking-widest uppercase">Inversión Estratégica</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Planes de Crecimiento</h1>
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

            {/* Pricing Grid */}
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
                        {/* Header Area with Icon and Optional Badge */}
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

            {/* Enterprise Section */}
            <div className="mt-24 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                     <div className="absolute top-[-50%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]"></div>
                </div>
                <div className="relative z-10">
                    <h3 className="text-3xl font-display font-bold mb-4">¿Necesitas una solución a medida?</h3>
                    <p className="text-slate-400 max-w-2xl mx-auto mb-8">
                        Para corporaciones grandes o proyectos con requerimientos técnicos específicos, ofrecemos planes Enterprise personalizados con SLA garantizado.
                    </p>
                    <Link to="/contact" className="text-cyan-400 font-bold border-b border-cyan-400 pb-1 hover:text-cyan-300 transition-colors">
                        Hablar con Ventas Corporativas
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Pricing;