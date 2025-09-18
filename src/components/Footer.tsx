'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
    MarkGithubIcon,
    LinkExternalIcon,
    MailIcon,
    RssIcon,
    ArrowUpIcon,
} from '@primer/octicons-react';
import { motion, AnimatePresence } from 'framer-motion';

// ➡️ Componente de separador
function Separator() {
    return (
        <span
            className="text-gray-400 dark:text-gray-600 select-none"
            aria-hidden="true"
        >
            ·
        </span>
    );
}

// ➡️ Componente reutilizable para enlaces con íconos + tooltip
function FooterIconLink({
    href,
    label,
    icon,
}: {
    href: string;
    label: string;
    icon: React.ReactNode;
}) {
    return (
        <div className="group relative">
            <Link
                href={href}
                aria-label={label}
                className="inline-flex items-center p-1.5 rounded transition-all duration-150 hover:scale-105"
                style={{
                    fontFamily:
                        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
                }}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
                <span className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors">
                    {icon}
                </span>
            </Link>

            {/* Tooltip estilo GitHub */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2.5 py-1 bg-gray-900 text-white text-[11px] font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-sm z-10">
                {label}
            </div>
        </div>
    );
}

// ➡️ Componente principal Footer
export default function Footer() {
    const [displayText, setDisplayText] = useState('');
    const [showBackToTop, setShowBackToTop] = useState(false);
    const fullText = `echo '© 2025 JACANA DEV — Fullstack Architects'`; // 👈 Usamos comillas simples aquí
    const prompt = `jacana-dev@production:~$ `;

    // Efecto typing — ✅ fullText en dependencias
    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i <= fullText.length) {
                setDisplayText(fullText.slice(0, i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 50);
        return () => clearInterval(timer);
    }, [fullText]); // ✅ Dependencia añadida

    // Mostrar "Volver arriba" al scrollear
    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Función para scroll suave hacia arriba
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-10 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
                {/* Comando terminal animado — estilo VS Code */}
                <div className="text-center mb-8">
                    <pre
                        className="text-[13px] md:text-sm font-mono text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/60 rounded-lg p-4 inline-block border border-gray-200 dark:border-gray-700 shadow-sm"
                        aria-label="Comando terminal de bienvenida"
                        style={{
                            fontFamily: 'Consolas, Monaco, "Andale Mono", monospace',
                            lineHeight: '1.6',
                        }}
                    >
                        <span className="text-green-600 dark:text-green-400 select-none">
                            {prompt}
                        </span>
                        <span className="text-blue-600 dark:text-blue-400 select-none">
                            echo
                        </span>{' '}
                        <span className="text-gray-400">'{displayText}'</span> {/* ✅ Comillas simples */}
                        {displayText.length < fullText.length && (
                            <span className="animate-pulse ml-0.5 text-green-500 dark:text-green-400">
                                ▌
                            </span>
                        )}
                    </pre>
                </div>

                {/* Enlaces con íconos + tooltips estilo GitHub */}
                <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-[13px] text-gray-500 dark:text-gray-400 mb-6">
                    <FooterIconLink
                        href="https://github.com/tuusuario"
                        label="GitHub"
                        icon={<MarkGithubIcon size={16} />}
                    />
                    <Separator />
                    <FooterIconLink
                        href="https://twitter.com/tuusuario"
                        label="Twitter"
                        icon={<LinkExternalIcon size={16} />}
                    />
                    <Separator />
                    <FooterIconLink
                        href="https://linkedin.com/in/tuusuario"
                        label="LinkedIn"
                        icon={<LinkExternalIcon size={16} />}
                    />
                    <Separator />
                    <FooterIconLink
                        href="mailto:contacto@jacana.dev"
                        label="Email"
                        icon={<MailIcon size={16} />}
                    />
                    <Separator />
                    <FooterIconLink
                        href="/rss.xml"
                        label="RSS"
                        icon={<RssIcon size={16} />}
                    />
                </div>

                {/* Línea de inspiración — tipografía exacta de GitHub */}
                <p
                    className="text-center text-[13px] text-gray-500 dark:text-gray-500 mt-4 leading-5"
                    style={{
                        fontFamily:
                            '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
                    }}
                >
                    Inspirado en la eficiencia de GitHub. Construido para el futuro.
                </p>
            </div>

            {/* Botón "Volver arriba" — estilo GitHub floating action */}
            <AnimatePresence>
                {showBackToTop && (
                    <motion.button
                        key="back-to-top"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={scrollToTop}
                        aria-label="Volver arriba"
                        className="hidden lg:flex items-center justify-center w-8 h-8 rounded-full bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 fixed bottom-6 right-6 shadow-md transition-all duration-200 hover:scale-105 z-50"
                    >
                        <ArrowUpIcon size={16} />
                    </motion.button>
                )}
            </AnimatePresence>
        </footer>
    );
}