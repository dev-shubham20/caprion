import lifeAtHero from '../../assets/image/lifeAtHero.jpg';
import inspiredIcon from '../../assets/image/Inspired.png';
import drivenIcon from '../../assets/image/Driven.png';
import guidedIcon from '../../assets/image/Guided.png';
import focusedIcon from '../../assets/image/Focused.png';
import spotlightImage from '../../assets/image/EmployeeSpotlight.png';
import beyond01 from '../../assets/image/beyond01.jpg';
import beyond02 from '../../assets/image/beyond02.png';
import beyond04 from '../../assets/image/beyond04.jpg';
import beyond05 from '../../assets/image/beyond05.png';
import Contact from '../../components/common/Contact';
import ScrollIndicator from '../../components/common/ScrollIndicator';

export default function LifeAtCaprion() {
    return (
        <>

            {/* Hero Section */}
            <section className="relative min-h-[500px] md:min-h-[650px] flex items-center overflow-hidden bg-white">
                <div className="site-shell">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                        <div className="md:col-span-7 z-10 animate-fade-in-up">
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-8 animate-fade-in-down">
                                <span className="w-2 h-2 rounded-full bg-[#83C24D] animate-ping"></span>
                                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-600">Culture & Care</span>
                            </div>
                            <h1 className="text-[45px] md:text-[60px] font-bold text-slate-950 leading-[1.1] mb-6">
                                Life at <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-[#83C24D]">Caprion Pharma</span>
                            </h1>
                            <p className="text-[18px] md:text-[20px] text-slate-600 leading-relaxed font-normal max-w-2xl mb-10">
                                Cultivating a culture of innovation and care where scientific precision meets human compassion.
                                Join us in redefining the future of pharmaceutical excellence.
                            </p>
                            <div className="flex flex-wrap gap-8 items-center">
                                <button className="btn-primary py-3">
                                    Explore Open Roles
                                </button>
                            </div>
                        </div>
                        <div className="md:col-span-5 relative animate-fade-in-up delay-300">
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                                <img
                                    alt="Professional researchers working in a high-tech laboratory environment"
                                    className="w-full h-[500px] object-cover"
                                    src={lifeAtHero} />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-[#83C24D] text-white p-8 rounded-[1.5rem] rounded-tr-[4rem] shadow-xl hidden md:block">
                                <p className="text-[42px] font-bold leading-none mb-1">94%</p>
                                <p className="text-[12px] font-bold tracking-widest uppercase opacity-90">Employee Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>

                <ScrollIndicator color="text-slate-400" opacity="opacity-20" />
            </section>


            {/* Principles Section */}
            <section className="bg-[#f8fafc] section-pad">
                <div className="site-shell">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 animate-fade-in-up">
                        <div className="max-w-2xl">
                            <h2 className="heading-primary !mb-4">Guided by Principles</h2>
                            <p className="text-[17px] text-slate-600 leading-relaxed font-normal">
                                Our values aren't just words on a wall; they are the fundamental beliefs
                                that drive every experiment and decision we make.
                            </p>
                        </div>
                        <span className="text-slate-100 font-black text-8xl hidden md:block select-none tracking-tighter">VALUES</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="soft-card p-10 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 group animate-fade-in-up">
                            <div className="w-16 h-16 rounded-2xl bg-[#F4F9F0] flex items-center justify-center mb-8 transition-colors">
                                <img src={drivenIcon} alt="Innovation" className="w-10 h-10 object-contain group-hover:scale-110 transition-transform" />
                            </div>
                            <h3 className="text-[22px] font-bold text-slate-950 mb-4">Innovation</h3>
                            <p className="text-slate-600 text-[15px] leading-relaxed">Pushing boundaries to discover novel therapeutic solutions for complex global health challenges.</p>
                        </div>

                        <div className="soft-card p-10 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 group animate-fade-in-up delay-150">
                            <div className="w-16 h-16 rounded-2xl bg-[#F4F9F0] flex items-center justify-center mb-8 transition-colors">
                                <img src={guidedIcon} alt="Integrity" className="w-10 h-10 object-contain group-hover:scale-110 transition-transform" />
                            </div>
                            <h3 className="text-[22px] font-bold text-slate-950 mb-4">Integrity</h3>
                            <p className="text-slate-600 text-[15px] leading-relaxed">Upholding the highest ethical standards in scientific research and professional conduct.</p>
                        </div>

                        <div className="soft-card p-10 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 group animate-fade-in-up delay-300">
                            <div className="w-16 h-16 rounded-2xl bg-[#F4F9F0] flex items-center justify-center mb-8 transition-colors">
                                <img src={focusedIcon} alt="Collaboration" className="w-10 h-10 object-contain group-hover:scale-110 transition-transform" />
                            </div>
                            <h3 className="text-[22px] font-bold text-slate-950 mb-4">Collaboration</h3>
                            <p className="text-slate-600 text-[15px] leading-relaxed">Fostering diverse perspectives and cross-functional teams to accelerate breakthroughs.</p>
                        </div>

                        <div className="soft-card p-10 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 group animate-fade-in-up delay-450">
                            <div className="w-16 h-16 rounded-2xl bg-[#F4F9F0] flex items-center justify-center mb-8 transition-colors">
                                <img src={inspiredIcon} alt="Patient-First" className="w-10 h-10 object-contain group-hover:scale-110 transition-transform" />
                            </div>
                            <h3 className="text-[22px] font-bold text-slate-950 mb-4">Patient-First</h3>
                            <p className="text-slate-600 text-[15px] leading-relaxed">Every molecule we develop is dedicated to improving the lives of patients worldwide.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Employee Spotlight Section */}
            <section className="section-pad overflow-hidden bg-[#EDF7FF]">
                <div className="site-shell">
                    <div className="bg-gradient-to-br from-[#1193f2] to-[#0a5ca3] rounded-[2rem] md:rounded-[4rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl shadow-blue-900/20 animate-fade-in-up">

                        {/* Image Column */}
                        <div className="lg:w-1/2 relative min-h-[350px] md:min-h-[450px] lg:min-h-full">
                            <img
                                alt="Dr. Elena Rodriguez"
                                className="absolute inset-0 w-full h-full object-cover"
                                src={spotlightImage}
                            />
                            <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
                        </div>

                        <div className="lg:w-1/2 p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-center text-white relative">
                            <span className="absolute right-6 top-6 text-[80px] md:text-[120px] font-black text-white/5 leading-none select-none pointer-events-none">"</span>

                            <div className="flex gap-1.5 mb-6">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <svg key={i} className="w-5 h-5 md:w-6 md:h-6 text-[#FFD700] fill-current drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]" viewBox="0 0 24 24">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                ))}
                            </div>

                            <p className="text-[12px] md:text-[14px] uppercase tracking-[0.3em] font-bold mb-4 text-white/80">Employee Spotlight</p>

                            <blockquote className="text-[20px] sm:text-[24px] lg:text-[28px] italic leading-snug md:leading-tight mb-8 md:mb-12">
                                "At Caprion, I'm not just a researcher; I'm a pioneer. The support for independent thought
                                and the resources provided to pursue bold ideas is unlike any other firm in the industry."
                            </blockquote>

                            <div className="border-l-2 border-white/20 pl-5 md:pl-6">
                                <p className="text-[18px] md:text-[22px] font-bold mb-0.5 md:mb-1">Dr. Elena Rodriguez</p>
                                <p className="text-white/70 text-[12px] md:text-[14px] font-medium tracking-wide uppercase">Senior Principal Scientist, Oncology Research</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Beyond the Lab Section */}
            <section className="bg-white section-pad">
                <div className="site-shell">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h2 className="heading-primary !mb-6">Beyond the Lab</h2>
                        <p className="text-[17px] md:text-[19px] text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            We believe in a balanced life where community, growth, and connection 
                            are just as vital to our breakthrough science as our research equipment.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Team Connection */}
                        <div className="md:col-span-2 h-[400px] md:h-[500px] relative overflow-hidden rounded-br-[4px] rounded-tl-[4px] rounded-bl-[2rem] rounded-tr-[2rem] group shadow-xl animate-fade-in-up">
                            <img alt="Team connection"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                src={beyond01} />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent p-10 flex flex-col justify-end">
                                <h4 className="text-white text-[24px] font-bold mb-2">Team Connection</h4>
                                <p className="text-white/80 text-[15px] max-w-md">Fostering relationships through quarterly off-sites and innovation workshops.</p>
                            </div>
                        </div>

                        {/* Modern Spaces */}
                        <div className="h-[400px] md:h-[500px] relative overflow-hidden rounded-br-[4px] rounded-tl-[4px] rounded-bl-[2rem] rounded-tr-[2rem] group shadow-xl animate-fade-in-up delay-150">
                            <img alt="Modern spaces"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                src={beyond02} />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent p-10 flex flex-col justify-end">
                                <h4 className="text-white text-[24px] font-bold mb-2">Modern Spaces</h4>
                                <p className="text-white/80 text-[15px]">Designed for both deep focus and spontaneous collaboration.</p>
                            </div>
                        </div>

                        {/* Giving Back */}
                        <div className="h-[350px] md:h-[400px] relative overflow-hidden rounded-br-[4px] rounded-tl-[4px] rounded-bl-[2rem] rounded-tr-[2rem] group shadow-xl animate-fade-in-up delay-300">
                            <img alt="Giving back"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                src={beyond04} />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent p-8 flex flex-col justify-end">
                                <h4 className="text-white text-[22px] font-bold mb-2">Giving Back</h4>
                                <p className="text-white/80 text-[14px]">STEM outreach and environment initiatives in local communities.</p>
                            </div>
                        </div>

                        {/* Inclusive Culture */}
                        <div className="md:col-span-2 h-[350px] md:h-[400px] relative overflow-hidden rounded-br-[4px] rounded-tl-[4px] rounded-bl-[2rem] rounded-tr-[2rem] group shadow-xl animate-fade-in-up delay-450">
                            <img alt="Inclusive culture"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                src={beyond05} />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent p-10 flex flex-col justify-end">
                                <h4 className="text-white text-[24px] font-bold mb-2">Inclusive Culture</h4>
                                <p className="text-white/80 text-[15px] max-w-md">Celebrating diversity as our greatest catalyst for scientific ingenuity.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Contact />
        </>
    );
}
