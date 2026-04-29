import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const NotFound = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(10);
  const [glitch, setGlitch] = useState(false);

  // Auto redirect countdown
  useEffect(() => {
    if (count <= 0) { navigate('/'); return; }
    const t = setTimeout(() => setCount(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [count, navigate]);

  // Random glitch effect
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const lines = [
    { text: '> Initializing security scan...', delay: 0,    color: 'text-neon' },
    { text: '> Scanning target path...', delay: 400,        color: 'text-secondry' },
    { text: '> ERROR: Route not found [0x404]', delay: 800, color: 'text-red-400' },
    { text: '> Access attempt logged.', delay: 1200,        color: 'text-secondry' },
    { text: '> Initiating redirect protocol...', delay: 1600, color: 'text-neon' },
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="cyber-grid opacity-20"></div>
        <div className="absolute w-[600px] h-[600px] rounded-full blur-3xl animate-pulse-slow"
          style={{ background: 'radial-gradient(circle, rgba(255,59,59,0.07) 0%, transparent 70%)', top: '10%', left: '10%' }} />
        <div className="absolute w-[500px] h-[500px] rounded-full blur-3xl animate-pulse-slow"
          style={{ background: 'radial-gradient(circle, rgba(0,245,255,0.05) 0%, transparent 70%)', bottom: '10%', right: '10%', animationDelay: '2s' }} />
        <div className="scan-line opacity-30"></div>
      </div>

      <div className="relative z-10 w-full max-w-2xl space-y-10">

        {/* Big 404 */}
        <div className="text-center relative select-none">
          <p
            className={`text-[9rem] sm:text-[13rem] font-bold font-mono leading-none transition-all duration-100 ${
              glitch ? 'text-red-500 translate-x-1' : 'text-red-500/15'
            }`}
            style={{ textShadow: glitch ? '3px 0 #00f5ff, -3px 0 #ff3b3b' : 'none' }}
          >
            404
          </p>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
            <p className="text-red-400 font-mono text-xl sm:text-2xl font-bold tracking-widest">
              ACCESS DENIED
            </p>
            <p className="text-secondry font-mono text-xs tracking-[0.4em]">
              UNAUTHORIZED ROUTE
            </p>
          </div>
        </div>

        {/* Terminal */}
        <div className="bg-black/70 border border-neon/20 rounded-xl overflow-hidden">
          {/* Terminal bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-neon/10 bg-black/50">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <span className="text-xs font-mono text-secondry ml-2">security_scan.sh — bash</span>
          </div>

          {/* Terminal content */}
          <div className="p-5 space-y-2 font-mono text-sm">
            {lines.map((line, i) => (
              <p
                key={i}
                className={`${line.color} animate-fade-in`}
                style={{ animationDelay: `${line.delay}ms`, opacity: 0, animationFillMode: 'forwards' }}
              >
                {line.text}
              </p>
            ))}

            {/* Countdown */}
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-neon/10">
              <span className="text-neon">{'>'}</span>
              <span className="text-secondry">Redirecting to home in</span>
              <span className="text-neon font-bold w-5 text-center">{count}</span>
              <span className="text-secondry">seconds</span>
              <span className="animate-blink text-neon">|</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
