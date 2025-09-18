'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { StarIcon } from '@primer/octicons-react';
import { useState } from 'react';

const categories = [
    { id: 'all', label: 'Todos', icon: '📋' },
    { id: 'dev', label: 'Desarrollo', icon: '💻' },
    { id: 'infra', label: 'Infra & DevOps', icon: '⚙️' },
    { id: 'quality', label: 'Calidad & UX', icon: '✅' },
    { id: 'data', label: 'Datos & Analítica', icon: '📊' },
];

const services = [
    {
        title: "Desarrollo Fullstack",
        desc: "Frontend con React/Next.js + Backend en Node.js, Python o Go. Todo integrado, testeado y desplegado.",
        icon: "⚡",
        category: ["dev"]
    },
    {
        title: "APIs Modernas",
        desc: "RESTful, GraphQL o tRPC. Documentadas, versionadas y con rate limiting. Listas para escalar.",
        icon: "🔌",
        category: ["dev"]
    },
    {
        title: "DevOps & CI/CD",
        desc: "GitHub Actions, Docker, Kubernetes, AWS/GCP. Automatizamos todo tu pipeline.",
        icon: "🚀",
        category: ["infra"]
    },
    {
        title: "Arquitectura & Refactor",
        desc: "Migración de monolitos, microservicios, serverless. Optimizamos lo que ya tienes.",
        icon: "🧱",
        category: ["infra", "dev"]
    },
    {
        title: "UX/UI Técnico",
        desc: "Diseñamos interfaces que no solo son bonitas, sino que funcionan rápido y sin bugs.",
        icon: "🎨",
        category: ["quality"]
    },
    {
        title: "Mentoría & Code Review",
        desc: "Revisión de código, buenas prácticas, escalabilidad. Acompañamos a tu equipo.",
        icon: "👨‍💻",
        category: ["quality"]
    },
    {
        title: "Seguridad & Hardening",
        desc: "Auditorías de seguridad, OWASP, CORS, sanitización, auth robusta (JWT/OAuth2), headers de seguridad y mitigación de ataques comunes.",
        icon: "🛡️",
        category: ["quality", "infra"]
    },
    {
        title: "Analíticas & Tracking",
        desc: "Integración de Google Analytics, PostHog, Mixpanel, eventos personalizados, dashboards de comportamiento y métricas técnicas (rendimiento, errores).",
        icon: "📈",
        category: ["data"]
    },
    {
        title: "i18n & a11y",
        desc: "Soporte multilenguaje, lectores de pantalla, contraste, teclado navigation, WCAG 2.1. Hacemos que tu producto sea usable por todos.",
        icon: "🌍",
        category: ["quality", "dev"]
    },
    {
        title: "Testing Automatizado",
        desc: "Jest, Vitest, Playwright, Cypress. Tests unitarios, de integración y E2E. Cobertura, CI checks y reportes claros.",
        icon: "🧪",
        category: ["quality"]
    },
    {
        title: "Migración de Datos",
        desc: "Extracción, transformación y carga (ETL) desde sistemas antiguos. Scripts seguros, rollback, validación y sincronización incremental.",
        icon: "🗃️",
        category: ["data", "infra"]
    },
    {
        title: "PWAs & Mobile First",
        desc: "Apps web progresivas, offline-first, notificaciones push, performance mobile, Core Web Vitals optimizados.",
        icon: "📱",
        category: ["dev", "quality"]
    },
];

export default function ServicesSection() {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredServices = activeCategory === 'all'
        ? services
        : services.filter(service => service.category.includes(activeCategory));

    return (
        <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
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

                {/* Filtros estilo GitHub tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full transition-colors
    ${activeCategory === cat.id
                                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                                }`}
                            style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                        >
                            <span>{cat.icon}</span>
                            <span>{cat.label}</span>
                        </button>
                    ))}
                </div>

                {/* Grid de servicios */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="sync">
                        {filteredServices.map((service, idx) => (
                            <motion.div
                                key={service.title} // importante: usar key única para animaciones
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ delay: idx * 0.05, duration: 0.2 }}
                                className="group relative border border-gray-200 dark:border-gray-800 rounded bg-white dark:bg-gray-800 p-4 hover:bg-gray-50 dark:hover:bg-gray-800/70 transition-all duration-150 ease-in-out cursor-pointer overflow-hidden"
                                style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                            >
                                {/* Star button */}
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
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}