import { useEffect, useState } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const roles = [
    'Software Engineer',
    'Security Expert',
    'Penetration Tester',
    'SOC Analyst',
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 200);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 3000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden bg-black">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 z-10">
        <div className="cyber-grid"></div>
      </div>

      {/* Parallax Orbs */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full blur-3xl animate-pulse-slow" style={{ background: 'radial-gradient(circle, rgba(0, 179, 255, 0.15) 0%, transparent 70%)', top: '20%', left: '10%', transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` }}></div>
        <div className="absolute w-[500px] h-[500px] rounded-full blur-3xl animate-pulse-slow" style={{ background: 'radial-gradient(circle, rgba(18,52,153,0.15) 0%, transparent 70%)', bottom: '20%', right: '10%', animationDelay: '2s', transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)` }}></div>
        {/* Red Threat Orb */}
        <div className="absolute w-[400px] h-[400px] rounded-full blur-3xl animate-pulse-slow" style={{ background: 'radial-gradient(circle, rgba(255, 59, 59, 0.1) 0%, transparent 70%)', top: '60%', left: '70%', animationDelay: '1s', transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)` }}></div>
        
      </div>

      {/* Circuit Pattern */}
      <div className="absolute inset-0 z-10 animate-circuit-pulse">
        <svg width="100%" height="100%" style={{ opacity: 1 }}>
          <defs>
            <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="#00f5ff"/>
              <line x1="50" y1="50" x2="100" y2="50" stroke="#00f5ff" strokeWidth="0.5"/>
              <line x1="50" y1="50" x2="50" y2="0" stroke="#00f5ff" strokeWidth="0.5"/>
              <circle cx="100" cy="50" r="1.5" fill="#123499"/>
              <circle cx="50" cy="0" r="1.5" fill="#123499"/>
              {/* Red threat indicators */}
              <circle cx="25" cy="25" r="1" fill="#ff3b3b" opacity="0.8"/>
              <circle cx="75" cy="75" r="1" fill="#ff3b3b" opacity="0.6"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-10">
          {/* Main Content */}
          <div className="space-y-8 animate-slide-up">
            {/* Name with enhanced styling */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary">
                Hamza Radwan
              </h1>
            </div>
            
            {/* Cyber Security Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-glitch text-primary" data-text="CYBER">CYBER</span>
              <span className="gradient-text-neon ml-3">
                SECURITY
              </span>
            </h2>
            
            {/* Typing Animation */}
            <div className="h-16 flex items-center justify-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-mono text-neon">
                <span className="inline-block min-w-[20px]">&gt;</span> {text}
                <span className="animate-blink">|</span>
              </h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed animate-fade-in-delay font-light px-4 text-secondry">
            Transforming vulnerabilities into fortresses. A cybersecurity specialist who thinks like an attacker 
            to defend like a guardian. From penetration testing to secure code architecture, 
            I turn <span className="text-red font-medium">digital threats</span> into opportunities for bulletproof protection.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-delay-2">
            <a
              href="#resume"
              className="group relative px-8 py-4 font-bold rounded-lg overflow-hidden transition-all duration-300  bg-gradient-neon-blue text-black shadow-neon-md hover:shadow-neon-lg"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>View Resume</span>
              </span>
              <div className="absolute inset-0 bg-white/20 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
            </a>
            
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-transparent font-bold rounded-lg overflow-hidden transition-all duration-300 border-2 border-neon text-neon hover:bg-neon hover:text-black"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Contact Me</span>
              </span>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-bounce">
            <div className="flex flex-col items-center space-y-2 cursor-pointer opacity-60 hover:opacity-100 transition-opacity" onClick={() => {
              const element = document.querySelector('#about');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}>
              <span className="text-xs font-mono tracking-widest text-neon">SCROLL</span>
              <svg className="w-6 h-6 text-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
