import React from 'react';
import { Facebook, Instagram, Twitter, Mail, PhoneCall } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-white font-semibold bg-slate-900">
      <div className="max-w-7xl mx-auto px-8 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Column 1: Brand Info */}
        <div>
          <img
            src="/images/logo.png"
            alt="ZoomRide Logo"
            className="w-28 mb-3 filter invert brightness-0"
          />
          <p className="text-sm font-bold mb-3 tracking-wide uppercase">
            Self Drive Cars
          </p>
          <p className="mb-6 font-medium text-base leading-relaxed text-gray-200">
            ZoomRide self drive cars is a self drive brand owned by ORIX,
            Japan's second largest self drive car rental company.
          </p>
          <div className="flex space-x-5">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-white hover:text-red-600 transform hover:translate-x-1 transition-all duration-300"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: About */}
        <div>
          <h4 className="font-extrabold mb-5 text-xl text-white">About</h4>
          <ul className="space-y-3">
            {['Deals', 'Contact', 'FAQs', 'Terms & Conditions', 'Privacy Policy'].map(
              (item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-white hover:text-red-600 hover:translate-x-1 transition-all duration-300 text-base font-semibold inline-block"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Column 3: Helpful Links */}
        <div>
          <h4 className="font-extrabold mb-5 text-xl text-white">Helpful Links</h4>
          <ul className="space-y-3">
            {['About', 'Blogs', 'Sitemap', 'Agent Login'].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="text-white hover:text-red-600 hover:translate-x-1 transition-all duration-300 text-base font-semibold inline-block"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Reach Us */}
        <div>
          <h4 className="font-extrabold mb-5 text-xl text-white">Reach Us</h4>
          <address className="not-italic space-y-4 font-semibold text-base text-gray-200">
            <p className="leading-relaxed">
              13,Sagar highstreet
              <br />
              Near DMART Ayodhya bypass
              <br />
              Bhopal 462041
            </p>
            <a
              href="mailto:selfdrive@orixindia.com"
              className="flex items-center space-x-2 text-white hover:text-red-600 hover:translate-x-1 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>info@zoomride.in</span>
            </a>
            <a
              href="tel:+919513631234"
              className="flex items-center space-x-2 text-white hover:text-red-600 hover:translate-x-1 transition-all duration-300"
            >
              <PhoneCall className="w-5 h-5" />
              <span>095221-00017 , 9522300017</span>
            </a>
          </address>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-400 mt-8"></div>
      <p className="text-center py-4 text-sm text-gray-200 tracking-wide">
        © {new Date().getFullYear()} ZoomRide. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
