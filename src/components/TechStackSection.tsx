'use client';

import { motion } from 'framer-motion';

const techStack = [
    { name: "React", color: "text-sky-500", bg: "bg-sky-500/5" },
    { name: "Next.js", color: "text-gray-400", bg: "bg-gray-500/5" },
    { name: "TypeScript", color: "text-blue-400", bg: "bg-blue-500/5" },
    { name: "Node.js", color: "text-green-500", bg: "bg-green-500/5" },
    { name: "Tailwind CSS", color: "text-teal-400", bg: "bg-teal-500/5" },
    { name: "PostgreSQL", color: "text-blue-600", bg: "bg-blue-600/5" },
    { name: "Prisma", color: "text-amber-400", bg: "bg-amber-500/5" },
    { name: "tRPC", color: "text-indigo-500", bg: "bg-indigo-500/5" },
    { name: "Docker", color: "text-blue-700", bg: "bg-blue-700/5" },
    { name: "AWS", color: "text-orange-500", bg: "bg-orange-500/5" },
    { name: "GraphQL", color: "text-pink-500", bg: "bg-pink-500/5" },
    { name: "Framer Motion", color: "text-violet-500", bg: "bg-violet-500/5" },
];

export default function TechStackSection() {
    return (
        <section id="tech" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0d1117]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2
                        className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3"
                        style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                    >
                        Stack Tecnológico
                    </h2>
                    <p
                        className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base"
                        style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                    >
                        Las herramientas que usamos diariamente — probadas, confiables y en constante evolución.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {techStack.map((tech, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05, duration: 0.3 }}
                            className={`group px-3 py-2 rounded border border-gray-200 dark:border-gray-800 ${tech.bg || 'bg-gray-50 dark:bg-gray-800/50'} ...`}
                            style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                        >
                            <span className={`text-sm font-medium ${tech.color} group-hover:brightness-110 transition`}>
                                {tech.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}