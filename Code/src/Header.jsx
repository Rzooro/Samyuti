import { useEffect, useRef, useState } from "react";
import logo from "./assets/logo.png";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Add shadow when scrolling
      setScrolled(currentScroll > 10);

      // Hide on scroll down, show on scroll up
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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white shadow-sm"
      }`}>
      {/* GOLD ACCENT LINE */}
      <div className="h-[3px] bg-[#C5941C]" />

      <div className="py-6 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* LOGO */}
          <div className="group cursor-pointer">
            <img
              src={logo}
              alt="Chanakya University Logo"
              className="w-64 h-16 object-contain transition-transform duration-300 group-hover:scale-105"
            />

            {/* subtle glow */}
            <div className="absolute opacity-0 group-hover:opacity-20 transition duration-300 blur-xl bg-[#C5941C]" />
          </div>

          {/* TITLE */}
          <div className="text-center md:text-right group">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight uppercase transition-colors duration-300">
              Cultural Fest{" "}
              <span className="text-[#C5941C] group-hover:text-[#b48315]">
                2024
              </span>
            </h1>

            <p className="text-sm font-sans tracking-[0.3em] uppercase opacity-70 mt-1 transition-opacity duration-300 group-hover:opacity-100">
              Ascending with Ideas
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
