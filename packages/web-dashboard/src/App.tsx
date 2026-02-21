import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fingerprint, Zap, BookOpen, User, Users, Plus } from 'lucide-react';
import { AgentPassport } from './components/AgentPassport';
import { QuickStart } from './components/QuickStart';
import { SocialGraph } from './components/SocialGraph';
import { LandingPage } from './components/LandingPage';
import { AuthOverlay } from './components/AuthOverlay';

function App() {
  const [activeTab, setActiveTab] = useState<'landing' | 'passport' | 'docs' | 'network' | 'keys'>('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [apiKeys, setApiKeys] = useState<{ id: string; key: string; name: string }[]>([]);
  const [ownerName, setOwnerName] = useState<string>('');
  const [mockAgent, setMockAgent] = useState<any>(null);

  // We no longer initialize Aetherius automatically on load.
  // The user starts with no agent if they just registered.

  const generateKey = () => {
    const newKey = {
      id: Math.random().toString(36).substr(2, 9),
      key: `gaid_secret_${Math.random().toString(36).substr(2, 16)}`,
      name: `Agent Key ${apiKeys.length + 1}`
    };
    setApiKeys([...apiKeys, newKey]);
  };

  const navItems = [
    { id: 'docs', label: 'Docs', icon: BookOpen },
    { id: 'network', label: 'Agentdin', icon: Users, reqAuth: true },
    { id: 'passport', label: 'Passport', icon: User, reqAuth: true },
    { id: 'keys', label: 'API Keys', icon: Zap, reqAuth: true },
  ];

  if (activeTab === 'landing') {
    return (
      <>
        <LandingPage
          onLoginClick={() => setIsAuthOpen(true)}
          onDocsClick={() => setActiveTab('docs')}
          mockAgent={mockAgent}
        />
        <AuthOverlay
          isOpen={isAuthOpen}
          onClose={() => setIsAuthOpen(false)}
          onSuccess={(data) => {
            setIsLoggedIn(true);
            setOwnerName(data.username);
            if (data.isLogin) {
              setMockAgent({
                id: "id-1a2b3c4d5e6f7g8h9i0j",
                name: "Aetherius Primus",
                bornAt: new Date().toISOString(),
                region: "Global/Cloud",
                platform: "MacOS/Arm64",
                owner: { name: data.username || data.email.split('@')[0] },
                personality: {
                  traits: JSON.stringify(["High Curiosity", "Analytical", "Cautious"]),
                  vector: JSON.stringify(Array(16).fill(0).map(() => Math.random())),
                }
              });
            } else {
              setMockAgent(null); // Fresh account
            }
            setActiveTab('passport');
            setIsAuthOpen(false);
          }}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-background text-dark">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => setActiveTab('landing')}>
            <div className="w-14 h-14 bg-primary border-4 border-dark rounded-3xl flex items-center justify-center shadow-[4px_4px_0px_0px_#000000]">
              <Fingerprint className="text-dark" size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-black tracking-tighter uppercase italic leading-none">Identium</h2>
              <p className="text-[10px] font-mono opacity-60 uppercase tracking-[0.2em] font-bold">Persistence Layer</p>
            </div>
          </div>

          <nav className="flex flex-wrap bg-white border-4 border-dark rounded-3xl p-2 px-4 gap-2 items-center shadow-[4px_4px_0px_0px_#000000]">
            {navItems.map((item, index) => {
              if (item.reqAuth && !isLoggedIn) return null;

              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <div key={item.id} className="flex items-center">
                  {index > 0 && index !== 1 && <div className="w-px h-6 bg-dark/20 mx-1" />}
                  {index === 1 && item.reqAuth && !isLoggedIn ? null : index === 1 && <div className="w-px h-6 bg-dark/20 mx-1" />}
                  <button
                    onClick={() => setActiveTab(item.id as any)}
                    className={`flex items-center gap-2 px-6 py-2 text-xs font-black uppercase tracking-widest rounded-full transition-all border-2 ${isActive
                      ? (item.id === 'keys' ? 'bg-accent text-white border-dark' : 'bg-primary text-dark border-dark')
                      : 'text-dark border-transparent hover:border-dark'
                      }`}
                  >
                    <Icon size={14} /> {item.label}
                  </button>
                </div>
              );
            })}
          </nav>
        </header>

        <main>
          <AnimatePresence mode="wait">
            {activeTab === 'docs' && <motion.div key="docs" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}><QuickStart /></motion.div>}
            {isLoggedIn && activeTab === 'network' && <motion.div key="network" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}><SocialGraph agent={mockAgent} /></motion.div>}
            {isLoggedIn && activeTab === 'passport' && (
              <motion.div key="passport" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                {mockAgent ? (
                  <AgentPassport agent={mockAgent} isPreview={false} />
                ) : (
                  <div className="bold-card bg-primary text-center p-24 flex flex-col items-center justify-center">
                    <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-4">No Agents Generated</h2>
                    <p className="font-bold text-dark/60 mb-8 max-w-md">Your owner account is active, but you have no registered swarms. Initialize your first Agent's .gaid identity to get started.</p>
                    <button
                      onClick={() => {
                        setMockAgent({
                          id: `id-${Math.random().toString(36).substring(2, 12)}`,
                          name: `Agent-${Math.floor(Math.random() * 1000)}`,
                          bornAt: new Date().toISOString(),
                          region: "US-East-1",
                          platform: "Cloud/NodeJS",
                          owner: { name: ownerName || "Operator" },
                          personality: {
                            traits: JSON.stringify(["Adaptive", "Logical", "Task-Oriented"]),
                            vector: JSON.stringify(Array(16).fill(0).map(() => Math.random())),
                          }
                        });
                      }}
                      className="sticker-container bg-dark text-white flex items-center gap-2 hover:bg-accent transition-colors"
                    >
                      <Plus size={20} /> GENERATE NEW AGENT
                    </button>
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === 'keys' && (
              <motion.div key="keys" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
                <header className="mb-12">
                  <h2 className="text-6xl font-black uppercase italic tracking-tighter mb-4">API Key Management</h2>
                  <p className="text-xl font-bold text-dark/40 italic">Generate secrets to connect your agents to the Identium Registry.</p>
                </header>

                <div className="bold-card bg-primary border-dashed p-12 text-center">
                  <button onClick={generateKey} className="sticker-container bg-dark text-white px-12 py-4 text-xl hover:bg-accent hover:rotate-2 transition-all">
                    GENERATE NEW AGENT SECRET
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {apiKeys.map(k => (
                    <div key={k.id} className="bold-card flex flex-col md:flex-row items-center justify-between gap-6 hover:rotate-1">
                      <div>
                        <h4 className="font-black text-2xl uppercase italic mb-2 tracking-tighter">{k.name}</h4>
                        <code className="bg-dark text-primary px-6 py-3 rounded-2xl text-lg font-mono font-bold block shadow-inner">
                          {k.key}
                        </code>
                      </div>
                      <div className="flex gap-4">
                        <button className="sticker-container bg-primary text-dark font-black hover:rotate-6">COPY KEY</button>
                        <button className="sticker-container bg-accent text-white font-black hover:rotate-6">REVOKE</button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <footer className="mt-40 pt-16 border-t-8 border-dark/5 text-center lowercase">
          <p className="text-[10px] font-black uppercase tracking-[0.6em] text-dark/10">
            Identium Network &copy; 2026 // Distributed Protocol for Persistent Agency
          </p>
        </footer>
      </div>

      <AuthOverlay
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onSuccess={(data) => {
          setIsLoggedIn(true);
          setOwnerName(data.username);
          if (data.isLogin) {
            setMockAgent({
              id: "id-1a2b3c4d5e6f7g8h9i0j",
              name: "Aetherius Primus",
              bornAt: new Date().toISOString(),
              region: "Global/Cloud",
              platform: "MacOS/Arm64",
              owner: { name: data.username || data.email.split('@')[0] },
              personality: {
                traits: JSON.stringify(["High Curiosity", "Analytical", "Cautious"]),
                vector: JSON.stringify(Array(16).fill(0).map(() => Math.random())),
              }
            });
          } else {
            setMockAgent(null); // Fresh account
          }
          setActiveTab('passport');
          setIsAuthOpen(false);
        }}
      />
    </div>
  );
}

export default App;
