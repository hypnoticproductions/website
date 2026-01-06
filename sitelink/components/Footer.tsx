
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-display font-bold text-white block mb-4">
              Richard <span className="text-brand-blue">D. Fortune</span>
            </Link>
            <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
              Technical founder specialized in AI architecture and product strategy. 
              Currently building in the legal tech and travel intelligence sectors from St. Lucia 🇱🇨.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-blue hover:border-brand-blue transition-all">
                <Github size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-blue hover:border-brand-blue transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-blue hover:border-brand-blue transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-400 hover:text-brand-blue transition-colors">Home</Link></li>
              <li><Link to="/harvester" className="text-slate-400 hover:text-brand-blue transition-colors">Harvester</Link></li>
              <li><Link to="/safetravel" className="text-slate-400 hover:text-brand-blue transition-colors">SafeTravel</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-brand-blue transition-colors">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-slate-400">
                <Mail size={16} className="text-brand-blue" />
                <span>truthfire@imagiisom.com</span>
              </li>
              <li className="text-slate-400">Castries, St. Lucia</li>
              <li className="text-slate-400">+1 (758) 716-2802</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Richard D. Fortune. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm italic">
            Zero excuses. Shipped from 🇱🇨
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
