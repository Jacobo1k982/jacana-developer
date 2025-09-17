'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Hero() {
    const [text, setText] = useState('');
    const fullText = 'npx jacana-dev --build-legend <En JACANA DEV nos especializamos en el desarrollo full stack con un enfoque integral en innovación, eficiencia y calidad. Diseñamos y construimos soluciones digitales modernas que abarcan desde páginas web profesionales hasta aplicaciones y tiendas en línea robustas, seguras y escalables. Nuestro compromiso es brindar a cada cliente una plataforma tecnológica confiable que impulse su crecimiento y competitividad en el entorno digital. En JACANA DEV entendemos que cada proyecto es único, por eso trabajamos con precisión y visión estratégica para entregar resultados que superan expectativas/>';
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        let i = 0;
        const typing = setInterval(() => {
            if (i < fullText.length) {
                setText(fullText.slice(0, i + 1));
                i++;
            } else {
                clearInterval(typing);
            }
        }, 80);

        return () => clearInterval(typing);
    }, []);

    return (
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
                >
                    <span>Desarrollo Fullstack</span> <br />
                    <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        JACANA DEV
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-lg md:text-xl text-[var(--muted)] max-w-3xl mx-auto mb-12 leading-relaxed"
                >
                    Construimos sistemas escalables, mantenibles y hermosos — como los repositorios que admiras. Código limpio, arquitectura sólida, entrega rápida.
                </motion.p>

                {/* Terminal Simulator */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="max-w-3xl mx-auto mb-12"
                >
                    <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-md overflow-hidden">
                        <div className="bg-[var(--header-bg)] px-4 py-3 flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full bg-[var(--danger)]"></div>
                            <div className="w-3 h-3 rounded-full bg-[var(--warning)]"></div>
                            <div className="w-3 h-3 rounded-full bg-[var(--success)]"></div>
                        </div>
                        <div className="p-4 font-mono text-sm md:text-base">
                            <span className="text-[var(--success)]">$&nbsp;</span>
                            <span className="text-[var(--accent)]">{text}</span>
                            <span className={`typing-cursor ${isLoaded ? 'opacity-100' : 'opacity-0'}`}></span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <a
                        href="#services"
                        className="inline-block bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-md text-lg transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-cyan-500/30"
                    >
                        Ver Servicios →
                    </a>
                </motion.div>
            </div>
        </section>
    );
}