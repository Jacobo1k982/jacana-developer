'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isHeaderHidden, setIsHeaderHidden] = useState(false);

    // Detectar scroll para ocultar header
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsHeaderHidden(currentScrollY > lastScrollY && currentScrollY > 100);
            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const navItems = [
        { label: 'Servicios', href: '#services' },
        { label: 'Stack', href: '#tech' },
        { label: 'Precios', href: '#pricing' },
        { label: 'Docs', href: '#docs' },
    ];

    return (
        <header
            className={`sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-cyan-500/40 shadow-md transition-transform duration-500 ${isHeaderHidden ? '-translate-y-full' : 'translate-y-0'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Desktop */}
                <div className="hidden md:flex items-center justify-between h-16">
                    {/* Logo + Nav */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center mr-6">
                            <img
                                src="/img/icon.ico"
                                alt="JACANA DEV Logo"
                                className="w-12 h-11 rounded-md object-cover border border-transparent hover:border-cyan-400/70 transition-colors"
                            />
                        </Link>
                        <nav className="flex space-x-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="px-3 py-2 text-sm font-medium text-cyan-300 hover:text-white hover:bg-cyan-600/20 rounded-md transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Search */}
                    <div className="flex-1 max-w-lg mx-6">
                        <div
                            className={`relative rounded-md border border-cyan-500 bg-black/30 hover:border-cyan-400 transition-colors ${isSearchActive ? 'shadow-[0_0_12px_#00f7ff]' : ''
                                }`}
                        >
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                🔍
                            </div>
                            <input
                                id="header-search-input"
                                type="text"
                                placeholder="Buscar en JACANA DEV (presiona /)"
                                className="block w-full pl-10 pr-4 py-2 bg-transparent text-white placeholder-cyan-400 text-sm focus:outline-none"
                                onFocus={() => setIsSearchActive(true)}
                                onBlur={() => setIsSearchActive(false)}
                            />
                        </div>
                    </div>

                    {/* Right actions */}
                    <div className="flex items-center space-x-2">
                        <button
                            aria-label="Notificaciones"
                            className="p-2 text-cyan-300 hover:text-white hover:bg-cyan-700/20 rounded-md transition-colors"
                        >
                            🔔
                        </button>

                        {/* Avatar */}
                        <div className="relative">
                            <button
                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                                className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-white text-xs font-semibold hover:ring-2 hover:ring-cyan-400 transition-all"
                                aria-label="Abrir perfil"
                            >
                                JD
                            </button>
                            {isProfileOpen && (
                                <div className="absolute right-0 mt-2 w-72 bg-black/90 border border-cyan-500/50 rounded-md shadow-xl z-50 py-2">
                                    <div className="px-4 py-3 border-b border-cyan-500/30">
                                        <p className="text-sm font-medium text-white">Jacana Dev</p>
                                        <p className="text-xs text-cyan-300">info@jacana-dev.net</p>
                                    </div>
                                    <div className="py-2">
                                        <Link href="#profile" className="block px-4 py-2 text-sm text-white hover:bg-cyan-700/30 rounded-md">
                                            Tu perfil
                                        </Link>
                                        <Link href="#settings" className="block px-4 py-2 text-sm text-white hover:bg-cyan-700/30 rounded-md">
                                            Configuración
                                        </Link>
                                        <Link href="#signout" className="block px-4 py-2 text-sm text-white hover:bg-cyan-700/30 rounded-md">
                                            Salir
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Mobile */}
                <div className="flex md:hidden items-center justify-between h-16">
                    <Link href="/">
                        <img src="/img/jacana.png" alt="JACANA DEV"
                            className="w-26 h-8 rounded-md border border-transparent hover:border-cyan-400 transition-colors" />
                    </Link>
                    <div className="flex items-center space-x-2">
                        <button onClick={() => setIsSearchActive(true)}
                            className="p-2 text-cyan-300 hover:text-white hover:bg-cyan-700/20 rounded-md transition-colors">
                            🔍
                        </button>
                        <button onClick={() => setIsMobileMenuOpen(true)}
                            className="p-2 text-cyan-300 hover:text-white hover:bg-cyan-700/20 rounded-md transition-colors">
                            ☰
                        </button>
                    </div>
                </div>

                {/* Mobile Search Overlay */}
                {isSearchActive && (
                    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md px-4 pt-16 pb-24 md:hidden">
                        {/* Botón de cierre */}
                        <button
                            onClick={() => setIsSearchActive(false)}
                            className="absolute top-4 right-4 text-cyan-400 hover:text-white text-2xl"
                        >
                            ✕
                        </button>
                        <input
                            type="text"
                            placeholder="Buscar en JACANA DEV"
                            className="block w-full pl-3 pr-3 py-3 rounded-md text-white bg-black/40 border border-cyan-500 placeholder-cyan-300 focus:outline-none"
                            autoFocus
                        />
                    </div>
                )}

                {/* Mobile Sidebar Menu */}
                {isMobileMenuOpen && (
                    <>
                        {/* Fondo translúcido */}
                        <div
                            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        {/* Sidebar deslizante */}
                        <div className="fixed top-0 right-0 h-full w-64 z-50 bg-black/90 border-l border-cyan-500/50 shadow-xl transform transition-transform duration-300 ease-in-out translate-x-0">
                            {/* Botón de cierre */}
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="absolute top-4 right-4 text-cyan-400 hover:text-white text-2xl"
                            >
                                ✕
                            </button>
                            <nav className="mt-16 space-y-4 px-6">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block px-4 py-3 text-white hover:bg-cyan-700/30 rounded-md"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </>
                )}
            </div>
        </header>
    );
}
