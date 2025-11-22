import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => setIsSubmitted(true), 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="container mx-auto px-6 pt-12 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Contact Info */}
                <div>
                    <h1 className="text-5xl font-display font-bold mb-6">Hablemos.</h1>
                    <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                        ¿Tienes un proyecto ambicioso en mente? Estamos listos para escucharte.
                        Cuéntanos tu visión y te diremos cómo hacerla realidad.
                    </p>

                    <div className="space-y-8 mb-12">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-slate-800 rounded-lg text-cyan-400">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white mb-1">Email</h3>
                                <p className="text-slate-400">hello@smilelife.agency</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-slate-800 rounded-lg text-cyan-400">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white mb-1">Teléfono</h3>
                                <p className="text-slate-400">+34 910 000 000</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-slate-800 rounded-lg text-cyan-400">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white mb-1">Oficinas</h3>
                                <p className="text-slate-400">Paseo de la Castellana, Madrid<br/>Disponible Globalmente vía Zoom</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-slate-900 p-8 md:p-10 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
                    {isSubmitted ? (
                        <div className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center p-8 text-center z-20">
                            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                                <Send className="w-10 h-10 text-green-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Recibido!</h3>
                            <p className="text-slate-400">Nuestro equipo analizará tu solicitud y te contactará en menos de 24 horas.</p>
                            <button 
                                onClick={() => setIsSubmitted(false)}
                                className="mt-8 text-cyan-400 hover:text-white font-bold"
                            >
                                Enviar otro mensaje
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-400 ml-1">Nombre</label>
                                    <input 
                                        required
                                        name="name"
                                        type="text" 
                                        placeholder="Tu nombre"
                                        value={formState.name}
                                        onChange={handleChange}
                                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-400 ml-1">Empresa</label>
                                    <input 
                                        name="company"
                                        type="text" 
                                        placeholder="Nombre de tu marca"
                                        value={formState.company}
                                        onChange={handleChange}
                                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-400 ml-1">Email Corporativo</label>
                                <input 
                                    required
                                    name="email"
                                    type="email" 
                                    placeholder="tu@empresa.com"
                                    value={formState.email}
                                    onChange={handleChange}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-400 ml-1">Detalles del Proyecto</label>
                                <textarea 
                                    required
                                    name="message"
                                    placeholder="Cuéntanos sobre tus objetivos, presupuesto estimado y plazos..."
                                    rows={4}
                                    value={formState.message}
                                    onChange={handleChange}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                                ></textarea>
                            </div>

                            <button 
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 transform hover:-translate-y-1"
                            >
                                Enviar Solicitud
                            </button>
                            <p className="text-xs text-slate-500 text-center mt-4">
                                Al enviar este formulario aceptas nuestra política de privacidad.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;