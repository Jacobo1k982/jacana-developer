'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isHeaderHidden, setIsHeaderHidden] = useState(false);

    // Efecto para ocultar header al scrollear hacia abajo (como GitHub)
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsHeaderHidden(true);
            } else {
                setIsHeaderHidden(false);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // Atajo de teclado para activar búsqueda
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === '/' && !isSearchActive && document.activeElement?.tagName !== 'INPUT') {
                e.preventDefault();
                setIsSearchActive(true);
                setTimeout(() => {
                    const input = document.getElementById('header-search-input');
                    input?.focus();
                }, 50);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isSearchActive]);

    return (
        <header
            className={`border-b border-[#21262d] bg-[#0d1117] sticky top-0 z-50 transition-transform duration-300 ${isHeaderHidden ? '-translate-y-full' : 'translate-y-0'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Desktop Header */}
                <div className="hidden md:flex items-center justify-between h-14">
                    {/* Logo + Nav */}
                    <div className="flex items-center">
                        {/* Logo como imagen */}
                        <Link href="/" className="flex items-center mr-6">
                            <img
                                src="/img/icon.ico"
                                alt="JACANA DEV Logo"
                                className="w-8 h-8 rounded-md object-cover border border-transparent hover:border-[#58a6ff] transition-colors"
                            />
                        </Link>

                        {/* Navegación tipo GitHub tabs */}
                        <nav className="flex space-x-1">
                            {[
                                { label: 'Servicios', href: '#services' },
                                { label: 'Stack', href: '#tech' },
                                { label: 'Casos', href: '#testimonials' },
                                { label: 'Precios', href: '#pricing' },
                                { label: 'Docs', href: '#docs' },
                            ].map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="px-3 py-2 text-sm font-medium text-[#8b949e] hover:text-[#c9d1d9] hover:bg-[#30363d] rounded-md transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Barra de búsqueda centrada (como GitHub) */}
                    <div className="flex-1 max-w-lg mx-6">
                        <div
                            className={`relative rounded-md border border-[#30363d] bg-[#161b22] hover:border-[#8b949e] transition-colors ${isSearchActive ? 'border-[#58a6ff] shadow-[0_0_0_1px_#58a6ff]' : ''
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
                                    className="text-[#8b949e]"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </div>
                            <input
                                id="header-search-input"
                                type="text"
                                placeholder="Buscar en JACANA DEV (presiona /)"
                                className="block w-full pl-10 pr-4 py-2 bg-transparent text-[#c9d1d9] placeholder-[#8b949e] text-sm focus:outline-none"
                                onFocus={() => setIsSearchActive(true)}
                                onBlur={() => setIsSearchActive(false)}
                            />
                            {isSearchActive && (
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                    <kbd className="px-2 py-0.5 text-xs font-medium bg-[#30363d] text-[#c9d1d9] rounded">
                                        ⎋
                                    </kbd>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Acciones derecha */}
                    <div className="flex items-center space-x-2">
                        {/* Íconos estilo GitHub */}
                        <button className="p-2 text-[#8b949e] hover:text-[#c9d1d9] hover:bg-[#30363d] rounded-md transition-colors">
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
                            >
                                <circle cx="18" cy="18" r="3"></circle>
                                <circle cx="6" cy="6" r="3"></circle>
                                <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
                                <line x1="6" y1="9" x2="6" y2="21"></line>
                            </svg>
                        </button>

                        <button className="p-2 text-[#8b949e] hover:text-[#c9d1d9] hover:bg-[#30363d] rounded-md transition-colors">
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
                            >
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                        </button>

                        <button className="p-2 text-[#8b949e] hover:text-[#c9d1d9] hover:bg-[#30363d] rounded-md transition-colors">
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
                            >
                                <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                                <line x1="16" y1="8" x2="2" y2="22"></line>
                                <line x1="17.5" y1="15" x2="9" y2="15"></line>
                            </svg>
                        </button>

                        <div className="relative">
                            <button className="p-2 text-[#8b949e] hover:text-[#c9d1d9] hover:bg-[#30363d] rounded-md transition-colors relative">
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
                                >
                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                </svg>
                                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#f85149] rounded-full"></span>
                            </button>
                        </div>

                        {/* Avatar con dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                                onMouseEnter={() => setIsProfileOpen(true)}
                                onMouseLeave={() => setTimeout(() => setIsProfileOpen(false), 200)}
                                className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-cyan-600 flex items-center justify-center text-white text-xs font-medium hover:ring-2 hover:ring-[#58a6ff] transition-all"
                                aria-label="Abrir perfil"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="4 17 10 11 4 5"></polyline>
                                    <line x1="12" y1="19" x2="20" y2="19"></line>
                                </svg>
                            </button>

                            {isProfileOpen && (
                                <div
                                    onMouseEnter={() => setIsProfileOpen(true)}
                                    onMouseLeave={() => setIsProfileOpen(false)}
                                    className="absolute right-0 mt-2 w-80 bg-[#161b22] border border-[#30363d] rounded-md shadow-lg z-50 py-2 animate-in fade-in slide-in-from-top-1"
                                    style={{ animationDuration: '0.1s' }}
                                >
                                    <div className="px-4 py-3 border-b border-[#30363d]">
                                        <p className="text-sm font-medium text-[#c9d1d9]">Jacana Dev</p>
                                        <p className="text-xs text-[#8b949e]">jacana.dev@futuro.tech</p>
                                    </div>
                                    <div className="py-2">
                                        <a
                                            href="#profile"
                                            className="flex items-center px-4 py-2 text-sm text-[#c9d1d9] hover:bg-[#30363d] transition-colors"
                                        >
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
                                                className="mr-3"
                                            >
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="12" cy="7" r="4"></circle>
                                            </svg>
                                            Tu perfil
                                        </a>
                                        <a
                                            href="#repositories"
                                            className="flex items-center px-4 py-2 text-sm text-[#c9d1d9] hover:bg-[#30363d] transition-colors"
                                        >
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
                                                className="mr-3"
                                            >
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                            </svg>
                                            Tus repositorios
                                        </a>
                                        <a
                                            href="#projects"
                                            className="flex items-center px-4 py-2 text-sm text-[#c9d1d9] hover:bg-[#30363d] transition-colors"
                                        >
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
                                                className="mr-3"
                                            >
                                                <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                                                <line x1="8" y1="21" x2="16" y2="21"></line>
                                                <line x1="12" y1="17" x2="12" y2="21"></line>
                                            </svg>
                                            Tus proyectos
                                        </a>
                                        <a
                                            href="#stars"
                                            className="flex items-center px-4 py-2 text-sm text-[#c9d1d9] hover:bg-[#30363d] transition-colors"
                                        >
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
                                                className="mr-3"
                                            >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                            </svg>
                                            Estrellas
                                        </a>
                                    </div>
                                    <hr className="border-[#30363d]" />
                                    <div className="py-2">
                                        <a
                                            href="#settings"
                                            className="flex items-center px-4 py-2 text-sm text-[#c9d1d9] hover:bg-[#30363d] transition-colors"
                                        >
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
                                                className="mr-3"
                                            >
                                                <circle cx="12" cy="12" r="3"></circle>
                                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                                            </svg>
                                            Configuración
                                        </a>
                                        <a
                                            href="#help"
                                            className="flex items-center px-4 py-2 text-sm text-[#c9d1d9] hover:bg-[#30363d] transition-colors"
                                        >
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
                                                className="mr-3"
                                            >
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                                <line x1="12" y1="17" x2="12" y2="17"></line>
                                            </svg>
                                            Ayuda
                                        </a>
                                        <a
                                            href="#signout"
                                            className="flex items-center px-4 py-2 text-sm text-[#c9d1d9] hover:bg-[#30363d] transition-colors"
                                        >
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
                                                className="mr-3"
                                            >
                                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                                <polyline points="16 17 21 12 16 7"></polyline>
                                                <line x1="21" y1="12" x2="9" y2="12"></line>
                                            </svg>
                                            Salir
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Mobile Header */}
                <div className="flex md:hidden items-center justify-between h-14">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            {/* Logo como imagen (versión móvil) */}
                            <img
                                src="/img/icon.svg"
                                alt="JACANA DEV Logo"
                                className="w-8 h-8 rounded-md object-cover border border-transparent hover:border-[#58a6ff] transition-colors"
                            />
                        </Link>
                    </div>

                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => setIsSearchActive(true)}
                            className="p-2 text-[#8b949e] hover:text-[#c9d1d9] hover:bg-[#30363d] rounded-md transition-colors"
                        >
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
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </button>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-[#8b949e] hover:text-[#c9d1d9] hover:bg-[#30363d] rounded-md transition-colors"
                        >
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
                            >
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Search Overlay */}
                {isSearchActive && (
                    <div className="fixed inset-0 z-50 bg-[#0d1117] px-4 pt-16 pb-24 md:hidden">
                        <div className="relative">
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
                                    className="text-[#8b949e]"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Buscar en JACANA DEV"
                                className="block w-full pl-10 pr-4 py-3 bg-[#161b22] border border-[#30363d] rounded-md text-[#c9d1d9] placeholder-[#8b949e] focus:outline-none focus:border-[#58a6ff]"
                                autoFocus
                                onBlur={() => setIsSearchActive(false)}
                            />
                            <button
                                onClick={() => setIsSearchActive(false)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#8b949e] hover:text-[#c9d1d9]"
                            >
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
                                >
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>
                    </div>
                )}

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 z-50 bg-[#0d1117] pt-16 px-4 md:hidden">
                        <div className="space-y-4">
                            {[
                                { label: 'Servicios', href: '#services' },
                                { label: 'Stack', href: '#tech' },
                                { label: 'Casos', href: '#testimonials' },
                                { label: 'Precios', href: '#pricing' },
                                { label: 'Docs', href: '#docs' },
                            ].map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block px-4 py-3 text-[#c9d1d9] hover:bg-[#30363d] rounded-md"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <hr className="border-[#30363d]" />
                            <div className="pt-4 space-y-3">
                                <button className="w-full text-left px-4 py-3 text-[#c9d1d9] hover:bg-[#30363d] rounded-md">
                                    Tu perfil
                                </button>
                                <button className="w-full text-left px-4 py-3 text-[#c9d1d9] hover:bg-[#30363d] rounded-md">
                                    Configuración
                                </button>
                                <button className="w-full text-left px-4 py-3 text-[#c9d1d9] hover:bg-[#30363d] rounded-md">
                                    Salir
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}