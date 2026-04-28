import { Link } from 'react-router-dom';
import neuropathyHero from '../../assets/image/neuropathyHero.png';
import neuropathyProducts from '../../assets/image/neuropathyProducts.png';
import ADINOCAP from '../../assets/image/ADINOCAP.png';
import PALMIPAX from '../../assets/image/PALMIPAX.png';
import MAGNICAP from '../../assets/image/MAGNICAP.png';
import MAGNICAP_GOLD from '../../assets/image/MAGNICAP GOLD.png';
import NAXRION_D from '../../assets/image/NAXRION D.png';
import FLUPEXA from '../../assets/image/FLUPEXA.png';
import BENFOCAP from '../../assets/image/BENFOCAP.png';
import COGNIPAX from '../../assets/image/COGNIPAX.png';
import COBAPAX from '../../assets/image/COBAPAX.png';
import Contact from '../../components/common/Contact';

import ScrollIndicator from '../../components/common/ScrollIndicator';

export default function Neuropathy() {
    return (
        <>
            {/* Neuropathy Hero Section */}
            <section className="relative w-full h-[500px] md:h-[650px] overflow-hidden flex items-center">
                <img
                    src={neuropathyHero}
                    alt="Neuropathy Hero"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <div className="site-shell text-center px-6">
                        <div className="inline-flex items-center gap-3 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 md:mb-8 animate-fade-in-down mx-auto">
                            <span className="w-2 h-2 rounded-full bg-[#83C24D] animate-ping"></span>
                            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/90">Therapy Focus</span>
                        </div>
                        <h1 className="text-[32px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-bold text-white leading-tight mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-[#83C24D]">Neurology Care Solutions</span>
                        </h1>
                        <p className="text-[16px] sm:text-[22px] md:text-[24px] font-semibold text-white mb-4 max-w-4xl mx-auto leading-snug">
                            Targeted treatments for neurological and nerve-related disorders.
                        </p>
                        <p className="text-[14px] sm:text-[17px] text-white/80 max-w-3xl mx-auto leading-relaxed hidden sm:block">
                            Our neurology range is designed to support effective management of neuropathic pain and central nervous system conditions, ensuring consistent and reliable patient outcomes.
                        </p>
                    </div>
                </div>

                <ScrollIndicator />
            </section>

            {/* Strategy Section */}
            <section className="bg-[#f0f9ff] section-pad">
                <div className="site-shell">
                    <div className="sm:max-w-4xl mx-auto text-center">
                        <h2 className="heading-primary mb-10">
                            Focused Approach to Neurological Care
                        </h2>

                        <div className="space-y-6 text-[15px] md:text-[17px] text-slate-700 leading-relaxed font-normal">
                            <p>
                                Neurological disorders, particularly neuropathy and nerve-related conditions, are becoming increasingly prevalent across global and emerging healthcare markets. Conditions such as diabetic neuropathy, peripheral nerve disorders, and chronic nerve pain are now affecting a growing patient population.
                            </p>

                            <p>
                                This rise is driven by factors including increasing cases of diabetes, sedentary lifestyles, nutritional deficiencies, and aging demographics. As a result, symptoms like numbness, tingling, burning sensations, and persistent discomfort are significantly impacting daily life and mobility.
                            </p>

                            <p className="hidden md:block">
                                In countries like India, many neurological conditions remain underdiagnosed or inadequately managed, especially those linked to metabolic disorders and vitamin deficiencies. This creates a growing need for effective, accessible, and well-formulated treatment options.
                            </p>

                            <p>
                                Addressing this evolving challenge requires a focused approach—combining clinical understanding with advanced formulations to support nerve health, manage symptoms effectively, and improve overall patient outcomes.
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
                                ADVANCED NEUROLOGY CARE
                            </span>
                            <h2 className="text-[36px] sm:text-[48px] md:text-[72px] font-bold leading-[1.1] mb-6 md:mb-8">
                                Therapeutic <br className="hidden sm:block" />
                                <span className="text-[#1193f2]">Excellence.</span>
                            </h2>

                            <p className="text-[15px] md:text-[17px] text-slate-600 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                                Modern lifestyles, increasing stress levels, and conditions such as diabetes are contributing to a rise in neurological disorders and nerve-related complications. Early diagnosis and targeted treatment play a vital role.
                            </p>

                            <div className="mb-10 text-left inline-block lg:block">
                                <p className="text-slate-900 font-bold mb-4">Our neurology-focused solutions are designed to:</p>
                                <ul className="space-y-3">
                                    {[
                                        'Support nerve health and regeneration',
                                        'Manage neuropathic pain effectively',
                                        'Improve nerve function and signal transmission',
                                        'Enhance overall neurological well-being'
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
                                    alt="Caprion Neuropathy Products Portfolio"
                                    className="w-full h-auto max-w-[320px] sm:max-w-[500px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Advanced Neuropathy Solutions Section */}
            <section className="bg-[#f8fcff] section-pad">
                <div className="site-shell mx-auto max-w-7xl">
                    <div className="container-custom mb-12 md:mb-16 text-center">
                        <h2 className="heading-primary">
                            Advanced Neuropathy Solutions
                        </h2>
                        <p className="text-slate-600 text-[15px] md:text-[18px] max-w-2xl mx-auto leading-relaxed">
                            Our portfolio represents the forefront of neuropathy care, combining scientific innovation
                            with effective formulations to restore nerve function and improve patient well-being.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                        {[
                            {
                                name: 'ADINOCAP',
                                category: 'NUTRITIONAL SUPPLEMENT',
                                description: 'A nutritional supplement that supports energy production, enhances metabolic function, and helps maintain overall vitality and well-being.',
                                image: ADINOCAP,
                                badgeColor: 'bg-[#EBF5FB] text-[#2980B9]'
                            },
                            {
                                name: 'PALMIPAX',
                                category: 'NERVE SUPPORT',
                                description: 'A nerve-support formulation that helps improve nerve function, reduce neuropathic discomfort, and support overall neurological health.',
                                image: PALMIPAX,
                                badgeColor: 'bg-[#F4F9F0] text-[#71BC3D]'
                            },
                            {
                                name: 'MAGNICAP',
                                category: 'MUSCLE & ELECTROLYTE',
                                description: 'A magnesium-rich supplement that supports muscle function, relieves cramps, and helps maintain electrolyte balance.',
                                image: MAGNICAP,
                                badgeColor: 'bg-[#E9F7EF] text-[#27AE60]'
                            },
                            {
                                name: 'MAGNICAP GOLD',
                                category: 'ENHANCED FORMULATION',
                                description: 'An enhanced magnesium formulation with added nutrients to support muscle strength, nerve function, and overall vitality.',
                                image: MAGNICAP_GOLD,
                                badgeColor: 'bg-[#FEF9E7] text-[#F39C12]'
                            },
                            {
                                name: 'NAXRION D',
                                category: 'NON-STEROIDAL ANTI-INFLAMMATORY DRUG (NSAID)',
                                description: 'Non-steroidal anti-inflammatory drug (NSAID) that relieves pain in Migraine, muscle aches, and dental pain, and offers excellent therapy for rheumatoid conditions.',
                                image: NAXRION_D,
                                badgeColor: 'bg-[#FDEDEC] text-[#C0392B]'
                            },
                            {
                                name: 'FLUPEXA',
                                category: 'ANTIPSYCHOTIC AND ANXIOLYTIC',
                                description: 'Antipsychotic and anxiolytic drug, effective for somatoform disorders, irritable bowel syndrome (IBS), and psychosomatic disorders. It is also effective in the management of both primary and secondary symptoms of psychotic disorders.',
                                image: FLUPEXA,
                                badgeColor: 'bg-[#F4F4F4] text-[#7F8C8D]'
                            },
                            {
                                name: 'BENFOCAP',
                                category: 'DIABETIC NEUROPATHY',
                                description: 'A benfotiamine-based supplement that supports nerve health, improves glucose metabolism, and helps manage diabetic neuropathy.',
                                image: BENFOCAP,
                                badgeColor: 'bg-[#EBF5FB] text-[#2980B9]'
                            },
                            {
                                name: 'COGNIPAX',
                                category: 'COGNITIVE SUPPORT',
                                description: 'A cognitive support formulation that enhances memory, improves focus, and supports overall brain function.',
                                image: COGNIPAX,
                                badgeColor: 'bg-[#F5EEF8] text-[#8E44AD]'
                            },
                            {
                                name: 'COBAPAX',
                                category: 'VITAMIN B12 THERAPY',
                                description: 'A vitamin B12-based formulation that supports red blood cell formation, nerve health, and helps correct nutritional deficiencies.',
                                image: COBAPAX,
                                badgeColor: 'bg-[#FDEDEC] text-[#C0392B]'
                            }
                        ].map((product, index) => (
                            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 group">
                                 <div className="h-64 sm:h-80 overflow-hidden bg-slate-50 flex items-center justify-center p-4">
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

