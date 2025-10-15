import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import CustomButton from "@/components/custom-button/Button";
import { logoutUser } from "@/redux/slices/userSlice";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.user);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { to: "/deals", label: "Deals" },
    { to: "/fleets", label: "Fleets" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact Us" },
    { to: "/faq", label: "FAQ’s" },
  ];

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

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

        {/* Desktop Right Section */}
        <div className="hidden md:block">
          {isLoggedIn ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition"
              >
                <span>{user?.name || "My Account"}</span>
                <ChevronDown size={18} />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg py-2 z-50">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    to="/kyc"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    KYC
                  </Link>
                  <Link
                    to="/bookings"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Bookings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <CustomButton
              variant={isScrolled ? "primary" : "secondary"}
              className="rounded-full px-6 py-2 font-semibold"
              onClick={() => navigate("/registration")}
            >
              Login or Signup
            </CustomButton>
          )}
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

          {isLoggedIn ? (
            <>
              <Link
                to="/profile"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg hover:text-indigo-500"
              >
                Profile
              </Link>
              <Link
                to="/kyc"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg hover:text-indigo-500"
              >
                KYC
              </Link>
              <Link
                to="/bookings"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg hover:text-indigo-500"
              >
                Bookings
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="text-lg text-red-600 hover:text-red-700"
              >
                Logout
              </button>
            </>
          ) : (
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
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
