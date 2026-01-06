
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
              Direct Channel
            </div>
            <h1 className="text-5xl md:text-8xl font-display font-black text-white mb-6 leading-tight">
              Let's Build <br />
              <span className="text-brand-blue">Something</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
              High-bandwidth communication for founders, investors, and fellow builders. 
              Zero excuses. Just solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar Info */}
            <div className="lg:col-span-1 space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="p-10 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-xl border border-white/5 shadow-2xl"
              >
                <h3 className="text-2xl font-display font-bold text-white mb-8">Base of Operations</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,212,255,0.1)]">
                      <Mail size={22} />
                    </div>
                    <div>
                      <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Email</div>
                      <div className="text-white font-medium">truthfire@imagiisom.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,212,255,0.1)]">
                      <Phone size={22} />
                    </div>
                    <div>
                      <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Signal</div>
                      <div className="text-white font-medium">+1 (758) 716-2802</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,212,255,0.1)]">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Location</div>
                      <div className="text-white font-medium">Castries, St. Lucia 🇱🇨</div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-12 border-t border-white/5">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Digital Presence</h4>
                  <div className="flex gap-4">
                    {[
                      { icon: <Twitter size={18} />, href: "#" },
                      { icon: <Linkedin size={18} />, href: "#" },
                      { icon: <Github size={18} />, href: "#" }
                    ].map((social, i) => (
                      <a 
                        key={i}
                        href={social.href}
                        className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-brand-blue hover:bg-brand-blue/10 border border-white/5 hover:border-brand-blue/30 transition-all duration-300"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="p-10 rounded-[2.5rem] bg-brand-gold/5 border border-brand-gold/10 backdrop-blur-xl"
              >
                <h4 className="text-brand-gold font-bold mb-4 uppercase text-[10px] tracking-[0.2em]">Active Availability</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Deep work mode: 04:00 - 08:00 AST. <br />
                  Collaboration: 08:00 - 18:00 AST. <br />
                  Emergency Support: 24/7 for SafeTravel Business clients.
                </p>
              </motion.div>
            </div>

            {/* Form Section */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
