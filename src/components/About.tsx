import React, { JSX } from "react";
import { BiLogoReact, BiLogoTailwindCss } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { MdOpenInNew } from "react-icons/md";
import {
  SiJavascript,
  SiNodedotjs,
  SiRedux,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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

interface ProjectHighlight {
  id: string;
  title: string;
  preview: string;
}

const projectHighlights: ProjectHighlight[] = [
  {
    id: "1",
    title: "Nutcha Bites",
    preview: "https://nutcha-bites.vercel.app/",
  },
  {
    id: "2",
    title: "Shopping Cart",
    preview: "https://shopping-cart-ivory-ten.vercel.app/",
  },
  {
    id: "3",
    title: "Memory Game",
    preview: "https://pokemon-memory-game-olive.vercel.app/",
  },
];

// -----------------------------------------------------------------------------
// TechIcon Component
// -----------------------------------------------------------------------------
const techIconMap: { [key: string]: JSX.Element } = {
  TypeScript: <SiTypescript title="TypeScript" />,
  "Tailwind CSS": <BiLogoTailwindCss title="Tailwind CSS" />,
  Vite: <SiVite title="Vite" />,
  React: <BiLogoReact title="React" />,
  Redux: <SiRedux title="Redux" />,
  JavaScript: <SiJavascript title="TypeScript" />,
  NodeJS: <SiNodedotjs title="Node JS" />,
};

// -----------------------------------------------------------------------------
// TechBadge Component
// -----------------------------------------------------------------------------
const TechBadge: React.FC<{ tech: string }> = ({ tech }) => {
  return (
    <span className="inline-flex items-center gap-1 justify-start m-1 text-xs font-medium rounded-full text-[var(--text-color)">
      {techIconMap[tech] || null} {tech}
    </span>
  );
};

const techStacks = ["NodeJS", "Tailwind CSS", "TypeScript", "Vite", "React"];

const BioSection = () => {
  return (
    <div className="w-full md:w-3/5 md:pl-12 ">
      {/* Section Heading */}
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      {/* Bio Text */}
      <p className="text-lg text-wrap break-normal hyphens-auto text-justify leading-relaxed mb-6">
        I am a BS Mathematics student with a passion for web development.
        Although my professional experience is limited, I have completed several
        frontend projects that showcase my skills and dedication to learning and
        innovation.
      </p>
      {/* Techstacks */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Tech Stacks</h3>
        {/* 
          The project items are rendered as interactive badges.
          Each badge is clickable (using React Router's Link) to provide more details about the project.
          Hover effects (scale and color change) enhance user engagement.
        */}
        <ul className="flex flex-wrap gap-2">
          {techStacks.map((techStack) => (
            <li className="flex flex-row items-center gap-1 px-3 py-1 bg-[var(--accent-color)] rounded-full text-sm text-[var(--text-color)] cursor-pointer transition transform duration-200 hover:scale-105 hover:bg-[var(--secondary-color)]">
              <TechBadge key={techStack} tech={techStack} />
            </li>
          ))}
        </ul>
      </div>

      {/* Project Highlights Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Project Highlights</h3>
        {/* 
          The project items are rendered as interactive badges.
          Each badge is clickable (using React Router's Link) to provide more details about the project.
          Hover effects (scale and color change) enhance user engagement.
        */}
        <ul className="flex flex-wrap gap-2">
          {projectHighlights.map((projectHighlight) => (
            <Link to={projectHighlight.preview} aria-label="Go to Project">
              <li className="flex flex-row items-center gap-1 px-3 py-1 bg-[var(--accent-color)] rounded-full text-sm text-[var(--text-color)] cursor-pointer transition transform duration-200 hover:scale-105 hover:bg-[var(--secondary-color)]">
                {projectHighlight.title}
                <MdOpenInNew className="text-base" />
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {/* Call-to-Action Button */}
      <div className="mb-6">
        <HashLink
          smooth
          to="/#portfolio"
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
          className="inline-block px-6 py-3 border border-transparent text-base sm:text-lg font-medium rounded-md text-[var(--text-color)] bg-[var(--accent-color)] transition transform duration-200 hover:scale-105 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-color)]"
        >
          View All Projects
        </HashLink>
      </div>
      {/* Engagement Elements: Social Media & Resume Links */}
      <div className="flex flex-wrap text-sm items-center space-x-4">
        {/* Location */}
        <p className="flex gap-1 items-center text-balance break-normal hyphens-auto text-justify leading-relaxed">
          <CiLocationOn /> Cebu City
        </p>
        <a
          href="https://www.linkedin.com/in/john-lester-escarlan-3a23072a6/" // Replace with your LinkedIn URL.
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--text-color)] hover:underline"
          aria-label="LinkedIn Profile"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/jlescarlan11" // Replace with your LinkedIn URL.
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--text-color)] hover:underline"
          aria-label="GitHub Profile"
        >
          GitHub
        </a>
        <a
          href="/resume.pdf" // Replace with your resume path.
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--text-color)] hover:underline"
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
        className="relative overflow-hidden bg-[var(--primary-color)] text-[var(--text-color)] pt-24 pb-12 px-4 sm:px-6 md:px-12"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center animate-fadeIn">
          <PhotoSection photoUrl={photoUrl} showPhoto={showPhoto} />
          <BioSection />
        </div>
      </section>
    </>
  );
};

export default About;
