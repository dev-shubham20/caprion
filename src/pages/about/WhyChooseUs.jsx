import scientistHero from '../../assets/image/scientist-hero.png';
import why01 from '../../assets/image/why01.png';
import why02 from '../../assets/image/why02.png';
import why03 from '../../assets/image/why03.png';
import why04 from '../../assets/image/why04.png';
import Contact from '../../components/common/Contact';


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
                        <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-10 border border-slate-50 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 group animate-fade-in-up">
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#F0F7FF] rounded-2xl flex items-center justify-center mb-8 md:mb-10 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                                <img src={why01} alt="Quality" className="w-6 h-6 object-contain" />
                            </div>
                            <h3 className="text-[20px] md:text-[22px] font-bold text-slate-900 mb-4 md:mb-6 leading-tight">Uncompromising <br className="hidden md:block"/> Quality</h3>
                            <p className="text-slate-500 leading-relaxed mb-8 md:mb-10 text-sm md:text-[15px]">
                                Our rigorous multi-tier verification process ensures that clinical data maintains the highest integrity from raw collection to final editorial publication.
                            </p>
                            <button className="flex items-center gap-2 text-[12px] md:text-[13px] font-bold text-[#1193f2] tracking-wider uppercase group/btn transition-colors hover:text-[#8cc63f]">
                                Explore Standards
                                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-10 border border-slate-50 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 group animate-fade-in-up delay-100">
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#F4F9F0] rounded-2xl flex items-center justify-center mb-8 md:mb-10 group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                                <img src={why02} alt="Patient Centric" className="w-6 h-6 object-contain" />
                            </div>
                            <h3 className="text-[20px] md:text-[22px] font-bold text-slate-900 mb-4 md:mb-6 leading-tight">Patient-Centric <br className="hidden md:block"/> Approach</h3>
                            <p className="text-slate-500 leading-relaxed mb-8 md:mb-10 text-sm md:text-[15px]">
                                We bridge the gap between complex science and human outcomes, prioritizing accessibility and ethical transparency in every research phase.
                            </p>
                            <button className="flex items-center gap-2 text-[12px] md:text-[13px] font-bold text-[#8cc63f] tracking-wider uppercase group/btn transition-colors hover:text-[#1193f2]">
                                Our Mission
                                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-10 border border-slate-50 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 group animate-fade-in-up delay-200">
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#F0F7FF] rounded-2xl flex items-center justify-center mb-8 md:mb-10 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                                <img src={why03} alt="R&D" className="w-6 h-6 object-contain" />
                            </div>
                            <h3 className="text-[20px] md:text-[22px] font-bold text-slate-900 mb-4 md:mb-6 leading-tight">Innovative <br className="hidden md:block"/> R&D</h3>
                            <p className="text-slate-500 leading-relaxed mb-8 md:mb-10 text-sm md:text-[15px]">
                                Leveraging AI-driven predictive modeling and molecular screening to accelerate the development of next-generation life-saving therapeutics.
                            </p>
                            <button className="flex items-center gap-2 text-[12px] md:text-[13px] font-bold text-[#1193f2] tracking-wider uppercase group/btn transition-colors hover:text-[#8cc63f]">
                                View Pipeline
                                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-10 border border-slate-50 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 group animate-fade-in-up delay-300">
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#F0F7FF] rounded-2xl flex items-center justify-center mb-8 md:mb-10 group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                                <img src={why04} alt="Distribution" className="w-6 h-6 object-contain" />
                            </div>
                            <h3 className="text-[20px] md:text-[22px] font-bold text-slate-900 mb-4 md:mb-6 leading-tight">Global <br className="hidden md:block"/> Distribution</h3>
                            <p className="text-slate-500 leading-relaxed mb-8 md:mb-10 text-sm md:text-[15px]">
                                Seamless logistical integration across six continents ensures that critical medical insights and treatments reach providers exactly when needed.
                            </p>
                            <button className="flex items-center gap-2 text-[12px] md:text-[13px] font-bold text-[#1193f2] tracking-wider uppercase group/btn transition-colors hover:text-[#8cc63f]">
                                Logistics Network
                                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
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
                                <button className="btn btn-primary py-3 md:py-3.5 px-8 w-full sm:w-auto">
                                    Partner With Us
                                </button>
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
