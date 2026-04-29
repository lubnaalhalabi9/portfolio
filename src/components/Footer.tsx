import { FaLinkedin, FaWhatsapp, FaEnvelope, FaLock, FaTelegram } from 'react-icons/fa';
import { SiTryhackme } from 'react-icons/si';
import { GiShield } from 'react-icons/gi';

const XIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Footer = () => {
  const navLinks = [
    { label: 'Home',           href: '#home' },
    { label: 'About',          href: '#about' },
    { label: 'Skills',         href: '#skills' },
    { label: 'Projects',       href: '#projects' },
    { label: 'Contact',        href: '#contact' },
  ];

  const socialLinks = [
    { href: 'https://www.linkedin.com/in/hamza-radwan-0515813a2?utm_source=share_via&utm_content=profile&utm_medium=member_android', icon: <FaLinkedin className="w-4 h-4" />, color: '#0077b5' },
    { href: 'https://wa.me/+963935398922',            icon: <FaWhatsapp className="w-4 h-4" />, color: '#25D366' },
    { href: 'https://x.com/hamzarad2003',           icon: <XIcon />,                          color: '#e6e6e6' },
    { href: 'https://t.me/+963935398922',           icon: <FaTelegram className="w-4 h-4" />, color: '#2AABEE' },
    { href: 'https://tryhackme.com/p/hamza',        icon: <SiTryhackme className="w-4 h-4" />,color: '#88cc14' },
    { href: 'mailto:hamzarad2003@gmail.com',        icon: <FaEnvelope className="w-4 h-4" />, color: '#00f5ff' },
  ];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-neon/10 overflow-hidden">

      {/* Top glow line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent"></div>

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="cyber-grid opacity-10"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full blur-3xl animate-pulse-slow"
          style={{ background: 'radial-gradient(circle, rgba(0,245,255,0.04) 0%, transparent 70%)', bottom: '-20%', left: '-10%' }} />
        <div className="absolute w-[300px] h-[300px] rounded-full blur-3xl animate-pulse-slow"
          style={{ background: 'radial-gradient(circle, rgba(255,59,59,0.03) 0%, transparent 70%)', top: '-10%', right: '-5%', animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto relative z-10 px-6 py-14">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/first 2.svg" alt="Logo" className="w-10 h-10 flex-shrink-0" />
              <div>
                <p className="font-bold text-primary text-xl leading-none">
                  Hamza Radwan
                </p>
                <p className="text-xs font-mono text-secondry mt-1 tracking-wider">// CYBERSECURITY SPECIALIST</p>
              </div>
            </div>

            <p className="font-primary text-secondry text-sm leading-relaxed">
              Transforming vulnerabilities into fortresses. Protecting digital assets through advanced security methodologies and ethical hacking.
            </p>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <FaLock className="w-3 h-3 text-neon" />
                <span className="text-xs font-mono text-secondry">Encrypted</span>
              </div>
              <div className="w-px h-3 bg-neon/20"></div>
              <div className="flex items-center gap-1.5">
                <GiShield className="w-3 h-3 text-neon" />
                <span className="text-xs font-mono text-secondry">Trusted</span>
              </div>
            </div>

          </div>

          {/* Navigation */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1 h-4 bg-neon rounded-full"></div>
              <p className="text-xs font-mono text-neon tracking-widest">NAVIGATION</p>
            </div>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="group flex items-center gap-2 text-secondry transition-all duration-300 cursor-pointer"
                  >
                    <span className="w-1 h-1 rounded-full group-hover:bg-neon transition-all duration-300"></span>
                    <span className="font-primary text-sm group-hover:text-[#e6e6e6] group-hover:translate-x-1 transition-all duration-300">
                      {link.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1 h-4 bg-neon rounded-full"></div>
              <p className="text-xs font-mono text-neon tracking-widest">CONNECT WITH ME</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 flex items-center justify-center rounded-full bg-black/50 transition-all duration-300 hover:-translate-y-1"
                  style={{ 
                    color: social.color,
                    border: `1px solid ${social.color}50`,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = social.color)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = `${social.color}50`)}
                >
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-neon/15 to-transparent mb-6"></div>

        {/* Bottom */}
        <div className="flex justify-center items-center">
          <p className="font-primary text-xs text-secondry/50">
            © {new Date().getFullYear()} Hamza Radwan. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
