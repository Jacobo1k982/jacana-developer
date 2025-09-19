'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isHeaderHidden, setIsHeaderHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsHeaderHidden(currentScrollY > lastScrollY && currentScrollY > 100);
            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === '/' && !isSearchActive && document.activeElement?.tagName !== 'INPUT') {
                e.preventDefault();
                setIsSearchActive(true);
                setTimeout(() => document.getElementById('header-search-input')?.focus(), 50);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isSearchActive]);

    const navItems = [
        { label: 'Servicios', href: '#services' },
        { label: 'Stack', href: '#tech' },
        { label: 'Precios', href: '#pricing' },
        { label: 'Docs', href: '#docs' },
    ];

    return (
        <header
            className={`sticky top-0 z-50 backdrop-blur-md bg-black/50 border-b border-cyan-500 transition-transform duration-300 ${isHeaderHidden ? '-translate-y-full' : 'translate-y-0'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Desktop */}
                <div className="hidden md:flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center mr-6">
                            <img
                                src="/img/icon.ico"
                                alt="JACANA DEV Logo"
                                className="w-12 h-11 rounded-md object-cover border border-transparent hover:border-cyan-400 transition-colors"
                            />
                        </Link>
                        <nav className="flex space-x-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="px-3 py-2 text-sm font-medium text-cyan-300 hover:text-white hover:bg-cyan-700/20 rounded-md transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Search */}
                    <div className="flex-1 max-w-lg mx-6">
                        <div
                            className={`relative rounded-md border border-cyan-500 bg-black/30 hover:border-cyan-400 transition-colors ${isSearchActive ? 'shadow-[0_0_8px_#00f7ff]' : ''
                                }`}
                        >
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-cyan-300"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </div>
                            <input
                                id="header-search-input"
                                type="text"
                                placeholder="Buscar en JACANA DEV (presiona /)"
                                className="block w-full pl-10 pr-4 py-2 bg-transparent text-white placeholder-cyan-400 text-sm focus:outline-none"
                                onFocus={() => setIsSearchActive(true)}
                                onBlur={() => setIsSearchActive(false)}
                            />
                            {isSearchActive && (
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                    <kbd className="px-2 py-0.5 text-xs font-medium bg-cyan-900/50 text-cyan-200 rounded">
                                        ⎋
                                    </kbd>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right actions */}
                    <div className="flex items-center space-x-2">
                        <button className="p-2 text-cyan-300 hover:text-white hover:bg-cyan-700/20 rounded-md transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="18" cy="18" r="3"></circle>
                                <circle cx="6" cy="6" r="3"></circle>
                                <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
                                <line x1="6" y1="9" x2="6" y2="21"></line>
                            </svg>
                        </button>

                        {/* Avatar */}
                        <div className="relative">
                            <button
                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                                className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-white text-xs font-medium hover:ring-2 hover:ring-cyan-400 transition-all"
                                aria-label="Abrir perfil"
                            >
                                JD
                            </button>
                            {isProfileOpen && (
                                <div className="absolute right-0 mt-2 w-72 bg-black/80 border border-cyan-500 rounded-md shadow-lg z-50 py-2">
                                    <div className="px-4 py-3 border-b border-cyan-500">
                                        <p className="text-sm font-medium text-white">Jacana Dev</p>
                                        <p className="text-xs text-cyan-300">info@jacana-dev.net</p>
                                    </div>
                                    <div className="py-2">
                                        <Link href="#profile" className="block px-4 py-2 text-sm text-white hover:bg-cyan-700/20 rounded-md">
                                            Tu perfil
                                        </Link>
                                        <Link href="#settings" className="block px-4 py-2 text-sm text-white hover:bg-cyan-700/20 rounded-md">
                                            Configuración
                                        </Link>
                                        <Link href="#signout" className="block px-4 py-2 text-sm text-white hover:bg-cyan-700/20 rounded-md">
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
                        <img src="/img/jacana.png" alt="JACANA DEV" className="w-26 h-8 rounded-md border border-transparent hover:border-cyan-400 transition-colors" />
                    </Link>
                    <div className="flex items-center space-x-2">
                        <button onClick={() => setIsSearchActive(true)} className="p-2 text-cyan-300 hover:text-white hover:bg-cyan-700/20 rounded-md transition-colors">
                            🔍
                        </button>
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-cyan-300 hover:text-white hover:bg-cyan-700/20 rounded-md transition-colors">
                            ☰
                        </button>
                    </div>
                </div>

                {/* Mobile overlays */}
                {isSearchActive && (
                    <div className="fixed inset-0 z-50 bg-black/90 px-4 pt-16 pb-24 md:hidden">
                        <input
                            type="text"
                            placeholder="Buscar en JACANA DEV"
                            className="block w-full pl-3 pr-3 py-3 rounded-md text-white bg-black/50 border border-cyan-500 placeholder-cyan-300 focus:outline-none"
                            autoFocus
                            onBlur={() => setIsSearchActive(false)}
                        />
                    </div>
                )}

                {isMobileMenuOpen && (
                    <div className="fixed inset-0 z-50 bg-black/90 pt-16 px-4 md:hidden space-y-4">
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-white hover:bg-cyan-700/20 rounded-md">
                                {item.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
}
