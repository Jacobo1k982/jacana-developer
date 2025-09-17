'use client';

import { motion } from 'framer-motion';

const testimonials = [
    {
        user: "carla_frontend",
        comment: "Jacana Dev reescribió nuestra app legacy en Next.js + tRPC. ¡Rendimiento x5 y mantenimiento sencillo!",
        avatar: "C"
    },
    {
        user: "devops_guru",
        comment: "Automatizaron nuestro deploy con GitHub Actions y AWS. Ahora lanzamos features en minutos, no días.",
        avatar: "D"
    },
    {
        user: "startup_ceo",
        comment: "No solo entregaron código. Entregaron documentación, tests y entrenamiento. Un partner real.",
        avatar: "S"
    },
];

export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--background)]">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonios</h2>
                    <p className="text-[var(--muted)]">
                        Lo que dicen quienes ya confiaron en nosotros — estilo GitHub commit history.
                    </p>
                </div>

                <div className="space-y-6">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="flex items-start space-x-4 p-5 border border-[var(--border)] rounded bg-[var(--card-bg)] hover:border-[var(--success)] transition"
                        >
                            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold text-sm flex-shrink-0">
                                {t.avatar}
                            </div>
                            <div>
                                <div className="flex items-center space-x-2 mb-2">
                                    <span className="text-green-400 font-mono text-sm">@{t.user}</span>
                                    <span className="text-[var(--muted)] text-xs">comentó hace 3 días</span>
                                </div>
                                <p className="text-[var(--foreground)]">“{t.comment}”</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}