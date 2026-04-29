import { useEffect, useRef, useState } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    setIsLoading(false);
    setTimeout(() => setIsSubmitted(false), 4000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactLinks = [
    {
      label: 'Email',
      value: 'hamzarad2003@gmail.com',
      href: 'mailto:hamzarad2003@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      label: 'Location',
      value: 'Syira | Qatar',
      href: null,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      label: 'Availability',
      value: 'Open to opportunities',
      href: null,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-28 px-6 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="cyber-grid opacity-20"></div>
        <div className="absolute w-[600px] h-[600px] rounded-full blur-3xl animate-pulse-slow"
          style={{ background: 'radial-gradient(circle, rgba(0,245,255,0.06) 0%, transparent 70%)', top: '-10%', right: '-10%' }} />
        <div className="absolute w-[500px] h-[500px] rounded-full blur-3xl animate-pulse-slow"
          style={{ background: 'radial-gradient(circle, rgba(18,52,153,0.06) 0%, transparent 70%)', bottom: '-10%', left: '-10%', animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto relative z-10 max-w-5xl">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
            Get In <span className="gradient-text-neon">Touch</span>
          </h2>
          <p className="font-primary text-secondry max-w-xl mx-auto">
            Have a project or security concern? I'm available and ready to help.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Left — Info */}
          <div className={`lg:col-span-2 space-y-5 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>

            <div className="space-y-1 mb-6">
              <h3 className="text-xl font-bold text-primary">Let's work together</h3>
              <p className="font-primary text-secondry text-sm leading-relaxed">
                Whether it's a penetration test, security audit, or software project — reach out and let's discuss.
              </p>
            </div>

            {contactLinks.map((item) => (
              <div key={item.label} className="group flex items-center gap-4 p-4 rounded-xl border border-neon/10 bg-black/40 hover:border-neon/30 hover:bg-neon/5 transition-all duration-300">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-neon"
                  
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-mono text-secondry">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-primary text-primary hover:text-neon transition-colors duration-200">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-primary text-primary">{item.value}</p>
                  )}
                </div>
              </div>
            ))}


          </div>

          {/* Right — Form */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="bg-black/50 border border-neon/20 rounded-2xl p-7 backdrop-blur-sm">

              {/* Terminal bar */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-neon/10">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-xs font-mono text-secondry ml-2">new_message.sh</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-secondry mb-1.5">
                      <span className="text-neon">$</span> name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full bg-black/60 border border-neon/15 rounded-lg px-4 py-3 text-sm font-primary text-primary placeholder-secondry/40 focus:outline-none focus:border-neon/60 focus:bg-neon/5 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-secondry mb-1.5">
                      <span className="text-neon">$</span> email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full bg-black/60 border border-neon/15 rounded-lg px-4 py-3 text-sm font-primary text-primary placeholder-secondry/40 focus:outline-none focus:border-neon/60 focus:bg-neon/5 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono text-secondry mb-1.5">
                    <span className="text-neon">$</span> subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Penetration Test / Security Audit"
                    className="w-full bg-black/60 border border-neon/15 rounded-lg px-4 py-3 text-sm font-primary text-primary placeholder-secondry/40 focus:outline-none focus:border-neon/60 focus:bg-neon/5 transition-all duration-300"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-secondry mb-1.5">
                    <span className="text-neon">$</span> message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe your project or security needs..."
                    className="w-full bg-black/60 border border-neon/15 rounded-lg px-4 py-3 text-sm font-primary text-primary placeholder-secondry/40 focus:outline-none focus:border-neon/60 focus:bg-neon/5 transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative w-full bg-gradient-neon-blue rounded-lg py-3.5 font-bold text-black text-sm overflow-hidden transition-all duration-300 hover:shadow-neon-md hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Send Message
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                </button>

                {/* Success */}
                {isSubmitted && (
                  <div className="flex items-center gap-3 p-3.5 bg-green-500/10 border border-green-500/30 rounded-lg animate-fade-in">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-green-400 text-sm font-primary">Message sent! I'll get back to you soon.</p>
                  </div>
                )}

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
