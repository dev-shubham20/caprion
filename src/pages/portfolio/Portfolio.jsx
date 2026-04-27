import React, { useState } from 'react';
import brandPortfolio from '../../assets/image/brandPortfolio.png';
import Contact from '../../components/common/Contact';

import ScrollIndicator from '../../components/common/ScrollIndicator';
import { ArrowRight, Dna, Activity, Brain, HeartPulse, ShieldCheck, Microscope, Leaf } from 'lucide-react';

// Product Images - Neurology
import ADINOCAP from '../../assets/image/ADINOCAP.png';
import PALMIPAX from '../../assets/image/PALMIPAX.png';
import MAGNICAP from '../../assets/image/MAGNICAP.png';
import MAGNICAP_GOLD from '../../assets/image/MAGNICAP GOLD.png';
import NAXRION_D from '../../assets/image/NAXRION D.png';
import FLUPEXA from '../../assets/image/FLUPEXA.png';
import BENFOCAP from '../../assets/image/BENFOCAP.png';
import COGNIPAX from '../../assets/image/COGNIPAX.png';
import COBAPAX from '../../assets/image/COBAPAX.png';

// Product Images - Gastroenterology
import ALCOBEST from '../../assets/image/ALCOBEST.png';
import ALCOBEST_IV from '../../assets/image/ALCOBEST IV.png';
import ESOPAX_DSR from '../../assets/image/ESOPAX DSR.png';
import ESOPAX_IT from '../../assets/image/ESOPAX IT.png';
import ESOPAX_L from '../../assets/image/ESOPAX L.png';
import ESOPAX_40 from '../../assets/image/ESOPAX 40.png';
import ESOPAX_HP from '../../assets/image/ESOPAX HP KIT.png';
import SAMEPAX from '../../assets/image/SAMEPAX.png';
import GLUTAZEST from '../../assets/image/GLUTAZEST.png';
import UROSPAX from '../../assets/image/UROSPAX.png';
import KIOPRIDE from '../../assets/image/KIOPRIDE 75 SR.png';
import PEGRION from '../../assets/image/PEGRION SYRUP.png';
import GUTRION from '../../assets/image/GUTRION.png';
import PRULIZEST from '../../assets/image/PRULIZEST TAB.png';
import productPlaceholder from '../../assets/image/productPlaceholder.png';

// Product Images - Anti-infective
import MEROCAP_S from '../../assets/image/MEROCAP S.png';
import TAZOCAP from '../../assets/image/TAZOCAP.png';
import FAROCAP from '../../assets/image/FAROCAP.png';
import FAROCAP_CV from '../../assets/image/FAROCAP CV.png';

