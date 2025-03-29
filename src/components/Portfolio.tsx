// Portfolio.tsx
// =============================================================================
// Portfolio Component for Web Developer's Portfolio
//
// This component renders a responsive grid layout of interactive project cards.
// Each card displays a project thumbnail, title, and brief description and links to a
// detailed project page using React Router's Link component.
//
// Design Details:
//   - Background: var(--primary-color)
//   - Text: text-[var(--text-color)]
//   - Accents/Borders: var(--secondary-color)
//   - Typography: Uses the globally configured Roboto font.
//   - Layout: A responsive grid layout that uses grid-cols-1 (mobile), sm:grid-cols-2 (tablet),
//             and md:grid-cols-3 (desktop) to adapt to different screen sizes.
//   - Vertical Spacing: Top padding (pt-24) ensures that the section is not hidden behind a fixed navbar,
//                       keeping the content centered on desktop, tablet, and mobile.
//   - Interactivity: Hover effects (scale, background changes) and smooth transitions enhance user engagement.
//   - Focus Styles: Enhanced focus states with Tailwind's focus:ring utilities improve keyboard navigation.
//   - Accessibility: ARIA roles (e.g., role="list" for the grid container, role="listitem" for cards)
//                    provide semantic clarity for assistive technologies.
//
// This component is part of my personal portfolio showcasing frontend projects built with
// React, TypeScript, Tailwind CSS, and React Router. Inline documentation details the responsive
// layout and spacing decisions for future reference.
// =============================================================================

import React from "react";
import { Link } from "react-router-dom";

// -----------------------------------------------------------------------------
// Project Interface
// -----------------------------------------------------------------------------
// Defines the structure for each project item.
interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string; // Path to the project thumbnail image.
  route: string; // Route path to the detailed project page.
}

// -----------------------------------------------------------------------------
// ProjectCard Component Props
// -----------------------------------------------------------------------------
// Accepts a single project object and renders an interactive project card.
interface ProjectCardProps {
  project: Project;
}

// -----------------------------------------------------------------------------
// ProjectCard Component
// -----------------------------------------------------------------------------
// Renders an interactive card for a project.
// The card includes a project thumbnail, title, and brief description.
// Enhanced focus styles are provided for keyboard navigation using focus:ring utilities.
// ARIA attributes (role="listitem" and aria-label) are included for semantic clarity.
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link
      to={project.route}
      role="listitem" // Denotes an item in a list for assistive technologies.
      aria-label={`View details for ${project.title}`}
      // Tailwind classes:
      // - block p-4: Block element with padding.
      // - bg-[var(--accent-color)]: Uses accent color for the background.
      // - rounded-lg: Rounds the card's corners.
      // - text-[var(--primary-color)]: Sets text color to primary for contrast.
      // - text-center: Centers text content.
      // - transition transform duration-200: Enables smooth transitions.
      // - hover:scale-105, hover:bg-[var(--secondary-color)]: Scale-up and background change on hover.
      // - focus:outline-none, focus:ring-2, focus:ring-offset-2, focus:ring-[var(--secondary-color)]:
      //   Provides clear focus indicators for keyboard users.
      className="block p-4 bg-[var(--accent-color)] rounded-lg text-[var(--primary-color)] text-center transition transform duration-200 hover:scale-105 hover:bg-[var(--secondary-color)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--secondary-color)]"
    >
      {/* Project Thumbnail */}
      <img
        src={project.thumbnail}
        alt={`${project.title} Thumbnail`}
        // Image styling:
        // - w-full: Full width.
        // - h-48: Fixed height to maintain consistency.
        // - object-cover: Ensures the image covers the area without distortion.
        // - rounded-md: Rounds the image corners.
        // - mb-4: Margin bottom for spacing between image and text.
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      {/* Project Title */}
      <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
      {/* Project Description */}
      <p className="text-base">{project.description}</p>
    </Link>
  );
};

// -----------------------------------------------------------------------------
// Sample Project Data
// -----------------------------------------------------------------------------
// In a real application, project data might be fetched from an API or stored externally.
const projects: Project[] = [
  {
    id: "1",
    title: "Nutcha Bites",
    description: "A brief description of project one.",
    thumbnail: "/images/project1.jpg", // Update with actual image paths.
    route: "/projects/1",
  },
  {
    id: "2",
    title: "Project Two",
    description: "A brief description of project two.",
    thumbnail: "/images/project2.jpg",
    route: "/projects/2",
  },
  {
    id: "3",
    title: "Project Three",
    description: "A brief description of project three.",
    thumbnail: "/images/project3.jpg",
    route: "/projects/3",
  },
  // Additional projects can be added here.
];

const Portfolio: React.FC = () => {
  return (
    // The section uses top padding (pt-24) to ensure that the Portfolio content is not hidden
    // behind a fixed navbar. This spacing helps center the section on all devices.
    // Responsive padding is applied (px-4 for mobile, sm:px-6, md:px-12) to maintain balance.
    <section
      aria-label="Portfolio Section"
      className="bg-[var(--primary-color)] text-[var(--text-color)] pt-24 pb-12 px-4 sm:px-6 md:px-12"
    >
      <div className="container mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-8">My Portfolio</h2>
        {/* 
          Grid Layout Container:
          - role="list" indicates that this container is a list of items.
          - grid grid-cols-1: One column on very small screens.
          - sm:grid-cols-2: Two columns on tablets.
          - md:grid-cols-3: Three columns on desktops.
          - gap-8: Uniform spacing between grid items.
          These responsive grid classes ensure a centered, non-scrollable layout that adapts to the viewport.
        */}
        <div
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            // Each project card is rendered using the reusable ProjectCard component.
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
