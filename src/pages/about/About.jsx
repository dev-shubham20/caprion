import { Link } from 'react-router-dom';
import aboutUsHero from '../../assets/image/aboutUs.png';
import Contact from '../../components/common/Contact';
import why01 from '../../assets/image/why01.png';
import why02 from '../../assets/image/why02.png';
import why03 from '../../assets/image/why03.png';
import why04 from '../../assets/image/why04.png';
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



            {/* Why Choose Us Feature Grid */}
            <section className="section-pad overflow-hidden bg-[#F0FBFF]">
                <div className="site-shell">
                    {/* Section Header */}
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 lg:mb-24 text-center lg:text-left">
                        <div className="max-w-xl mx-auto lg:mx-0">
                            <span className="section-kicker block mb-4">INSTITUTIONAL VALUE</span>
                            <div className="relative inline-block">
                                <h2 className="section-title text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] !mt-0 leading-tight">
                                    Why <span className="relative">Choose<div className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[4px] md:h-[6px] bg-[#8cc63f] rounded-full"></div></span> Us
                                </h2>
                            </div>
                        </div>
                        <div className="lg:max-w-md lg:text-right">
                            <p className="text-[16px] md:text-[18px] text-slate-500 italic font-medium leading-relaxed">
                                "Precision is not just a metric; it is our mandate to the global patient community we serve every day."
                            </p>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-8 border border-slate-50 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 group animate-fade-in-up">
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#F0F7FF] rounded-2xl flex items-center justify-center mb-8 md:mb-10 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                                <img src={why01} alt="Quality" className="w-6 h-6 object-contain" />
                            </div>
                            <h3 className="text-[20px] md:text-[22px] font-bold text-slate-900 mb-4 md:mb-6 leading-tight">Uncompromising <br className="hidden md:block" /> Quality</h3>
                            <p className="text-slate-500 leading-relaxed text-sm md:text-[15px]">
                                Our rigorous multi-tier verification process ensures that clinical data maintains the highest integrity from raw collection to final editorial publication.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-8 border border-slate-50 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 group animate-fade-in-up delay-100">
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#F4F9F0] rounded-2xl flex items-center justify-center mb-8 md:mb-10 group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                                <img src={why02} alt="Patient Centric" className="w-6 h-6 object-contain" />
                            </div>
                            <h3 className="text-[20px] md:text-[22px] font-bold text-slate-900 mb-4 md:mb-6 leading-tight">Patient-Centric <br className="hidden md:block" /> Approach</h3>
                            <p className="text-slate-500 leading-relaxed text-sm md:text-[15px]">
                                We bridge the gap between complex science and human outcomes, prioritizing accessibility and ethical transparency in every research phase.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-8 border border-slate-50 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 group animate-fade-in-up delay-200">
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#F0F7FF] rounded-2xl flex items-center justify-center mb-8 md:mb-10 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                                <img src={why03} alt="R&D" className="w-6 h-6 object-contain" />
                            </div>
                            <h3 className="text-[20px] md:text-[22px] font-bold text-slate-900 mb-4 md:mb-6 leading-tight">Innovative <br className="hidden md:block" /> R&D</h3>
                            <p className="text-slate-500 leading-relaxed text-sm md:text-[15px]">
                                Leveraging AI-driven predictive modeling and molecular screening to accelerate the development of next-generation life-saving therapeutics.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-8 border border-slate-50 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 group animate-fade-in-up delay-300">
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#F0F7FF] rounded-2xl flex items-center justify-center mb-8 md:mb-10 group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                                <img src={why04} alt="Distribution" className="w-6 h-6 object-contain" />
                            </div>
                            <h3 className="text-[20px] md:text-[22px] font-bold text-slate-900 mb-4 md:mb-6 leading-tight">Global <br className="hidden md:block" /> Distribution</h3>
                            <p className="text-slate-500 leading-relaxed text-sm md:text-[15px]">
                                Seamless logistical integration across six continents ensures that critical medical insights and treatments reach providers exactly when needed.
                            </p>
                        </div>
                    </div>
                </div>
            </section>




            <Contact />
        </>
    );
}
