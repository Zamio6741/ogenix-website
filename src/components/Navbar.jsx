import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logos/ogenix-logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleMobileClick = () => {
    setMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#041E5A]/90 backdrop-blur-xl shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* LOGO */}

        <Link
          to="/"
          onClick={handleMobileClick}
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="Ogenix Technologies"
            className="w-12 h-12 object-contain"
          />

          <div>
            <h1 className="text-xl font-bold text-white">
              OGENIX
            </h1>

            <p className="text-xs tracking-[3px] text-cyan-300">
              TECHNOLOGIES
            </p>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}

        <ul className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`relative font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? "text-cyan-300"
                    : "text-white hover:text-cyan-300"
                }`}
              >
                {link.name}

                <span
                  className={`absolute left-0 -bottom-2 h-[2px] bg-cyan-400 transition-all duration-300 ${
                    isActive(link.path)
                      ? "w-full"
                      : "w-0"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* GET FREE QUOTE */}

        <Link
          to="/contact"
          className="hidden lg:flex items-center justify-center px-7 py-3 rounded-xl bg-cyan-500 text-white font-semibold shadow-lg transition-all duration-300 hover:bg-cyan-400 hover:scale-105"
        >
          Get Free Quote
        </Link>

        {/* MOBILE BUTTON */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* MOBILE MENU */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-[#041E5A]/95 backdrop-blur-xl border-t border-blue-800">
          <ul className="flex flex-col gap-5 p-6">

            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={handleMobileClick}
                  className={`block transition ${
                    isActive(link.path)
                      ? "text-cyan-300"
                      : "text-white hover:text-cyan-300"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <li>
              <Link
                to="/contact"
                onClick={handleMobileClick}
                className="block mt-2 bg-cyan-500 hover:bg-cyan-400 py-3 rounded-xl text-center text-white font-semibold transition"
              >
                Get Free Quote
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;