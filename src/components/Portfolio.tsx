// Portfolio.tsx
// =============================================================================
// Portfolio Component for Web Developer's Portfolio with Description Modal
//
// This component renders a responsive grid layout of interactive project cards.
// Each card displays a project thumbnail with a gradient overlay, title, brief description,
// tech stack (with icons), a "Preview" button linking to the live website preview,
// and a "View Description" button that opens a modal with the full description.
//
// Design Details:
//   - Background: var(--primary-color)
//   - Text: text-[var(--text-color)]
//   - Accents/Borders: var(--secondary-color)
//   - Typography: Uses the globally configured Roboto font.
//   - Layout: Responsive grid (grid-cols-1 for mobile, sm:grid-cols-2 for tablet, md:grid-cols-3 for desktop).
//   - Vertical Spacing: Top padding (pt-24) prevents content from being hidden behind a fixed navbar.
//   - Interactivity: Hover effects and smooth transitions enhance user engagement.
//   - Focus Styles: Tailwind's focus:ring utilities improve keyboard navigation.
// =============================================================================

import React, { JSX, useState } from "react";
import { BiLogoTailwindCss, BiLogoReact } from "react-icons/bi";
import { SiTypescript, SiVite, SiRedux, SiJavascript } from "react-icons/si";
import nutchaBitesOverview from "../assets/project-nutcha-bites.jpg";
import { MdOpenInNew } from "react-icons/md";

// -----------------------------------------------------------------------------
// Project Interface
// -----------------------------------------------------------------------------
interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string; // Path to the project thumbnail image.
  preview: string; // URL for the live preview of the project.
  techStack: string[]; // List of technologies used (e.g. TypeScript, Tailwind CSS, Vite).
}

// -----------------------------------------------------------------------------
// TechIcon Component
// -----------------------------------------------------------------------------
const techIconMap: { [key: string]: JSX.Element } = {
  TypeScript: <SiTypescript className="w-5 h-5" title="TypeScript" />,
  "Tailwind CSS": (
    <BiLogoTailwindCss className="w-5 h-5" title="Tailwind CSS" />
  ),
  Vite: <SiVite className="w-5 h-5" title="Vite" />,
  React: <BiLogoReact className="w-5 h-5" title="React" />,
  Redux: <SiRedux className="w-5 h-5" title="Redux" />,
  JavaScript: <SiJavascript className="w-5 h-5" title="TypeScript" />,
};

// -----------------------------------------------------------------------------
// TechBadge Component
// -----------------------------------------------------------------------------
const TechBadge: React.FC<{ tech: string }> = ({ tech }) => {
  return (
    <span className="inline-flex justify-start px-2 py-1 m-1 text-xs font-medium rounded-full bg-gray-800 text-gray-200">
      {techIconMap[tech] || null}
    </span>
  );
};

// -----------------------------------------------------------------------------
// DescriptionModal Component
// -----------------------------------------------------------------------------
interface DescriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

const DescriptionModal: React.FC<DescriptionModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
}) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[var(--primary-color)] text-[var(--text-color)] rounded-lg p-6 max-w-md mx-4 shadow-lg">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="mb-4">{description}</p>
        <button
          onClick={onClose}
          className="inline-block px-4 py-2 bg-[var(--secondary-color)] text-[var(--text-color)] rounded hover:bg-[var(--accent-color)] transition"
          aria-label="Close description modal"
        >
          Close
        </button>
      </div>
    </div>
  );
};

// -----------------------------------------------------------------------------
// ProjectCard Component Props
// -----------------------------------------------------------------------------
interface ProjectCardProps {
  project: Project;
}

// -----------------------------------------------------------------------------
// ProjectCard Component
// -----------------------------------------------------------------------------
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="relative rounded-lg overflow-hidden transition transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--secondary-color)] h-64 bg-cover bg-center bg-no-repeat"
        role="listitem"
        aria-label={`Project card for ${project.title}`}
        style={{ backgroundImage: `url(${project.thumbnail})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-color)] to-transparent opacity-70"></div>
        {/* Content */}
        <div className="relative p-4 h-full flex flex-col justify-end text-white">
          {/* Project Title */}
          <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
          {/* Tech Stack Display as Icon Badges */}
          <div className="flex flex-wrap justify-start mb-2">
            {project.techStack.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
          {/* Action Buttons */}
          <div className="flex space-x-2">
            {/* View Description Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block px-3 py-1 bg-[var(--secondary-color)] text-[var(--text-color)] rounded hover:bg-[var(--accent-color)] transition text-sm"
              aria-label={`View description for ${project.title}`}
            >
              View Description
            </button>
            {/* Preview Button */}
            <a
              href={project.preview}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1 items-center px-3 py-1 bg-[var(--secondary-color)] text-[var(--text-color)] rounded hover:bg-[var(--accent-color)] transition text-sm"
              aria-label={`Preview ${project.title}`}
            >
              Preview <MdOpenInNew />
            </a>
          </div>
        </div>
      </div>
      {/* Description Modal */}
      <DescriptionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={project.title}
        description={project.description}
      />
    </>
  );
};

// -----------------------------------------------------------------------------
// Sample Project Data
// -----------------------------------------------------------------------------
const projects: Project[] = [
  {
    id: "1",
    title: "Nutcha Bites",
    description:
      "Nutcha Bites is a product website designed to replicate the experience of a genuine shopping app. I built this site to complement the product aspect of my business proposoal in my certain subject.",
    thumbnail: `${nutchaBitesOverview}`,
    preview: "https://nutcha-bites.vercel.app/",
    techStack: ["TypeScript", "Tailwind CSS", "Vite", "React"],
  },
  {
    id: "2",
    title: "Shopping Cart",
    description: "A brief description of project two.",
    thumbnail: "/images/project2.jpg",
    preview: "https://shoppingcart.example.com",
    techStack: ["JavaScript", "Tailwind CSS", "Vite", "React"],
  },
  {
    id: "3",
    title: "Memory Game",
    description: "A brief description of project three.",
    thumbnail: "/images/project3.jpg",
    preview: "https://memorygame.example.com",
    techStack: ["JavaScript", "Tailwind CSS", "Vite", "React"],
  },
  // Additional projects can be added here.
];

const Portfolio: React.FC = () => {
  return (
    // Section uses top padding (pt-24) to avoid content being hidden behind a fixed navbar.
    <section
      aria-label="Portfolio Section"
      className="relative overflow-hidden bg-[var(--primary-color)] text-[var(--text-color)] pt-24 pb-12 px-4 sm:px-6 md:px-12"
    >
      <div className="container mx-auto animate-fadeIn">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-8">My Portfolio</h2>
        {/* Grid Layout Container */}
        <div
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
