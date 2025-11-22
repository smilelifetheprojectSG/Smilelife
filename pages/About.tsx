import React from 'react';
import { Target, Users, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
    return (
        <div className="container mx-auto px-6 pt-12 pb-24">
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center mb-24">
                <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
                    Creamos el futuro <br />
                    <span className="text-cyan-400">hoy.</span>
                </h1>
                <p className="text-xl text-slate-400 leading-relaxed">
                    Smilelife nació con una misión clara: democratizar la tecnología de alto nivel para empresas ambiciosas. 
                    Somos una agencia boutique donde la artesanía digital se encuentra con la inteligencia artificial.
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
                {[
                    { label: "Proyectos Exitosos", value: "150+" },
                    { label: "Retorno Promedio", value: "300%" },
                    { label: "Países Alcanzados", value: "12" },
                    { label: "Premios de Diseño", value: "08" }
                ].map((stat, i) => (
                    <div key={i} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 text-center hover:border-cyan-500/30 transition-all">
                        <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                        <div className="text-slate-500 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Philosophy */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
                <div className="lg:col-span-1">
                    <h3 className="text-3xl font-display font-bold mb-6 text-white sticky top-32">
                        Manifiesto<br/>Smilelife.
                    </h3>
                </div>
                <div className="lg:col-span-2 space-y-12">
                    <div className="flex gap-6">
                        <div className="bg-slate-800 p-3 rounded-lg h-fit">
                            <Target className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-3">Resultados sobre Ego</h4>
                            <p className="text-slate-400 leading-relaxed">
                                No diseñamos para ganar premios de arte abstracto. Diseñamos para ganar cuota de mercado. 
                                Cada decisión creativa debe tener una justificación comercial sólida.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="bg-slate-800 p-3 rounded-lg h-fit">
                            <Lightbulb className="w-6 h-6 text-yellow-400" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-3">Innovación Constante</h4>
                            <p className="text-slate-400 leading-relaxed">
                                Lo que funcionaba hace 6 meses, hoy es obsoleto. Nuestro equipo dedica el 20% de su tiempo 
                                a investigar nuevas herramientas de IA y tendencias de diseño para mantenerte a la vanguardia.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="bg-slate-800 p-3 rounded-lg h-fit">
                            <Users className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-3">Transparencia Radical</h4>
                            <p className="text-slate-400 leading-relaxed">
                                Sin jerga técnica confusa. Sin costes ocultos. Te tratamos como a un socio, 
                                con comunicación directa y honesta sobre lo que es posible y lo que no.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Teaser */}
            <div className="relative rounded-3xl overflow-hidden h-[500px] flex items-center justify-center">
                <img 
                    src="https://picsum.photos/1200/600" 
                    alt="Team working" 
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
                <div className="relative z-10 text-center max-w-2xl px-6">
                    <h3 className="text-3xl font-bold mb-4">Las Mentes Detrás de la Magia</h3>
                    <p className="text-slate-300 mb-8">
                        Un equipo multidisciplinar de ingenieros de prompts, diseñadores UX senior y estrategas de negocio.
                    </p>
                    <button className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-slate-950 transition-all duration-300 font-bold">
                        Únete al Equipo
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;