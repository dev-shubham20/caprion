import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/image/Logo.png';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const closeAllMenus = () => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
    };


    return (
        <>
            <header className="sticky top-0 z-30 border-b border-white/70 bg-white/90 backdrop-blur z-99">
                <div className="site-shell flex items-center justify-between gap-8 py-3.5 xl:gap-12">
                    <Link to="/" className="brand-lockup" onClick={closeAllMenus}>
                        <img src={logo} alt="Caprion Pharma Pvt Ltd" className="brand-image" />
                    </Link>

                    <div className="flex items-center gap-10">
                        <nav className="hidden flex-1 items-center justify-center gap-9 lg:flex xl:gap-9">
                            <Link to="/" className="nav-link" onClick={closeAllMenus}>Home</Link>

                            <div className="nav-item group"
                                onMouseEnter={() => setActiveDropdown('about')}
                                onMouseLeave={() => setActiveDropdown(null)}>
                                <Link to="/#about" className="nav-trigger" onClick={closeAllMenus}>
                                    About
                                    <svg viewBox="0 0 20 20" className={`nav-chevron fill-current ${activeDropdown === 'about' ? 'rotate-180' : ''}`} aria-hidden="true">
                                        <path d="M5.2 7.5 10 12.3l4.8-4.8 1.2 1.2-6 6-6-6 1.2-1.2Z" />
                                    </svg>
                                </Link>
                                <div
                                    className={`nav-dropdown z-1 after:absolute after:left-0 after:size-full after:-top-4 after:bg-transparent after:-z-10 ${activeDropdown === 'about' ? 'is-open' : ''}`}>
                                    <Link to="/about" className="nav-dropdown-link" onClick={closeAllMenus}>About Us</Link>
                                    <Link to="/mission-vision" className="nav-dropdown-link" onClick={closeAllMenus}>Mission and Vision</Link>
                                    {/* <Link to="/our-team" className="nav-dropdown-link" onClick={closeAllMenus}>Our Team</Link> */}
                                    {/* <Link to="/life-at-caprion" className="nav-dropdown-link" onClick={closeAllMenus}>Life at Caprion</Link> */}
                                </div>
                            </div>

                            <div className="nav-item group"
                                onMouseEnter={() => setActiveDropdown('therapy')}
                                onMouseLeave={() => setActiveDropdown(null)}>
                                <Link to="/#focus" className="nav-trigger" onClick={closeAllMenus}>
                                    Therapy focus
                                    <svg viewBox="0 0 20 20" className={`nav-chevron fill-current ${activeDropdown === 'therapy' ? 'rotate-180' : ''}`} aria-hidden="true">
                                        <path d="M5.2 7.5 10 12.3l4.8-4.8 1.2 1.2-6 6-6-6 1.2-1.2Z" />
                                    </svg>
                                </Link>
                                <div
                                    className={`nav-dropdown z-1 after:absolute after:left-0 after:size-full after:-top-4 after:bg-transparent after:-z-10 ${activeDropdown === 'therapy' ? 'is-open' : ''}`}>
                                    <Link to="/neuropathy" className="nav-dropdown-link" onClick={closeAllMenus}>NEUROLOGY</Link>
                                    <Link to="/gastroenterology" className="nav-dropdown-link" onClick={closeAllMenus}>GASTROENTEROLOGY</Link>
                                    <Link to="/Anti-infective" className="nav-dropdown-link" onClick={closeAllMenus}>Anti-infective</Link>
                                    <Link to="/pain-management" className="nav-dropdown-link" onClick={closeAllMenus}>Pain Management</Link>
                                </div>
                            </div>

                            <Link to="/portfolio" className="nav-link" onClick={closeAllMenus}>Brand Portfolio</Link>

                            <Link to="/career" className="nav-link" onClick={closeAllMenus}>Career</Link>
                        </nav>

                        <div className="flex items-center gap-4">
                            <Link to="/contact" className="btn-primary hidden shrink-0 sm:inline-flex" onClick={closeAllMenus}>Contact us</Link>

                            <button id="mobile-menu-toggle" className="flex lg:hidden flex-col gap-1.5 p-2 focus:outline-none"
                                aria-label="Toggle Menu" onClick={() => setIsMobileMenuOpen(true)}>
                                <span className="w-7 h-0.5 bg-[#4fa7f0] transition-all duration-300"></span>
                                <span className="w-7 h-0.5 bg-[#4fa7f0] transition-all duration-300"></span>
                                <span className="w-7 h-0.5 bg-[#4fa7f0] transition-all duration-300"></span>
                            </button>
                        </div>
                    </div>

                </div>
            </header>

            <div id="mobile-menu" className={`fixed inset-0 z-[100] transition-all duration-300 lg:hidden ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                <div id="mobile-menu-backdrop"
                    className={`absolute inset-0 bg-slate-900/60 transition-opacity duration-300 backdrop-blur-sm ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={closeAllMenus}></div>

                <div id="mobile-menu-sidebar"
                    className={`absolute right-0 top-0 h-full w-[310px] bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col overflow-hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex shrink-0 items-center justify-between p-6 border-b border-slate-100">
                        <img src={logo} alt="Caprion Pharma" className="h-10 w-auto" />
                        <button id="mobile-menu-close"
                            className="p-2 -mr-2 text-slate-500 hover:text-[#4fa7f0] active:scale-90 transition-all" aria-label="Close Menu"
                            onClick={closeAllMenus}>
                            <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto overscroll-contain pt-6 pb-12 px-8">
                        <nav className="space-y-8">
                            <Link to="/"
                                onClick={closeAllMenus}
                                className="mobile-nav-link text-xl font-bold text-slate-900 hover:text-brand-600 transition-colors">Home</Link>

                            <div className="space-y-5">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8cc63f]">About</p>
                                <div className="pl-4 space-y-4 border-l-[1.5px] border-slate-100">
                                    <Link to="/about"
                                        onClick={closeAllMenus}
                                        className="mobile-nav-link block text-[15px] font-semibold text-slate-600 hover:text-[#4fa7f0]">About Us</Link>
                                    <Link to="/mission-vision"
                                        onClick={closeAllMenus}
                                        className="mobile-nav-link block text-[15px] font-semibold text-slate-600 hover:text-[#4fa7f0]">Mission and Vision</Link>
                                </div>
                            </div>

                            <div className="space-y-5">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8cc63f]">Therapy Focus</p>
                                <div className="pl-4 space-y-4 border-l-[1.5px] border-slate-100">
                                    <Link to="/neuropathy"
                                        onClick={closeAllMenus}
                                        className="mobile-nav-link block text-[15px] font-semibold text-slate-600 hover:text-[#4fa7f0]">NEUROLOGY</Link>
                                    <Link to="/gastroenterology"
                                        onClick={closeAllMenus}
                                        className="mobile-nav-link block text-[15px] font-semibold text-slate-600 hover:text-[#4fa7f0]">GASTROENTEROLOGY</Link>
                                    <Link to="/Anti-infective"
                                        onClick={closeAllMenus}
                                        className="mobile-nav-link block text-[15px] font-semibold text-slate-600 hover:text-[#4fa7f0]">Anti-infective</Link>
                                    <Link to="/pain-management"
                                        onClick={closeAllMenus}
                                        className="mobile-nav-link block text-[15px] font-semibold text-slate-600 hover:text-[#4fa7f0]">Pain Management</Link>
                                </div>
                            </div>

                            <Link to="/portfolio"
                                onClick={closeAllMenus}
                                className="mobile-nav-link text-xl font-bold text-slate-900 hover:text-brand-600 transition-colors">Brand Portfolio</Link>

                            <Link to="/career"
                                onClick={closeAllMenus}
                                className="mobile-nav-link text-xl font-bold text-slate-900 hover:text-brand-600 transition-colors">Career</Link>
                        </nav>
                    </div>

                    <div className="px-8 py-5 border-t border-slate-50 bg-[#F0FBFF] shrink-0">
                        <Link to="/contact"
                            onClick={closeAllMenus}
                            className="mobile-nav-link flex items-center justify-center w-full h-[40px] bg-[#8cc63f] text-white font-bold rounded-lg shadow-lg shadow-green-600/20 active:scale-[0.98] transition-transform">
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}