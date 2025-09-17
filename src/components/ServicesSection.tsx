'use client';

import { motion } from 'framer-motion';
import { StarIcon } from '@primer/octicons-react'; // Icono de GitHub

const services = [
    {
        title: "Desarrollo Fullstack",
        desc: "Frontend con React/Next.js + Backend en Node.js, Python o Go. Todo integrado, testeado y desplegado.",
        icon: "⚡"
    },
    {
        title: "APIs Modernas",
        desc: "RESTful, GraphQL o tRPC. Documentadas, versionadas y con rate limiting. Listas para escalar.",
        icon: "🔌"
    },
    {
        title: "DevOps & CI/CD",
        desc: "GitHub Actions, Docker, Kubernetes, AWS/GCP. Automatizamos todo tu pipeline.",
        icon: "🚀"
    },
    {
        title: "Arquitectura & Refactor",
        desc: "Migración de monolitos, microservicios, serverless. Optimizamos lo que ya tienes.",
        icon: "🧱"
    },
    {
        title: "UX/UI Técnico",
        desc: "Diseñamos interfaces que no solo son bonitas, sino que funcionan rápido y sin bugs.",
        icon: "🎨"
    },
    {
        title: "Mentoría & Code Review",
        desc: "Revisión de código, buenas prácticas, escalabilidad. Acompañamos a tu equipo.",
        icon: "👨‍💻"
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2
                        className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3"
                        style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                    >
                        Servicios
                    </h2>
                    <p
                        className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base"
                        style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                    >
                        Como un repo bien estructurado: cada servicio tiene su propósito, documentación y tests.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: idx * 0.08 }}
                            className="group relative border border-gray-200 dark:border-gray-800 rounded bg-white dark:bg-gray-800 p-4 hover:bg-gray-50 dark:hover:bg-gray-800/70 transition-all duration-150 ease-in-out cursor-pointer overflow-hidden"
                            style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                        >
                            {/* Star button (solo visible en hover) */}
                            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none">
                                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700/50 rounded-full px-2 py-1">
                                    <StarIcon size={12} />
                                    <span>Star</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="text-lg mt-0.5 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                    {service.icon}
                                </span>
                                <div>
                                    <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}