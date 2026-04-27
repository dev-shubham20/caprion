import Contact from '../../components/common/Contact';
import ourTeamHero from '../../assets/image/ourTeamHero.png';
import ceoPortrait from '../../assets/image/ceo_portrait.png';
import directorPortrait from '../../assets/image/director_strategy_portrait.png';
import scientistHero from '../../assets/image/scientist-hero.png';
import ScrollIndicator from '../../components/common/ScrollIndicator';

export default function OurTeam() {
    return (
        <>
            <section className="relative w-full h-[500px] md:h-[650px] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={ourTeamHero}
                        alt="Our Team Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#1193f2]/70 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1193f2] via-[#1193f2]/40 to-transparent"></div>
                </div>

                <div className="relative z-10 h-full site-shell flex flex-col justify-center px-4">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 animate-fade-in-down">
                            <span className="w-2 h-2 rounded-full bg-[#83C24D] animate-ping"></span>
                            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/90">Our Leadership</span>
                        </div>
                        
                        <h1 className="text-[48px] md:text-[72px] font-bold text-white leading-[1.05] mb-8">
                            The Minds Behind <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-[#83C24D]">
                                the Medicine
                            </span>
                        </h1>

                        <p className="text-slate-300 text-[16px] md:text-[19px] leading-relaxed max-w-xl">
                            Meet the multidisciplinary collective of scientists, clinicians, 
                            and strategists dedicated to redefining pharmaceutical precision.
                        </p>
                    </div>
                </div>

                <ScrollIndicator />
            </section>

            {/* Leadership Spotlight Section */}
            <section className="section-pad relative overflow-hidden bg-white">
                <div className="site-shell">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
                        <div className="lg:w-[40%] relative">
                            <div className="aspect-square rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl shadow-blue-900/10 relative group">
                                <img 
                                    src={ceoPortrait} 
                                    alt="Mr. Rakesh Gupta" 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
                            </div>
                        </div>

                        <div className="lg:w-[60%]">
                            <span className="text-[#8cc63f] font-bold tracking-[0.2em] text-[14px] uppercase mb-4 block">
                                Managing Director & Founder
                            </span>
                            <h2 className="text-[40px] md:text-[52px] font-bold text-slate-900 mb-8 leading-tight">
                                Mr. Rakesh Gupta
                            </h2>
                            <p className="text-slate-600 text-[17px] leading-relaxed mb-10">
                                With over two decades of transformative leadership in the pharmaceutical 
                                industry, Mr. Gupta has steered Caprion Pharma toward becoming a beacon 
                                of quality and patient-centric innovation. His vision focuses on 
                                sustainable healthcare solutions that are accessible globally.
                            </p>
                            <div className="flex flex-wrap gap-10 border-t border-slate-100 pt-10">
                                <div>
                                    <div className="text-[28px] font-bold text-[#1193f2]">20+</div>
                                    <div className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">Years Experience</div>
                                </div>
                                <div>
                                    <div className="text-[28px] font-bold text-[#1193f2]">Global</div>
                                    <div className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">Network Reach</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Grid section */}
            <section className="section-pad">
                <div className="site-shell">
                    <div className="container-custom mb-20">
                        <h2 className="heading-primary">Strategic Leadership</h2>
                        <p className="text-slate-500 max-w-xl mx-auto text-[17px]">
                            Guided by a diverse board of subject matter experts across R&D, 
                            logistics, and therapeutic sciences.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {/* Director 1 */}
                        <div className="group">
                            <div className="aspect-square rounded-[2.5rem] overflow-hidden mb-8 shadow-lg group-hover:shadow-blue-500/10 transition-all duration-500">
                                <img src={directorPortrait} alt="Dr. Elena" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <h3 className="text-[24px] font-bold text-slate-900 mb-1">Dr. Elena Sterling</h3>
                            <p className="text-[#1193f2] font-semibold text-[14px] uppercase tracking-wide mb-4">Director - R&D</p>
                            <p className="text-slate-500 text-[15px] leading-relaxed">
                                Expert in molecular pharmacology and clinical trial management 
                                for advanced GI solutions.
                            </p>
                        </div>

                        {/* Director 2 */}
                        <div className="group">
                            <div className="aspect-square rounded-[2.5rem] overflow-hidden mb-8 shadow-lg group-hover:shadow-green-500/10 transition-all duration-500">
                                <img src={scientistHero} alt="Mr. Ankit" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <h3 className="text-[32px] font-bold text-slate-900 mb-1">Mr. Ankit Sharma</h3>
                            <p className="text-[#8cc63f] font-semibold text-[14px] uppercase tracking-wide mb-4">Head of Distribution</p>
                            <p className="text-slate-500 text-[15px] leading-relaxed">
                                Streamlining logistics to ensure life-saving therapeutics reach 
                                providers with maximum efficiency.
                            </p>
                        </div>

                        {/* Recruitment Card */}
                        <div className="h-full bg-slate-900 rounded-[2.5rem] p-10 flex flex-col justify-center text-center relative overflow-hidden group/card shadow-xl transition-transform hover:-translate-y-2">
                            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover/card:scale-110 transition-transform">
                                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 4v16m8-8H4" />
                                </svg>
                            </div>
                            <h3 className="text-[26px] font-bold text-white mb-4 relative z-10">Join Our <br /> Mission</h3>
                            <p className="text-slate-400 text-[15px] mb-8 relative z-10">
                                We are always looking for visionary scientists and strategists.
                            </p>
                            <button className="bg-[#1193f2] text-white py-4 rounded-2xl font-bold hover:bg-[#8cc63f] transition-all relative z-10 uppercase tracking-widest text-[13px]">
                                View Openings
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </>
    );
}
