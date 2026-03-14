/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Linkedin, Pin as Pinterest, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Page, PortfolioItem, Service } from './types';

const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Stillness in Structure',
    category: 'Architecture & Geometry',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhJDXIZW5ITWJpbGphESIUdzr9uhymrQ8JmCM-4ic38DTYzX5DXLpJ6vHFSwS5afgGqMj8wFTMQbbPq1AjE6dugT8U4CimuxR3eTP0uUz-CXNjKrLNCflZ-IYBTN_VMVcoMngSISx4CosxlgVgKvqL2VDZ65_JXPFPoI2RsHSXM2BBODLMRo7ipvYsMxxEjBTLf3dDpIPAhNYP5cs5efjng6rNDIOG6O2kotiA9c8AEGP9wDzwLorvRLLQG2LQeFIutHuGr7Sl5zQ',
    aspectRatio: 'aspect-[4/5]'
  },
  {
    id: '2',
    title: 'The Whispering Woods',
    category: 'Fine Art Landscape',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBImdakyZ3jVl9ghkEKV_NE2FOL9YniK_CKtDC6dpoCyw0bEcSDspaEgOZwwQSLef2wuHizealo4Pbex0F-Bj-fkem5D685XzxtGIe9F7GYOJbuPltKF1AM0zu15ehpQ6ri4jlfQPkSQav9kEnID3lrVepCYhHyr-Czv8e0F0sOdnJGYRM4g4eTRE5mFZCQ3YvDBKygJox4WNMWziqS6g9cf16uo-nGiQPGICFPuVylFuPi3M2naKohM3lwGspZr3IDbiMT38GeQlI',
    aspectRatio: 'aspect-[4/5]'
  },
  {
    id: '3',
    title: 'Ethereal Grace',
    category: 'Portraits',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9U2E30jP6NafkzQfQtiLqRoEGMCXTgGnQ6389QDFc0KSWaAVv8Jg8Bqp3XvOHbTQDUGV6YXJ4tHORqBASMry4JGUjXRgTIAi0Q_wytKw_nj_UnBxDkuFT_DietyfsmoWbquIA4ykPWwBYAQdaSCo8EbXxopjP6IvzoFPby0S3nNrjTH2OH4qSZhxjVfwTXiCQVhhH59WZsWfTANUHSFH-ZMhfQPtZnIVgk06my8Ry7U9xMDAaYnw6KIP5YRsMOXZw44FftOvhIQ8',
    aspectRatio: 'aspect-[3/4]'
  },
  {
    id: '4',
    title: 'Silent Valleys',
    category: 'Landscapes',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBITvBFEB5l3qgNmcGlbOU-kfBtKOd2dDopXK_npuDPCYhu90vqaYv8VBCt8W-IEbuc33ahdIaRikwF2S7K_1gD-5kgemFg05SWUYSrF76-z5AswjQPvHiyZ_F14O_f-D8AElPu8lHgWi7tsupb-PdkpfmYy-AVTruGgU8HnQRolhgR1aUejBeUPlxICP-iNJbIGUnT0gKXuzMleNS8tJ-ZwAYyyPOTGsFjMxoCALcSoAKIvMRipGgORuooiwmqhq5Q87n9ouB-mVA',
    aspectRatio: 'aspect-square'
  },
  {
    id: '5',
    title: 'Urban Texture',
    category: 'Editorial',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyCFT7I45XNbNnva1ofZ0kgUgTCMnqvQWvMB5vRQsq6RsasWRCAeOHsjD8W3cjqbqQEY0o-qLQVIj765JBz900xsgBz7T0rc2K6XUl-PtnlUxi2Q55KXPEdsSYVC5Xfmr0vKampSfnyxStd3USTx3Ne9H0Eh3hQQESXmv4mHsfZodCwWS_gRHl-jhYEWrjjcHQPw7Mfh7olGk2dyZ9QDLk9z32PAl5cbj0iH3o_euAzGVnxgoqfjnNXQ89KFBtSpHfsYUPy6YzVJo',
    aspectRatio: 'aspect-[4/3]'
  },
  {
    id: '6',
    title: 'Desert Echoes',
    category: 'Landscapes',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTO8-3T186kDYMLF8ewQf2zVGpQe-8zmv4gmnVDtS7wpMs8RzV6FCL8AS14Iz_T_7nh1_G76PEcfMyX-V9Vhjqb7hGeBOQaBvaBtWkxcj1mnREIjQDElL5fzTH0ZhuadEvDhZlZSvUr3wFgBZuCyzNu0ZRBdLY640K18NIyJgMAWL9RtWYzUwMOJ0DyzGWyUNcpZO739vaTYTbZWkO4rjOBzRFtt7_EzE_ssLOgWco1Z6d5QJICI5NejNjdAM17xhLZsViWtesD1k',
    aspectRatio: 'aspect-square'
  }
];

