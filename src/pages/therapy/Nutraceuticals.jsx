import { Link } from 'react-router-dom';
import neuropathyHero from '../../assets/image/antiInfectiveHero.png';
import Infectious from '../../assets/image/Infectious.png';
import merocapS from '../../assets/image/MEROCAP S.png';
import tazocap from '../../assets/image/TAZOCAP.png';
import farocap from '../../assets/image/FAROCAP.png';
import farocapCv from '../../assets/image/FAROCAP CV.png';
import Contact from '../../components/common/Contact';

import ScrollIndicator from '../../components/common/ScrollIndicator';

export default function Nutraceuticals() {
    return (
        <>
            {/* Nutraceuticals Hero Section */}
            <section className="relative w-full h-[500px] md:h-[650px] overflow-hidden flex items-center">
                <img
                    src={neuropathyHero}
                    alt="Nutraceuticals Hero"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="site-shell text-center px-6">
                        <div className="inline-flex items-center gap-3 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 md:mb-8 animate-fade-in-down mx-auto">
                            <span className="w-2 h-2 rounded-full bg-[#83C24D] animate-ping"></span>
                            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/90">Therapy Focus</span>
                        </div>
                        
                        <p className="text-[16px] sm:text-[20px] md:text-[24px] font-semibold text-brand-300 mb-4 animate-fade-in-up leading-snug">
                            Effective therapies to combat infections with precision and reliability.
                        </p>

                        <h1 className="text-[32px] sm:text-[56px] md:text-[68px] lg:text-[80px] font-bold text-white uppercase leading-[1.1] mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-brand-300">
                                Anti-Infective
                            </span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-[#83C24D]">
                                Solutions
                            </span>
                        </h1>

                        <p className="text-[14px] sm:text-[17px] md:text-[19px] text-white/80 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                            Our anti-infective range is designed to address bacterial, viral, and fungal infections with high-quality formulations that ensure effective treatment and improved patient outcomes.
                        </p>
                    </div>
                </div>

                <ScrollIndicator />
            </section>

            {/* Strategy Section */}
            <section className="bg-[#f0f9ff] section-pad">
                <div className="site-shell">
                    <div className="sm:max-w-4xl mx-auto text-center">
                        <h2 className="heading-primary !mb-8 md:!mb-12">
                            Focused Approach to Infection Management
                        </h2>

                        <div className="space-y-6 text-[15px] md:text-[18px] text-slate-700 leading-relaxed font-normal">
                            <p>
                                Infectious diseases continue to be a major healthcare challenge across both developed and emerging markets. Conditions caused by bacteria, viruses, and fungi are increasingly impacting public health, especially in regions with high population density and limited access to early diagnosis.
                            </p>

                            <p>
                                The growing prevalence of infections is driven by factors such as environmental conditions, antimicrobial resistance, poor hygiene, and weakened immunity. As a result, infections ranging from respiratory and skin conditions to systemic illnesses are becoming more frequent and complex to manage.
                            </p>

                            <p className="hidden md:block">
                                In countries like India, delayed diagnosis and inappropriate treatment often lead to complications and prolonged recovery. This highlights the need for effective, targeted, and well-formulated anti-infective therapies.
                            </p>

                            <p>
                                Addressing these challenges requires a focused and responsible approach—combining clinical effectiveness with quality formulations to ensure faster recovery, reduced resistance risks, and better patient outcomes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Therapeutic Excellence Section */}
            <section className="bg-[#f0f9ff] section-pad !pt-0">
                <div className="site-shell">
                    <div className="bg-white rounded-[32px] md:rounded-[80px] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 shadow-sm border border-slate-50">

                        {/* Text Content */}
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <span className="text-[12px] md:text-[16px] font-bold text-[#83C24D] tracking-[0.2em] md:tracking-widest uppercase block mb-4">
                                PRECISION ANTI-INFECTIVE CARE
                            </span>
                            <h2 className="text-[36px] sm:text-[48px] md:text-[72px] font-bold leading-[1.1] mb-6 md:mb-8">
                                Therapeutic <br className="hidden sm:block" />
                                <span className="text-[#1193f2]">Excellence.</span>
                            </h2>

                            <p className="text-[15px] md:text-[17px] text-slate-600 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                                The increasing burden of infectious diseases demands reliable and targeted treatment solutions. Timely intervention and the right choice of therapy play a critical role in controlling infections.
                            </p>

                            <div className="mb-10 text-left inline-block lg:block">
                                <p className="text-slate-900 font-bold mb-4">Our anti-infective solutions are designed to:</p>
                                <ul className="space-y-3">
                                    {[
                                        'Combat a broad spectrum of infections effectively',
                                        'Support faster recovery and symptom relief',
                                        'Reduce the risk of resistance with appropriate formulations',
                                        'Enhance overall treatment outcomes and patient safety'
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center text-slate-600 gap-3 text-sm md:text-[15px]">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#8cc63f] shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link to="/portfolio" className="block sm:inline-block">
                                <button className="btn-primary !rounded-none !rounded-tr-[2rem] !rounded-bl-[2rem] px-10 md:!px-12 py-3.5 md:!py-4 shadow-xl shadow-green-200/50 w-full sm:w-auto">
                                    Explore Portfolio
                                </button>
                            </Link>
                        </div>

                        {/* Image Collage */}
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <div className="relative group">
                                <img
                                    src={Infectious}
                                    alt="Caprion Anti-Infective Products Portfolio"
                                    className="w-full h-auto max-w-[320px] sm:max-w-[500px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Advanced Nutraceutical Solutions Section */}
            <section className="bg-[#f8fcff] section-pad">
                <div className="site-shell px-6 mx-auto max-w-7xl">
                    <div className="container-custom mb-12 md:mb-16 text-center">
                        <h2 className="heading-primary">
                            Advanced Anti-Infective Solutions
                        </h2>
                        <p className="text-slate-600 text-[15px] md:text-[18px] max-w-2xl mx-auto leading-relaxed">
                            Our portfolio combines science-backed ingredients with innovative formulations to deliver effective and reliable wellness solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10">
                        {[
                            {
                                name: 'MEROCAP S',
                                category: 'ANTIBIOTIC',
                                description: 'A broad-spectrum antibiotic formulation that helps treat serious bacterial infections and supports faster recovery.',
                                image: merocapS,
                                badgeColor: 'bg-[#E9F7EF] text-[#27AE60]'
                            },
                            {
                                name: 'TAZOCAP',
                                category: 'ANTIBIOTIC',
                                description: 'A combination antibiotic that enhances antibacterial action, helping combat resistant infections effectively.',
                                image: tazocap,
                                badgeColor: 'bg-[#FDEDEC] text-[#C0392B]'
                            },
                            {
                                name: 'FAROCAP',
                                category: 'ANTIBIOTIC',
                                description: 'An oral antibiotic that helps manage bacterial infections and supports rapid symptom relief.',
                                image: farocap,
                                badgeColor: 'bg-[#E9F7EF] text-[#27AE60]'
                            },
                            {
                                name: 'FAROCAP CV',
                                category: 'ANTIBIOTIC',
                                description: 'An advanced combination antibiotic that boosts efficacy against resistant bacteria and helps treat a wide range of infections.',
                                image: farocapCv,
                                badgeColor: 'bg-[#EBF5FB] text-[#2980B9]'
                            }
                        ].map((product, index) => (
                            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 group">
                                <div className="h-64 sm:h-80 overflow-hidden bg-slate-50 flex items-center justify-center p-6">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-lg font-bold text-[#71BC3D] group-hover:text-[#1193f2] transition-colors">{product.name}</h3>
                                    </div>
                                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed line-clamp-3 md:line-clamp-4">
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Contact />
        </>
    );
}

