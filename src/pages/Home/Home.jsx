import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import heroVideo from '../../assets/image/Hero section.mp4';
import neurologyVideo from '../../assets/image/Brain Neurology.mp4';
import antiInfectiveVideo from '../../assets/image/Anti-infective.mp4';
import painVideo from '../../assets/image/painManagement.mp4';
import inspiredIcon from '../../assets/image/Inspired.png';
import drivenIcon from '../../assets/image/Driven.png';
import guidedIcon from '../../assets/image/Guided.png';
import focusedIcon from '../../assets/image/Focused.png';
import gastroIcon from '../../assets/image/Neuropsychiatry.png';
import neuroIcon from '../../assets/image/Gastroenterology.png';
import criticalIcon from '../../assets/image/Anti-infectiveHome.png';
import painIcon from '../../assets/image/PAIN MANAGEMENTHome.png';
import integrityIcon from '../../assets/image/image 24.png';
import patientIcon from '../../assets/image/image 26.png';
import qualityIcon from '../../assets/image/image 27.png';
import valueIcon from '../../assets/image/image 25.png';
import Contact from '../../components/common/Contact';

import AboutSec from '../../components/common/AboutSec';
import ScrollIndicator from '../../components/common/ScrollIndicator';
import ceoPortrait from '../../assets/image/ceo_portrait.png';


