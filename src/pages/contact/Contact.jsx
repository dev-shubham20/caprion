import React from 'react';

import contactHome from '../../assets/image/contactHome.png';
import map from '../../assets/image/map.jfif';
import { Mail, Phone, Send, ArrowRight, MapPin } from 'lucide-react';
import ScrollIndicator from '../../components/common/ScrollIndicator';

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[500px] md:min-h-[650px] flex items-center md:pt-20 overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <img className="w-full h-full object-cover opacity-30 scale-110 blur-[1px]"
                        src={contactHome}
                        alt="Scientific Research Background" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                </div>

                <div className="site-shell relative z-10 w-full md:pt-0">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 animate-fade-in-down">
                            <span className="w-2 h-2 rounded-full bg-[#83C24D] animate-ping"></span>
                            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/90">Contact Us</span>
                        </div>
                        <h1 className="text-[32px] sm:text-[45px] md:text-[65px] font-bold text-white leading-[1.2] md:leading-[1.1] mb-6 md:mb-8 animate-fade-in-up">
                            Partnering for a <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-[#83C24D]">
                                Healthier Tomorrow
                            </span>
                        </h1>
                        <p className="text-[16px] md:text-[21px] text-slate-300 leading-relaxed font-normal max-w-2xl mb-10 md:mb-12 animate-fade-in-up delay-200">
                            Whether you're inquiring about clinical partnerships, regulatory affairs, or global distribution, our experts are ready to assist you.
                        </p>
                    </div>
                </div>

                <ScrollIndicator />
            </section>

            {/* Contact Grid Section */}
            <section className="section-pad bg-slate-50/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-50/30 -skew-x-12 translate-x-1/2 pointer-events-none"></div>

                <div className="site-shell relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                        {/* Form Column */}
                        <div className="lg:col-span-7 h-full">
                            <div className="bg-white h-full p-6 sm:p-8 md:p-14 signature-card shadow-2xl shadow-blue-900/5 border border-slate-100 animate-fade-in-up">
                                <div className="mb-10">
                                    <h2 className="heading-primary !text-3xl mb-3">Send an Inquiry</h2>
                                    <p className="text-slate-500">Fill out the form below and our clinical liaison team will reach out within 24 hours.</p>
                                </div>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] px-1">Full Name</label>
                                            <input
                                                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-brand-500/10 focus:border-brand-300 outline-none transition-all text-sm font-medium"
                                                placeholder="John Doe" type="text" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] px-1">Email Address</label>
                                            <input
                                                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-brand-500/10 focus:border-brand-300 outline-none transition-all text-sm font-medium"
                                                placeholder="john@caprion.com" type="email" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] px-1">Message</label>
                                        <textarea
                                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-brand-500/10 focus:border-brand-300 outline-none transition-all text-sm font-medium min-h-[300px]"
                                            placeholder="How can we assist you today?"></textarea>
                                    </div>
                                    <button
                                        className="btn-primary py-3 !sm:py-5 px-12 group flex items-center justify-center gap-3 w-full md:w-auto"
                                        type="submit">
                                        <span>Send Message</span>
                                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Info Column */}
                        <div className="lg:col-span-5 flex flex-col gap-6 animate-fade-in-up delay-300">
                            <div className="signature-card bg-white p-8 border border-slate-100 shadow-xl shadow-blue-900/5 group hover:border-brand-200 transition-all duration-300">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center group-hover:bg-brand-500 transition-colors duration-500">
                                        <MapPin className="w-7 h-7 text-brand-600 group-hover:text-white transition-colors duration-500" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Our Location</h3>
                                <p className="text-sm text-slate-500 leading-relaxed mb-4">4th Floor, 1/51, RIICO Industrial Area, Sirsi Road, Kanakpura, Jaipur - 302012</p>
                                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-brand-600 font-bold text-sm flex items-center gap-2">
                                    Get Directions <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>

                            <div className="signature-card bg-white p-8 border border-slate-100 shadow-xl shadow-blue-900/5 group hover:border-brand-200 transition-all duration-300">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-14 h-14 bg-[#F4F9F0] rounded-2xl flex items-center justify-center group-hover:bg-[#83C24D] transition-colors duration-500">
                                        <Phone className="w-7 h-7 text-[#83C24D] group-hover:text-white transition-colors duration-500" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Phone Support</h3>
                                <p className="text-sm text-slate-500 leading-relaxed mb-4">Our support team is available Monday to Friday, 9:00 AM - 6:00 PM.</p>
                                <a href="tel:+918890001903" className="text-brand-600 font-bold text-sm">+91 88900 01903</a>
                            </div>

                            <div className="signature-card bg-white p-8 border border-slate-100 shadow-xl shadow-blue-900/5 group hover:border-brand-200 transition-all duration-300">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-500">
                                        <Mail className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-500" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Email Inquiries</h3>
                                <p className="text-sm text-slate-500 leading-relaxed mb-4">Send us your detailed inquiries and we'll respond within 24 hours.</p>
                                <a href="mailto:info@caprionpharma.com" className="text-brand-600 font-bold text-sm">info@caprionpharma.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-slate-50 section-pad">
                <div className="site-shell">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-8">
                        <div className="max-w-xl">
                            <span className="section-kicker mb-4 block">Our Footprint</span>
                            <h2 className="heading-primary">Global Command Centers</h2>
                        </div>
                        <p className="text-slate-500 max-w-sm text-left md:text-right hidden md:block">
                            Strategic locations chosen for their proximity to clinical research hubs and manufacturing excellence.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-12">
                             <div className="relative pl-8 border-l-2 border-brand-200 hover:border-brand-500 transition-colors group">
                                <h4 className="text-2xl font-bold text-slate-900 mb-2">Jaipur, India</h4>
                                <p className="text-slate-500 text-sm mb-4">
                                    Caprion Pharma Pvt Ltd<br />
                                    4th Floor, 1/51, Rico Industrial area, Sirsi Road,<br />
                                    Near Kanakpura Railway station,<br />
                                    Kanakpura, Jaipur - 302012<br />
                                </p>
                                <div className="flex flex-col gap-2 text-sm font-medium">
                                    <a href="tel:+918890001903" className="flex items-center gap-3 text-slate-600 hover:text-brand-600 transition-colors">
                                        <Phone className="w-4 h-4 text-brand-500" /> +91 88900 01903
                                    </a>
                                    <a href="mailto:info@caprionpharma.com" className="flex items-center gap-3 text-slate-600 hover:text-brand-600 transition-colors">
                                        <Mail className="w-4 h-4 text-brand-500" /> info@caprionpharma.com
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <div
                                className="absolute inset-0 bg-brand-50 signature-card -translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-0 group-hover:translate-y-0">
                            </div>
                            <div
                                className="bg-white signature-card overflow-hidden h-[350px] md:h-[450px] shadow-2xl relative border border-slate-100">
                                <img className="w-full h-full object-cover grayscale opacity-40 mix-blend-multiply"
                                    alt="Global Map"
                                    src={map} />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent">
                                </div>
                                {/* India Pin */}
                                <div className="absolute top-[53%] left-[80%] sm:left-[70%]">
                                    <div className="relative flex items-center justify-center">
                                        <div className="absolute w-8 h-8 bg-blue-400 rounded-full animate-ping opacity-40"></div>
                                        <div className="w-3 h-3 bg-blue-400 rounded-full shadow-lg border-2 border-white"></div>
                                        <div
                                            className="absolute bottom-full mb-3 bg-white px-3 py-1.5 rounded-lg text-[11px] font-bold shadow-xl border border-slate-100 whitespace-nowrap text-slate-900 transform -translate-y-1 transition-transform group-hover:translate-y-0">
                                            Jaipur Office</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}