// Product Images - Pain Management
import THIOCAP_F from '../../assets/image/THIOCAP F.png';
import ETOKLAS from '../../assets/image/ETOKLAS.png';
import ETOKLAS_TH from '../../assets/image/ETOKLAS TH.png';
import CARTIPAX from '../../assets/image/CARTIPAX.png';
import GABAPIX_GEL from '../../assets/image/GABAPIX GEL.png';
import uncompromisingImg from '../../assets/image/Uncompromising.png';

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState('All');

    const products = [
        // Neurology
        { id: 'CAP-N01', name: 'ADINOCAP', therapy: 'Neurology', description: 'Supports energy production and enhances metabolic function for overall vitality.', image: ADINOCAP },
        { id: 'CAP-N02', name: 'PALMIPAX', therapy: 'Neurology', description: 'Nerve-support formulation to improve function and reduce neuropathic discomfort.', image: PALMIPAX },
        { id: 'CAP-N03', name: 'MAGNICAP', therapy: 'Neurology', description: 'Magnesium supplement to support muscle function and electrolyte balance.', image: MAGNICAP },
        { id: 'CAP-N04', name: 'MAGNICAP GOLD', therapy: 'Neurology', description: 'Enhanced formulation with added nutrients for muscle and nerve strength.', image: MAGNICAP_GOLD },
        { id: 'CAP-N05', name: 'NAXRION D', therapy: 'Neurology', description: 'Combination therapy to reduce nerve pain, inflammation, and improve mobility.', image: NAXRION_D },
        { id: 'CAP-N06', name: 'FLUPEXA', therapy: 'Neurology', description: 'Targeted relief from allergic symptoms like sneezing and runny nose.', image: FLUPEXA },
        { id: 'CAP-N07', name: 'BENFOCAP', therapy: 'Neurology', description: 'Benfotiamine-based support for diabetic neuropathy and glucose metabolism.', image: BENFOCAP },
        { id: 'CAP-N08', name: 'COGNIPAX', therapy: 'Neurology', description: 'Cognitive support to enhance memory, focus, and overall brain function.', image: COGNIPAX },
        { id: 'CAP-N09', name: 'COBAPAX', therapy: 'Neurology', description: 'Vitamin B12 therapy for nerve health and red blood cell formation.', image: COBAPAX },

        // Gastroenterology
        { id: 'CAP-G01', name: 'ALCOBEST TAB', therapy: 'Gastroenterology', description: 'Essential B-vitamins to support nerve health and boost energy.', image: ALCOBEST },
        { id: 'CAP-G02', name: 'ALCOBEST IV', therapy: 'Gastroenterology', description: 'Fast-acting injectable B-complex and Vitamin C for acute deficiencies.', image: ALCOBEST_IV },
        { id: 'CAP-G03', name: 'ESOPAX DSR', therapy: 'Gastroenterology', description: 'Dual-release formula for reflux, heartburn, and indigestion relief.', image: ESOPAX_DSR },
        { id: 'CAP-G04', name: 'ESOPAX IT', therapy: 'Gastroenterology', description: 'Advanced combination to protect stomach lining and promote healing.', image: ESOPAX_IT },
        { id: 'CAP-G05', name: 'ESOPAX L', therapy: 'Gastroenterology', description: 'Targeted acid reduction for effective relief from GERD and gastritis.', image: ESOPAX_L },
        { id: 'CAP-G06', name: 'ESOPAX 40', therapy: 'Gastroenterology', description: 'Potent acid suppression for chronic acidity and heartburn.', image: ESOPAX_40 },
        { id: 'CAP-G07', name: 'ESOPAX HP KIT', therapy: 'Gastroenterology', description: 'Comprehensive kit for effective management of H. pylori infections.', image: ESOPAX_HP },
        { id: 'CAP-G08', name: 'SAMEPAX', therapy: 'Gastroenterology', description: 'Supports liver health and emotional well-being through cellular support.', image: SAMEPAX },
        { id: 'CAP-G09', name: 'GLUTAZEST', therapy: 'Gastroenterology', description: 'Antioxidant support to enhance detoxification and immune function.', image: GLUTAZEST },
        { id: 'CAP-G10', name: 'UROSPAX', therapy: 'Gastroenterology', description: 'Targeted support for urinary tract health and comfort.', image: UROSPAX },
        { id: 'CAP-G11', name: 'KIOPRIDE 75 SR', therapy: 'Gastroenterology', description: 'Sustained-release formulation to improve gastric motility and digestion.', image: KIOPRIDE },
        { id: 'CAP-G12', name: 'PEGRION SYRUP', therapy: 'Gastroenterology', description: 'Gentle and effective relief from constipation and irregular bowel movements.', image: PEGRION },
        { id: 'CAP-G13', name: 'GUTRION', therapy: 'Gastroenterology', description: 'Advanced probiotic for restoring gut balance and digestive health.', image: GUTRION },
        { id: 'CAP-G14', name: 'PRULIZEST TAB', therapy: 'Gastroenterology', description: 'Specialized treatment for chronic constipation and intestinal health.', image: PRULIZEST },
        { id: 'CAP-G15', name: 'HEPANIT INJ', therapy: 'Gastroenterology', description: 'Intravenous support for critical liver care and detoxification.', image: productPlaceholder },
        { id: 'CAP-G16', name: 'RIFACAST TAB', therapy: 'Gastroenterology', description: 'Targeted antibiotic for intestinal infections and gut health management.', image: productPlaceholder },

        // Anti-infective
        { id: 'CAP-A01', name: 'MEROCAP S', therapy: 'Anti-infective', description: 'Broad-spectrum antibiotic for serious bacterial infections.', image: MEROCAP_S },
        { id: 'CAP-A02', name: 'TAZOCAP', therapy: 'Anti-infective', description: 'Combination antibiotic for resistant bacterial infections.', image: TAZOCAP },
        { id: 'CAP-A03', name: 'FAROCAP', therapy: 'Anti-infective', description: 'Oral antibiotic for rapid relief from bacterial infections.', image: FAROCAP },
        { id: 'CAP-A04', name: 'FAROCAP CV', therapy: 'Anti-infective', description: 'Advanced combination antibiotic against resistant bacteria.', image: FAROCAP_CV },

        // Pain Management
        { id: 'CAP-P01', name: 'THIOCAP F', therapy: 'Pain Management', description: 'Relieves neuropathic pain and reduces nerve inflammation.', image: THIOCAP_F },
        { id: 'CAP-P02', name: 'ETOKLAS', therapy: 'Pain Management', description: 'Potent anti-inflammatory for musculoskeletal pain and swelling.', image: ETOKLAS },
        { id: 'CAP-P03', name: 'ETOKLAS TH', therapy: 'Pain Management', description: 'Combination therapy for muscle spasms and intense pain relief.', image: ETOKLAS_TH },
        { id: 'CAP-P04', name: 'CARTIPAX', therapy: 'Pain Management', description: 'Joint-support formulation to improve cartilage health and mobility.', image: CARTIPAX },
        { id: 'CAP-P05', name: 'GABAPIX GEL', therapy: 'Pain Management', description: 'Topical relief for localized nerve pain and discomfort.', image: GABAPIX_GEL }
    ];

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(p => p.therapy === activeCategory);

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[500px] md:min-h-[650px] flex items-center overflow-hidden bg-slate-950">
                <div className="absolute inset-0 z-0">
                    <img className="w-full h-full object-cover opacity-50 mix-blend-luminosity animate-subtle-zoom"
                        alt="Pharmaceutical research excellence"
                        src={brandPortfolio} />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>

                    {/* Brand glow effects */}
                    <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-brand-500/20 blur-[120px] rounded-full"></div>
                    <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-[#83C24D]/10 blur-[120px] rounded-full"></div>
                </div>

                <div className="site-shell relative z-10 w-full pt-20 pb-32">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 animate-fade-in-down">
                            <span className="w-2 h-2 rounded-full bg-[#83C24D] animate-ping"></span>
                            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/90">Portfolio Overview</span>
                        </div>

                        <p className="text-[18px] sm:text-[20px] md:text-[24px] font-medium text-brand-300 mb-4 animate-fade-in-up">
                            Delivering trusted formulations across diverse therapeutic segments.
                        </p>

                        <h1 className="text-5xl md:text-8xl font-bold text-white leading-[1.1] tracking-tight mb-8 animate-fade-in-up">
                            Our Brand <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-[#83C24D]">
                                Portfolio
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                            Explore our comprehensive range of high-quality pharmaceutical products, developed to meet evolving healthcare needs and ensure effective patient outcomes.
                        </p>

                        <div className="flex flex-wrap gap-5 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                            <button className="btn-primary group" onClick={() => document.getElementById('portfolio-grid')?.scrollIntoView({ behavior: 'smooth' })}>
                                Explore Brands
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>

                <ScrollIndicator />
            </section>

            {/* Therapeutic Focus Areas */}
            <section className="section-pad bg-white relative overflow-hidden">
                <div className="site-shell relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="heading-primary">
                                Therapeutic Focus Areas
                            </h2>
                            <p className="text-[16px] text-slate-600 leading-relaxed font-normal max-w-2xl" style={{ animationDelay: '200ms' }}>
                                Specialized treatments tailored for complex medical conditions, developed through rigorous clinical research and ethical standards.
                            </p>
                        </div>
                        <div className="flex gap-3 mb-4">
                            <div className="h-1.5 w-12 bg-brand-500 rounded-full"></div>
                            <div className="h-1.5 w-4 bg-brand-100 rounded-full"></div>
                            <div className="h-1.5 w-4 bg-brand-100 rounded-full"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Neurology */}
                        <div className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>

                            <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                                <Brain className="w-8 h-8 text-indigo-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Neurology</h3>
                            <p className="text-slate-500 text-[15px] leading-relaxed mb-8">
                                Innovative neurological research focusing on neurodegenerative diseases and comprehensive nerve health strategies.
                            </p>
                            <a className="inline-flex items-center gap-2 text-brand-600 font-bold text-sm tracking-wider uppercase group/link" href="/neuropathy">
                                Learn More
                                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        {/* Gastroenterology */}
                        <div className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>

                            <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                                <Activity className="w-8 h-8 text-emerald-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Gastroenterology</h3>
                            <p className="text-slate-500 text-[15px] leading-relaxed mb-8">
                                Advanced solutions for chronic digestive health conditions, focusing on acidity control and long-term gut recovery.
                            </p>
                            <a className="inline-flex items-center gap-2 text-brand-600 font-bold text-sm tracking-wider uppercase group/link" href="/gastroenterology">
                                Learn More
                                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        {/* Anti-infective */}
                        <div className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>

                            <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                                <Microscope className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Anti-infective</h3>
                            <p className="text-slate-500 text-[15px] leading-relaxed mb-8">
                                Targeted therapies to combat bacterial, viral, and fungal infections with precision-engineered quality formulations.
                            </p>
                            <a className="inline-flex items-center gap-2 text-brand-600 font-bold text-sm tracking-wider uppercase group/link" href="/Anti-infective">
                                Learn More
                                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        {/* Pain Management */}
                        <div className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>

                            <div className="w-16 h-16 rounded-2xl bg-rose-50 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                                <HeartPulse className="w-8 h-8 text-rose-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Pain Management</h3>
                            <p className="text-slate-500 text-[15px] leading-relaxed mb-8">
                                Effective relief for acute and chronic pain conditions, designed to reduce inflammation and improve physical mobility.
                            </p>
                            <a className="inline-flex items-center gap-2 text-brand-600 font-bold text-sm tracking-wider uppercase group/link" href="/pain-management">
                                Learn More
                                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-50/30 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 -z-10"></div>
            </section>

            <section id="portfolio-grid" className="section-pad bg-slate-50/50">
                <div className="site-shell">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-100/50 border border-blue-200/50 mb-6 mx-auto">
                            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-700">Featured Brands</span>
                        </div>
                        <h2 className="heading-primary">Brand Gallery</h2>

                        {/* Functional Tabs */}
                        <div className="flex flex-wrap justify-center gap-3 mt-10">
                            {['All', 'Neurology', 'Gastroenterology', 'Anti-infective', 'Pain Management'].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer ${activeCategory === cat
                                        ? 'bg-brand-600 text-white shadow-lg shadow-brand-200 scale-105'
                                        : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-200'
                                        }`}
                                >
                                    {cat === 'All' ? 'All Portfolio' : cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Grid - Compact 4-column layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredProducts.map((product, index) => (
                            <div
                                key={product.id}
                                className="group bg-white rounded-[1.5rem] overflow-hidden border border-slate-100 shadow-lg shadow-blue-900/5 hover:shadow-xl transition-all duration-500 animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="relative h-72 overflow-hidden bg-slate-50">
                                    <img className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 p-6"
                                        src={product.image}
                                        alt={product.name} />
                                    {/* <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-slate-900 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest shadow-sm">
                                        {product.category}
                                    </div> */}
                                </div>
                                <div className="p-6">
                                    <span className="text-brand-600 font-bold text-[10px] uppercase tracking-widest mb-2 block">
                                        {product.therapy}
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors line-clamp-1">
                                        {product.name}
                                    </h3>
                                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-4">
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Caprion Standard Section */}
            <section className="section-pad bg-white overflow-hidden">
                <div className="site-shell">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative group max-w-xl mx-auto lg:mx-0">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl shadow-blue-900/10">
                                <img className="w-full h-[480px] object-cover transition-transform duration-1000 group-hover:scale-105"
                                    alt="Caprion standard of quality and precision"
                                    src={uncompromisingImg} />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                            </div>
                            
                            {/* Floating Stats Card - Slightly smaller */}
                            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-brand-600 to-brand-700 p-6 rounded-[2rem] shadow-xl shadow-brand-500/20 hidden md:block animate-bounce-subtle">
                                <div className="text-white text-center">
                                    <span className="block text-4xl font-bold mb-1">100%</span>
                                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/80">Quality Commitment</span>
                                </div>
                            </div>

                            {/* Decorative element */}
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-50 rounded-full blur-3xl -z-10"></div>
                        </div>

                        <div className="lg:pl-6">
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                Uncompromising Quality <br />
                                <span className="text-brand-600">in Every Product</span>
                            </h2>
                            
                            <div className="space-y-8">
                                <div className="flex gap-5 group/item">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover/item:scale-110 group-hover/item:rotate-6 transition-transform duration-500">
                                        <ShieldCheck className="w-6 h-6 text-brand-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 mb-1.5">Global Quality Standards</h4>
                                        <p className="text-slate-500 text-xs leading-relaxed max-w-sm">
                                            Our products are developed and manufactured in compliance with stringent quality guidelines, ensuring safety, consistency, and reliability across every formulation.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-5 group/item">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center group-hover/item:scale-110 group-hover/item:rotate-6 transition-transform duration-500">
                                        <Microscope className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 mb-1.5">Scientific Excellence</h4>
                                        <p className="text-slate-500 text-xs leading-relaxed max-w-sm">
                                            Each product is backed by carefully selected compositions and a focus on clinical effectiveness, delivering dependable results for healthcare professionals and patients.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-5 group/item">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center group-hover/item:scale-110 group-hover/item:rotate-6 transition-transform duration-500">
                                        <Leaf className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 mb-1.5">Responsible Manufacturing</h4>
                                        <p className="text-slate-500 text-xs leading-relaxed max-w-sm">
                                            We follow ethical and efficient manufacturing practices, maintaining high standards while ensuring accessibility and long-term value in healthcare.
                                        </p>
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
