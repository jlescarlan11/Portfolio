const Footer = () => {
  return (
    <>
      <footer
        role="contentinfo"
        aria-label="Footer Section"
        className="bg-[var(--primary-color)] border-t border-[var(--secondary-color)] text-[var(--text-color)] py-8 px-4 sm:px-6 md:px-12 animate-fadeIn"
      >
        <div className="container mx-auto text-center">
          {/* Copyright Notice */}
          <p className="text-sm">
            &copy; {new Date().getFullYear()} John Lester Escarlan. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
