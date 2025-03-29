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
import { Link } from "react-router-dom";
import UnfilledCircle from "./UnfilledCircle";
import Circle from "./Circle";
import GridLine from "./GridLines";
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
        className="relative flex flex-col items-center justify-center h-screen bg-[var(--primary-color)] overflow-hidden px-6 md:px-20 py-8"
        style={{ fontFamily: '"Poppins", sans-serif' }}
      >
        <UnfilledCircle className="size-40 absolute stroke-[var(--text-color)] stroke-2 -right-24 top-4 opacity-20" />
        <Circle
          className="size-96 fill-[var(--text-color)] absolute -top-48 -left-48
        opacity-20"
        />
        <Circle className="size-96 fill-[var(--text-color)] absolute  -bottom-48 -right-48 opacity-20" />
        {/* grid lines */}
        <GridLine className="size-48 fill-[var(--primary-color)] absolute top-0 right-0 opacity-20" />
        <GridLine className="size-48 fill-[var(--primary-color)] absolute -bottom-24 left-0 opacity-20" />
        <UnfilledCircle className="size-40 absolute stroke-[var(--text-color)] stroke-2 left-4 -bottom-24 opacity-20" />

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
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] opacity-60 animate-gradient"></div>
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
          <h5 className="mb-4 text-xl md:text-2xl text-[var(--text-color)]">
            Hello, I'm
          </h5>
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-color)]">
            John Lester Escarlan
          </h1>
          {/* Tagline: A brief description with responsive spacing */}
          <p className="mt-4 text-xl md:text-2xl text-[var(--text-color)]">
            BS Mathematics Student &amp; Aspiring Web Developer
          </p>
          {/* 
          Call-to-Action (CTA) Button:
          - Navigates to the portfolio page using React Router's Link.
          - Enhanced with nuanced hover (scale and shadow) and focus effects.
          - ARIA attributes provide descriptive labeling for assistive technologies.
        */}
          <div className="mt-8">
            <Link
              to="/portfolio"
              role="button"
              aria-label="View My Work"
              className="inline-block px-6 py-3 border border-transparent text-base md:text-lg font-medium rounded-md 
                       text-[var(--text-color)] bg-[var(--accent-color)] 
                       transition-all duration-200 transform hover:scale-105 hover:shadow-lg 
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-color)]"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
