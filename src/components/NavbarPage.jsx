import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/logos/ogenix-logo.png";

function NavbarPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Pricing", to: "/pricing" },
    { name: "Projects", to: "/projects" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#041E5A]/90 backdrop-blur-xl shadow-xl"
          : "bg-[#041E5A]"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
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
        </NavLink>

        {/* DESKTOP NAVIGATION */}
        <ul className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `relative font-medium transition-all duration-300 ${
                    isActive
                      ? "text-cyan-300"
                      : "text-white hover:text-cyan-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* DESKTOP CTA */}
        <NavLink
          to="/contact"
          className="hidden lg:flex items-center justify-center px-7 py-3 rounded-xl bg-cyan-500 text-white font-semibold hover:bg-cyan-400 transition"
        >
          Get Free Quote
        </NavLink>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </nav>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden lg:hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-[#041E5A] border-t border-blue-800">
          <ul className="flex flex-col gap-5 p-6">

            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block transition ${
                      isActive
                        ? "text-cyan-300"
                        : "text-white hover:text-cyan-300"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            <li>
              <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="block bg-cyan-500 hover:bg-cyan-400 text-center py-3 rounded-xl text-white font-semibold transition"
              >
                Get Free Quote
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </header>
  );
}

export default NavbarPage;