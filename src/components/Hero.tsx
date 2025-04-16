// Hero.tsx
// =============================================================================
// Hero Component for Personal Portfolio
//
// This component renders a full-screen hero section featuring a dynamic,
// animated background, bold typography, and an interactive Call-to-Action (CTA)
// button. It is designed as part of a portfolio website built with React,
// TypeScript, Tailwind CSS, and React Router.
//
// Custom Animations:
//   - animate-fadeIn: Applies a smooth fade-in effect when the component loads.
//     (Defined in your global CSS or tailwind.config.js as follows:)
//       @keyframes fadeIn {
//         from { opacity: 0; }
//         to { opacity: 1; }
//       }
//       .animate-fadeIn {
//         animation: fadeIn 1s ease-out forwards;
//       }
//     Adjust the duration, easing, or keyframe values as needed.
//
//   - animate-gradient: Creates an animated gradient background.
//     (Define in your global CSS or tailwind.config.js with keyframes such as:)
//       @keyframes gradientShift {
//         0% { background-position: 0% 50%; }
//         50% { background-position: 100% 50%; }
//         100% { background-position: 0% 50%; }
//       }
//       .animate-gradient {
//         background-size: 200% 200%;
//         animation: gradientShift 10s ease infinite;
//       }
//     Tweak the duration or easing to adjust the animation speed and smoothness.
//
// Responsive Design and Spacing:
//   - Uses responsive Tailwind classes (e.g., px-6, md:px-20, py-8) to ensure
//     proper spacing on both very small and very large screens.
//   - Text sizes and margins are adjusted for optimal readability across devices.
//
// Typography:
//   - The component explicitly uses the Poppins font with fallback to sans-serif.
//     Import Poppins via @fontsource/poppins and ensure fallback fonts are provided
//     in the inline style or Tailwind configuration.
//
// CTA Interactivity:
//   - The CTA button ("View My Work") includes enhanced hover and focus effects,
//     such as background transitions, subtle scaling, and shadow effects.
//   - ARIA attributes and focus ring utilities are used to ensure the button is
//     accessible with clear, descriptive labels.
//
// Accessibility Enhancements:
//   - The section uses role="banner" and an aria-label for screen readers.
//   - Interactive elements, including the CTA button, have robust focus states and
//     clear ARIA labels.
// =============================================================================

import React from "react";
import { HashLink } from "react-router-hash-link";
// Import Poppins font explicitly for typography

const Hero: React.FC = () => {
  return (
    // Main section container with role="banner" for accessibility and a descriptive aria-label.
    // Responsive padding (px-6 for small screens, md:px-20 for medium and above) ensures proper spacing.
    // The inline style provides a font-family fallback if Poppins is unavailable.
    <div>
      {/* <Navbar /> */}
      <section
        role="banner"
        aria-label="Hero section introducing portfolio"
        className=" overflow-hidden relative flex flex-col items-center justify-center h-screen bg-[var(--primary-color)] px-6 md:px-20 py-8"
        style={{ fontFamily: '"Poppins", sans-serif' }}
      >
        {/*
        Dynamic Gradient Overlay:
        - Positioned absolutely to cover the entire hero section.
        - Uses a gradient from var(--primary-color) to var(--secondary-color).
        - The "animate-gradient" class applies an animated effect.
        - Custom keyframes (gradientShift) are defined in your global CSS:
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradientShift 10s ease infinite;
          }
      */}
        <div className="z-10 absolute inset-0 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] opacity-60 animate-gradient"></div>
        {/*
        Content Container:
        - Positioned above the overlay using a higher z-index.
        - The "animate-fadeIn" class applies a smooth fade-in effect on load.
        - Custom keyframes (fadeIn) are defined in your global CSS:
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }
      */}
        <div className="relative z-10 text-center animate-fadeIn">
          {/* Main Heading: Displays the name with responsive text sizes */}
          <span className="mb-4 text-xs sm:text-base text-[var(--text-color)]">
            HELLO, I'M
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-[var(--text-color)]">
            JOHN LESTER ESCARLAN
          </h1>
          {/* Tagline: A brief description with responsive spacing */}
          <p className="mt-4 text-xs sm:text-base text-[var(--text-color)]">
            BS MATH MAJOR &amp; ASPIRING FULL-STACK DEVELOPER
          </p>
          {/* 
          Call-to-Action (CTA) Button:
          - Navigates to the portfolio page using React Router's Link.
          - Enhanced with nuanced hover (scale and shadow) and focus effects.
          - ARIA attributes provide descriptive labeling for assistive technologies.
        */}

          <HashLink
            smooth
            to="/#portfolio"
            role="button"
            aria-label="View My Work"
            className="mt-8 inline-block px-6 py-3 border border-transparent text-xs sm:text-base font-medium rounded-md 
                       text-[var(--text-color)] bg-[var(--accent-color)] 
                       transition-all duration-200 transform hover:scale-105 hover:shadow-lg 
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-color)] hover:animate-pulse"
          >
            View My Work
          </HashLink>
        </div>
      </section>
    </div>
  );
};

export default Hero;
