'use client';

import { motion } from 'framer-motion';

export default function CTASection() {
    return (
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 via-purple-900/10 to-cyan-900/10">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-6"
                >
                    ¿Listo para tu próximo
                    <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        hit tecnológico?
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-[var(--muted)] mb-10 max-w-2xl mx-auto"
                >
                    No somos freelancers. Somos tu equipo de desarrollo extendido.
                </motion.p>

                <motion.div
                    whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(88, 166, 255, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-block"
                >
                    <button className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-md text-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/30">
                        $ contactar --urgente
                    </button>
                </motion.div>
            </div>
        </section>
    );
}