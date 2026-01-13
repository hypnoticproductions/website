import type { Metadata } from 'next'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'The Terrain Engine | Cognitive Infrastructure',
  description: 'We map complexity and bore permanent tunnels through obstacles. Harvester, SafeTravel, WUKR Wire, and the Morphic Trade Axis.',
}

const infrastructureData = [
  {
    title: 'WorkrWire',
    tagline: 'The Nervous System',
    description: 'Connects human intention to AI execution. Every decision traceable. Every action connected. Every insight has a home.',
    icon: '⚡'
  },
  {
    title: 'MANUS',
    tagline: 'The Foreman',
    description: 'Breaks goals into terrain. Marks obstacles. Allocates AI labor. Tracks progress. Prevents collapse. Never sleeps.',
    icon: '👷'
  },
  {
    title: 'Knowledge Base',
    tagline: 'The Memory',
    description: 'Every route ever taken. Every tunnel bored. Permanent infrastructure for cognitive mapping, not task automation.',
    icon: '🧠'
  }
]

const productData = [
  {
    name: 'Harvester',
    tagline: 'Legal complexity → Case-ready structure',
    description: 'Ingests legal documents, maps contradictions and evidence relationships. Outputs case preparation in hours, not days.',
    tunnel: 'Through legal document chaos to clear case strategy',
    status: 'Production Ready',
    cta: 'Request Demo'
  },
  {
    name: 'SafeTravel',
    tagline: 'Travel chaos → Risk-mapped routes',
    description: 'Analyzes destinations across 7 intelligence layers. Personalized risk assessments with real-time voice updates.',
    tunnel: 'Through travel uncertainty to informed decisions',
    status: 'Production Ready',
    cta: 'Start Assessment'
  },
  {
    name: 'WUKR Wire',
    tagline: 'One insight → 60+ platforms',
    description: 'Formats intelligence for Twitter, LinkedIn, Dev.to, and more. Syndication with proper attribution and source citation.',
    tunnel: 'Through distribution complexity to omnipresent authority',
    status: 'Onboarding Clients',
    cta: 'Get Started'
  },
  {
    name: 'Morphic Trade Axis',
    tagline: 'Caribbean capital → Ugandan opportunity',
    description: 'Connects diaspora investors to vetted opportunities. Escrow, due diligence, and transaction security included.',
    tunnel: 'Through Western intermediaries to direct South-South flow',
    status: 'In Development',
    cta: 'Inquire'
  }
]

