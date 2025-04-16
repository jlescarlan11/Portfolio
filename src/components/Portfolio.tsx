// Portfolio.tsx
// =============================================================================
// Portfolio Component for Web Developer's Portfolio (Vertical Card Layout)
// Enhanced with filtering, tech badges, feature overlays, and code links.
// =============================================================================

import React, { JSX, useState } from "react";
import { BiLogoTailwindCss, BiLogoReact } from "react-icons/bi";
import {
  SiTypescript,
  SiVite,
  SiRedux,
  SiJavascript,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiEjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import { MdOpenInNew } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

// Assets
import nutchaBitesOverview from "../assets/projects/project-nutcha-bites.jpg";
import bookLibraryPreview from "../assets/projects/project-book-library.jpg";
import rpsPreview from "../assets/projects/project-rock-paper-scissor.jpg";
import calculatorPreview from "../assets/projects/project-calculator.jpg";
import cvBuilderPreview from "../assets/projects/project-cv-builder.jpg";
import memoryGamePreview from "../assets/projects/project-memory-game.jpg";
import shoppingCartPreview from "../assets/projects/project-shopping-cart.jpg";
import freedomWallOverview from "../assets/projects/project-freedom-wall.png";
import pokemonInventoryOverview from "../assets/projects/project-pokemon-inventory.png";

// -----------------------------------------------------------------------------
// Project Interface
// -----------------------------------------------------------------------------
interface Project {
  id?: string;
  title: string;
  description: string;
  thumbnail: string; // Path to the project thumbnail image.
  preview: string; // URL for the live preview of the project.
  code?: string; // URL for the code repository.
  techStack: string[]; // List of technologies used.
  category: ("full-stack" | "frontend" | "backend")[]; // For filtering
  features?: string[]; // Optional feature list for hover overlay
}

// -----------------------------------------------------------------------------
// Tech Icon Map & TechBadge Component
// -----------------------------------------------------------------------------
const techIconMap: { [key: string]: JSX.Element } = {
  TypeScript: <SiTypescript title="TypeScript" />,
  "Tailwind CSS": <BiLogoTailwindCss title="Tailwind CSS" />,
  Vite: <SiVite title="Vite" />,
  React: <BiLogoReact title="React" />,
  Redux: <SiRedux title="Redux" />,
  JavaScript: <SiJavascript title="JavaScript" />,
  NodeJS: <SiNodedotjs title="Node.js" />,
  HTML: <SiHtml5 title="HTML" />,
  CSS: <SiCss3 title="CSS" />,
  EJS: <SiEjs title="EJS" />,
  Express: <SiExpress title="Express" />,
  MongoDB: <SiMongodb title="MongoDB" />,
  PostgreSQL: <SiPostgresql title="PostgreSQL" />,
};

const TechBadge: React.FC<{ tech: string }> = ({ tech }) => (
  <span className="inline-flex items-center gap-1 m-1 text-xs font-medium rounded-full bg-[var(--accent-color)] text-[var(--text-color)] py-1 px-2">
    {techIconMap[tech] || null}
    <span>{tech}</span>
  </span>
);

// -----------------------------------------------------------------------------
// ProjectCard Component (Vertical Layout with Feature Overlay)
// -----------------------------------------------------------------------------
interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div
    className="bg-[var(--primary-color)] rounded-lg shadow border border-[var(--secondary-color)] overflow-hidden transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--secondary-color)]"
    role="listitem"
    aria-label={`Project card for ${project.title}`}
  >
    <div className="relative group">
      {/* Thumbnail */}
      <img
        src={project.thumbnail}
        alt={`Screenshot of ${project.title}`}
        className="w-full h-56 object-cover"
        loading="lazy"
      />
      {/* Feature Overlay */}
      {project.features && (
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 p-4 flex items-center justify-center">
          <ul className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            {project.features.map((feat, idx) => (
              <li key={idx} className="flex items-center mb-2">
                <span className="mr-2">✓</span>
                {feat}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

    <div className="p-4">
      <h3 className="text-base sm:text-xl font-semibold mb-2">
        {project.title.toLocaleUpperCase()}
      </h3>
      <p className="text-xs mb-4 text-[var(--text-color)] hyphens-auto">
        {project.description}
      </p>

      <div className="flex flex-wrap mb-4">
        {project.techStack.map((tech) => (
          <TechBadge key={tech} tech={tech} />
        ))}
      </div>

      <div className="flex gap-2">
        <a
          href={project.preview}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-[var(--secondary-color)] text-[var(--text-color)] rounded hover:bg-[var(--accent-color)] transition-colors text-xs"
          aria-label={`Live demo of ${project.title}`}
        >
          Live Demo <MdOpenInNew className="text-xs" />
        </a>
        {project.code && (
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-[var(--secondary-color)] text-[var(--text-color)] rounded hover:bg-[var(--accent-color)] transition-colors text-sm"
            aria-label={`View code for ${project.title}`}
          >
            Code <FaGithub />
          </a>
        )}
      </div>
    </div>
  </div>
);

// -----------------------------------------------------------------------------
// Project Data with Categories & Features
// -----------------------------------------------------------------------------
const projects: Project[] = [
  {
    title: "PokéInventory",
    description:
      "Full-stack Pokémon and Trainer collection manager with CRUD operations and search/filter functionality.",
    thumbnail: pokemonInventoryOverview,
    preview: "https://inventory-application-xiyr.onrender.com/",
    code: undefined,
    techStack: ["Express", "EJS", "Tailwind CSS", "Javascript", "PostgreSQL"],
    category: ["full-stack", "backend"],
    features: [
      "CRUD operations",
      "Search and filter functionality",
      "Error handling middleware",
    ],
  },
  {
    title: "Freedom Wall",
    description:
      "Community platform for sharing thoughts, concerns, and unspoken feelings.",
    thumbnail: freedomWallOverview,
    preview: "https://web-production-2b2eb.up.railway.app/",
    code: undefined,
    techStack: ["Express", "EJS", "JavaScript", "CSS", "PostgreSQL"],
    category: ["full-stack", "backend"],
    features: [
      "Create and Read posts",
      "Error handling middleware",
      "Search and filter functionality",
    ],
  },
  {
    title: "Nutcha Bites",
    description:
      "E-commerce prototype with shopping cart and checkout functionality.",
    thumbnail: nutchaBitesOverview,
    preview: "https://nutcha-bites.vercel.app/",
    code: undefined,
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    category: ["frontend"],
    features: [
      "Shopping cart",
      "Checkout functionality",
      "Emulated payment gateway",
      "Downloadable Invoice",
    ],
  },
  {
    title: "Shopping Cart",
    description:
      "A simple shopping cart that emulates adding, removing, and updating orders using a fake store API.",
    thumbnail: shoppingCartPreview,
    preview: "https://shopping-cart-ivory-ten.vercel.app/",
    techStack: ["React", "Vite", "Tailwind CSS"],
    category: ["frontend"],
    features: ["Shopping cart", "Checkout functionality"],
  },
  {
    title: "Memory Game",
    description:
      "A simple game that randomly shuffles cards to test your memory.",
    thumbnail: memoryGamePreview,
    preview: "https://pokemon-memory-game-olive.vercel.app/",
    techStack: ["React", "Vite", "CSS"],
    category: ["frontend"],
    features: ["Memory game", "Responsive design"],
  },
  {
    title: "CV Builder",
    description:
      "A simple CV builder that collects your info and generates a downloadable resume.",
    thumbnail: cvBuilderPreview,
    preview: "https://cv-application-five-pink.vercel.app/",
    techStack: ["React", "Vite"],
    category: ["frontend"],
    features: ["CV builder", "Downloadable resume"],
  },
  {
    title: "Book Library",
    description: "A book library that stores a collection of books locally.",
    thumbnail: bookLibraryPreview,
    preview: "https://jlescarlan11.github.io/book-library/",
    techStack: ["HTML", "CSS", "JavaScript"],
    category: ["frontend"],
    features: ["Book library", "Local storage"],
  },
  {
    title: "Rock Paper Scissor",
    description:
      "A simple rock-paper-scissor game that challenges the computer with random picks.",
    thumbnail: rpsPreview,
    preview: "https://jlescarlan11.github.io/rock-paper-scissor/",
    techStack: ["HTML", "CSS", "JavaScript"],
    category: ["frontend"],
    features: ["Rock-paper-scissor game", "Random computer pick"],
  },
  {
    title: "Calculator",
    description: "A simple calculator app that computes basic arithmetic.",
    thumbnail: calculatorPreview,
    preview: "https://jlescarlan11.github.io/calculator/",
    techStack: ["HTML", "CSS", "JavaScript"],
    category: ["frontend"],
    features: ["Calculator", "Basic arithmetic operations"],
  },

  // ... add your other projects here, with categories and optional features
];

// -----------------------------------------------------------------------------
// Portfolio Component with Category Filtering
// -----------------------------------------------------------------------------
const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "full-stack" | "frontend" | "backend"
  >("all");

  const filtered = projects.filter(
    (p) => selectedCategory === "all" || p.category.includes(selectedCategory)
  );

  return (
    <section
      role="region"
      aria-label="Portfolio Section"
      className="relative overflow-hidden bg-[var(--primary-color)] text-[var(--text-color)] pt-24 pb-12 px-4 sm:px-6 md:px-12"
    >
      <div className="container mx-auto animate-fadeIn">
        <h2 className="text-2xl text-center sm:text-4xl font-bold mb-4">
          PORTFOLIO
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {(["all", "frontend", "backend", "full-stack"] as const).map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2 py-1 text-xs sm:text-base ${
                  selectedCategory === cat
                    ? "border-b borber-b-2 border-[var(--accent-color)] text-[var(--text-color)]"
                    : " text-[var(--text-color)]"
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            )
          )}
        </div>

        {/* Projects Grid */}
        <div
          role="list"
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
