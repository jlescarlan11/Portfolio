const Footer = () => {
  return (
    <>
      <footer
        role="contentinfo"
        aria-label="Footer Section"
        className="bg-[var(--primary-color)] border-t border-[var(--secondary-color)] text-[var(--text-color)] py-2 px-4 sm:px-6 md:px-12 "
      >
        <div className="container mx-auto text-center animate-fadeIn">
          {/* Copyright Notice */}
          <p className="text-base">
            &copy; {new Date().getFullYear()} John Lester Escarlan. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
