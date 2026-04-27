import careerHero from '../../assets/image/careerHero.png';
import careerImage from '../../assets/image/career.png';
import Contact from '../../components/common/Contact';

import AboutSec from '../../components/common/AboutSec';
import { Microscope, Users2, TrendingUp, Globe2, HeartPulse, UserCheck, Search, MapPin, Briefcase, ArrowRight, Mail } from 'lucide-react';
import ScrollIndicator from '../../components/common/ScrollIndicator';

export default function Career() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[500px] md:min-h-[650px] flex items-center overflow-hidden bg-slate-950">
                <div className="absolute inset-0 z-0">
                    <img className="w-full h-full object-cover opacity-50 mix-blend-luminosity animate-subtle-zoom"
                        src={careerHero}
                        alt="High-end pharmaceutical laboratory" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>

                    {/* Brand glow effects */}
                    <div className="absolute top-1/4 -right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-500/20 blur-[80px] md:blur-[120px] rounded-full"></div>
                    <div className="absolute bottom-1/4 -left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#83C24D]/10 blur-[80px] md:blur-[120px] rounded-full"></div>
                </div>
                <div className="site-shell relative z-10 w-full md:pt-0">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 animate-fade-in-down">
                            <span className="w-2 h-2 rounded-full bg-[#83C24D] animate-ping"></span>
                            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] text-white/90">Join Our Team</span>
                        </div>
                        <h1 className="text-[32px] sm:text-[45px] md:text-[65px] font-bold text-white leading-[1.2] md:leading-[1.1] mb-6 md:mb-8 animate-fade-in-up">
                            Shape the Future of <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-[#83C24D]">
                                Healthcare
                            </span>
                        </h1>
                        <p className="text-[16px] md:text-[21px] text-slate-300 leading-relaxed font-normal max-w-2xl mb-10 md:mb-12 animate-fade-in-up delay-200">
                            At Caprion Pharma, precision isn't just a metric—it's our purpose. We are looking for
                            visionaries to join our mission of redefining precision medicine and therapeutic excellence.
                        </p>
                    </div>
                </div>

                <ScrollIndicator />
            </section>


            <section className="section-pad bg-brand-50/30">
                <div className="site-shell relative">
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch signature-card bg-white shadow-2xl shadow-blue-900/5 border border-brand-100/30 overflow-hidden">
                        <div className="order-2 lg:order-1 lg:col-span-7 flex items-center">
                            <div className="px-6 py-12 md:p-16 lg:px-20">
                                <span className="section-kicker block mb-4">Our Purpose</span>
                                <h1 className="section-title !mt-0 mb-6 !text-3xl md:!text-[40px] font-bold leading-tight">
                                    A Culture Rooted in <span className="text-[#83C24D]">Vitality</span>
                                </h1>
                                <p className="section-copy mb-10 text-sm md:text-base leading-relaxed">
                                    We believe that scientific breakthroughs are born from diverse perspectives and
                                    relentless curiosity. At Caprion, your work directly translates to saved lives and
                                    improved patient outcomes worldwide.
                                </p>
                                <div className="space-y-6 md:space-y-8">
                                    <div className="flex gap-4 md:gap-6 group">
                                        <div
                                            className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-brand-50 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-100 transition-colors duration-300">
                                            <Microscope className="text-brand-500 w-6 h-6 md:w-8 md:h-8 stroke-[1.5]" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg md:text-xl mb-1 group-hover:text-brand-600 transition-colors">Pioneering Innovation</h4>
                                            <p className="text-slate-600 text-sm md:text-base leading-relaxed">Work with state-of-the-art technology
                                                in advanced molecular diagnostics.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 md:gap-6 group">
                                        <div
                                            className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[#F4F9F0] flex items-center justify-center flex-shrink-0 group-hover:bg-[#E8F2E1] transition-colors duration-300">
                                            <Users2 className="text-[#83C24D] w-6 h-6 md:w-8 md:h-8 stroke-[1.5]" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg md:text-xl mb-1 group-hover:text-[#3e9c2f] transition-colors">Collaborative Spirit</h4>
                                            <p className="text-slate-600 text-sm md:text-base leading-relaxed">Cross-functional teams that break
                                                silos to solve complex medical puzzles.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 lg:col-span-5 relative">
                            <div className="h-64 sm:h-80 md:h-full group overflow-hidden">
                                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                    alt="diverse team of scientists collaborating"
                                    src={careerImage} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-pad bg-slate-100 overflow-hidden">
                <div className="site-shell">
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-16 gap-6 md:gap-8 animate-fade-in-up">
                        <div className="max-w-2xl text-left">
                            <h2 className="heading-primary">Invested in Your Growth</h2>
                            <p className="section-copy">We provide the right environment, opportunities, and support to help you grow, learn, and achieve your full professional potential.</p>
                        </div>
                        <div className="flex gap-3">
                            <div className="w-12 md:w-16 h-1.5 bg-brand-500 rounded-full"></div>
                            <div className="w-12 md:w-16 h-1.5 bg-[#83C24D] rounded-full"></div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                        {[
                            { icon: TrendingUp, title: "Career Development", desc: "Continuous learning, skill enhancement, and opportunities to grow within the organization." },
                            { icon: Users2, title: "Collaborative Opportunities", desc: "Work alongside experienced professionals in a team-driven and knowledge-sharing environment." },
                            { icon: HeartPulse, title: "Health & Well-being", desc: "A supportive workplace that values work-life balance and overall employee well-being." },
                            { icon: UserCheck, title: "Inclusive Culture", desc: "An environment built on respect, diversity, and equal opportunities for everyone." }
                        ].map((feature, i) => (
                            <div key={i} className="flex flex-col sm:flex-row gap-6 items-start sm:items-center animate-fade-in-up bg-white p-6 md:px-8 md:py-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-brand-50 flex items-center rounded-xl md:rounded-full justify-center shadow-lg shadow-blue-900/5">
                                    <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-brand-600 stroke-[1.5]" />
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold mb-1.5 md:mb-2 text-slate-900 leading-tight">{feature.title}</h3>
                                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-pad bg-white" id="jobs">
                <div className="site-shell">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="mb-10 md:mb-14 animate-fade-in-up">
                            <span className="section-kicker block mb-4">JOIN OUR TEAM</span>
                            <h2 className="text-3xl sm:text-4xl md:heading-primary mb-6">Take the Next Step in Your Career</h2>
                            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                                We are always looking for passionate individuals to join our mission of delivering excellence in healthcare. If you believe you have the skills and drive to contribute to our growth, we would love to hear from you.
                            </p>
                        </div>

                        <div className="bg-slate-50 rounded-[2.5rem] md:rounded-[3.5rem] p-8 sm:p-12 md:p-20 border border-slate-100 shadow-xl shadow-blue-900/5 group relative overflow-hidden animate-fade-in-up">
                            <div className="absolute top-0 right-0 w-48 md:w-80 h-48 md:h-80 bg-brand-500/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000"></div>
                            
                            <div className="relative z-10">
                                <h3 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Submit Your Application</h3>
                                <p className="text-slate-500 text-sm md:text-base mb-8 md:mb-10 max-w-lg mx-auto">
                                    Send your updated CV and a cover letter to our recruitment team. We will review your profile and get back to you if there is a suitable opportunity.
                                </p>
                                
                                <a 
                                    href="mailto:info@caprionpharma.com" 
                                    className="btn-primary py-3 sm:py-4 px-10 sm:px-14 text-base sm:text-base inline-flex items-center gap-3 group/btn w-full sm:w-auto justify-center shadow-lg shadow-brand-500/10 hover:shadow-brand-500/25 transition-all"
                                >
                                    <span>Send Your CV</span>
                                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                                </a>
                                
                                <div className="mt-6 md:mt-8 flex items-center justify-center gap-2 text-slate-400 text-xs md:text-sm font-medium">
                                    <Mail className="w-4 h-4" />
                                    <span>info@caprionpharma.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Contact />
        </>
    );
}
