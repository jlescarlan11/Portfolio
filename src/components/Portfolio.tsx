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
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import nutchaBitesOverview from "../assets/projects/project-nutcha-bites.jpg";
import bookLibraryPreview from "../assets/projects/project-book-library.jpg";
import rpsPreview from "../assets/projects/project-rock-paper-scissor.jpg";
import calculatorPreview from "../assets/projects/project-calculator.jpg";
import cvBuilderPreview from "../assets/projects/cv-builder.jpg";
import memoryGamePreview from "../assets/projects/memory-game.jpg";
import shoppingCartPreview from "../assets/projects/shopping-cart.jpg";
import { MdOpenInNew } from "react-icons/md";

// -----------------------------------------------------------------------------
// Project Interface
// -----------------------------------------------------------------------------
interface Project {
  id?: string;
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
  HTML: <SiHtml5 title="HTML" />,
  CSS: <SiCss3 title="CSS" />,
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
        {/* <img src={project.thumbnail} alt="" /> */}
        {/* Title */}
        <h3 className="text-2xl font-bold mb-2 text-[var(--text-color)]">
          {project.title}
        </h3>
        {/* Description */}
        <p className="text-sm mb-4 text-[var(--text-color)] text-wrap break-normal hyphens-auto text-justify">
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
    title: "Nutcha Bites",
    description:
      "Nutcha Bites is a product website designed to replicate the experience of a genuine shopping app. I built this site to complement the product aspect of my business proposal.",
    thumbnail: `${nutchaBitesOverview}`,
    preview: "https://nutcha-bites.vercel.app/",
    techStack: ["TypeScript", "Tailwind CSS", "Vite", "React"],
  },
  {
    title: "Shopping Cart",
    description:
      "A simple shopping cart that calls the product by fake store api. This project emulates the shopping app that add to cart, checkout, remove, and updating orders",
    thumbnail: `${shoppingCartPreview}`,
    preview: "https://shopping-cart-ivory-ten.vercel.app/",
    techStack: ["Tailwind CSS", "Vite", "React"],
  },
  {
    title: "Memory Game",
    description:
      "A simple game that randomly shuffles cards to test your memory.",
    thumbnail: `${memoryGamePreview}`,
    preview: "https://pokemon-memory-game-olive.vercel.app/",
    techStack: ["React", "Vite", "CSS"],
  },
  {
    title: "CV Builder",
    description:
      "A simple CV builder that asks some information about you then automatically build a CV to download.",
    thumbnail: `${cvBuilderPreview}`,
    preview: "https://cv-application-five-pink.vercel.app/",
    techStack: ["React", "Vite"],
  },
  {
    title: "Book Library",
    description: "A book library that stores a collection of books locally.",
    thumbnail: `${bookLibraryPreview}`,
    preview: "https://jlescarlan11.github.io/book-library/",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Rock Paper Scissor",
    description:
      "A simple rock paper scissor game that challenges computer with its random pick.",
    thumbnail: `${rpsPreview}`,
    preview: "https://jlescarlan11.github.io/rock-paper-scissor/",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Calculator",
    description: "A simple calculator app that computes a simple calculation.",
    thumbnail: `${calculatorPreview}`,
    preview: "https://jlescarlan11.github.io/calculator/",
    techStack: ["HTML", "CSS", "JavaScript"],
  },

  // Additional projects can be added here.
];

// -----------------------------------------------------------------------------
// Portfolio Component
// -----------------------------------------------------------------------------
const Portfolio: React.FC = () => {
  return (
    <section
      role="region"
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
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
