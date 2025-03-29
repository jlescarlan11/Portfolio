import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

interface NavLinkItem {
  name: string;
  path: string;
}

interface NavLinkItemProps {
  link: NavLinkItem;
  onClick?: () => void;
  extraClasses?: string;
}

const NavLinkItem: React.FC<NavLinkItemProps> = ({
  link,
  onClick,
  extraClasses = "",
}) => (
  <NavLink
    to={link.path}
    onClick={onClick}
    className={({ isActive }) =>
      `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 
      hover:text-[var(--accent-color)] hover:underline 
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-color)]
      ${
        isActive
          ? "bg-[var(--accent-color)] text-white"
          : "text-[var(--text-color)]"
      } ${extraClasses}`
    }
  >
    {link.name}
  </NavLink>
);

const navLinks: NavLinkItem[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [logoError, setLogoError] = useState<boolean>(false);
  // Initialize background opacity (starting at 0.5)
  const [bgOpacity, setBgOpacity] = useState<number>(0.5);

  // Update opacity based on scroll position.
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Define a scroll threshold (in pixels) where the opacity reaches 1
      const maxScroll = 200;
      // Calculate new opacity: it starts at 0.5 and increases to 1 as you scroll.
      const newOpacity = Math.min(1, 0.5 + (scrollY / maxScroll) * 0.5);
      setBgOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = (): void => setIsOpen(!isOpen);
  const handleLogoError = (): void => setLogoError(true);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      // Apply inline style to set the dynamic background opacity using your CSS variable
      style={{ backgroundColor: `rgba(var(--primary-color), ${bgOpacity})` }}
      className="fixed w-full z-10 text-[var(--text-color)] font-montserrat transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              {!logoError ? (
                <img
                  src="/logo.png"
                  alt="My Portfolio Logo"
                  className="h-8 w-auto mr-2"
                  onError={handleLogoError}
                />
              ) : (
                <span className="h-8 w-auto mr-2 p-1 border border-[var(--text-color)] rounded-full text-sm font-bold">
                  JLE
                </span>
              )}
              <span className="text-xl font-bold">My Portfolio</span>
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLinkItem key={link.path} link={link} />
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              className="inline-flex items-center justify-center p-2 rounded-md 
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-color)]"
            >
              <span className="sr-only">Toggle main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "max-h-screen opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <NavLinkItem
              key={link.path}
              link={link}
              onClick={() => setIsOpen(false)}
              extraClasses="block"
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
