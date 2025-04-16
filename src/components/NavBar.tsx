import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

interface HashLinkItem {
  name: string;
  path: string;
}

interface HashLinkItemProps {
  link: HashLinkItem;
  onClick?: () => void;
  extraClasses?: string;
  isActive?: boolean;
}

const HashLinkItem: React.FC<HashLinkItemProps> = ({
  link,
  onClick,
  extraClasses = "",
  isActive = false,
}) => {
  const computedClassName = `px-3 py-2 rounded-md text-xs font-medium transition-colors duration-200 
    hover:text-[var(--accent-color)] hover:underline 
    focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]
    ${
      isActive ? "text-[var(--text-color)]" : "text-[var(--secondary-color)]"
    } ${extraClasses}`;

  return (
    <HashLink
      smooth
      to={link.path}
      onClick={onClick}
      className={computedClassName}
    >
      {link.name}
    </HashLink>
  );
};

interface NavbarProps {
  activeSection: string;
}

/**
 * Navbar Component
 *
 * Renders a fixed navigation bar that starts transparent and transitions to the primary color
 * as the user scrolls down.
 *
 * @param activeSection - The id of the currently visible section.
 */
const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // New state to track scroll position
  const [scrolled, setScrolled] = useState<boolean>(false);
  const toggleMenu = (): void => setIsOpen(!isOpen);

  // Set up scroll listener to update navbar background opacity
  useEffect(() => {
    const handleScroll = () => {
      // Change the threshold (50) as needed
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hashLinks: HashLinkItem[] = [
    { name: "HOME", path: "/#hero" },
    { name: "ABOUT", path: "/#about" },
    { name: "EDUCATION", path: "/#education" },
    { name: "PORTFOLIO", path: "/#portfolio" },
    { name: "CONTACT", path: "/#contact" },
  ];

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed w-full z-50 transition-colors duration-300 ease-in-out ${
        scrolled ? "bg-[var(--primary-color)]" : "bg-transparent"
      } text-[var(--text-color)] montserrat-400`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <HashLink to="/#hero" smooth className="flex items-center">
              <span className=" mr-2 p-1 border border-[var(--text-color)] rounded-full text-xs font-bold">
                JLE
              </span>

              <span className="text-base sm:text-xl font-bold">
                My Portfolio
              </span>
            </HashLink>
          </div>
          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline  space-x-4">
              {hashLinks.map((link) => {
                const sectionId = link.path.split("#")[1];
                const isActive = sectionId === activeSection;
                return (
                  <HashLinkItem
                    key={link.path}
                    link={link}
                    isActive={isActive}
                  />
                );
              })}
            </div>
          </div>
          {/* Mobile Menu Button */}
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
      {/* Mobile Navigation Menu with Enhanced Slide Animation */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "max-h-screen opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {hashLinks.map((link) => {
            const sectionId = link.path.split("#")[1];
            const isActive = sectionId === activeSection;
            return (
              <HashLinkItem
                key={link.path}
                link={link}
                onClick={() => setIsOpen(false)}
                extraClasses="block"
                isActive={isActive}
              />
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
