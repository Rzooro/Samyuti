import { useEffect, useRef, useState } from "react";
import logo from "./assets/logo.png";
import iic from "./assets/iic.png";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 10);
      if (currentScroll > lastScrollY.current && currentScroll > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY.current = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToRegister = () => {
    const section = document.getElementById("registration");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      } ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white shadow-sm"}`}>
      <div className="py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-10 flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-6 group cursor-pointer">
            <img
              src={logo}
              alt="Chanakya University Logo"
              className="w-32 md:w-56 object-contain"
            />
            <div className="hidden md:block w-px h-10 bg-gray-200" />
            <img
              src={iic}
              alt="IIC Logo"
              className="w-22 md:w-32 object-contain"
            />
          </div>
          <button
            onClick={scrollToRegister}
            className="bg-[#002855] text-[#C5941C] border border-[#C5941C] px-4 py-1 md:px-6 md:py-2 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#C5941C] hover:text-white transition-all duration-300 shadow-md">
            Register Now
          </button>
        </div>
      </div>
    </header>
  );
}
export default Header;
