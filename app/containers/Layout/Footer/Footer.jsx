import React from 'react';
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  PhoneCall,
  MapPin,
  Clock,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-white bg-slate-900 font-montserrat">
      <div className="max-w-7xl mx-auto px-6 py-6 md:py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Column 1: Logo & Socials */}
        <div>
          <img
            src="/images/logo.png"
            alt="ZoomRide Logo"
            className="w-28 mb-3 filter invert brightness-0"
          />
          <p className="text-sm font-bold mb-3 uppercase tracking-wide">
            Self Drive Cars
          </p>
          <p className="mb-6 text-gray-300 text-base leading-relaxed">
            ZoomRide is a self-drive brand offering 24x7 active services with premium vehicles at your fingertips.
          </p>
          <div className="flex space-x-5">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label={`Visit our ${Icon.name} page`}
                className="hover:text-red-500 transition-all duration-300"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Get in Touch */}
        <div>
          <h4 className="text-xl font-extrabold mb-4">Get In Touch</h4>
          <address className="not-italic space-y-4 text-gray-300 text-base font-medium">
            <div className="flex items-start gap-2">
              <PhoneCall className="w-5 h-5 mt-1" />
              <div>
                +91 9522100017
                <br />
                +91 9522300017
              </div>
            </div>

            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 mt-1" />
              <div>
                13, Sagar Highstreet
                <br />
                Near DMART, Ayodhya Bypass
                <br />
                Bhopal - 462041
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <a
                href="mailto:info@zoomride.in"
                className="hover:text-red-500 transition"
              >
                info@zoomride.in
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>All Days Open - 24×7 Active Service</span>
            </div>
          </address>
        </div>

        {/* Column 3: Links */}
        <div>
          <h4 className="text-xl font-extrabold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-base font-medium">
            {[
              'About Us',
              'Privacy Policy',
              'Terms & Condition',
              'Refund And Cancellation Policy',
              'Marketplace Policy',
            ].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="hover:text-red-500 transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Offers */}
        {/* <div>
          <h4 className="text-xl font-extrabold mb-4">Today’s Offer</h4>
          <p className="text-base text-gray-300">
            Get exclusive discounts and cashback on your first booking.
            <br />
            Call now and avail the best deals on premium self-drive cars!
          </p>
        </div> */}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8">
        <p className="text-center py-4 text-sm text-gray-400">
          © {new Date().getFullYear()} ZoomRide. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
