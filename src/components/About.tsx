import React from "react";
import { Link } from "react-router-dom";

interface PhotoSectionProps {
  photoUrl?: string;
  showPhoto?: boolean;
}

// -----------------------------------------------------------------------------
// PhotoSection Component
// -----------------------------------------------------------------------------
// Renders the professional photo with a subtle hover effect (scale-up) for interactivity.
// If 'showPhoto' is false or no photoUrl is provided, the photo is omitted (or a default
// placeholder could be used if desired).
const PhotoSection: React.FC<PhotoSectionProps> = ({ photoUrl, showPhoto }) => {
  // If showPhoto is explicitly false, do not render the photo.
  if (showPhoto === false) return null;

  // Fallback default image path (optional). You can change this to a default placeholder.
  const defaultPhoto = "../assets/about-me-pic.jpg";
  return (
    <div className="w-full md:w-2/5 flex justify-center mb-8 md:mb-0">
      <img
        src={photoUrl ? photoUrl : defaultPhoto}
        alt="Professional Portrait"
        // Tailwind classes explained:
        // - rounded-full: Makes the image circular.
        // - w-48 h-48: Sets consistent width and height.
        // - object-cover: Ensures the image fills the container without distortion.
        // - border-4 border-[var(--accent-color)]: Adds a border with the accent color.
        // - transform, hover:scale-105, transition duration-300: Applies a subtle scale-up on hover.
        className="rounded-full size-96 object-cover border-4 border-[var(--accent-color)] transform hover:scale-105 transition duration-300"
      />
    </div>
  );
};

const BioSection = () => {
  return (
    <div className="w-full md:w-3/5 md:pl-12 animate-fadeIn">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      {/* Bio Text */}
      <p className="text-lg leading-relaxed mb-6">
        I am a BS Mathematics student with a passion for web development.
        Although my professional experience is limited, I have completed several
        frontend projects that showcase my skills and dedication to learning and
        innovation.
      </p>
      {/* Call-to-Action Button */}
      <div className="mb-6">
        <Link
          to="/portfolio"
          role="button"
          aria-label="View Projects"
          // Tailwind classes:
          // - inline-block px-6 py-3: Provides a comfortable clickable area.
          // - text-base sm:text-lg, font-medium: Responsive text sizing.
          // - rounded-md: Modern rounded corners.
          // - text-[var(--primary-color)] bg-[var(--accent-color)]: Color scheme per design brief.
          // - transition transform duration-200: Smooth interactive feedback.
          // - hover:scale-105 hover:shadow-xl, active:scale-95: Subtle hover and click animations.
          // - focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-color)]: Enhanced focus for accessibility.
          className="inline-block px-6 py-3 border border-transparent text-base sm:text-lg font-medium rounded-md text-[var(--primary-color)] bg-[var(--accent-color)] transition transform duration-200 hover:scale-105 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-color)]"
        >
          View Projects
        </Link>
      </div>
      {/* Project Highlights Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Project Highlights</h3>
        {/* 
          The project items are rendered as interactive badges.
          Each badge is clickable (using React Router's Link) to provide more details about the project.
          Hover effects (scale and color change) enhance user engagement.
        */}
        <ul className="flex flex-wrap space-x-4">
          <li className="px-3 py-1 bg-[var(--accent-color)] rounded-full text-sm text-[var(--primary-color)] cursor-pointer transition transform duration-200 hover:scale-105 hover:bg-[var(--secondary-color)]">
            <Link to="/projects/projectA" aria-label="Project A Details">
              Project A
            </Link>
          </li>
          <li className="px-3 py-1 bg-[var(--accent-color)] rounded-full text-sm text-[var(--primary-color)] cursor-pointer transition transform duration-200 hover:scale-105 hover:bg-[var(--secondary-color)]">
            <Link to="/projects/projectB" aria-label="Project B Details">
              Project B
            </Link>
          </li>
          <li className="px-3 py-1 bg-[var(--accent-color)] rounded-full text-sm text-[var(--primary-color)] cursor-pointer transition transform duration-200 hover:scale-105 hover:bg-[var(--secondary-color)]">
            <Link to="/projects/projectC" aria-label="Project C Details">
              Project C
            </Link>
          </li>
        </ul>
      </div>
      {/* Engagement Elements: Social Media & Resume Links */}
      <div className="flex flex-wrap items-center space-x-4">
        <a
          href="https://www.linkedin.com/in/your-profile" // Replace with your LinkedIn URL.
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--accent-color)] hover:underline"
          aria-label="LinkedIn Profile"
        >
          LinkedIn
        </a>
        <a
          href="/resume.pdf" // Replace with your resume path.
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--accent-color)] hover:underline"
          aria-label="Download Resume"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

// -----------------------------------------------------------------------------
// AboutMe Component Props
// -----------------------------------------------------------------------------
// - photoUrl: Optional URL for the professional photo.
// - showPhoto: Optional flag to control whether the photo is rendered.
interface AboutMeProps {
  photoUrl?: string;
  showPhoto?: boolean;
}

// -----------------------------------------------------------------------------
// AboutMe Component
// -----------------------------------------------------------------------------
// Combines the PhotoSection and BioSection into a responsive layout.
// The container uses a flex layout that stacks vertically on small screens (flex-col)
// and arranges side-by-side on medium and larger screens (md:flex-row).
// Extra top padding (e.g., pt-24) is added to account for a fixed navbar at the top,
// ensuring that the section appears centered in the viewport.
// Responsive spacing (py-12, px-4 sm:px-6 md:px-12) is used to maintain a balanced layout.
const About: React.FC<AboutMeProps> = ({ photoUrl, showPhoto = true }) => {
  return (
    <>
      <section
        aria-label="About Me Section"
        className="bg-[var(--primary-color)] text-[var(--text-color)] px-4 sm:px-6 md:px-12"
      >
        <div className="mx-auto min-h-dvh relative flex flex-col md:flex-row items-center">
          <PhotoSection photoUrl={photoUrl} showPhoto={showPhoto} />
          <BioSection />
        </div>
      </section>
    </>
  );
};

export default About;
