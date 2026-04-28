import { Link } from 'react-router-dom';
import scientistHero from '../../assets/image/scientist-hero.png';
import Contact from '../../components/common/Contact';
import missionVision from '../../assets/image/missionVision.jpg';
import beyond01 from '../../assets/image/beyond01.jpg';
import beyond02 from '../../assets/image/beyond02.png';
import beyond04 from '../../assets/image/beyond04.jpg';
import beyond05 from '../../assets/image/beyond05.png';

export default function WhyChooseUs() {
    return (
        <>
            {/* Hero Section - Split Layout */}
            <section className="relative min-h-[500px] md:min-h-[650px] flex items-center overflow-hidden bg-[#F4F9FF] pt-10 md:pt-0">
                <div className="site-shell">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-24">

                        <div className="w-full lg:w-[48%] z-10 text-center lg:text-left">
                            <div className="inline-flex items-center gap-3 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-blue-100/50 border border-blue-200/50 mb-6 md:mb-8 animate-fade-in-down">
                                <span className="w-2 h-2 rounded-full bg-[#83C24D] animate-ping"></span>
                                <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-blue-600">Institutional Value</span>
                            </div>
                            <h1 className="text-[34px] sm:text-[48px] md:text-[55px] lg:text-[64px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-4 animate-fade-in-up">
                                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-[#83C24D]">Mission</span> & Vision
                            </h1>

                            <p className="text-[#1193f2] text-[18px] md:text-[22px] font-bold mb-6 md:mb-8 animate-fade-in-up delay-100">
                                Driven by purpose. Focused on better healthcare.
                            </p>

                            <p className="text-slate-600 text-[16px] md:text-[20px] leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10 md:mb-12 animate-fade-in-up delay-200">
                                Our commitment is to deliver reliable pharmaceutical solutions while shaping a future built on quality, trust, and innovation.
                            </p>

                            <div className="flex flex-wrap justify-center lg:justify-start gap-5 animate-fade-in-up delay-400">
                                <button className="btn-primary !px-10 !py-4 shadow-xl shadow-blue-500/20 group w-full sm:w-auto">
                                    Our Methodology
                                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="w-full lg:w-[52%] relative animate-fade-in-up delay-300 mt-6 lg:mt-0">
                            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/10 border-8 md:border-[12px] border-white group">
                                <img
                                    src={scientistHero}
                                    alt="Clinical Excellence"
                                    className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-blue-500/5 mix-blend-multiply"></div>
                            </div>

                            {/* Floating Stats Badge */}
                            <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 md:-bottom-6 md:-left-12 bg-white px-6 py-4 sm:px-8 sm:py-6 md:px-10 md:py-6 rounded-[1.5rem_0_1.5rem_0] md:rounded-[2rem_0_2rem_0] shadow-2xl shadow-blue-900/15 border border-blue-50/50 flex items-center gap-4 md:gap-5 translate-y-4 animate-fade-in-up delay-700">
                                <div className="text-[#8cc63f] text-[28px] sm:text-[32px] md:text-[40px] font-bold leading-none">99.8%</div>
                                <div className="text-slate-500 text-[11px] sm:text-[13px] md:text-[14px] font-semibold leading-tight border-l border-slate-100 pl-4 md:pl-5 uppercase tracking-wider">
                                    Accuracy in <br /> Quality Testing
                                </div>
                            </div>

                            <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
                            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-green-400/5 rounded-full blur-3xl -z-10"></div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Beyond the Lab Section */}
            <section className="bg-white section-pad">
                <div className="site-shell">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h2 className="heading-primary !mb-6">Our Purpose & Direction</h2>
                        <p className="text-[17px] md:text-[19px] text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Our Purpose is to drive meaningful innovation while building a culture rooted in collaboration, integrity, and impact. We envision a future where our work not only advances science but also creates lasting value for people and communities. By aligning our goals with a strong sense of purpose, we strive to deliver excellence while fostering growth, inclusivity, and positive change.
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
                                <p className="text-white/80 text-[15px] max-w-md">We foster a collaborative environment where strong relationships empower innovation, trust, and collective success.</p>
                            </div>
                        </div>

                        {/* Modern Spaces */}
                        <div className="h-[400px] md:h-[500px] relative overflow-hidden rounded-br-[4px] rounded-tl-[4px] rounded-bl-[2rem] rounded-tr-[2rem] group shadow-xl animate-fade-in-up delay-150">
                            <img alt="Modern spaces"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                src={beyond02} />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent p-10 flex flex-col justify-end">
                                <h4 className="text-white text-[24px] font-bold mb-2">Modern Spaces</h4>
                                <p className="text-white/80 text-[15px]">Our thoughtfully designed workspaces inspire creativity, focus, and seamless collaboration for better outcomes.</p>
                            </div>
                        </div>

                        {/* Giving Back */}
                        <div className="h-[350px] md:h-[400px] relative overflow-hidden rounded-br-[4px] rounded-tl-[4px] rounded-bl-[2rem] rounded-tr-[2rem] group shadow-xl animate-fade-in-up delay-300">
                            <img alt="Giving back"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                src={beyond04} />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent p-8 flex flex-col justify-end">
                                <h4 className="text-white text-[22px] font-bold mb-2">Giving Back</h4>
                                <p className="text-white/80 text-[14px]">We are committed to making a positive impact by supporting communities and contributing to meaningful social initiatives.</p>
                            </div>
                        </div>

                        {/* Inclusive Culture */}
                        <div className="md:col-span-2 h-[350px] md:h-[400px] relative overflow-hidden rounded-br-[4px] rounded-tl-[4px] rounded-bl-[2rem] rounded-tr-[2rem] group shadow-xl animate-fade-in-up delay-450">
                            <img alt="Inclusive culture"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                src={beyond05} />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent p-10 flex flex-col justify-end">
                                <h4 className="text-white text-[24px] font-bold mb-2">Inclusive Culture</h4>
                                <p className="text-white/80 text-[15px] max-w-md">We celebrate diversity and create an inclusive environment where every voice is valued and innovation thrives.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="bg-[#f0f9ff] section-pad overflow-hidden">
                <div className="site-shell">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
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

                        <div className="lg:w-1/2 space-y-12 md:space-y-16 animate-fade-in-up">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#83C24D]">
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
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#83C24D]">
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



                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-white section-pad">
                <div className="site-shell">
                    <div className="bg-[#1193f2] rounded-[1.5rem] md:rounded-[2.5rem] p-8 md:p-16 lg:px-20 lg:py-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 animate-fade-in-up">

                        {/* Text & Primary Actions */}
                        <div className="max-w-2xl relative z-10 text-center md:text-left">
                            <h2 className="text-white text-[26px] sm:text-[32px] md:text-[44px] font-bold leading-tight mb-8 md:mb-10">
                                Ready to integrate clinical precision into your research?
                            </h2>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                <Link to="/contact" className="btn btn-primary py-3 md:py-3.5 px-8 w-full sm:w-auto text-center">
                                    Partner With Us
                                </Link>
                            </div>
                        </div>

                        {/* Decorative Organic Shape */}
                        <div className="relative w-64 h-64 opacity-20 hidden lg:block">
                            <div className="absolute inset-x-0 bottom-0 top-0 bg-white/20 blur-3xl rounded-full scale-150"></div>
                            <svg className="w-full h-full text-white fill-current animate-pulse duration-[6000ms]" viewBox="0 0 200 200">
                                <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C86.9,14.5,81.2,29,72.6,41.4C64,53.8,52.5,64.1,39.1,71.1C25.7,78.1,10.3,81.8,-5.5,81.8C-21.3,81.8,-37.6,78.1,-51,69.5C-64.4,60.9,-75,47.4,-81.2,32.3C-87.4,17.3,-89.2,0.6,-86.6,-14.9C-84,-30.4,-77,-44.6,-66,-53.8C-55,-63.1,-40,-67.3,-26.7,-74.9C-13.4,-82.5,-1.9,-93.5,12.5,-91.3C26.9,-89,45.7,-73.4,44.7,-76.4Z" transform="translate(100 100)" />
                            </svg>
                        </div>

                        {/* Top-Right Glow */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                    </div>
                </div>
            </section>

            <Contact />
        </>
    );
}
