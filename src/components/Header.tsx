import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-black/95 backdrop-blur-xl shadow-lg' 
            : 'bg-transparent'
        }`}
        style={{
          borderBottom: scrolled ? '1px solid rgba(0, 245, 255, 0.2)' : '1px solid rgba(0, 245, 255, 0.1)'
        }}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              className="flex items-center space-x-3 cursor-pointer group" 
              onClick={() => handleNavClick('#home')}
            >
              <div className="relative w-10 h-10 flex items-center justify-center">
                <img src="/first 2.svg" alt="Logo" className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-[#e6e6e6] font-bold text-lg leading-tight">
                  Hamza Radwan
                </span>
                <span className="text-[#a0a0a0] text-xs font-mono tracking-wider">Security Expert</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={`relative px-5 py-2.5 rounded-lg transition-all duration-300 font-medium text-sm ${
                      activeSection === item.href.substring(1)
                        ? 'text-[#00f5ff]'
                        : 'text-[#a0a0a0] hover:text-[#e6e6e6]'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    
                    {activeSection === item.href.substring(1) && (
                      <span className="absolute inset-0 bg-[#00f5ff]/10 rounded-lg border border-[#00f5ff]/30"></span>
                    )}
                    
                  </button>
                </li>
              ))}
            </ul>

              

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(0, 245, 255, 0.1)',
                  border: '1px solid rgba(0, 245, 255, 0.3)'
                }}
                aria-label="Toggle menu"
              >
                <div className="relative w-5 h-5">
                  <span className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                  }`}>
                    <svg className="w-5 h-5" fill="none" stroke="#00f5ff" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </span>
                  <span className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                  }`}>
                    <svg className="w-5 h-5" fill="none" stroke="#00f5ff" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                </div>
              </button>
            
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Centered Content */}
        <div className={`absolute inset-0 flex items-center justify-center px-6 transition-all duration-500 ${
          isMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}>

          {/* Nav Card */}
          <div className="w-full max-w-sm bg-black/60 border border-neon/15 rounded-2xl backdrop-blur-xl overflow-hidden">
            <ul className="p-2">
              {navItems.filter(item => item.name !== 'Contact').map((item, index) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-300 ${
                      activeSection === item.href.substring(1)
                        ? 'bg-neon/10 text-neon'
                        : 'text-primary hover:bg-white/5'
                    }`}
                    style={{ animationDelay: `${index * 60}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      {/* Icon per item */}
                      <span className="text-neon/60 w-5 text-center">
                        {item.name === 'Home'           && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>}
                        {item.name === 'About'          && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>}
                        {item.name === 'Skills'         && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>}
                        {item.name === 'Projects'       && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>}
                      </span>
                      <span className="font-medium text-base">{item.name}</span>
                    </div>
                    {activeSection === item.href.substring(1) && (
                      <div className="w-2 h-2 rounded-full bg-neon"></div>
                    )}
                  </button>
                </li>
              ))}
            </ul>

            {/* Contact Button */}
            <div className="px-2 pb-2">
              <button
                onClick={() => handleNavClick('#contact')}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-neon-blue text-black font-bold text-sm transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Contact Me
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Header;