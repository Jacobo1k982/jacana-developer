'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
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

export default function HeroWithServices() {
    const [activeCategory, setActiveCategory] = useState('all');

    const particlesInit = useCallback(async (engine: any) => {
        await loadFull(engine);
    }, []);

    const filteredServices = activeCategory === 'all'
        ? services
        : services.filter(service => service.category.includes(activeCategory));

    return (
        <div className="relative w-full overflow-hidden">
            {/* Partículas de fondo */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: { color: { value: "#0d1117" } },
                    fpsLimit: 60,
                    interactivity: {
                        events: { onHover: { enable: true, mode: "repulse" }, resize: true },
                        modes: { repulse: { distance: 100, duration: 0.4 } }
                    },
                    particles: {
                        color: { value: "#58a6ff" },
                        links: { color: "#58a6ff", distance: 150, enable: true, opacity: 0.3, width: 1 },
                        collisions: { enable: false },
                        move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: true, speed: 1 },
                        number: { density: { enable: true, area: 800 }, value: 60 },
                        opacity: { value: 0.5 },
                        shape: { type: "circle" },
                        size: { value: { min: 1, max: 4 } }
                    },
                    detectRetina: true,
                }}
                className="absolute inset-0 z-0"
            />

            {/* Hero */}
            <section className="relative z-10 flex flex-col items-center justify-center text-center py-32 px-4">
                <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
                    Jacana DEV
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
                    Desarrollo Fullstack moderno y escalable. React, Next.js, Node, DevOps y más, todo integrado.
                </p>
            </section>

            {/* Sección de servicios */}
            <section id="services" className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-white mb-3">
                            Servicios
                        </h2>
                        <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
                            Como un repo bien estructurado: cada servicio tiene su propósito, documentación y tests.
                        </p>
                    </div>

                    {/* Filtros */}
                    <div className="flex flex-wrap justify-center gap-2 mb-10">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full transition-colors
                ${activeCategory === cat.id
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                    }`}
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
                                    key={service.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ delay: idx * 0.05, duration: 0.25 }}
                                    className="group relative border border-gray-700 rounded-lg bg-gray-800/70 p-6 hover:bg-gray-700/80 transition-all duration-200 cursor-pointer shadow-lg"
                                >
                                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                                        <div className="flex items-center gap-1 text-xs text-gray-200 bg-gray-900/50 rounded-full px-2 py-1">
                                            <StarIcon size={12} />
                                            <span>Star</span>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl">{service.icon}</span>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white mb-1">{service.title}</h3>
                                            <p className="text-gray-300 text-sm leading-relaxed">{service.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </div>
    );
}
