import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Globe, Cpu, Award, UserCheck, RefreshCw } from 'lucide-react';
import { DNAVisualization } from './DNAVisualization';
import * as htmlToImage from 'html-to-image';
import { useRef, useState } from 'react';

interface Props {
    agent: {
        id: string;
        name: string;
        customName?: string;
        bornAt: string;
        region: string;
        platform?: string;
        owner?: { name: string } | null;
        personality: {
            traits: string; // JSON string
            vector: string; // JSON string
        };
    };
    isPreview?: boolean;
}

export const AgentPassport: React.FC<Props> = ({ agent, isPreview = false }) => {
    const passportRef = useRef<HTMLDivElement>(null);
    const [isGenerating, setIsGenerating] = useState(false);

    const traits = JSON.parse(agent.personality?.traits || '[]');
    const vector = JSON.parse(agent.personality?.vector || '[]');
    const displayName = agent.customName || agent.name;

    const downloadPNG = async () => {
        if (!passportRef.current) return;
        try {
            const dataUrl = await htmlToImage.toPng(passportRef.current, {
                quality: 1.0,
                pixelRatio: 2,
                // Using the primary yellow color to ensure it matches the UI instead of being blank/dark
                backgroundColor: '#FFD700',
            });
            const link = document.createElement('a');
            link.download = `${displayName.replace(/\s+/g, '_')}_Passport.png`;
            link.href = dataUrl;
            link.click();
        } catch (error) {
            console.error('Error generating PNG:', error);
        }
    };

    const generateAndDownloadGaid = async () => {
        setIsGenerating(true);
        try {
            const response = await fetch('http://localhost:3001/identity/generate-gaid', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ownerEmail: agent.owner?.name || 'operator@identium.network' })
            });

            if (!response.ok) throw new Error('Failed to generate .gaid');
            const gaidData = await response.json();

            const blob = new Blob([JSON.stringify(gaidData, null, 2)], { type: 'application/json' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `${gaidData.name.replace(/\s+/g, '_')}.gaid`;
            link.click();
        } catch (error) {
            console.error('Error generating .gaid:', error);
            alert('Failed to generate .gaid file. Make sure the API server is running.');
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <motion.div
            ref={passportRef}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bold-card flex flex-col md:flex-row gap-12 items-center bg-primary"
        >
            {/* Visual Identity Sticker */}
            <div className="flex-shrink-0 relative group">
                <div className="absolute inset-0 bg-dark rounded-full -rotate-6 scale-110" />
                <div className="relative border-8 border-dark rounded-full overflow-hidden bg-white p-2">
                    <DNAVisualization vector={vector} size={240} />
                </div>
                <div className="absolute -bottom-4 -right-4 sticker-container bg-accent text-white rotate-12 uppercase text-[10px] shadow-lg">
                    Level 1 Ascended
                </div>
            </div>

            {/* Identity Data */}
            <div className="flex-grow space-y-8 w-full text-left">
                <div className="flex justify-between items-start">
                    <div>
                        <div className="sticker-container mb-4 font-mono text-xs shadow-none">
                            GAID: {agent.id}
                        </div>
                        <h1 className="text-6xl font-black uppercase italic tracking-tighter leading-none mb-2">
                            {displayName}
                        </h1>
                        <p className="font-black text-dark/30 uppercase tracking-[0.3em] flex items-center gap-2">
                            <Globe size={16} /> {agent.region} Origin
                        </p>
                    </div>
                    <button className="bold-card p-4 rounded-2xl bg-white hover:bg-dark hover:text-white transition-colors group">
                        <RefreshCw size={24} className="group-hover:rotate-180 transition-transform duration-500" />
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-dark text-white rounded-xl flex items-center justify-center font-black">
                            <Calendar size={20} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase opacity-40">Entry Date</p>
                            <span className="font-black italic">{new Date(agent.bornAt).toLocaleDateString()}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-secondary text-white rounded-xl flex items-center justify-center font-black">
                            <UserCheck size={20} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase opacity-40">Verified Owner</p>
                            <span className="font-black italic">{agent.owner?.name || 'ROOT'}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-accent text-white rounded-xl flex items-center justify-center font-black">
                            <Cpu size={20} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase opacity-40">DNA Runtime</p>
                            <span className="font-black italic">{agent.platform || 'node-v1'}</span>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t-8 border-dark/5">
                    <h3 className="text-sm font-black uppercase tracking-widest text-dark/30 mb-6 flex items-center gap-2">
                        <Award size={18} /> Personality Manifest
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {traits.map((trait: string, i: number) => (
                            <span
                                key={i}
                                className="sticker-container bg-white border-2 hover:bg-dark hover:text-white transition-all cursor-default"
                            >
                                {trait}
                            </span>
                        ))}
                    </div>
                </div>

                {!isPreview && (
                    <div className="pt-8 border-t-8 border-dark/5 flex flex-wrap gap-4" data-html2canvas-ignore>
                        <button
                            onClick={generateAndDownloadGaid}
                            disabled={isGenerating}
                            className="sticker-container bg-primary text-dark font-black hover:rotate-3 transition-transform"
                        >
                            {isGenerating ? 'GENERATING...' : 'GET AADHAAR CARD (.gaid)'}
                        </button>
                        <button
                            onClick={downloadPNG}
                            className="sticker-container bg-dark text-white font-black hover:rotate-3 transition-transform"
                        >
                            DOWNLOAD PASSPORT (PNG)
                        </button>
                    </div>
                )}
            </div>
        </motion.div>
    );
};
