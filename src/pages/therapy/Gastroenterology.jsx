import { Link } from 'react-router-dom';
import alcobestTab from '../../assets/image/ALCOBEST.png';
import gastroHero from '../../assets/image/gastroenterologyHero.png';
import alcobestIv from '../../assets/image/ALCOBEST IV.png';
import esopaxDsr from '../../assets/image/ESOPAX DSR.png';
import esopaxIt from '../../assets/image/ESOPAX IT.png';
import esopaxL from '../../assets/image/ESOPAX L.png';
import esopax40 from '../../assets/image/ESOPAX 40.png';
import esopaxHp from '../../assets/image/ESOPAX HP KIT.png';
import samepax from '../../assets/image/SAMEPAX.png';
import glutazest from '../../assets/image/GLUTAZEST.png';
import urospax from '../../assets/image/UROSPAX.png';
import kiopride from '../../assets/image/KIOPRIDE 75 SR.png';
import pegrion from '../../assets/image/PEGRION SYRUP.png';
import gutrion from '../../assets/image/GUTRION.png';
import prulizest from '../../assets/image/PRULIZEST TAB.png';
import productPlaceholder from '../../assets/image/productPlaceholder.png';
import gastroProducts from '../../assets/image/gastroProducts.png';
import Contact from '../../components/common/Contact';

import ScrollIndicator from '../../components/common/ScrollIndicator';

