import { useEffect, useRef, useState } from 'react';
import StatsGrid from './StatsGrid';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: '3+',   label: 'Years Experience'},
    { value: '20+',  label: 'Projects Done'},
    { value: '5+',   label: 'Certifications'},
    { value: '100+', label: 'Bugs Found'},
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 px-6 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="cyber-grid opacity-30"></div>
        <div className="absolute w-[600px] h-[600px] rounded-full blur-3xl animate-pulse-slow"
          style={{ background: 'radial-gradient(circle, rgba(0,245,255,0.07) 0%, transparent 70%)', top: '-10%', right: '-10%' }} />
        <div className="absolute w-[500px] h-[500px] rounded-full blur-3xl animate-pulse-slow"
          style={{ background: 'radial-gradient(circle, rgba(255,59,59,0.06) 0%, transparent 70%)', bottom: '-10%', left: '-10%', animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto relative z-10">

        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
            About <span className="gradient-text-neon">Me</span>
          </h2>
        </div>

        {/* Main Grid: Image + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-20">

          {/* Image */}
          <div className={`flex justify-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
            <div className="relative group">

              {/* Outer glow pulse */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-neon/30 via-transparent to-red-500/20 blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700 animate-pulse-slow"></div>

              {/* Neon border animated */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-neon via-blue-500 to-red-500 opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                style={{ padding: '1px' }}>
              </div>

              {/* Corner accents */}
              <div className="absolute -top-3 -left-3 w-7 h-7 border-t-2 border-l-2 border-neon z-10"></div>
              <div className="absolute -top-3 -right-3 w-7 h-7 border-t-2 border-r-2 border-neon z-10"></div>
              <div className="absolute -bottom-3 -left-3 w-7 h-7 border-b-2 border-l-2 border-red-500 z-10"></div>
              <div className="absolute -bottom-3 -right-3 w-7 h-7 border-b-2 border-r-2 border-red-500 z-10"></div>

              {/* Image box */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border border-neon/40 shadow-neon-lg">
                <img
                  src="/assets/img/SecurityExpert.png"
                  alt="Security Expert"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient overlay bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

                {/* Scan line */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon/8 to-transparent scan-overlay pointer-events-none"></div>

                {/* Available badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-black/80 backdrop-blur-sm border border-neon/30 rounded-lg px-3 py-2 flex items-center gap-2">
                  <div className="relative flex-shrink-0">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div className="absolute inset-0 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                  </div>
                  <span className="text-[11px] font-mono text-neon tracking-wider">AVAILABLE FOR HIRE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className={`space-y-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>

            {/* Modified title section - responsive vertical layout on mobile */}
            <div className="space-y-2">
              {/* Desktop view: horizontal */}
              <p className="text-neon font-mono text-sm tracking-wider hidden sm:block">
                Cybersecurity Specialist · Software Engineer · Ethical Hacker
              </p>
              
              {/* Mobile view: vertical with animated dots */}
              <div className="block sm:hidden space-y-2">
                <div className="flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse"></span>
                  <span className="text-neon font-mono text-sm tracking-wider">Cybersecurity Specialist</span>
                </div>
                <div className="flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></span>
                  <span className="text-neon font-mono text-sm tracking-wider">Software Engineer</span>
                </div>
                <div className="flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></span>
                  <span className="text-blue font-mono text-sm tracking-wider">Ethical Hacker</span>
                </div>
              </div>
            </div>

            <p className="font-primary text-secondry leading-relaxed text-base">
              I'm a cybersecurity professional with a strong foundation in
              <span className="font-mono text-neon font-medium"> networking</span> and
              <span className="font-mono text-neon font-medium"> information security</span>.
              I specialize in both offensive and defensive security — from
              <span className="font-mono text-red font-medium"> penetration testing</span> and
              <span className="font-mono text-neon font-medium"> ethical hacking</span> to
              <span className="font-mono text-neon font-medium"> SOC operations</span> and
              <span className="font-mono text-neon font-medium"> threat analysis</span>.
              I also build software solutions that automate security workflows and strengthen system resilience.
            </p>

            {/* Terminal card */}
            <div className="bg-black/70 border border-neon/20 rounded-xl p-5 font-mono text-sm">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-neon/10">
                <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                <span className="text-neon/50 text-xs ml-2">hamzarad2003@gmail.com</span>
              </div>
              <div className="space-y-1.5 text-xs">
                <p><span className="text-neon">location</span><span className="text-secondry"> → </span><span className="text-primary">Syira | Qatar</span></p>
                <p><span className="text-neon">focus</span><span className="text-secondry">    → </span><span className="text-primary">Offensive & Defensive Security</span></p>
                <p><span className="text-neon">certs</span><span className="text-secondry">    → </span><span className="text-primary">CompTIA Sec+ · CC · CCNA</span></p>
                <p><span className="text-neon">status</span><span className="text-secondry">   → </span><span className="text-green-400">Open to opportunities ✓</span></p>
              </div>
            </div>

          </div>
        </div>

        {/* Stats */}
        <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <StatsGrid stats={stats} />
        </div>
      </div>
    </section>
  );
};

export default About;