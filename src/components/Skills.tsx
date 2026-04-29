import { useEffect, useRef, useState } from 'react';
import StatsGrid from './StatsGrid';
import { 
  SiCisco, 
  SiKalilinux,
  SiComptia,
} from 'react-icons/si';
import { 
  FaShieldAlt, 
  FaChartLine, 
  FaCode, 
  FaUserSecret,
} from 'react-icons/fa';
import { MdSecurity } from 'react-icons/md';
import { GiHiking, GiCyberEye } from 'react-icons/gi';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // جميع المهارات مع إمكانية إضافة صور لكل مهارة
  const skills = [
    {
      name: 'SOC Analysis',
      category: 'Defensive Security',
      level: 90,
      color: '#00f5ff',
      description: 'Security Operations Center monitoring, threat detection, and incident response',
      image: '/assets/skills/soc-analysis.png', // ضع مسار صورتك هنا
      icon: <FaShieldAlt className="text-3xl" />
    },
    {
      name: 'Penetration Testing',
      category: 'Offensive Security',
      level: 88,
      color: '#ff3b3b',
      description: 'Ethical hacking, vulnerability assessment, and red team operations',
      image: '/assets/skills/penetration-testing.png',
      icon: <GiHiking className="text-3xl" />
    },
    {
      name: 'CCNA',
      category: 'Networking',
      level: 85,
      color: '#123499',
      description: 'Cisco networking, routing, switching, and network infrastructure',
      image: '/assets/skills/ccna.png',
      icon: <SiCisco className="text-3xl" />
    },
    {
      name: 'Data Analysis',
      category: 'Analytics',
      level: 82,
      color: '#00f5ff',
      description: 'Security logs analysis, threat intelligence, and forensic data',
      image: '/assets/skills/data-analysis.png',
      icon: <FaChartLine className="text-3xl" />
    },
    {
      name: 'Kali Linux',
      category: 'Tools',
      level: 92,
      color: '#00f5ff',
      description: 'Penetration testing distribution with security tools',
      image: '/assets/skills/kali-linux.png',
      icon: <SiKalilinux className="text-3xl" />
    },
    {
      name: 'Software Engineering',
      category: 'Development',
      level: 87,
      color: '#123499',
      description: 'Secure code development and software architecture',
      image: '/assets/skills/software-engineering.png',
      icon: <FaCode className="text-3xl" />
    },
    {
      name: 'Security Expert',
      category: 'Security',
      level: 92,
      color: '#ff3b3b',
      description: 'Comprehensive security strategies and risk management',
      image: '/assets/skills/security-expert.png',
      icon: <GiCyberEye className="text-3xl" />
    },
    {
      name: 'CompTIA Security+',
      category: 'Certification',
      level: 88,
      color: '#00f5ff',
      description: 'Core cybersecurity knowledge and best practices',
      image: '/assets/skills/comptia-sec.png',
      icon: <SiComptia className="text-3xl" />
    },
    {
      name: 'Ethical Hacking',
      category: 'Offensive Security',
      level: 89,
      color: '#123499',
      description: 'White hat hacking techniques and methodologies',
      image: '/assets/skills/ethical-hacking.png',
      icon: <FaUserSecret className="text-3xl" />
    },
    {
      name: 'Certified in Cybersecurity',
      category: 'Certification',
      level: 86,
      color: '#123499',
      description: 'Professional cybersecurity certification (CC)',
      image: '/assets/skills/cybersecurity-cert.png',
      icon: <MdSecurity className="text-3xl" />
    }
  ];

  // تجميع المهارات حسب الفئة
  const categories = [...new Set(skills.map(s => s.category))];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-28 px-6 bg-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="cyber-grid opacity-20"></div>
        <div className="absolute w-[800px] h-[800px] rounded-full blur-3xl animate-pulse-slow"
          style={{ background: 'radial-gradient(circle, rgba(0,245,255,0.05) 0%, transparent 70%)', top: '-20%', left: '-20%' }} />
        <div className="absolute w-[600px] h-[600px] rounded-full blur-3xl animate-pulse-slow"
          style={{ background: 'radial-gradient(circle, rgba(255,59,59,0.04) 0%, transparent 70%)', bottom: '-10%', right: '-10%', animationDelay: '2s' }} />
        <div className="absolute w-[500px] h-[500px] rounded-full blur-3xl animate-pulse-slow"
          style={{ background: 'radial-gradient(circle, rgba(18,52,153,0.05) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto relative z-10 max-w-6xl">

        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-block mb-4">
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Technical <span className="gradient-text-neon">Skills</span>
          </h2>
          <p className="font-primary text-secondry max-w-2xl mx-auto mt-4">
            A comprehensive overview of my technical expertise and security competencies
          </p>        </div>

        {/* Skills Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative bg-black/40 backdrop-blur-sm border border-neon/20 rounded-2xl p-5 hover:border-neon/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-neon-md overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon/5 via-transparent to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative flex gap-4">
                {/* Image/Icon Container */}
                <div className="flex-shrink-0">
                  <div 
                    className="w-20 h-20 rounded-xl flex items-center justify-center overflow-hidden bg-black/60 border border-neon/30 group-hover:border-neon/60 transition-all duration-300"
                    style={{ boxShadow: `0 0 20px ${skill.color}20` }}
                  >
                    <div className="text-4xl transition-all duration-300 group-hover:scale-110" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                  </div>
                </div>

                {/* Skill Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                    <div>
                      <h3 className="text-lg font-mono font-bold text-primary group-hover:text-neon transition-colors duration-300">
                        {skill.name}
                      </h3>
                      <span className="text-xs text-secondry font-mono">{skill.category}</span>
                    </div>
                    <span className="text-secondry font-mono text-sm font-bold">{skill.level}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden mb-3">
                    <div
                      className="absolute left-0 top-0 h-full rounded-full transition-all duration-1000 group-hover:shadow-lg"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: skill.color,
                        boxShadow: `0 0 10px ${skill.color}`
                      }}
                    ></div>
                  </div>
                  
                  <p className="font-primary text-secondry text-xs leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>

              {/* Corner Decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon rounded-tr-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary Stats */}
        <div className={`mt-16 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <StatsGrid stats={[
            { value: String(skills.length), label: 'Skills Mastered', color: '#00f5ff' },
            { value: String(categories.length), label: 'Categories',  color: '#123499' },
            { value: '87%',                     label: 'Avg Proficiency', color: '#00f5ff' },
            { value: '10+',                     label: 'Security Tools',  color: '#ff3b3b' },
          ]} />
        </div>

      </div>
    </section>
  );
};

export default Skills;