import React from 'react';
import { Handshake, ShieldCheck, Globe, Leaf, ArrowUpRight } from 'lucide-react';

export default function Partners() {
    const partners = [
        {
            name: 'Widerfarm',
            subtitle: 'Field to Pharma',
            icon: <Leaf className="w-5 h-5 text-[#83C24D]" />,
            tag: 'Sourcing',
            color: 'from-green-500/10 to-emerald-500/10'
        },
        {
            name: 'Farm Sun',
            subtitle: 'Agro Vitality',
            icon: <Globe className="w-5 h-5 text-[#1193f2]" />,
            tag: 'Global',
            color: 'from-blue-500/10 to-indigo-500/10'
        },
        {
            name: 'Handfarm',
            subtitle: 'Trusted Inputs',
            icon: <ShieldCheck className="w-5 h-5 text-[#83C24D]" />,
            tag: 'Quality',
            color: 'from-green-500/10 to-emerald-500/10'
        },
        {
            name: 'Organics',
            subtitle: 'Healthy Growth',
            icon: <Handshake className="w-5 h-5 text-[#1193f2]" />,
            tag: 'Alliance',
            color: 'from-blue-500/10 to-indigo-500/10'
        }
    ];

    return (
        <section id="partners" className="relative w-full bg-white overflow-hidden font-['Poppins']">
            <div className="relative mx-auto max-w-[1400px] px-4 md:px-8">
                {/* Compact Signature Shape */}
                <div className="relative overflow-hidden rounded-tr-[60px] rounded-bl-[60px] bg-[linear-gradient(135deg,#0f172a_0%,#1193f2_100%)] text-white shadow-xl">
                    
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#83C24D]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>

                    <div className="py-10 md:py-12 px-6 md:px-12 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 mb-8">
                            <div className="text-center lg:text-left">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-3">
                                    <Handshake className="w-3 h-3 text-[#83C24D]" />
                                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/90">Partners</span>
                                </span>
                                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                                    Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-[#83C24D]">Partnerships</span>
                                </h2>
                                <p className="max-w-lg text-xs md:text-sm text-white/50 leading-relaxed">
                                    Strengthening our global reach through trusted channel relationships.
                                </p>
                            </div>
                            
                            <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#83C24D] hover:text-white transition-all border border-[#83C24D]/30 hover:border-white px-6 py-2 rounded-full backdrop-blur-sm">
                                Join Network
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {partners.map((partner, idx) => (
                                <article 
                                    key={idx} 
                                    className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-[1.5rem] p-5 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 overflow-hidden"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                    <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20">
                                                {partner.icon}
                                            </div>
                                            <ArrowUpRight className="w-3 h-3 text-white/20 group-hover:text-[#83C24D] transition-colors" />
                                        </div>

                                        <div className="space-y-0.5">
                                            <span className="text-[8px] font-bold uppercase tracking-widest text-[#83C24D]/80">
                                                {partner.tag}
                                            </span>
                                            <h3 className="text-lg font-bold text-white leading-tight group-hover:text-[#83C24D] transition-colors">
                                                {partner.name}
                                            </h3>
                                            <p className="text-[11px] text-white/40 group-hover:text-white/70">
                                                {partner.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}