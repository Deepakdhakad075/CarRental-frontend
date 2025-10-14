import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 
import CustomButton from "@/components/custom-button/Button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/deals", label: "Deals" },
    { to: "/fleets", label: "Fleets" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact Us" },
    { to: "/faq", label: "FAQ’s" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 font-montserrat w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"
      }`}
    >
      <div
        className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6"
        style={{ height: "74px" }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/images/logo.png" alt="Logo" className="h-20 cursor-pointer" />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.to}
                className={`relative group ${
                  isScrolled ? "text-gray-700" : "text-indigo-900"
                } hover:text-indigo-500 transition-colors`}
              >
                {link.label}
                <span className="absolute left-0 top-5 bottom-0 w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <CustomButton
            variant={isScrolled ? "primary" : "secondary"}
            className="rounded-full px-6 py-2 font-semibold"
            onClick={() => navigate("/registration")}
          >
            Login or Signup
          </CustomButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={26} className={`${isScrolled ? "text-black" : "text-white"}`} />
          ) : (
            <Menu size={26} className={`${isScrolled ? "text-black" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden flex flex-col items-center space-y-6 py-6 transition-all duration-300 ${
            isScrolled ? "bg-white text-black shadow-md" : "bg-gray-900 text-white"
          }`}
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="text-lg font-medium hover:text-indigo-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <CustomButton
            variant={isScrolled ? "primary" : "secondary"}
            className="rounded-full px-6 py-2 font-semibold"
            onClick={() => {
              setIsMenuOpen(false);
              navigate("/registration");
            }}
          >
            Login or Signup
          </CustomButton>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
