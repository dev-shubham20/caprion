import { Link } from 'react-router-dom';
import neuropathyHero from '../../assets/image/painManagement.png';
import neuropathyProducts from '../../assets/image/painManagementProducts.png';
import thiocapF from '../../assets/image/THIOCAP F.png';
import etoklas from '../../assets/image/ETOKLAS.png';
import etoklasTh from '../../assets/image/ETOKLAS TH.png';
import cartipax from '../../assets/image/CARTIPAX.png';
import gabapixGel from '../../assets/image/GABAPIX GEL.png';
import Contact from '../../components/common/Contact';

import ScrollIndicator from '../../components/common/ScrollIndicator';

export default function GeneralWellness() {
    return (
        <>
            {/* General Wellness Hero Section */}
            <section className="relative w-full h-[500px] md:h-[650px] overflow-hidden flex items-center">
                <img
                    src={neuropathyHero}
                    alt="General Wellness Hero"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="site-shell text-center px-6">
                        <div className="inline-flex items-center gap-3 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 md:mb-8 animate-fade-in-down mx-auto">
                            <span className="w-2 h-2 rounded-full bg-[#83C24D] animate-ping"></span>
                            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/90">Therapy Focus</span>
                        </div>
                        
                        <p className="text-[16px] sm:text-[20px] md:text-[24px] font-semibold text-brand-300 mb-4 animate-fade-in-up leading-snug">
                            Effective relief for acute and chronic pain conditions.
                        </p>

                        <h1 className="text-[32px] sm:text-[56px] md:text-[68px] lg:text-[80px] font-bold text-white uppercase leading-[1.1] mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-brand-300">
                                Pain Management
                            </span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-[#83C24D]">
                                Solutions
                            </span>
                        </h1>

                        <p className="text-[14px] sm:text-[17px] md:text-[19px] text-white/80 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200 hidden sm:block">
                            Our pain management range is designed to reduce inflammation, ease discomfort, and improve mobility with reliable formulations that support faster recovery and better quality of life.
                        </p>
                    </div>
                </div>

                <ScrollIndicator />
            </section>

            {/* Strategy Section */}
            <section className="bg-[#f0f9ff] section-pad">
                <div className="site-shell">
                    <div className="sm:max-w-4xl mx-auto text-center px-6">
                        <h2 className="heading-primary !mb-8 md:!mb-12">
                            Focused Approach to Pain Management
                        </h2>

                        <div className="space-y-6 text-[15px] md:text-[18px] text-slate-700 leading-relaxed font-normal">
                            <p>
                                Pain-related conditions are increasingly affecting people across all age groups due to modern lifestyles, physical strain, and chronic health conditions. From joint and muscle pain to inflammation and post-injury discomfort, pain significantly impacts daily activities and overall well-being.
                            </p>

                            <p>
                                The growing prevalence of pain is driven by factors such as sedentary habits, poor posture, aging populations, and rising cases of arthritis and musculoskeletal disorders. Symptoms like stiffness, swelling, and persistent discomfort can reduce mobility and productivity.
                            </p>

                            <p className="hidden md:block">
                                In countries like India, pain is often under-treated or managed with short-term solutions, leading to recurring issues and long-term complications. This highlights the need for effective, safe, and well-balanced pain management approaches.
                            </p>

                            <p>
                                Addressing these challenges requires a focused strategy—combining clinical effectiveness with advanced formulations to provide lasting relief, improve mobility, and enhance overall quality of life.
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
                                PRECISION PAIN MANAGEMENT
                            </span>
                            <h2 className="text-[36px] sm:text-[48px] md:text-[72px] font-bold leading-[1.1] mb-6 md:mb-8">
                                Therapeutic <br className="hidden sm:block" />
                                <span className="text-[#1193f2]">Excellence.</span>
                            </h2>

                            <p className="text-[15px] md:text-[17px] text-slate-600 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                                Managing pain effectively requires the right balance of fast relief and long-term care. With increasing cases of chronic pain and inflammation, targeted treatment is essential for better patient outcomes.
                            </p>

                            <div className="mb-10 text-left inline-block lg:block">
                                <p className="text-slate-900 font-bold mb-4">Our pain management solutions are designed to:</p>
                                <ul className="space-y-3">
                                    {[
                                        'Provide fast and sustained relief from pain',
                                        'Reduce inflammation and swelling',
                                        'Improve mobility and physical function',
                                        'Support overall recovery and comfort'
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
                                    src={neuropathyProducts}
                                    alt="Caprion Wellness Products Portfolio"
                                    className="w-full h-auto max-w-[320px] sm:max-w-[500px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Advanced Wellness Solutions Section */}
            <section className="bg-[#f8fcff] section-pad">
                <div className="site-shell px-6 mx-auto max-w-7xl">
                    <div className="container-custom mb-12 md:mb-16 text-center">
                        <h2 className="heading-primary !mb-4">
                            Advanced Wellness Solutions
                        </h2>
                        <p className="text-slate-600 text-[15px] md:text-[18px] max-w-2xl mx-auto leading-relaxed">
                            Our portfolio combines carefully selected ingredients with modern formulations to support everyday health and long-term well-being.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10">
                        {[
                            {
                                name: 'THIOCAP F',
                                category: 'PAIN CARE',
                                description: 'A combination formulation that helps relieve neuropathic pain, reduces inflammation, and supports nerve health.',
                                image: thiocapF,
                                badgeColor: 'bg-[#E9F7EF] text-[#27AE60]'
                            },
                            {
                                name: 'ETOKLAS',
                                category: 'PAIN CARE',
                                description: 'A potent anti-inflammatory that helps reduce pain, swelling, and stiffness in musculoskeletal conditions.',
                                image: etoklas,
                                badgeColor: 'bg-[#FDEDEC] text-[#C0392B]'
                            },
                            {
                                name: 'ETOKLAS TH',
                                category: 'PAIN CARE',
                                description: 'A combination therapy that provides enhanced pain relief by reducing inflammation and relieving muscle spasm.',
                                image: cartipax,
                                badgeColor: 'bg-[#E9F7EF] text-[#27AE60]'
                            },
                            {
                                name: 'CARTIPAX',
                                category: 'JOINT CARE',
                                description: 'A joint-support formulation that helps improve cartilage health, reduce stiffness, and enhance mobility.',
                                image: etoklasTh,
                                badgeColor: 'bg-[#EBF5FB] text-[#2980B9]'
                            },
                            {
                                name: 'GABAPIX GEL',
                                category: 'TOPICAL PAIN',
                                description: 'A topical formulation that helps relieve localized nerve pain, reduces discomfort, and provides soothing relief.',
                                image: gabapixGel,
                                badgeColor: 'bg-[#F4F9F0] text-[#71BC3D]'
                            }
                        ].map((product, index) => (
                            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 group flex flex-col">
                                <div className="h-64 sm:h-80 overflow-hidden bg-slate-50 flex items-center justify-center p-6">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-5 flex flex-col flex-grow">
                                    <h3 className="text-lg font-bold text-[#71BC3D] mb-2 leading-tight group-hover:text-[#1193f2] transition-colors">{product.name}</h3>
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

