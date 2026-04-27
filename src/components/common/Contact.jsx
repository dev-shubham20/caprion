import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Send } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="w-full bg-white relative overflow-hidden">
            <div className="">
                <div className="relative">
                    <div className="bg-slate-900 px-4 py-8 md:p-16 relative overflow-hidden group shadow-2xl container-custom">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="site-shell">
                            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                                <div className="lg:col-span-7 text-left">
                                    <span className="section-kicker !text-brand-400 mb-6 block">Stay Connected</span>
                                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                        Grow Your Business with
                                        <br />
                                        <span className="text-brand-400">Trusted Pharma Partner</span>
                                    </h2>
                                    <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
                                        Reliable support, consistent communication, and a partnership approach focused on long-term growth and value.
                                    </p>
                                </div>

                                <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-6 lg:items-end">
                                    <Link to="/contact"
                                        className="btn-primary !py-4 px-8 !text-md group/btn flex items-center gap-3 w-full sm:w-auto">
                                        <span>Get A Quotation</span>
                                        <Send className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    </Link>

                                    <div className="flex flex-col gap-4">
                                        <h4 className="text-brand-400 font-bold text-xs uppercase tracking-widest lg:text-right">Further Enquiries</h4>
                                        <div className="flex flex-col gap-3 lg:items-end">
                                            <a href="tel:+918890001903"
                                                className="flex items-center gap-3 text-white hover:text-brand-400 transition-colors text-sm font-medium group/link">
                                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover/link:bg-brand-500/20 transition-colors">
                                                    <Phone className="w-4 h-4" />
                                                </div>
                                                <span>+91 88900 01903</span>
                                            </a>
                                            <a href="mailto:info@caprionpharma.com"
                                                className="flex items-center gap-3 text-white hover:text-brand-400 transition-colors text-sm font-medium group/link">
                                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover/link:bg-brand-500/20 transition-colors">
                                                    <Mail className="w-4 h-4" />
                                                </div>
                                                <span>info@caprionpharma.com</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
