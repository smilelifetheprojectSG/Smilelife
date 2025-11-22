import React, { useState } from 'react';
import { Sparkles, Loader2, Copy, Check, ArrowRight } from 'lucide-react';
import { generateBrandAnalysis } from '../services/geminiService';
import { AnalysisResult, LoadingState } from '../types';

const Tools: React.FC = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState<AnalysisResult | null>(null);
    const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
    const [error, setError] = useState('');

    const handleAnalyze = async () => {
        if (!input.trim()) return;
        setStatus(LoadingState.LOADING);
        setError('');
        setResult(null);

        try {
            const data = await generateBrandAnalysis(input);
            setResult(data);
            setStatus(LoadingState.SUCCESS);
        } catch (e) {
            console.error(e);
            setError('Hubo un error al conectar con la IA. Por favor intenta de nuevo más tarde.');
            setStatus(LoadingState.ERROR);
        }
    };

    return (
        <div className="container mx-auto px-6 pt-12 pb-24 min-h-[80vh]">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-4">
                        <Sparkles className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-wider">Smile AI Lab</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        Generador de Identidad de Marca
                    </h1>
                    <p className="text-slate-400 text-lg">
                        Experimenta el poder de nuestra tecnología. Describe tu negocio y nuestra IA generará 
                        instantáneamente un concepto de marca premium, estrategia SEO y paleta visual.
                    </p>
                </div>

                {/* Input Section */}
                <div className="bg-slate-900 p-2 rounded-3xl border border-slate-800 shadow-2xl mb-12">
                    <div className="relative">
                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ej: Una cafetería de especialidad en Barcelona que también vende libros vintage y organiza talleres de poesía..."
                            className="w-full bg-slate-950 text-white p-6 rounded-2xl min-h-[150px] focus:outline-none focus:ring-2 focus:ring-purple-500/50 resize-none text-lg placeholder:text-slate-600"
                        ></textarea>
                        <div className="absolute bottom-4 right-4">
                            <button
                                onClick={handleAnalyze}
                                disabled={status === LoadingState.LOADING || !input.trim()}
                                className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${
                                    status === LoadingState.LOADING || !input.trim()
                                        ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                                        : 'bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                                }`}
                            >
                                {status === LoadingState.LOADING ? (
                                    <><Loader2 className="w-5 h-5 animate-spin" /> Analizando...</>
                                ) : (
                                    <><Sparkles className="w-5 h-5" /> Generar Concepto</>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Error Message */}
                {status === LoadingState.ERROR && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-center mb-8">
                        {error}
                    </div>
                )}

                {/* Results Section */}
                {status === LoadingState.SUCCESS && result && (
                    <div className="animate-fade-in-up space-y-8">
                        {/* Header Result */}
                        <div className="bg-gradient-to-br from-slate-900 to-slate-900 border border-slate-800 p-8 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none"></div>
                            <h3 className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-4">Slogan Generado</h3>
                            <p className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">
                                "{result.slogan}"
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Strategy */}
                            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
                                <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-4">Estrategia Digital</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    {result.strategy}
                                </p>
                            </div>

                            {/* Keywords */}
                            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
                                <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-4">Keywords SEO</h3>
                                <div className="flex flex-wrap gap-2">
                                    {result.keywords.map((kw, i) => (
                                        <span key={i} className="px-3 py-1 bg-slate-800 text-emerald-200 text-sm rounded-lg border border-slate-700">
                                            #{kw}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Color Palette */}
                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Identidad Visual Sugerida</h3>
                            <div className="grid grid-cols-3 gap-4 h-32">
                                {result.colorPalette.map((color, i) => (
                                    <div key={i} className="h-full rounded-xl relative group cursor-pointer transition-transform hover:scale-105" style={{ backgroundColor: color }}>
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/20 transition-opacity rounded-xl">
                                            <span className="text-white font-mono font-bold text-sm drop-shadow-md">{color}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="text-center mt-12">
                            <p className="text-slate-400 mb-4">¿Te gusta este concepto? Hagámoslo realidad.</p>
                            <a href="/contact" className="inline-flex items-center gap-2 text-white border-b border-purple-500 pb-1 font-bold hover:text-purple-400 transition-colors">
                                Iniciar Proyecto con esta Idea <ArrowRight className="w-4 h-4"/>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tools;