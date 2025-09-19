'use client';

import { motion } from 'framer-motion';

export default function CTASection() {
    return (
        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0d1117]">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4"
                    style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                >
                    ¿Listo para tu próximo
                    <br />
                    <span className="font-semibold text-gray-900 dark:text-gray-100">
                        hit tecnológico?
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-600 dark:text-gray-400 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
                    style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                >
                    No somos freelancers. Somos tu equipo de desarrollo extendido.
                </motion.p>

                <motion.div
                    whileHover={{ y: -1 }}
                    whileTap={{ y: 1 }}
                    className="inline-block"
                >
                    <button
                        className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 font-semibold py-3 px-6 rounded-md text-sm md:text-base border border-transparent transition-colors duration-150 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white"
                        style={{ fontFamily: 'Consolas, Monaco, "Andale Mono", monospace' }}
                    >
                        $ contactar --urgente
                    </button>
                </motion.div>
            </div>
        </section>
    );
}