const services: Service[] = [
  {
    id: '1',
    title: 'Lifestyle Portraits',
    description: 'Authentic sessions designed to capture your personality in natural environments. Perfect for families, couples, or individuals.',
    icon: 'smile',
    features: ['90-minute session', '30+ edited high-res photos', 'Online gallery access']
  },
  {
    id: '2',
    title: 'Editorial Branding',
    description: 'Elevated imagery for creatives and entrepreneurs looking to tell their brand story with sophistication and style.',
    icon: 'camera',
    features: ['Concept consultation', 'Professional retouching', 'Commercial usage rights']
  },
  {
    id: '3',
    title: 'Documentary Memoir',
    description: 'A day-in-the-life session capturing the ordinary moments that become extraordinary over time. No posing, just life.',
    icon: 'book',
    features: ['4-hour coverage', 'Printed heirloom album', 'Complete digital collection']
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const NavContent = () => (
    <ul className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
      {(['home', 'portfolio', 'about', 'contact'] as Page[]).map((page) => (
        <li key={page}>
          <button
            onClick={() => {
              setCurrentPage(page);
              setIsMenuOpen(false);
              window.scrollTo(0, 0);
            }}
            className={`nav-link ${currentPage === page ? 'text-custom-theme border-b border-custom-theme' : 'text-memoir-paper'}`}
          >
            {page}
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="min-h-screen bg-memoir-bg selection:bg-custom-theme selection:text-black">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center transition-all duration-500 ${scrolled ? 'bg-memoir-bg/80 backdrop-blur-md py-4' : 'mix-blend-difference'}`}
      >
        <div className="logo">
          <button 
            onClick={() => setCurrentPage('home')}
            className="text-xl font-medium tracking-widest text-memoir-paper uppercase"
          >
            MEMOIRBYSBK
          </button>
        </div>

        <nav className="hidden md:block">
          <NavContent />
        </nav>

        <button 
          className="md:hidden text-memoir-paper"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-memoir-bg flex items-center justify-center"
          >
            <NavContent />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main>
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.section
              key="home"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.8 }}
              className="relative h-screen w-full flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  alt="Stunning cinematic landscape" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7tqP4Ioksl5_QSeuramJvfapbSoYW1k9m0wU_LwajMGpdC2c1gCXvlXy4K5YaI3H5UYesChtGAHuFVjtTWL46gDftChc8hvF_4w9cb4rQgo76wPOVwuHIsWx0NzdylT_-ukjtRJKg5rxRP0tHT5j1IN7UHkYGAbz5-ITJdR6BRXJhVkX1GNFWZBlt9NUfDv0QZWzBbE4M6sxQPDJQALBQY0bVfZoyW6WzAVg6G5rhUljnynF2W4O6RwHpQr3kJus0-IHKZTxSzbI"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 hero-gradient"></div>
              </div>
              
              <div className="relative z-10 text-center px-4 max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight text-memoir-paper opacity-90">
                  Capturing the <span className="italic">unspoken</span> moments.
                </h1>
                <p className="text-memoir-primary text-sm md:text-base tracking-wide leading-relaxed font-light mx-auto max-w-lg mb-8">
                  Professional storytelling through a minimalist lens. Based in the light, grounded in the shadow.
                </p>
                <button 
                  onClick={() => setCurrentPage('portfolio')}
                  className="inline-block border border-memoir-primary/40 px-8 py-3 text-xs uppercase tracking-widest text-memoir-paper hover:bg-memoir-paper hover:text-black transition-colors duration-500 rounded-sm"
                >
                  Explore Work
                </button>
              </div>

              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50">
                <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
                <div className="w-[1px] h-12 bg-memoir-primary"></div>
              </div>
            </motion.section>
          )}

          {currentPage === 'portfolio' && (
            <motion.section
              key="portfolio"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="pt-32 pb-24 px-8 max-w-7xl mx-auto"
            >
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-memoir-accent/20 pb-8">
                <div>
                  <h2 className="text-3xl font-light tracking-wide text-memoir-paper">Selected Works</h2>
                  <p className="text-xs italic text-memoir-accent mt-2 tracking-widest uppercase">Capturing the silent moments</p>
                </div>
                <p className="text-xs text-memoir-accent uppercase tracking-widest mt-4 md:mt-0">Gallery 2024</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {portfolioItems.map((item, index) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`group cursor-pointer ${index % 2 === 1 ? 'md:mt-12' : ''}`}
                  >
                    <div className={`img-container ${item.aspectRatio || 'aspect-[4/5]'} bg-neutral-900 rounded-sm`}>
                      <img 
                        alt={item.title} 
                        className="w-full h-full object-cover" 
                        src={item.imageUrl}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="mt-6">
                      <h3 className="text-lg font-light text-memoir-paper">{item.title}</h3>
                      <p className="text-xs text-memoir-accent uppercase mt-1 tracking-widest">{item.category}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {currentPage === 'about' && (
            <motion.section
              key="about"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="pt-32 pb-24 px-8 max-w-7xl mx-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
                <div className="lg:col-span-7">
                  <span className="text-memoir-accent font-medium tracking-[0.3em] uppercase block mb-4 text-xs">The Artist Behind the Lens</span>
                  <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight text-memoir-paper">
                    Preserving <span className="text-memoir-primary italic">humanity</span> in every frame.
                  </h1>
                  <p className="text-lg text-memoir-primary/80 leading-relaxed max-w-xl mb-10">
                    I am a visual storyteller dedicated to capturing the quiet, honest moments that define our lives. Memoirbysbk was born from a passion for timeless aesthetics and the profound beauty found in raw, unscripted reality.
                  </p>
                  <div className="flex gap-4">
                    <button 
                      onClick={() => {
                        const el = document.getElementById('services');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-8 py-4 bg-memoir-accent text-memoir-paper rounded-sm hover:bg-opacity-90 transition-all font-medium text-sm uppercase tracking-widest"
                    >
                      My Services
                    </button>
                    <button 
                      onClick={() => setCurrentPage('portfolio')}
                      className="px-8 py-4 border border-memoir-primary text-memoir-primary rounded-sm hover:bg-memoir-primary hover:text-memoir-bg transition-all font-medium text-sm uppercase tracking-widest"
                    >
                      View Portfolio
                    </button>
                  </div>
                </div>
                <div className="lg:col-span-5 relative">
                  <div className="border border-memoir-primary/30 p-4 rounded-sm">
                    <img 
                      alt="Photographer Portrait" 
                      className="w-full h-auto rounded-sm grayscale hover:grayscale-0 transition-all duration-700 object-cover shadow-2xl" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt3VMseOxgL0TodFEkaia_mcF-WJWwGoX4CaAEku3zmmFHdSIVSMqyIEKt5kSat5OrpSg-0W_urYEquNzaHXt2BZuHWJqHNYMFsQP8fqmWxEx_Vk6tPt-9yshsb6hs4QdzHd9XyxdknEIXlESQTsMO4c4-Mg_PQkbvfaxCjYQlEB99OPITMfZCm1thB2DP-J158i1nwk6d01FYSZEm9MNWoNubm3BV-MlKp2JoZ0KgmBeDQyIuiTCkerjFdAfsNBCGRJH0Q7FuzJ4"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

              <div className="max-w-4xl mx-auto text-center mb-32">
                <h2 className="text-2xl font-light text-memoir-primary mb-12 uppercase tracking-widest">My Philosophy</h2>
                <div className="bg-memoir-accent/10 border-l-4 border-memoir-accent p-10 md:p-16 rounded-sm italic text-xl md:text-2xl leading-relaxed text-memoir-paper/90">
                  "Photography is more than just a composition of light and shadows. It is an act of preservation. My goal is to create images that feel like memories—warm, tactile, and deeply personal. I believe in the beauty of imperfections and the stories told in the silence between shots."
                </div>
              </div>

              <div id="services">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-memoir-paper mb-4">Tailored Experiences</h2>
                  <div className="h-1 w-20 bg-memoir-accent mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {services.map((service) => (
                    <article key={service.id} className="bg-white/5 p-8 rounded-sm border border-white/10 hover:border-memoir-primary/50 transition-colors group">
                      <div className="w-12 h-12 mb-6 flex items-center justify-center bg-memoir-accent/20 text-memoir-accent rounded-full group-hover:bg-memoir-accent group-hover:text-memoir-paper transition-colors">
                        {service.icon === 'smile' && <Instagram size={24} />}
                        {service.icon === 'camera' && <Instagram size={24} />}
                        {service.icon === 'book' && <Instagram size={24} />}
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-memoir-primary">{service.title}</h3>
                      <p className="text-memoir-accent/80 leading-relaxed mb-6 text-sm">
                        {service.description}
                      </p>
                      <ul className="text-xs space-y-2 text-memoir-paper/60 uppercase tracking-widest">
                        {service.features.map((feature, i) => (
                          <li key={i}>• {feature}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {currentPage === 'contact' && (
            <motion.section
              key="contact"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="pt-32 pb-24 px-8 max-w-7xl mx-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div className="space-y-12">
                  <section>
                    <h1 className="text-5xl font-light mb-8 text-memoir-primary leading-tight">Get in touch.</h1>
                    <p className="text-lg text-memoir-primary/80 max-w-md leading-relaxed">
                      Every story deserves to be preserved. Reach out to discuss how we can help archive your journey with elegance and care.
                    </p>
                  </section>

                  <section className="space-y-8">
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-[0.2em] text-memoir-accent mb-2">Email</span>
                      <a className="text-xl hover:text-memoir-accent transition-colors" href="mailto:hello@memoirbysbk.com">hello@memoirbysbk.com</a>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-[0.2em] text-memoir-accent mb-2">Location</span>
                      <address className="text-xl not-italic leading-relaxed">
                        Available Worldwide<br/>
                        London & New York
                      </address>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-[0.2em] text-memoir-accent mb-2">Social</span>
                      <div className="flex space-x-6 text-xl">
                        <a className="hover:text-memoir-accent transition-colors" href="#"><Instagram size={20} /></a>
                        <a className="hover:text-memoir-accent transition-colors" href="#"><Linkedin size={20} /></a>
                        <a className="hover:text-memoir-accent transition-colors" href="#"><Pinterest size={20} /></a>
                      </div>
                    </div>
                  </section>
                </div>

                <div className="bg-white/5 p-8 md:p-12 rounded-sm border border-white/5">
                  <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex flex-col">
                        <label className="text-xs uppercase tracking-widest text-memoir-accent mb-3">Name</label>
                        <input 
                          type="text" 
                          placeholder="John Doe"
                          className="bg-transparent border-0 border-b border-memoir-primary/30 focus:border-memoir-primary py-2 px-0 transition-colors placeholder:text-memoir-primary/20 text-memoir-paper outline-none"
                          required
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-xs uppercase tracking-widest text-memoir-accent mb-3">Email</label>
                        <input 
                          type="email" 
                          placeholder="john@example.com"
                          className="bg-transparent border-0 border-b border-memoir-primary/30 focus:border-memoir-primary py-2 px-0 transition-colors placeholder:text-memoir-primary/20 text-memoir-paper outline-none"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="text-xs uppercase tracking-widest text-memoir-accent mb-3">Inquiry Type</label>
                      <select className="bg-transparent border-0 border-b border-memoir-primary/30 focus:border-memoir-primary py-2 px-0 transition-colors text-memoir-paper appearance-none cursor-pointer outline-none">
                        <option className="bg-memoir-bg" value="memoir">Memoir Inquiry</option>
                        <option className="bg-memoir-bg" value="collaboration">Collaboration</option>
                        <option className="bg-memoir-bg" value="press">Press</option>
                        <option className="bg-memoir-bg" value="other">General</option>
                      </select>
                    </div>
                    <div className="flex flex-col">
                      <label className="text-xs uppercase tracking-widest text-memoir-accent mb-3">Your Story</label>
                      <textarea 
                        rows={4}
                        placeholder="Tell us a little bit about your project..."
                        className="bg-transparent border-0 border-b border-memoir-primary/30 focus:border-memoir-primary py-2 px-0 transition-colors placeholder:text-memoir-primary/20 text-memoir-paper resize-none outline-none"
                        required
                      />
                    </div>
                    <button 
                      type="submit"
                      className="w-full md:w-auto px-12 py-4 bg-memoir-primary hover:bg-memoir-accent text-memoir-bg font-bold uppercase tracking-widest text-xs transition-all duration-300 rounded-sm"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="py-16 px-8 bg-memoir-bg border-t border-memoir-accent/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <span className="text-xs tracking-[0.5em] text-memoir-accent uppercase">MEMOIRBYSBK</span>
            <p className="text-[10px] text-zinc-500 mt-2 uppercase tracking-widest">© 2024 All Rights Reserved</p>
          </div>
          <div className="flex space-x-8 text-[10px] tracking-[0.2em] uppercase text-memoir-accent">
            <a className="hover:text-custom-theme transition-colors" href="#">Instagram</a>
            <a className="hover:text-custom-theme transition-colors" href="#">Behance</a>
            <a className="hover:text-custom-theme transition-colors" href="#">Vimeo</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
