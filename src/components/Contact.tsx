// Contact.tsx
// =============================================================================
// Contact Component for Personal Portfolio
//
// This component renders a minimalist contact section for a personal portfolio site.
// It features a section heading ("Contact Me"), a brief tagline ("I’d love to hear from you!"),
// an optional introductory sentence ("Feel free to reach out via email – I’m always excited to connect!"),
// and a prominently displayed button labeled "Let's Get in Touch".
//
// Design Specifications:
//   - Background: var(--primary-color)
//   - Text: text-[var(--text-color)]
//   - Button: Background is var(--accent-color) and text is styled with text-[var(--text-color)].
//             It uses the 'mailto:' URI scheme to open the user's default email client with the recipient
//             prefilled as 'jlescarlan11@gmail.com'.
//   - Hover Effects: The button exhibits a subtle background color change, slight scale-up, and a mild pulse
//                    animation (hover:animate-pulse) to enhance interactivity without detracting from the
//                    minimalist design.
//   - Layout & Spacing: Responsive padding is applied (pt-24, pb-12, and responsive horizontal padding)
//                       to ensure the section is centered and fully visible below a fixed navbar on all devices.
//                       The pt-24 top padding is explicitly chosen to prevent the section from being hidden.
//   - Animation: The section utilizes an animate-fadeIn class for a subtle entrance animation.
//                (The animate-fadeIn class is defined in the Tailwind configuration.)
//   - Accessibility: The section uses role="contentinfo" and ARIA labels to support assistive technologies,
//                    ensuring interactive elements are clearly identified.
//
// This component is part of my personal portfolio showcasing frontend projects built with React,
// TypeScript, Tailwind CSS, and React Router. Inline documentation explains each design decision for
// future reference.
// =============================================================================

import React from "react";

const Contact: React.FC = () => {
  return (
    // The section element uses:
    // - role="contentinfo" to semantically indicate it provides information about the page's content.
    // - pt-24 ensures there is enough space at the top so that the content is not hidden behind a fixed navbar.
    //   This padding choice keeps the section centered on desktop, tablet, and mobile devices.
    // - Responsive padding (px-4 for mobile, sm:px-6, md:px-12) ensures a balanced layout across various devices.
    // - animate-fadeIn applies a subtle entrance animation on load (defined in Tailwind config).
    <section
      role="contentinfo"
      aria-label="Contact Section"
      className="relative overflow-hidden bg-[var(--primary-color)] text-[var(--text-color)] pt-24 pb-12 px-4 sm:px-6 md:px-12"
    >
      <div className="animate-fadeIn container relative mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        {/* Brief Tagline */}
        <p className="text-lg mb-4">I’d love to hear from you!</p>
        {/* Optional Introductory Sentence to Encourage Engagement */}
        <p className="text-base mb-8">
          Feel free to reach out via email – I’m always excited to connect!
        </p>
        {/* 
          "Let's Get in Touch" Button:
          - Uses the 'mailto:' URI to open the default email client with 'jlescarlan11@gmail.com' as the recipient.
          - Styled with a background color of var(--accent-color) and text-[var(--text-color)] for the button text.
          - Includes subtle hover effects: background change (hover:bg-[var(--secondary-color)]), a slight scale-up (hover:scale-105),
            and a subtle pulse animation (hover:animate-pulse) to enhance interactivity.
          - Enhanced focus styles (using focus:ring utilities) ensure that keyboard users can easily identify the active element.
          - aria-label clarifies the button's function for assistive technologies.
        */}
        <a
          href="mailto:jnescarlan@up.edu.ph"
          aria-label="Send email to jnescarlan@up.edu.ph"
          className="inline-block bg-[var(--accent-color)] text-[var(--text-color)] font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out hover:bg-[var(--secondary-color)] hover:scale-105 hover:animate-pulse focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-color)]"
        >
          Let's Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Contact;
