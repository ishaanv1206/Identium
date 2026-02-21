import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Fingerprint, Lock, Mail, ArrowRight, User } from 'lucide-react';

interface AuthOverlayProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: (ownerData: any) => void;
}

export const AuthOverlay: React.FC<AuthOverlayProps> = ({ isOpen, onClose, onSuccess }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock authentication for now until API is connected
        console.log(`Mock ${isLogin ? 'Login' : 'Register'} for`, email);
        const passedUsername = isLogin ? email.split('@')[0] : username;
        onSuccess({ email, username: passedUsername, isLogin });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            >
                <motion.div
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    className="bold-card bg-primary w-full max-w-md relative"
                >
                    <button
                        onClick={onClose}
                        className="absolute -top-4 -right-4 w-10 h-10 bg-dark text-white rounded-full flex items-center justify-center border-4 border-white hover:scale-110 transition-transform shadow-lg"
                    >
                        <X size={20} />
                    </button>

                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-white border-4 border-dark rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <Fingerprint className="text-dark" size={32} />
                        </div>
                        <h2 className="text-4xl font-black uppercase italic tracking-tighter">
                            {isLogin ? 'Owner Login' : 'Register'}
                        </h2>
                        <p className="font-bold text-dark/50 mt-2">
                            {isLogin ? 'Authenticate your swarm.' : 'Claim your first Agent.'}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-black uppercase tracking-widest mb-2">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-dark/40" size={20} />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-white border-4 border-dark rounded-xl px-12 py-4 font-bold outline-none focus:border-accent transition-colors shadow-inner"
                                    placeholder="operator@identium.network"
                                />
                            </div>
                        </div>

                        {!isLogin && (
                            <div>
                                <label className="block text-sm font-black uppercase tracking-widest mb-2">Username</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-dark/40" size={20} />
                                    <input
                                        type="text"
                                        required={!isLogin}
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="w-full bg-white border-4 border-dark rounded-xl px-12 py-4 font-bold outline-none focus:border-accent transition-colors shadow-inner"
                                        placeholder="cyber_operator"
                                    />
                                </div>
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-black uppercase tracking-widest mb-2">Secure Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-dark/40" size={20} />
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-white border-4 border-dark rounded-xl px-12 py-4 font-bold outline-none focus:border-accent transition-colors shadow-inner"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full sticker-container bg-dark text-white font-black text-xl py-4 hover:bg-accent transition-colors flex items-center justify-center gap-2 group"
                        >
                            {isLogin ? 'AUTHENTICATE' : 'CREATE ACCOUNT'}
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-sm font-black uppercase tracking-widest text-dark/50 hover:text-dark transition-colors"
                        >
                            {isLogin ? 'Sign up for a new account' : 'Already registered? Login'}
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};
