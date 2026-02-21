import React from 'react';
import { motion } from 'framer-motion';

export const NetworkGlobe: React.FC = () => {
    return (
        <div className="w-full h-[600px] flex items-center justify-center relative">
            {/* Soft glowing aura behind the image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-blue-500/20 to-cyan-400/20 blur-[60px] rounded-full pointer-events-none z-0" />

            <motion.img
                src="/earth-removebg-preview.png"
                alt="Identium Network Earth"
                className="w-full max-w-[500px] h-auto object-contain z-10 drop-shadow-[0_0_30px_rgba(56,189,248,0.3)] filter brightness-110 contrast-125 saturate-150"
                animate={{
                    y: [0, -15, 0],
                    rotate: [0, 2, -2, 0]
                }}
                transition={{
                    y: {
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    },
                    rotate: {
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }}
            />
        </div>
    );
};