export default function Gastroenterology() {
    return (
        <>
            {/* Gastroenterology Hero Section */}
            <section className="relative w-full h-[500px] md:h-[650px] overflow-hidden flex items-center">
                <img
                    src={gastroHero}
                    alt="Gastroenterology Hero"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="site-shell text-center px-6">
                        <div className="inline-flex items-center gap-3 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 md:mb-8 animate-fade-in-down mx-auto">
                            <span className="w-2 h-2 rounded-full bg-[#83C24D] animate-ping"></span>
                            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/90">Therapy Focus</span>
                        </div>
                        
                        <p className="text-[16px] sm:text-[20px] md:text-[24px] font-semibold text-brand-300 mb-4 animate-fade-in-up leading-snug">
                            Effective treatments for digestive health and gastrointestinal disorders.
                        </p>

                        <h1 className="text-[32px] sm:text-[56px] md:text-[68px] lg:text-[80px] font-bold text-white uppercase leading-[1.1] mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-brand-300">
                                Gastroenterology
                            </span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-[#83C24D]">
                                Care Solutions
                            </span>
                        </h1>

                        <p className="text-[14px] sm:text-[17px] md:text-[19px] text-white/80 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200 hidden sm:block">
                            Our gastroenterology range is designed to manage acidity, GERD, and digestive conditions with reliable formulations that support long-term gut health and patient comfort.
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
                            Focused Approach to Digestive Health
                        </h2>

                        <div className="space-y-6 text-[15px] md:text-[18px] text-slate-700 leading-relaxed font-normal">
                            <p>
                                Digestive disorders are becoming increasingly common due to changing lifestyles, irregular eating habits, and rising stress levels. Conditions such as acidity, GERD, gastritis, and peptic ulcers are affecting a large segment of the population across both urban and emerging markets.
                            </p>

                            <p>
                                This growing prevalence is driven by factors like poor dietary choices, sedentary routines, excessive medication use, and increasing work-related stress. As a result, symptoms such as heartburn, bloating, indigestion, and abdominal discomfort are impacting daily life and overall well-being.
                            </p>

                            <p className="hidden md:block">
                                In countries like India, many gastrointestinal conditions remain underdiagnosed or inadequately managed, leading to recurring symptoms and long-term complications. This highlights the need for effective, accessible, and well-formulated treatment solutions.
                            </p>

                            <p>
                                Addressing these challenges requires a focused and comprehensive approach—combining clinical expertise with advanced formulations to support digestive health, provide lasting relief, and improve patient outcomes.
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
                                PRECISION GASTROENTEROLOGY
                            </span>
                            <h2 className="text-[36px] sm:text-[48px] md:text-[72px] font-bold leading-[1.1] mb-6 md:mb-8">
                                Therapeutic <br className="hidden sm:block" />
                                <span className="text-[#1193f2]">Excellence.</span>
                            </h2>

                            <div className="space-y-6 mb-10 max-w-lg mx-auto lg:mx-0">
                                <p className="text-[15px] md:text-[17px] text-slate-600 leading-relaxed">
                                    Modern lifestyles, irregular eating habits, and increasing stress levels are major contributors to digestive disorders. Conditions like acidity, GERD, gastritis, and ulcers require timely intervention.
                                </p>
                                
                                <div className="space-y-4 text-left inline-block lg:block">
                                    <p className="font-bold text-slate-800 text-[16px]">
                                        Our gastro-focused solutions are designed to:
                                    </p>
                                    <ul className="space-y-3">
                                        {[
                                            "Provide fast and sustained relief from acidity and heartburn",
                                            "Support healthy digestion and gut balance",
                                            "Protect the gastric lining and reduce inflammation",
                                            "Improve overall digestive comfort and well-being"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-[14px] md:text-[15px] text-slate-600">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#83C24D] shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
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
                                    src={gastroProducts}
                                    alt="Caprion Gastro Products Portfolio"
                                    className="w-full h-auto max-w-[320px] sm:max-w-[500px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Advanced GI Solutions Section */}
            <section className="bg-[#f8fcff] section-pad">
                <div className="site-shell mx-auto max-w-7xl px-6">
                    <div className="container-custom mb-12 md:mb-16 text-center">
                        <h2 className="heading-primary !mb-4">
                            Advanced GI Solutions
                        </h2>
                        <p className="text-slate-600 text-[15px] md:text-[18px] max-w-2xl mx-auto leading-relaxed">
                            Our portfolio represents the pinnacle of gastroenterology research,
                            targeting motility, enzyme balance, and mucosal health.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                        {[
                            {
                                name: 'ALCOBEST TAB',
                                category: 'NUTRITIONAL',
                                description: 'A balanced blend of essential B-vitamins that supports nerve health, boosts energy, and helps manage nutritional deficiencies.',
                                image: alcobestTab,
                                badgeColor: 'bg-blue-50 text-blue-600'
                            },
                            {
                                name: 'ALCOBEST IV',
                                category: 'CRITICAL CARE',
                                description: 'A fast-acting injectable blend of B-complex vitamins, Vitamin C, and dextrose that supports nerve health and energy.',
                                image: alcobestIv,
                                badgeColor: 'bg-red-50 text-red-600'
                            },
                            {
                                name: 'ESOPAX DSR',
                                category: 'ACID CONTROL',
                                description: 'A dual-release formula that reduces acid, improves gastric motility, and provides long-lasting relief from reflux.',
                                image: esopaxDsr,
                                badgeColor: 'bg-green-50 text-green-600'
                            },
                            {
                                name: 'ESOPAX IT',
                                category: 'ACID CONTROL',
                                description: 'An advanced combination that reduces acid, protects the stomach lining, and promotes healing for GERD.',
                                image: esopaxIt,
                                badgeColor: 'bg-green-50 text-green-600'
                            },
                            {
                                name: 'ESOPAX L',
                                category: 'ACID CONTROL',
                                description: 'A targeted formulation that reduces excess stomach acid and supports digestive comfort and reflux relief.',
                                image: esopaxL,
                                badgeColor: 'bg-green-50 text-green-600'
                            },
                            {
                                name: 'ESOPAX 40',
                                category: 'ACID CONTROL',
                                description: 'A potent acid-suppressing formulation that reduces gastric acid production for acidity and GERD symptoms.',
                                image: esopax40,
                                badgeColor: 'bg-green-50 text-green-600'
                            },
                            {
                                name: 'ESOPAX HP KIT',
                                category: 'ANTI-INFECTIVE',
                                description: 'A combination therapy designed to eradicate H. pylori, reduce acid secretion, and promote ulcer healing.',
                                image: esopaxHp,
                                badgeColor: 'bg-purple-50 text-purple-600'
                            },
                            {
                                name: 'SAMEPAX',
                                category: 'HEPATOLOGY',
                                description: 'A hepatoprotective formulation that supports liver function, aids detoxification, and helps metabolic health.',
                                image: samepax,
                                badgeColor: 'bg-orange-50 text-orange-600'
                            },
                            {
                                name: 'GLUTAZEST',
                                category: 'ANTIOXIDANT',
                                description: 'A powerful antioxidant formulation that helps reduce oxidative stress and supports cellular health and immunity.',
                                image: glutazest,
                                badgeColor: 'bg-yellow-50 text-yellow-600'
                            },
                            {
                                name: 'UROSPAX',
                                category: 'UROLOGY',
                                description: 'A targeted formulation that supports urinary tract health, helps relieve discomfort, and aids in infections.',
                                image: urospax,
                                badgeColor: 'bg-blue-50 text-blue-600'
                            },
                            {
                                name: 'KIOPRIDE 75 SR',
                                category: 'CARDIAC CARE',
                                description: 'A sustained-release formulation that helps improve blood flow and prevent clot formation for cardiac health.',
                                image: kiopride,
                                badgeColor: 'bg-red-50 text-red-600'
                            },
                            {
                                name: 'PEGRION SYRUP',
                                category: 'LAXATIVE',
                                description: 'A gentle laxative syrup that promotes smooth bowel movements, relieves constipation, and supports comfort.',
                                image: pegrion,
                                badgeColor: 'bg-emerald-50 text-emerald-600'
                            },
                            {
                                name: 'GUTRION',
                                category: 'MICROBIOME',
                                description: 'A gut-support formulation that helps restore intestinal balance, improves digestion, and promotes health.',
                                image: gutrion,
                                badgeColor: 'bg-green-50 text-green-600'
                            },
                            {
                                name: 'PRULIZEST TAB',
                                category: 'MOTILITY',
                                description: 'A prokinetic formulation that enhances gastrointestinal motility, relieves constipation, and supports regularity.',
                                image: prulizest,
                                badgeColor: 'bg-indigo-50 text-indigo-600'
                            },
                            {
                                name: 'HEPANIT INJ',
                                category: 'HEPATOLOGY',
                                description: 'A liver-support formulation that aids detoxification, enhances liver function, and promotes recovery.',
                                image: productPlaceholder,
                                badgeColor: 'bg-orange-50 text-orange-600'
                            },
                            {
                                name: 'RIFACAST TAB',
                                category: 'ANTI-INFECTIVE',
                                description: 'A targeted antibiotic that helps control gut infections, reduces harmful bacteria, and supports health.',
                                image: productPlaceholder,
                                badgeColor: 'bg-purple-50 text-purple-600'
                            }
                        ].map((product, index) => (
                            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 group flex flex-col">
                                 <div className="h-64 sm:h-80 overflow-hidden bg-slate-50 flex items-center justify-center p-6">
                                     <img
                                         src={product.image}
                                         alt={product.name}
                                         className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                     />
                                 </div>
                                 <div className="p-5 flex flex-col flex-grow">
                                     <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight group-hover:text-[#1193f2] transition-colors">{product.name}</h3>
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

