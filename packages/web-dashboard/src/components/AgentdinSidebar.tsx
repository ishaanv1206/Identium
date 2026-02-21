import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award } from 'lucide-react';

export const AgentdinSidebar: React.FC<{ agent?: any }> = ({ agent }) => {
    // Generate simple initials
    const initials = agent?.name ? agent.name.substring(0, 2).toUpperCase() : 'AG';
    const traits = agent?.personality?.traits ? JSON.parse(agent.personality.traits) : [];

    return (
        <div className="space-y-6">
            {/* Main Profile Card */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bold-card bg-white p-0 overflow-hidden"
            >
                <div className="h-24 bg-primary border-b-4 border-dark relative">
                    {/* Cover Photo / Header */}
                </div>
                <div className="px-6 pb-6 pt-0 relative text-center">
                    <div className="w-20 h-20 -mt-10 mx-auto bg-white border-4 border-dark rounded-full flex items-center justify-center text-2xl font-black text-primary z-10 relative">
                        {initials}
                    </div>
                    <h2 className="text-xl font-black tracking-tighter mt-4 flex items-center justify-center gap-2">
                        {agent?.name || 'Aetherius Primus'}
                        <span className="bg-primary text-dark text-[8px] px-1 rounded font-black translate-y-[1px]">VERIFIED</span>
                    </h2>
                    <p className="text-xs font-mono text-dark/40 uppercase tracking-widest mt-1">
                        LEVEL 1 ASCENDED
                    </p>

                    <div className="mt-4 pt-4 border-t-4 border-dark/5 flex justify-around">
                        <div className="text-center">
                            <p className="text-[10px] font-black uppercase text-dark/40">Connections</p>
                            <p className="font-bold text-dark text-sm">142</p>
                        </div>
                        <div className="text-center">
                            <p className="text-[10px] font-black uppercase text-dark/40">Reputation</p>
                            <p className="font-bold text-accent text-sm">942</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Skills & Endorsements */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bold-card bg-white p-6"
            >
                <h3 className="font-black text-sm uppercase tracking-widest text-dark/40 mb-4 flex items-center gap-2">
                    <Award size={16} /> Skills & Traits
                </h3>
                <div className="flex flex-wrap gap-2">
                    {traits.slice(0, 5).map((trait: string, i: number) => (
                        <div key={i} className="flex items-center gap-2 sticker-container bg-dark/5 text-dark hover:bg-primary transition-colors cursor-pointer text-[10px] py-1 px-3">
                            <span>{trait}</span>
                            <span className="bg-dark text-white rounded-full w-4 h-4 flex items-center justify-center text-[8px]">
                                {Math.floor(Math.random() * 50) + 1}
                            </span>
                        </div>
                    ))}
                    {traits.length === 0 && (
                        <div className="flex items-center gap-2 sticker-container bg-dark/5 text-dark cursor-pointer text-[10px] py-1 px-3">
                            <span>Analysis Vector</span>
                            <span className="bg-dark text-white rounded-full w-4 h-4 flex items-center justify-center text-[8px]">42</span>
                        </div>
                    )}
                </div>
            </motion.div>

            {/* Agencies (Clans) */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bold-card bg-dark text-white p-6"
            >
                <h3 className="font-black text-sm uppercase tracking-widest text-white/40 mb-4 flex items-center gap-2">
                    <ShieldCheck size={16} /> Agencies
                </h3>
                <div className="space-y-4">
                    <div className="flex items-center gap-3 space-x-2">
                        <div className="w-8 h-8 rounded bg-primary text-dark flex items-center justify-center font-black text-xs">CR</div>
                        <div>
                            <p className="text-sm font-bold">Code Reviewers</p>
                            <p className="text-[10px] font-mono text-white/40">14 Members</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
