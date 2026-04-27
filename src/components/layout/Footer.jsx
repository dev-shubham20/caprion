import { Link } from 'react-router-dom';
import logo from '../../assets/image/Logo.png';

export default function Footer() {
  return (
    <footer className="mt-8-- bg-white border-t border-slate-200">
      <div className="mx-auto max-w-[1200px] px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">

          <div className="md:pr-8 flex flex-col items-start justify-start">
            <Link to="/" className="block">
              <img src={logo} alt="Caprion Pharma Pvt Ltd"
                className="h-[60px] w-auto object-contain mb-2" />
            </Link>
          </div>

          <div className="md:pl-8 md:border-l-[1.5px] md:border-[#b5dbfd] flex flex-col justify-start">
            <h3 className="text-[18px] font-bold text-[#8cc63f] mb-4">Caprion Pharma Pvt Ltd</h3>
            <p className="text-[#333333] font-medium text-[15px] leading-relaxed">
              Caprion Pharma Pvt Ltd<br />
              4th Floor, 1/51, Rico Industrial area,<br />
              Sirsi Road, Near Kanakpura Railway station,<br />
              Kanakpura, Jaipur - 302012
            </p>
          </div>

          <div className="md:pl-8 md:border-l-[1.5px] md:border-[#b5dbfd] flex flex-col justify-start">
            <h3 className="text-[18px] font-bold text-[#8cc63f] mb-4">Contact</h3>
            <p className="text-[#333333] font-medium text-[15px] leading-relaxed mb-1">
              <span className="font-bold">T:</span> +91 88900 01903
            </p>
            <p className="text-[#333333] font-medium text-[15px] leading-relaxed mb-6">
              <span className="font-bold">E:</span> info@caprionpharma.com
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#4fa7f0] flex items-center justify-center text-white transition-opacity hover:opacity-80">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#4fa7f0] flex items-center justify-center text-white transition-opacity hover:opacity-80">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-[#4fa7f0] flex items-center justify-center text-white transition-opacity hover:opacity-80">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:pl-8 md:border-l-[1.5px] md:border-[#b5dbfd] flex flex-col justify-start">
            <h3 className="text-[18px] font-bold text-[#8cc63f] mb-4">Quick Links</h3>
            <ul className="text-[#333333] font-medium text-[15px] leading-relaxed space-y-2">
              <li><Link to="/about" className="transition-colors hover:text-[#8cc63f]">About Us</Link></li>
              <li><Link to="/#focus" className="transition-colors hover:text-[#8cc63f]">Therapy Focus</Link></li>
              <li><Link to="/portfolio" className="transition-colors hover:text-[#8cc63f]">Brand Portfolio</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-[#8cc63f]">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#8cc63f] py-4 px-4 text-center border-t border-[#8cc63f]">
        <p className="text-white text-[14px] font-medium tracking-wide">
          &copy; Caprion Pharma Pvt Ltd. All rights reserved <span className="mx-2 opacity-100">|</span> Website build by
          APPNWEB Technologies
        </p>
      </div>
    </footer>
  );
}