import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, ArrowRight, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
        window.scrollTo(0, 0);
    }, [location]);

    const navLinks = [
        { label: 'Inicio', path: '/' },
        { label: 'Servicios', path: '/services' },
        { label: 'Precios', path: '/pricing' },
        { label: 'La Agencia', path: '/about' },
        { label: 'Contacto', path: '/contact' },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-slate-950 text-white font-sans overflow-x-hidden selection:bg-cyan-500 selection:text-white">
            {/* Navbar */}
            <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-slate-950/90 backdrop-blur-md border-slate-800 py-4' : 'bg-transparent border-transparent py-6'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="bg-gradient-to-br from-cyan-400 to-blue-600 p-2 rounded-lg group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300">
                            <Zap className="w-6 h-6 text-white" fill="currentColor" />
                        </div>
                        <span className="text-2xl font-display font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                            Smilelife<span className="text-cyan-400">.</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.path} 
                                to={link.path}
                                className={`text-sm font-bold tracking-wide transition-all duration-300 hover:text-cyan-400 ${location.pathname === link.path ? 'text-cyan-400' : 'text-slate-300'}`}
                            >
                                {link.label.toUpperCase()}
                            </Link>
                        ))}
                        <Link 
                            to="/contact" 
                            className="px-6 py-2.5 bg-white text-slate-950 text-sm font-bold rounded-full hover:bg-cyan-400 hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                        >
                            INICIAR PROYECTO
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button 
                        className="md:hidden text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen py-8' : 'max-h-0 py-0'}`}>
                    <div className="flex flex-col items-center gap-6">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.path} 
                                to={link.path}
                                className="text-lg font-bold text-slate-300 hover:text-cyan-400"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-grow pt-24">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-slate-950 border-t border-slate-900 py-16 mt-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center gap-2 mb-6">
                                <Zap className="w-6 h-6 text-cyan-400" />
                                <span className="text-2xl font-display font-bold text-white">Smilelife.</span>
                            </div>
                            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                                Redefiniendo la excelencia digital. Fusionamos inteligencia artificial avanzada, psicología persuasiva y diseño de vanguardia para crear imperios digitales.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-6 tracking-wider text-sm">EXPLORAR</h4>
                            <ul className="space-y-4 text-slate-400">
                                <li><Link to="/services" className="hover:text-cyan-400 transition-colors">Servicios Premium</Link></li>
                                <li><Link to="/about" className="hover:text-cyan-400 transition-colors">Filosofía</Link></li>
                                <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Contacto</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-6 tracking-wider text-sm">LEGAL</h4>
                            <ul className="space-y-4 text-slate-400">
                                <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacidad</a></li>
                                <li><a href="#" className="hover:text-cyan-400 transition-colors">Términos</a></li>
                                <li className="flex gap-4 mt-4">
                                    <Instagram className="w-5 h-5 hover:text-cyan-400 cursor-pointer transition-colors" />
                                    <Twitter className="w-5 h-5 hover:text-cyan-400 cursor-pointer transition-colors" />
                                    <Linkedin className="w-5 h-5 hover:text-cyan-400 cursor-pointer transition-colors" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
                        <p>© 2024 Smilelife Agency. Todos los derechos reservados.</p>
                        <p className="mt-4 md:mt-0 flex items-center gap-1">
                            Hecho con <span className="text-red-500">❤️</span> desde España
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;