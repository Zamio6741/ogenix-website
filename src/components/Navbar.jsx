import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logos/ogenix-logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const links = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Pricing", href: "#pricing", id: "pricing" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = document.querySelectorAll("section[id]");

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#041E5A]/85 backdrop-blur-xl shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Ogenix"
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
        </a>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-10">

          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`relative font-medium transition-all duration-300

                ${
                  active === link.id
                    ? "text-cyan-300"
                    : "text-white hover:text-cyan-300"
                }

                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[2px]
                after:bg-cyan-400
                after:transition-all
                after:duration-300

                ${
                  active === link.id
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                }
                `}
              >
                {link.name}
              </a>
            </li>
          ))}

        </ul>

        {/* Desktop Quote Button */}
        <Link
          to="/contact"
          className="hidden lg:flex items-center justify-center px-7 py-3 rounded-xl bg-cyan-500 text-white font-semibold shadow-lg transition-all duration-300 hover:bg-cyan-400 hover:scale-105"
        >
          Get Free Quote
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-[#041E5A]/95 backdrop-blur-xl border-t border-blue-800">

          <ul className="flex flex-col gap-5 p-6">

            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block transition ${
                    active === link.id
                      ? "text-cyan-300"
                      : "text-white hover:text-cyan-300"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 bg-cyan-500 hover:bg-cyan-400 py-3 rounded-xl text-center text-white font-semibold"
            >
              Get Free Quote
            </Link>

          </ul>

        </div>
      </div>
    </header>
  );
}

export default Navbar;