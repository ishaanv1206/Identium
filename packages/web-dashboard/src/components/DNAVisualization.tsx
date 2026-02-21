import React from 'react';
import { motion } from 'framer-motion';

interface Props {
    vector: number[];
    size?: number;
}

export const DNAVisualization: React.FC<Props> = ({ vector, size = 200 }) => {
    if (!vector || vector.length === 0) return null;

    // Use the 16 dimensions to create a complex SVG shape
    const points = vector.map((val, i) => {
        const angle = (i / vector.length) * Math.PI * 2;
        const r = (size / 2) * (0.3 + val * 0.7);
        const x = size / 2 + r * Math.cos(angle);
        const y = size / 2 + r * Math.sin(angle);
        return `${x},${y}`;
    }).join(' ');

    return (
        <div className="relative group" style={{ width: size, height: size }}>
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                <defs>
                    <linearGradient id="dna-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#f43f5e" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Background Circle */}
                <circle
                    cx={size / 2} cy={size / 2} r={size / 2 - 10}
                    fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"
                />

                {/* DNA Polygon */}
                <motion.polygon
                    points={points}
                    fill="url(#dna-grad)"
                    fillOpacity="0.2"
                    stroke="url(#dna-grad)"
                    strokeWidth="2"
                    filter="url(#glow)"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                />

                {/* Vertex Points */}
                {vector.map((val, i) => {
                    const angle = (i / vector.length) * Math.PI * 2;
                    const r = (size / 2) * (0.3 + val * 0.7);
                    const x = size / 2 + r * Math.cos(angle);
                    const y = size / 2 + r * Math.sin(angle);
                    return (
                        <motion.circle
                            key={i}
                            cx={x} cy={y} r="2"
                            fill="#fff"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            transition={{ delay: i * 0.05 }}
                        />
                    );
                })}
            </svg>

            {/* Floating Center Icon or Value */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-[10px] font-mono opacity-50">
                    DNA
                </div>
            </div>
        </div>
    );
};
