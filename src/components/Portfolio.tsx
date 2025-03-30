// Portfolio.tsx
// =============================================================================
// Portfolio Component for Web Developer's Portfolio (Vertical Card Layout)
//
// Each project card displays the image at the top, followed by the project
// details below (title, description, tech stack, and preview button).
// =============================================================================

import React, { JSX } from "react";
import { BiLogoTailwindCss, BiLogoReact } from "react-icons/bi";
import {
  SiTypescript,
  SiVite,
  SiRedux,
  SiJavascript,
  SiNodedotjs,
} from "react-icons/si";
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
  techStack: string[]; // List of technologies used.
}

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
    <span className="inline-flex items-center gap-1 justify-start m-1 text-xs font-medium rounded-full text-[var(--text-color)  bg-[var(--accent-color)] py-1 px-2">
      {techIconMap[tech] || null} {tech}
    </span>
  );
};

// -----------------------------------------------------------------------------
// ProjectCard Component (Vertical Layout)
// -----------------------------------------------------------------------------
interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div
      className="bg-[var(--primary-color)] rounded-lg shadow  border border-[var(--secondary-color)] overflow-hidden transition transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--secondary-color)]"
      role="listitem"
      aria-label={`Project card for ${project.title}`}
    >
      {/* Project Details */}
      <div className="p-4">
        {/* Project Image */}
        <div
          className="h-56 bg-cover bg-center mb-4 rounded-xl "
          style={{ backgroundImage: `url(${project.thumbnail})` }}
        ></div>
        {/* Title */}
        <h3 className="text-2xl font-bold mb-2 text-[var(--text-color)]">
          {project.title}
        </h3>
        {/* Description */}
        <p className="text-sm mb-4 text-[var(--text-color)]">
          {project.description}
        </p>
        {/* Tech Stack Badges */}
        <div className="flex flex-wrap mb-4">
          {project.techStack.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>
        {/* Preview Button */}
        <div>
          <a
            href={project.preview}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--secondary-color)] text-[var(--text-color)] rounded hover:bg-[var(--accent-color)] transition text-sm"
            aria-label={`Preview ${project.title}`}
          >
            Preview <MdOpenInNew />
          </a>
        </div>
      </div>
    </div>
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
      "Nutcha Bites is a product website designed to replicate the experience of a genuine shopping app. I built this site to complement the product aspect of my business proposal.",
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

// -----------------------------------------------------------------------------
// Portfolio Component
// -----------------------------------------------------------------------------
const Portfolio: React.FC = () => {
  return (
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
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
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
