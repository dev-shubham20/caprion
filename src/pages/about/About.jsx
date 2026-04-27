import { Link } from 'react-router-dom';
import aboutUsHero from '../../assets/image/aboutUs.png';
import missionVision from '../../assets/image/missionVision.jpg';
import Contact from '../../components/common/Contact';

import AboutSec from '../../components/common/AboutSec';
import ScrollIndicator from '../../components/common/ScrollIndicator';

export default function About() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative w-full h-[500px] md:h-[650px] overflow-hidden flex items-center">
                <img
                    src={aboutUsHero}
                    alt="About Caprion"
                    className="absolute inset-0 w-full h-full object-cover scale-105 animate-subtle-zoom"
                />

                {/* Modern Blue Gradient Overlay with subtle glass effect */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1193f2_40%,rgba(0,154,242,0.4)_70%,rgba(0,154,242,0)_100%)] md:bg-[linear-gradient(to_right,#1193f2_30%,rgba(0,154,242,0.2)_50%,rgba(0,154,242,0)_100%)]"></div>

                <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-16 md:pt-0">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-3 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 md:mb-8 animate-fade-in-down">
                            <span className="w-2 h-2 rounded-full bg-[#83C24D] animate-ping"></span>
                            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/90">About Caprion Pharma Pvt. Ltd.</span>
                        </div>

                        <h1 className="text-white text-[38px] sm:text-[53px] md:text-[85px] font-bold leading-[1.1] md:leading-[0.95] mb-6 md:mb-8 drop-shadow-lg animate-fade-in-up">
                            Quality <span className="">healthcare,</span> <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-[#83C24D]">
                                driven by trust.
                            </span>
                        </h1>

                        <p className="text-white/90 text-[16px] md:text-[22px] max-w-2xl leading-relaxed mb-10 md:mb-12 font-medium animate-fade-in-up delay-200">
                            We are dedicated to providing reliable pharmaceutical products across key therapeutic areas, driven by a focus on quality, consistency, and better patient outcomes.
                        </p>

                        <div className="flex flex-wrap gap-6 animate-fade-in-up delay-500">
                            <Link to="/portfolio" className="btn-primary !rounded-none !rounded-tr-[2rem] !rounded-bl-[2rem] px-8 md:!px-12 py-3.5 md:!py-4 w-full sm:w-auto justify-center">
                                Explore Portfolio
                                <svg className="w-5 h-5 md:w-6 md:h-6 ml-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                <ScrollIndicator />
            </section>

            <AboutSec />

            {/* Strategy & Stats Section */}
            <section className="bg-white section-pad overflow-hidden">
                <div className="site-shell">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                        {/* Left Side: Content */}
                        <div className="lg:w-3/5 animate-fade-in-up text-center lg:text-left">
                            <h2 className="heading-primary">
                                Our Purpose
                            </h2>
                            <p className="text-[15px] md:text-[16px] text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
                                We aim to improve lives by providing effective and dependable healthcare solutions, supporting both patients and healthcare professionals.
                            </p>
                        </div>

                        {/* Right Side: Stats Grid */}
                        <div className="lg:w-2/5 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full animate-fade-in-up delay-300">
                            {[
                                { value: '100%', label: 'PRODUCT RANGE' },
                                { value: '15+', label: 'Therapeutic Areas' }
                            ].map((stat, idx) => (
                                <div key={idx} className="bg-[#f8fafc] rounded-[24px] p-6 md:p-10 border border-slate-100 flex flex-col justify-center items-center lg:items-start group hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 cursor-default">
                                    <span className="text-[36px] md:text-[52px] font-bold text-[#71BC3D] mb-2 md:mb-4 leading-none group-hover:scale-110 transition-transform origin-center lg:origin-left">
                                        {stat.value}
                                    </span>
                                    <span className="text-[11px] md:text-[12px] font-bold tracking-[0.2em] text-slate-400 uppercase leading-tight text-center lg:text-left">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* Core Competencies Section */}
            <section className="bg-[#f0f9ff] section-pad">
                <div className="site-shell">
                    <div className="container-custom mb-10 text-center md:text-left">
                        <h2 className="heading-primary">
                            Our Core Values
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { 
                                icon: (
                                    <svg className="w-7 h-7 text-[#009AF2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                ), 
                                title: "Quality First", 
                                desc: "Ensuring safety and consistency in every product we deliver to our patients.",
                                bg: "bg-[#EBF5FB]",
                                delay: "" 
                            },
                            { 
                                icon: (
                                    <svg className="w-7 h-7 text-[#83C24D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 003 20c0 .553.447 1 1 1h16c.553 0 1-.447 1-1 0-5.523-4.477-10-10-10z" />
                                    </svg>
                                ), 
                                title: "Integrity", 
                                desc: "Building trust through ethical practices and transparent communication at all levels.",
                                bg: "bg-[#F4F9F0]",
                                delay: "delay-150" 
                            },
                            { 
                                icon: (
                                    <svg className="w-7 h-7 text-[#009AF2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                ), 
                                title: "Innovation", 
                                desc: "Continuously improving healthcare solutions through research and cutting-edge technology.",
                                bg: "bg-[#EBF5FB]",
                                delay: "delay-300" 
                            },
                            { 
                                icon: (
                                    <svg className="w-7 h-7 text-[#83C24D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                ), 
                                title: "Commitment", 
                                desc: "Focused on long-term impact and reliability for sustainable global health outcomes.",
                                bg: "bg-[#F4F9F0]",
                                delay: "delay-450" 
                            }
                        ].map((value, i) => (
                            <div key={i} className={`bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 group animate-fade-in-up ${value.delay}`}>
                                <div className={`w-14 h-14 ${value.bg} rounded-[18px] flex items-center justify-center mb-6 md:mb-8 group-hover:rotate-6 transition-transform`}>
                                    {value.icon}
                                </div>
                                <h3 className="text-[20px] md:text-[22px] font-bold text-slate-900 mb-3 md:mb-4 group-hover:text-[#83C24D] transition-colors">{value.title}</h3>
                                <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed">
                                    {value.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="bg-white section-pad overflow-hidden">
                <div className="site-shell">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <div className="lg:w-1/2 space-y-12 md:space-y-16 animate-fade-in-up">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#F4F9F0] rounded-xl flex items-center justify-center text-[#83C24D]">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-[26px] md:text-[36px] font-bold text-slate-900">Our Mission</h2>
                                </div>
                                <p className="text-slate-600 text-[16px] md:text-[18px] leading-relaxed max-w-xl">
                                    To deliver high-quality, safe, and effective medicines that improve patient outcomes and build long-term trust.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#F4F9F0] rounded-xl flex items-center justify-center text-[#83C24D]">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-[26px] md:text-[36px] font-bold text-slate-900">Our Vision</h2>
                                </div>
                                <p className="text-slate-600 text-[16px] md:text-[18px] leading-relaxed max-w-xl">
                                    To become a trusted pharmaceutical company known for quality, innovation, and consistent healthcare solutions.
                                </p>
                            </div>

                        </div>

                        <div className="lg:w-1/2 relative animate-fade-in-up delay-300 w-full mt-12 lg:mt-0">
                            <div className="aspect-[4/3] sm:aspect-square lg:aspect-square bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 rounded-[30px] md:rounded-[40px] shadow-inner relative overflow-hidden group">
                                <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay"></div>
                                <img 
                                    src={missionVision} 
                                    alt="Caprion Mission and Vision" 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                />
                            </div>

                            <div className="absolute -bottom-8 md:-bottom-10 -right-4 md:-right-10 bg-white p-6 md:p-10 rounded-[20px] md:rounded-[30px] shadow-2xl shadow-blue-900/10 border border-slate-50 transform hover:-translate-y-2 transition-transform duration-500 z-10 max-w-[180px] md:max-w-none">
                                <div className="text-center">
                                    <div className="text-[32px] md:text-[50px] font-bold text-[#8cc63f] leading-none mb-1 md:mb-2">2030</div>
                                    <div className="text-[9px] md:text-[13px] font-bold tracking-[0.15em] md:tracking-[0.25em] text-slate-400 uppercase whitespace-normal md:whitespace-nowrap">
                                        GLOBAL <br className="hidden md:block" /> LEADERSHIP TARGET
                                    </div>
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
