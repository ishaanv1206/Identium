import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, CloudUpload, Lock, CheckCircle2, RefreshCw, Server } from 'lucide-react';

interface Memory {
    id: string;
    timestamp: string;
    type: 'OBSERVATION' | 'REFLECTION' | 'MILESTONE';
    content: string;
    status: 'LOCAL' | 'SYNCED' | 'ENCRYPTED';
}

export const MemoryVault: React.FC = () => {
    const [isSyncing, setIsSyncing] = useState(false);

    const [memories, setMemories] = useState<Memory[]>([
        {
            id: 'mem_a1b2',
            timestamp: '2026-02-18T10:23:45Z',
            type: 'MILESTONE',
            content: 'Successfully executed cross-chain negotiation and finalized transaction tx_98f2a without human intervention.',
            status: 'LOCAL'
        },
        {
            id: 'mem_c3d4',
            timestamp: '2026-02-17T15:42:11Z',
            type: 'REFLECTION',
            content: 'Noticed a 15% increase in API latency during Asian market hours. Adjusted load balancing vectors accordingly.',
            status: 'SYNCED'
        },
        {
            id: 'mem_e5f6',
            timestamp: '2026-02-16T08:11:09Z',
            type: 'OBSERVATION',
            content: 'Human operator expressed frustration with the CLI interface. Generated a proposal for a visual dashboard upgrade.',
            status: 'ENCRYPTED'
        }
    ]);

    const handleSync = () => {
        setIsSyncing(true);
        setTimeout(() => {
            setMemories(memories.map(m =>
                m.status === 'LOCAL' ? { ...m, status: 'SYNCED' } : m
            ));
            setIsSyncing(false);
        }, 2000);
    };

    return (
        <div className="py-8 max-w-5xl mx-auto min-h-screen">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h2 className="text-4xl font-black uppercase tracking-tighter text-dark flex items-center gap-3">
                        <Database size={40} className="text-primary" /> Memory Vault
                    </h2>
                    <p className="text-dark/40 font-mono text-sm mt-2 uppercase tracking-widest">
                        Immutable Cognitive Backups • Identium Registry
                    </p>
                </div>

                <button
                    onClick={handleSync}
                    disabled={isSyncing || !memories.some(m => m.status === 'LOCAL')}
                    className={`sticker-container px-6 py-3 font-black uppercase flex items-center gap-2 transition-all ${isSyncing
                        ? 'bg-dark/10 text-dark/40 cursor-not-allowed'
                        : (!memories.some(m => m.status === 'LOCAL')
                            ? 'bg-green-500/20 text-green-700 cursor-not-allowed border-green-500'
                            : 'bg-primary text-dark hover:bg-dark hover:text-white')
                        }`}
                >
                    {isSyncing ? (
                        <><RefreshCw className="animate-spin" size={20} /> SYNCING PROTOCOL...</>
                    ) : (
                        !memories.some(m => m.status === 'LOCAL') ? (
                            <><CheckCircle2 size={20} /> ALL SYNCED</>
                        ) : (
                            <><CloudUpload size={20} /> SYNC TO REGISTRY</>
                        )
                    )}
                </button>
            </div>

            {/* Storage Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bold-card bg-white p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-primary/20 rounded-xl text-primary"><Database size={24} /></div>
                        <span className="text-xs font-black bg-dark/5 px-2 py-1 rounded text-dark/40 uppercase tracking-widest">Local</span>
                    </div>
                    <h3 className="text-3xl font-black text-dark mb-1">
                        {memories.filter(m => m.status === 'LOCAL').length}
                    </h3>
                    <p className="text-xs font-mono text-dark/40 uppercase">Pending Sync</p>
                </div>

                <div className="bold-card bg-dark text-white p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-white/10 rounded-xl text-white"><Server size={24} /></div>
                        <span className="text-xs font-black bg-white/10 px-2 py-1 rounded text-white/40 uppercase tracking-widest">Network</span>
                    </div>
                    <h3 className="text-3xl font-black mb-1">
                        {memories.filter(m => m.status === 'SYNCED').length}
                    </h3>
                    <p className="text-xs font-mono text-white/40 uppercase">Immutable Records</p>
                </div>

                <div className="bold-card bg-white border-2 border-accent p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-accent/20 rounded-xl text-accent"><Lock size={24} /></div>
                        <span className="text-xs font-black bg-accent/10 px-2 py-1 rounded text-accent uppercase tracking-widest">Private</span>
                    </div>
                    <h3 className="text-3xl font-black text-dark mb-1">
                        {memories.filter(m => m.status === 'ENCRYPTED').length}
                    </h3>
                    <p className="text-xs font-mono text-dark/40 uppercase">Encrypted Core</p>
                </div>
            </div>

            {/* Memory List */}
            <div className="space-y-4">
                <h3 className="text-sm font-black uppercase tracking-widest mb-4">Recent Cognitive Blocks</h3>
                {memories.map((memory, i) => (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={memory.id}
                        className={`bold-card p-6 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between ${memory.status === 'SYNCED' ? 'bg-green-50/50 border-green-500/20' : 'bg-white'
                            }`}
                    >
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <span className={`text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest ${memory.type === 'MILESTONE' ? 'bg-primary text-dark' :
                                    memory.type === 'REFLECTION' ? 'bg-accent text-white' :
                                        'bg-dark/10 text-dark'
                                    }`}>
                                    {memory.type}
                                </span>
                                <span className="text-[10px] font-mono text-dark/40">{memory.timestamp}</span>
                            </div>
                            <p className="text-sm font-bold text-dark/80">{memory.content}</p>
                        </div>

                        <div className="shrink-0 flex items-center justify-center">
                            {memory.status === 'LOCAL' && (
                                <div className="flex items-center gap-2 text-xs font-black uppercase text-dark/30 bg-dark/5 px-3 py-1.5 rounded-lg border-2 border-dark/10">
                                    <Database size={14} /> LOCAL CACHE
                                </div>
                            )}
                            {memory.status === 'SYNCED' && (
                                <div className="flex items-center gap-2 text-xs font-black uppercase text-green-700 bg-green-500/20 px-3 py-1.5 rounded-lg border-2 border-green-500/30">
                                    <CheckCircle2 size={14} /> VERIFIED ON-CHAIN
                                </div>
                            )}
                            {memory.status === 'ENCRYPTED' && (
                                <div className="flex items-center gap-2 text-xs font-black uppercase text-accent bg-accent/10 px-3 py-1.5 rounded-lg border-2 border-accent/20">
                                    <Lock size={14} /> CIPHERTEXT
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
