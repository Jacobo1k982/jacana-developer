'use client';

import { useCallback, useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';

export default function Hero() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const particlesOptions = {
        fullScreen: { enable: true },
        background: { color: 'transparent' },
        particles: {
            number: { value: 60, density: { enable: true, area: 800 } },
            color: { value: '#00ffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.4 },
            size: { value: { min: 1, max: 3 } },
            links: { enable: true, distance: 150, color: '#00ffff', opacity: 0.2, width: 1 },
            move: { enable: true, speed: 1.5, direction: 'none', outModes: { default: 'bounce' } },
        },
        detectRetina: true,
        interactivity: {
            events: {
                onHover: { enable: true, mode: 'repulse' },
                onClick: { enable: true, mode: 'push' },
                onResize: { enable: true },
            },
            modes: {
                repulse: { distance: 100, duration: 0.4 },
                push: { quantity: 4 },
            },
        },
    };

    const terminalLines = [
        '> Jacana Dev - Fullstack Services',
        '> Loading technologies...',
        '> React.js ✔',
        '> Node.js ✔',
        '> TailwindCSS ✔',
        '> MySQL ✔',
        '> Firebase ✔',
        '> Deploying future-ready solutions...',
        '> Ready!'
    ];

    const [displayedLines, setDisplayedLines] = useState<string[]>([]);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);

    useEffect(() => {
        if (currentLineIndex < terminalLines.length) {
            const line = terminalLines[currentLineIndex];
            if (currentCharIndex < line.length) {
                const timeout = setTimeout(() => {
                    if (displayedLines[currentLineIndex]) {
                        const newLines = [...displayedLines];
                        newLines[currentLineIndex] += line[currentCharIndex];
                        setDisplayedLines(newLines);
                    } else {
                        setDisplayedLines([...displayedLines, line[currentCharIndex]]);
                    }
                    setCurrentCharIndex(currentCharIndex + 1);
                }, 40); // velocidad de escritura
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => {
                    setCurrentCharIndex(0);
                    setCurrentLineIndex(currentLineIndex + 1);
                }, 200); // espera entre líneas
                return () => clearTimeout(timeout);
            }
        }
    }, [currentCharIndex, currentLineIndex, displayedLines]);

    return (
        <section className="relative w-full h-screen bg-[#0d1117] flex items-center justify-center overflow-hidden">
            {/* Partículas de fondo */}
            <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />

            {/* Terminal simulada */}
            <div className="z-10 p-8 bg-[#161b22]/80 border border-[#30363d] rounded-xl max-w-2xl w-full text-[#00ffff] font-mono space-y-1">
                {displayedLines.map((line, idx) => (
                    <p key={idx}>{line}</p>
                ))}
                {/* Cursor parpadeante */}
                {currentLineIndex < terminalLines.length && <span className="animate-pulse">_</span>}
            </div>
        </section>
    );
}