export default function TerrainEnginePage() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Gradient - Geological Feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#0F172A] to-[#0a1319]"></div>
        
        {/* Animated Tunnel Effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, #0D9488 0%, transparent 50%)`,
            animation: 'pulse 4s ease-in-out infinite'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-block mb-6 px-4 py-2 border-2 border-[#F59E0B] rounded-sm">
            <span className="text-[#F59E0B] text-sm font-bold uppercase tracking-widest">Cognitive Infrastructure</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-[#F8FAFC] mb-6 leading-tight">
            We Don't Build Tools.<br />
            <span className="text-[#0D9488]">We Build Tunnels.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#94A3B8] max-w-3xl mx-auto mb-10 leading-relaxed">
            The Terrain Engine maps complexity and bores permanent routes through obstacles. 
            Stop climbing mountains. Walk through them.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#F97316] text-white font-bold uppercase tracking-wider rounded-sm hover:bg-[#ea580c] transition-all duration-300 hover:scale-105">
              Explore the Terrain
            </button>
            <button className="px-8 py-4 border-2 border-[#0D9488] text-[#0D9488] font-bold uppercase tracking-wider rounded-sm hover:bg-[#0D9488] hover:text-[#0F172A] transition-all duration-300">
              See the Products
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#0D9488] rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-[#F59E0B] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-24 bg-[#0a1319]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#F59E0B] text-sm font-bold uppercase tracking-widest">The Paradigm Shift</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mt-4">A New Way Forward</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Traditional Approach */}
            <div className="p-6 bg-[#0F172A] border border-[#334155] rounded-sm">
              <div className="text-4xl mb-4">🔦</div>
              <h3 className="text-xl font-bold text-[#94A3B8] mb-3">Traditional Software</h3>
              <p className="text-[#64748B]">Gives you a flashlight. Illuminates what's immediately in front. Leaves you in the dark about what lies ahead.</p>
            </div>
            
            {/* AI Assistants */}
            <div className="p-6 bg-[#0F172A] border border-[#334155] rounded-sm">
              <div className="text-4xl mb-4">🧭</div>
              <h3 className="text-xl font-bold text-[#94A3B8] mb-3">AI Assistants</h3>
              <p className="text-[#64748B]">Give you a guide who guesses. Helpful, but unreliable. Each conversation starts from scratch.</p>
            </div>
            
            {/* The Terrain Engine */}
            <div className="p-6 bg-[#0D9488] bg-opacity-10 border-2 border-[#0D9488] rounded-sm relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#0D9488] px-3 py-1">
                <span className="text-[#0F172A] text-xs font-bold uppercase tracking-wider">The Tunnel</span>
              </div>
              <div className="text-4xl mb-4">🗺️</div>
              <h3 className="text-xl font-bold text-[#F59E0B] mb-3">The Terrain Engine</h3>
              <p className="text-[#E2E8F0]">Gives you a satellite map, geological scans, and tunnels already bored through the hardest rock. Permanent routes.</p>
            </div>
          </div>
          
          <div className="mt-16 p-8 border-l-4 border-[#F59E0B] bg-[#0D9488] bg-opacity-5">
            <p className="text-2xl font-bold text-[#F8FAFC] italic">
              "We don't climb mountains. We blast tunnels through them. When the tunnel is complete, the route is permanent."
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#0D9488] text-sm font-bold uppercase tracking-widest">Tunnel Entrances</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mt-4">The Products</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {productData.map((product, index) => (
              <div 
                key={index}
                className="group p-8 bg-[#0a1319] border border-[#334155] border-t-4 border-t-[#0D9488] rounded-sm hover:border-[#F59E0B] hover:border-t-[#F59E0B] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#0D9488]/20"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-[#F8FAFC] group-hover:text-[#F59E0B] transition-colors">
                    {product.name}
                  </h3>
                  <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm ${
                    product.status === 'Production Ready' 
                      ? 'bg-[#0D9488] text-[#0F172A]' 
                      : 'bg-[#F59E0B] text-[#0F172A]'
                  }`}>
                    {product.status}
                  </span>
                </div>
                
                <p className="text-[#0D9488] font-semibold mb-4">{product.tagline}</p>
                <p className="text-[#94A3B8] mb-4 leading-relaxed">{product.description}</p>
                
                <div className="pt-4 border-t border-[#334155]">
                  <p className="text-sm text-[#64748B]">
                    <span className="text-[#F59E0B] font-bold">The tunnel:</span> {product.tunnel}
                  </p>
                </div>
                
                <button className="mt-6 w-full py-3 border-2 border-[#0D9488] text-[#0D9488] font-bold uppercase tracking-wider rounded-sm hover:bg-[#0D9488] hover:text-[#0F172A] transition-all duration-300">
                  {product.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-24 bg-[#0a1319]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#F59E0B] text-sm font-bold uppercase tracking-widest">What Powers the Tunnels</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mt-4">Infrastructure</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {infrastructureData.map((item, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-[#0F172A] border border-[#334155] rounded-sm hover:border-[#F59E0B] transition-all duration-300"
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-[#F8FAFC] mb-2">{item.title}</h3>
                <p className="text-[#F59E0B] font-semibold text-sm uppercase tracking-wider mb-4">{item.tagline}</p>
                <p className="text-[#94A3B8] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Development - Morphic Trade Axis */}
      <section className="py-24 bg-[#0D9488] bg-opacity-5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#F59E0B] text-sm font-bold uppercase tracking-widest">Currently Boring</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mt-4">The Morphic Trade Axis</h2>
          </div>
          
          <div className="bg-[#0F172A] border border-[#334155] rounded-sm p-8 mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-3 h-3 bg-[#F59E0B] rounded-full animate-pulse"></div>
              <span className="text-[#F59E0B] font-bold uppercase tracking-wider">In Active Development</span>
            </div>
            
            <h3 className="text-2xl font-bold text-[#F8FAFC] mb-4">
              Caribbean capital → Ugandan opportunity<br />
              <span className="text-[#0D9488]">Bypassing Western intermediaries</span>
            </h3>
            
            <p className="text-[#94A3B8] mb-8 leading-relaxed">
              Connecting Caribbean and Ghanaian diaspora investors to vetted Ugandan opportunities. 
              Escrow, due diligence, and transaction security included. The first permanent tunnel 
              for South-South capital flow.
            </p>
            
            <h4 className="text-[#F59E0B] font-bold uppercase tracking-wider mb-4">Investment Packages</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-[#0a1319] border border-[#334155] rounded-sm">
                <h5 className="font-bold text-[#F8FAFC]">Scout</h5>
                <p className="text-2xl font-bold text-[#0D9488]">$5,000</p>
                <p className="text-sm text-[#64748B]">Single market access</p>
              </div>
              <div className="p-4 bg-[#0a1319] border border-[#334155] rounded-sm">
                <h5 className="font-bold text-[#F8FAFC]">Bridge</h5>
                <p className="text-2xl font-bold text-[#0D9488]">$15,000</p>
                <p className="text-sm text-[#64748B]">Dual market access</p>
              </div>
              <div className="p-4 bg-[#0a1319] border border-[#334155] rounded-sm">
                <h5 className="font-bold text-[#F8FAFC]">Axis</h5>
                <p className="text-2xl font-bold text-[#0D9488]">$50,000</p>
                <p className="text-sm text-[#64748B]">Full corridor access</p>
              </div>
              <div className="p-4 bg-[#0a1319] border border-[#334155] rounded-sm">
                <h5 className="font-bold text-[#F8FAFC]">Architect</h5>
                <p className="text-2xl font-bold text-[#0D9488]">$150,000+</p>
                <p className="text-sm text-[#64748B]">Strategic partnership</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-[#64748B]">Each package includes $1,600 operator consultation fee.</p>
          </div>
          
          <div className="text-center">
            <button className="px-8 py-4 bg-[#F97316] text-white font-bold uppercase tracking-wider rounded-sm hover:bg-[#ea580c] transition-all duration-300">
              Request Investment Information
            </button>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#0D9488] text-sm font-bold uppercase tracking-widest">The Architect</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mt-4">Richard D. Fortune</h2>
            <p className="text-[#F59E0B] mt-2 font-semibold">Vor'thalis — Principal Architect</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="p-6 border-l-4 border-[#0D9488] bg-[#0a1319]">
                <p className="text-[#94A3B8] mb-6 leading-relaxed">
                  Richard D. Fortune (Vor'thalis) is the principal architect behind The Terrain Engine. 
                  Based in Castries, St. Lucia, he has spent years developing systems that map human 
                  complexity rather than simply responding to queries.
                </p>
                <p className="text-[#94A3B8] mb-6 leading-relaxed">
                  As founder of <span className="text-[#F8FAFC] font-bold">Dopa-Tech</span> and <span className="text-[#F8FAFC] font-bold">Fortune Tech Ventures</span>, 
                  Richard's philosophy is clear: "Most AI answers questions. We bore tunnels. The difference is permanence."
                </p>
                <p className="text-[#94A3B8] leading-relaxed">
                  His current focus includes scaling Harvester and SafeTravel for revenue generation, 
                  building the Morphic Trade Axis, and developing The Terrain Engine as a licensable 
                  infrastructure layer for the next generation of cognitive systems.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-[#0a1319] border border-[#334155]">
                  <p className="text-2xl font-bold text-[#0D9488]">Dopa-Tech</p>
                  <p className="text-xs text-[#64748B]">Parent Company</p>
                </div>
                <div className="text-center p-4 bg-[#0a1319] border border-[#334155]">
                  <p className="text-2xl font-bold text-[#F59E0B]">St. Lucia</p>
                  <p className="text-xs text-[#64748B]">Base of Operations</p>
                </div>
                <div className="text-center p-4 bg-[#0a1319] border border-[#334155]">
                  <p className="text-2xl font-bold text-[#F8FAFC]">Vor'thalis</p>
                  <p className="text-xs text-[#64748B]">Identity</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center">
              <div className="w-full max-w-md aspect-square bg-[#0a1319] border-4 border-[#0D9488] rounded-sm flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[#0D9488] opacity-10"></div>
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 bg-[#0D9488] rounded-full flex items-center justify-center">
                    <span className="text-4xl">⚒️</span>
                  </div>
                  <p className="text-[#F8FAFC] font-bold text-xl">The Architect</p>
                  <p className="text-[#F59E0B] text-sm uppercase tracking-wider mt-2">Of the Axis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#0a1319]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#0D9488] text-sm font-bold uppercase tracking-widest">Enter the Terrain</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mt-4">Get In Touch</h2>
          </div>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#94A3B8] text-sm font-bold uppercase tracking-wider mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full p-4 bg-[#0F172A] border border-[#334155] rounded-sm text-[#F8FAFC] placeholder-[#475569] focus:border-[#F97316] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-[#94A3B8] text-sm font-bold uppercase tracking-wider mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full p-4 bg-[#0F172A] border border-[#334155] rounded-sm text-[#F8FAFC] placeholder-[#475569] focus:border-[#F97316] focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-[#94A3B8] text-sm font-bold uppercase tracking-wider mb-2">Inquiry Type</label>
              <select className="w-full p-4 bg-[#0F172A] border border-[#334155] rounded-sm text-[#F8FAFC] focus:border-[#F97316] focus:outline-none transition-colors">
                <option>Product Inquiry</option>
                <option>Investment Discussion</option>
                <option>Partnership Opportunity</option>
                <option>Consultation Request</option>
                <option>Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-[#94A3B8] text-sm font-bold uppercase tracking-wider mb-2">Message</label>
              <textarea 
                rows={5}
                className="w-full p-4 bg-[#0F172A] border border-[#334155] rounded-sm text-[#F8FAFC] placeholder-[#475569] focus:border-[#F97316] focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your needs..."
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full py-4 bg-[#F97316] text-white font-bold uppercase tracking-wider rounded-sm hover:bg-[#ea580c] transition-all duration-300 hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