export default function Home() {
    return (
        <>

            {/* hero section */}
            <section className="relative group">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation, EffectFade]}
                    effect="fade"
                    autoplay={{ delay: 6000, disableOnInteraction: false }}
                    speed={1200}
                    loop={true}
                    pagination={{
                        clickable: true,
                        el: '.pagination-container',
                        bulletClass: 'hero-dot cursor-pointer',
                        bulletActiveClass: 'is-active',
                        renderBullet: function (index, className) {
                            return '<button type="button" class="' + className + '" aria-label="Slide ' + (index + 1) + '"></button>';
                        },
                    }}
                    navigation={{
                        nextEl: '.hero-arrow--right',
                        prevEl: '.hero-arrow--left',
                    }}
                    className="hero-panel hero-slider h-[450px] sm:h-[500px] md:h-[600px] lg:h-[700px]"
                >
                    {/* Slide 1 */}
                    <SwiperSlide className="relative overflow-hidden">
                        <video
                            className="absolute inset-0 h-full w-full object-cover rotate-y-180"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src={heroVideo} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-black/50"></div>

                        <div className="relative z-10 h-full site-shell">
                            <div className="flex flex-col justify-center h-full max-w-3xl px-6 md:pl-24">
                                <div className="w-fit inline-flex items-center gap-3 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-4 md:mb-6 animate-fade-in-down">
                                    <span className="w-2 h-2 rounded-full bg-[#83C24D] animate-ping"></span>
                                    <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/90">Advanced Gastro Care Solutions</span>
                                </div>
                                <h1 className="mt-2 md:mt-4 text-[28px] sm:text-[40px] md:text-[60px] font-bold leading-[1.2] md:leading-[1.1] text-white">
                                    Effective solutions for<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-[#83C24D]">
                                        acidity, GERD, and digestive health.
                                    </span>
                                </h1>
                                <p className="mt-4 md:mt-8 text-[14px] md:text-[18px] font-medium leading-relaxed text-white/80 md:text-white/90 max-w-xl">
                                    Delivering high-quality gastroenterology medicines that support better digestion, faster relief, and long-term gut health.
                                </p>
                                <div className="mt-6 md:mt-10">
                                    <Link to="/gastroenterology" className="btn-primary !px-8 md:!px-10">View Portfolio</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 2 */}
                    <SwiperSlide className="relative overflow-hidden">
                        <video
                            className="absolute inset-0 h-full w-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src={neurologyVideo} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-black/50"></div>

                        <div className="relative z-10 h-full site-shell">
                            <div className="flex flex-col justify-center h-full max-w-3xl px-6 md:pl-24">
                                <div className="w-fit inline-flex items-center gap-3 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-4 md:mb-6 animate-fade-in-down">
                                    <span className="w-2 h-2 rounded-full bg-[#83C24D] animate-ping"></span>
                                    <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/90">Advanced Neurology Care Solutions</span>
                                </div>
                                <h2 className="mt-2 md:mt-4 text-[28px] sm:text-[40px] md:text-[60px] font-bold leading-[1.2] md:leading-[1.1] text-white">
                                    Targeted treatments  <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-[#83C24D]">
                                       for nerve and neurological disorders.
                                    </span>
                                </h2>
                                <p className="mt-4 md:mt-8 text-[14px] md:text-[18px] font-medium leading-relaxed text-white/80 md:text-white/90 max-w-xl">
                                    Our neurology range addresses conditions like neuropathic pain, epilepsy, migraines, and CNS disorders with clinically effective formulations.
                                </p>
                                <div className="mt-6 md:mt-10">
                                    <Link to="/neuropathy" className="btn-primary !px-8 md:!px-10">View Portfolio</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 3 */}
                    <SwiperSlide className="relative overflow-hidden">
                        <video
                            className="absolute inset-0 h-full w-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src={antiInfectiveVideo} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-black/50"></div>

                        <div className="relative z-10 h-full site-shell">
                            <div className="flex flex-col justify-center h-full max-w-3xl px-6 md:pl-24">
                                <div className="w-fit inline-flex items-center gap-3 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-4 md:mb-6 animate-fade-in-down">
                                    <span className="w-2 h-2 rounded-full bg-[#83C24D] animate-ping"></span>
                                    <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/90">Powerful Anti-infective Solutions</span>
                                </div>
                                <h2 className="mt-2 md:mt-4 text-[28px] sm:text-[40px] md:text-[60px] font-bold leading-[1.2] md:leading-[1.1] text-white">
                                    Reliable therapies to fight bacterial,  <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-[#83C24D]">
                                       viral, and fungal infections
                                    </span>
                                </h2>
                                <p className="mt-4 md:mt-8 text-[14px] md:text-[18px] font-medium leading-relaxed text-white/80 md:text-white/90 max-w-xl">
                                    Our Anti-infective range is designed with advanced formulations to deliver fast action and reliable outcomes.
                                </p>
                                <div className="mt-6 md:mt-10">
                                    <Link to="/Anti-infective" className="btn-primary !px-8 md:!px-10">View Portfolio</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 4 */}
                    <SwiperSlide className="relative overflow-hidden">
                        <video
                            className="absolute inset-0 h-full w-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src={painVideo} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-black/50"></div>

                        <div className="relative z-10 h-full site-shell">
                            <div className="flex flex-col justify-center h-full max-w-3xl px-6 md:pl-24">
                                <div className="w-fit inline-flex items-center gap-3 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-4 md:mb-6 animate-fade-in-down">
                                    <span className="w-2 h-2 rounded-full bg-[#83C24D] animate-ping"></span>
                                    <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/90">Effective Pain Management Solutions</span>
                                </div>
                                <h2 className="mt-2 md:mt-4 text-[28px] sm:text-[40px] md:text-[60px] font-bold leading-[1.2] md:leading-[1.1] text-white">
                                    Advanced relief for acute  <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-[#83C24D]">
                                       and chronic pain conditions.
                                    </span>
                                </h2>
                                <p className="mt-4 md:mt-8 text-[14px] md:text-[18px] font-medium leading-relaxed text-white/80 md:text-white/90 max-w-xl">
                                    Designed to reduce inflammation, ease discomfort, and restore mobility for better quality of life.
                                </p>
                                <div className="mt-6 md:mt-10">
                                    <Link to="/pain-management" className="btn-primary !px-8 md:!px-10">View Portfolio</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>

                <button
                    type="button"
                    className="hero-arrow hero-arrow--left !absolute top-1/2 -translate-y-1/2 !z-30 cursor-pointer hidden md:flex"
                    aria-label="Previous slide"
                >
                    <svg viewBox="0 0 20 20" className="h-5 w-5 fill-current" aria-hidden="true">
                        <path d="m12.8 4.8-1.1-1.1L5.4 10l6.3 6.3 1.1-1.1L7.6 10l5.2-5.2Z" />
                    </svg>
                </button>
                <button
                    type="button"
                    className="hero-arrow hero-arrow--right !absolute top-1/2 -translate-y-1/2 !z-30 cursor-pointer hidden md:flex"
                    aria-label="Next slide"
                >
                    <svg viewBox="0 0 20 20" className="h-5 w-5 fill-current" aria-hidden="true">
                        <path d="m7.2 15.2 1.1 1.1 6.3-6.3-6.3-6.3-1.1 1.1 5.2 5.2-5.2 5.2Z" />
                    </svg>
                </button>
                <div className="hero-dots !absolute !left-0 !right-0 !bottom-4 sm:!bottom-10 !z-30 !flex !justify-center !items-center !gap-3 !pointer-events-none">
                    <div className="pagination-container !pointer-events-auto flex gap-2 !w-fit !left-1/2 !-translate-x-1/2 absolute">
                        {/* Swiper injects here */}
                    </div>
                </div>

                <ScrollIndicator />
            </section>
            {/* hero section end */}

            <AboutSec />

            {/* quote section start */}
            <div
                className="relative rounded-tr-[50px] md:rounded-tr-[100px] rounded-bl-[50px] md:rounded-bl-[100px] bg-[linear-gradient(135deg,#1193f2,#0a5ca3)] px-6 py-12 md:py-20 lg:py-24 text-center text-white shadow-[0_18px_60px_rgba(10,92,163,0.15)] md:px-12 before:absolute before:left-0 before:-top-9.5 before:h-[60px] before:w-[60px] before:bg-[#1091EF] before:content-[''] before:[clip-path:path('M0_41.86_L0_0_C0_23.12_43.43_41.86_97_41.86_Z')] hidden md:block after:absolute after:right-0 after:-bottom-[37.2px] after:h-[60px] after:w-[60px] after:bg-[#085EA5] after:content-[''] after:[clip-path:path('M0_41.86_L0_0_C0_23.12_43.43_41.86_97_41.86_Z')] after:rotate-180">
                <p className="mx-auto max-w-5xl text-[16px] sm:text-[20px] md:text-[26px] font-medium leading-loose">
                    "Our Strength Lies in Building Enduring Partnerships That Drive Better Healthcare Outcomes."
                </p>
            </div>
            {/* Mobile Quote Version (No Clip Path) */}
            <div className="md:hidden bg-gradient-to-br from-[#1193f2] to-[#0a5ca3] px-6 py-12 text-center text-white rounded-2xl mx-4">
                <p className="text-[18px] font-medium leading-relaxed italic">
                    "Our Strength Lies in Building Enduring Partnerships That Drive Better Healthcare Outcomes."
                </p>
            </div>
            {/* quote section end */}

            {/* way forward section start */}
            <section className="bg-white">
                <div className="section-pad rounded-none shadow-none">
                    <div className="container-custom px-4">
                        <h2 className="heading-primary">
                            The Way Forward
                        </h2>
                        <p className="mx-auto mt-4 md:mt-6 max-w-4xl text-[15px] md:text-[18px] font-normal leading-7 md:leading-8 text-slate-700 md:text-slate-950">
                            Our goal is to build strong engagement with the medical fraternity
                            and identify critical healthcare challenges to enable better
                            patient outcomes.
                        </p>
                    </div>

                    <div className="mx-auto mt-10 md:mt-14 grid max-w-5xl gap-6 md:gap-8 px-4 grid-cols-1 md:grid-cols-2">
                        {[
                            { icon: inspiredIcon, title: "Inspired By Care", desc: "We put patient needs at the center of everything we do. Our commitment begins with compassion and ends with better health outcomes." },
                            { icon: drivenIcon, title: "Driven By Science", desc: "Our solutions are backed by research, innovation, and clinical expertise. We rely on evidence to deliver safe and effective healthcare." },
                            { icon: guidedIcon, title: "Guided By Integrity", desc: "We uphold the highest standards of ethics, transparency, and trust. Every decision is made with responsibility and accountability." },
                            { icon: focusedIcon, title: "Focused On Well-Being", desc: "We strive to improve quality of life through accessible and reliable care. Our focus remains on delivering lasting health and wellness." }
                        ].map((item, idx) => (
                            <article key={idx} className="group relative [perspective:1200px] mx-auto w-full max-w-md h-[180px] md:h-[208px]">
                                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer">
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-8 text-center bg-[#dff3ff] rounded-[20px] rounded-tr-[60px] md:rounded-tr-[100px] [backface-visibility:hidden] border border-blue-50">
                                        <img src={item.icon} alt={item.title} className="size-12 md:size-16 object-contain" />
                                        <h3 className="mt-4 text-[16px] md:text-[22px] font-bold text-[#1193f2]">{item.title}</h3>
                                    </div>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-8 text-center bg-[#dff3ff] rounded-[20px] rounded-tr-[60px] md:rounded-tr-[100px] [backface-visibility:hidden] [transform:rotateY(180deg)] border border-blue-100 shadow-inner">
                                        <h3 className="text-xs md:text-[14px] font-bold text-[#1193f2] uppercase tracking-widest">{item.title}</h3>
                                        <p className="mt-3 text-[12px] md:text-[14px] leading-relaxed text-slate-700 font-medium">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            {/* way forward section end */}

            {/* therapy focus section start */}
            <section id="focus">
                <div className="section-pad rounded-none shadow-none bg-[#f4fbff]">
                    <div className="container-custom px-4">
                        <h2 className="heading-primary">
                            Therapy Focus
                        </h2>
                        <p className="mx-auto mt-4 md:mt-6 max-w-4xl text-[15px] md:text-[18px] font-normal leading-7 md:leading-8 text-slate-600">
                            We deliver targeted pharmaceutical solutions across key therapeutic areas, combining quality, innovation, and reliability.
                        </p>
                    </div>

                    <div className="mx-auto site-shell mt-10 md:mt-12 grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4">
                        {[
                            { img: neuroIcon, title: "GASTROENTEROLOGY", desc: "Focused on improving digestive health with effective solutions for acidity, GERD, and gastrointestinal disorders.", link: "/gastroenterology" },
                            { img: gastroIcon, title: "NEUROLOGY", desc: "Providing reliable treatments for neurological conditions, including neuropathic pain and CNS disorders.", link: "/neuropathy" },
                            { img: criticalIcon, title: "Anti-infective", desc: "Delivering broad-spectrum solutions to combat bacterial, viral, and fungal infections with precision.", link: "/Anti-infective" },
                            { img: painIcon, title: "PAIN MANAGEMENT", desc: "Designed to relieve acute and chronic pain through advanced formulations that restore mobility.", link: "/pain-management" }
                        ].map((therapy, idx) => (
                            <Link to={therapy.link} key={idx} className="soft-card block group hover:-translate-y-2 transition-all duration-300">
                                <div className="h-48 md:h-56 overflow-hidden rounded-2xl">
                                    <img src={therapy.img} alt={therapy.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="px-5 py-6">
                                    <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-[#1193f2] transition-colors">{therapy.title}</h3>
                                    <p className="mt-3 text-[13px] md:text-sm leading-6 text-slate-600">
                                        {therapy.desc}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            {/* therapy focus section end */}

            {/* core values section start */}
            <section className="w-full">
                <div className="stats-grid rounded-tr-[50px] md:rounded-tr-[100px] rounded-bl-[50px] md:rounded-bl-[100px] grid grid-cols-2 lg:grid-cols-4 gap-4 px-4">
                    {[
                        { img: integrityIcon, title: "Built On Integrity" },
                        { img: patientIcon, title: "Patient-First Mindset" },
                        { img: qualityIcon, title: "Driven By Quality" },
                        { img: valueIcon, title: "Focused On Value" }
                    ].map((val, idx) => (
                        <article key={idx} className="stats-tile py-8 md:py-12 border-slate-200/10">
                            <div className="mb-2 flex justify-center">
                                <img src={val.img} alt={val.title} className="h-[50px] md:h-[80px] w-auto object-contain brightness-0 invert" />
                            </div>
                            <h3 className="mt-4 md:mt-5 text-[12px] md:text-[16px] font-bold uppercase tracking-wider text-white/90">{val.title}</h3>
                        </article>
                    ))}
                </div>
            </section>
            {/* core values section end */}

            {/* Leadership Spotlight Section */}
            <section className="section-pad relative overflow-hidden bg-[#fafafa]">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-blue-50 to-transparent opacity-60 blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-green-50 to-transparent opacity-60 blur-3xl pointer-events-none"></div>
                
                <div className="site-shell relative z-10 px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center gap-4 md:gap-6 mb-10 md:mb-12 animate-fade-in justify-center">
                            <span className="h-[1px] w-8 md:w-12 bg-slate-200"></span>
                            <span className="heading-primary !text-[24px] md:!text-[36px]">
                                From Director’s Desk
                            </span>
                            <span className="h-[1px] w-8 md:w-12 bg-slate-200"></span>
                        </div>

                        <div className="relative text-center mb-12 md:mb-16 px-2 md:px-12">
                            <div className="absolute -top-8 md:-top-10 left-1/2 -translate-x-1/2 text-[80px] md:text-[120px] font-serif text-slate-100 select-none pointer-events-none leading-none opacity-80">
                                &ldquo;
                            </div>
                            
                            <h2 className="text-[17px] sm:text-[22px] md:text-[28px] font-medium text-slate-900 leading-relaxed md:leading-[1.5] relative z-10 italic tracking-tight">
                                With over two decades of transformative leadership, we have steered <span className="text-[#1193f2] not-italic font-extrabold">Caprion Pharma</span> toward becoming a beacon of quality and patient-centric innovation. Our vision is rooted in building sustainable healthcare solutions that resonate with excellence and accessibility globally.
                            </h2>
                        </div>

                        <div className="text-center mb-16 md:mb-20 animate-fade-in-up">
                            <div className="inline-block relative">
                                <h3 className="text-[24px] md:text-[34px] font-bold text-slate-900 mb-1 md:mb-2 tracking-tight">
                                    Mr. Mohit
                                </h3>
                                <div className="h-1 w-8 md:w-10 bg-[#8cc63f] mx-auto rounded-full mb-3 md:mb-4"></div>
                            </div>
                            <p className="text-slate-400 font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase text-[9px] md:text-[11px]">
                                Managing Director & Founder
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-4 border-t border-slate-100 pt-12 md:pt-16">
                            {[
                                { val: "20+", label: "Years of Vision", color: "hover:text-[#1193f2]" },
                                { val: "Global", label: "Network Reach", color: "hover:text-[#8cc63f]" },
                                { val: "100%", label: "Quality Driven", color: "hover:text-[#1193f2]" }
                            ].map((stat, i) => (
                                <div key={i} className="text-center sm:px-6 md:px-8 border-b sm:border-b-0 sm:border-r border-slate-100 pb-8 sm:pb-0 last:border-0 group">
                                    <div className={`text-[32px] md:text-[36px] lg:text-[42px] font-black text-slate-900 mb-1 md:mb-2 leading-none transition-colors duration-300 ${stat.color}`}>{stat.val}</div>
                                    <div className="text-slate-400 text-[10px] md:text-[12px] font-bold uppercase tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Contact />
        </>
    );
}