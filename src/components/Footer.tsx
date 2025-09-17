import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t border-[var(--border)] bg-[var(--header-bg)] py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center text-[var(--muted)] text-sm">
                <p className="mb-4 font-mono">
                    jacana-dev@production:~$ <span className="text-[var(--success)]">echo</span> <span className="text-gray-300">"© 2025 JACANA DEV — Fullstack Architects"</span>
                </p>
                <div className="flex flex-wrap justify-center gap-6 mt-4">
                    <Link href="#" className="hover:text-[var(--accent)] transition-colors">GitHub</Link>
                    <Link href="#" className="hover:text-[var(--accent)] transition-colors">Twitter</Link>
                    <Link href="#" className="hover:text-[var(--accent)] transition-colors">LinkedIn</Link>
                    <Link href="#" className="hover:text-[var(--accent)] transition-colors">Email</Link>
                    <Link href="#" className="hover:text-[var(--accent)] transition-colors">RSS</Link>
                </div>
                <p className="mt-6 text-xs">
                    Inspirado en la eficiencia de GitHub. Construido para el futuro.
                </p>
            </div>
        </footer>
    );
}