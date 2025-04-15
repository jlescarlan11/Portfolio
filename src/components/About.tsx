import React, { JSX } from "react";
import { BiLogoReact, BiLogoTailwindCss } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { MdOpenInNew } from "react-icons/md";
import {
  SiC,
  SiCplusplus,
  SiCss3,
  SiEjs,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiRedux,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Resume from "../assets/Resume.pdf";

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
    title: "Freedom Wall",
    preview: "https://web-production-2b2eb.up.railway.app/",
  },
  {
    id: "2",
    title: "Nutcha Bites",
    preview: "https://nutcha-bites.vercel.app/",
  },
  {
    id: "3",
    title: "PokeInventory",
    preview: "https://inventory-application-xiyr.onrender.com/",
  },
];

// -----------------------------------------------------------------------------
// TechIcon Component
// -----------------------------------------------------------------------------
const techIconMap: { [key: string]: JSX.Element } = {
  HTML: <SiHtml5 title="HTML" />,
  CSS: <SiCss3 title="CSS" />,
  Python: <SiPython title="Python" />,
  C: <SiC title="C" />,
  "C++": <SiCplusplus title="C++" />,
  "My SQL": <SiMysql title="MySQL" />,
  PostgreSQL: <SiPostgresql title="PostgreSQL" />,
  TypeScript: <SiTypescript title="TypeScript" />,
  "Tailwind CSS": <BiLogoTailwindCss title="Tailwind CSS" />,
  Vite: <SiVite title="Vite" />,
  React: <BiLogoReact title="React" />,
  Redux: <SiRedux title="Redux" />,
  JavaScript: <SiJavascript title="TypeScript" />,
  NodeJS: <SiNodedotjs title="Node JS" />,
  EJS: <SiEjs title="EJS" />,
  Express: <SiExpress title="Express" />,
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

const techStacks = [
  "NodeJS",
  "Express",
  "EJS",
  "React",
  "Vite",
  "Tailwind CSS",
  "TypeScript",
  "My SQL",
  "PostgreSQL",
  "HTML",
  "CSS",
  "Python",
  "C",
  "C++",
];

const BioSection = () => {
  return (
    <div className="w-full md:w-3/5 md:pl-12 ">
      {/* Section Heading */}
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      {/* Bio Text */}
      <p className="text-lg text-pretty hyphens-auto  text-justify leading-relaxed mb-6">
        I am a Mathematics Major at the University of the Philippines who loves
        building web applications. I’ve built projects like a product website, a
        freedom wall, and a book library using tools such as React, Vite,
        Tailwind CSS, HTML, JavaScript, and Express. I can also work with
        Python, C, C++, and can manage databases with MySQL and PostgreSQL. My
        coursework in data structures, computation theory, and databases has
        given me a solid technical foundation, and lastly, I enjoy turning ideas
        into a simple, user-friendly solutions.
      </p>
      {/* Techstacks */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Tools</h3>
        {/* 
          The project items are rendered as interactive badges.
          Each badge is clickable (using React Router's Link) to provide more details about the project.
          Hover effects (scale and color change) enhance user engagement.
        */}
        <ul className="flex flex-wrap gap-2 ">
          {techStacks.map((techStack) => (
            <li
              key={techStack}
              className="flex flex-row items-center gap-1 px-3 py-1 bg-[var(--accent-color)] rounded-full text-sm text-[var(--text-color)] cursor-pointer transition transform duration-200 hover:scale-105 hover:bg-[var(--secondary-color)] hover:animate-pulse"
            >
              <TechBadge tech={techStack} />
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
        <div className="flex flex-wrap gap-2">
          {projectHighlights.map((projectHighlight, index) => (
            <Link
              key={index}
              to={projectHighlight.preview}
              className="flex flex-row items-center justify-center gap-1 px-3 py-1 bg-[var(--accent-color)] rounded-full text-sm text-[var(--text-color)] hover:animate-pulse cursor-pointer transition transform duration-200 hover:scale-105 hover:bg-[var(--secondary-color)]"
              aria-label="Go to Project"
            >
              {projectHighlight.title}
              {""}
              <MdOpenInNew className="text-base" />
            </Link>
          ))}
        </div>
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
          className="inline-block px-6 py-3 border border-transparent  hover:animate-pulse text-base sm:text-lg font-medium rounded-md text-[var(--text-color)] bg-[var(--accent-color)] transition transform duration-200 hover:scale-105 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-color)]"
        >
          View All Projects
        </HashLink>
      </div>
      {/* Engagement Elements: Social Media & Resume Links */}
      <div className="flex flex-wrap text-sm items-center space-x-4">
        {/* Location */}
        <p className="flex gap-1 items-center text-balance break-normal  text-justify leading-relaxed">
          <CiLocationOn /> Cebu City
        </p>
        <Link
          to="https://www.linkedin.com/in/john-lester-escarlan-3a23072a6/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--text-color)] hover:underline"
          aria-label="LinkedIn Profile"
        >
          LinkedIn
        </Link>
        <Link
          to="https://github.com/jlescarlan11"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--text-color)] hover:underline"
          aria-label="GitHub Profile"
        >
          GitHub
        </Link>
        <Link
          to={Resume}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--text-color)] hover:underline"
          aria-label="Download Resume"
        >
          Resume
        </Link>
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
        <div className="container mx-auto flex flex-col md:flex-row items-start animate-fadeIn">
          <PhotoSection photoUrl={photoUrl} showPhoto={showPhoto} />
          <BioSection />
        </div>
      </section>
    </>
  );
};

export default About;
