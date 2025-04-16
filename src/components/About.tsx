import React, { memo, JSX } from "react";
import { BiLogoReact, BiLogoTailwindCss } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { MdOpenInNew } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
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
  SiPrisma,
  SiPython,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Resume from "../assets/John Lester Escarlan.pdf";

const techIconMap: { [key: string]: JSX.Element } = {
  HTML: <SiHtml5 title="HTML" role="img" aria-label="HTML" />,
  CSS: <SiCss3 title="CSS" role="img" aria-label="CSS" />,
  React: <BiLogoReact title="React" role="img" aria-label="React" />,
  "Tailwind CSS": (
    <BiLogoTailwindCss
      title="Tailwind CSS"
      role="img"
      aria-label="Tailwind CSS"
    />
  ),
  Vite: <SiVite title="Vite" role="img" aria-label="Vite" />,
  TypeScript: (
    <SiTypescript title="TypeScript" role="img" aria-label="TypeScript" />
  ),
  Express: <SiExpress title="Express" role="img" aria-label="Express.js" />,
  EJS: <SiEjs title="EJS" role="img" aria-label="EJS" />,
  NodeJS: <SiNodedotjs title="Node JS" role="img" aria-label="Node JS" />,
  JavaScript: (
    <SiJavascript title="JavaScript" role="img" aria-label="JavaScript" />
  ),
  Python: <SiPython title="Python" role="img" aria-label="Python" />,
  C: <SiC title="C" role="img" aria-label="C" />,
  "C++": <SiCplusplus title="C++" role="img" aria-label="C++" />,
  MySQL: <SiMysql title="MySQL" role="img" aria-label="MySQL" />,
  PostgreSQL: (
    <SiPostgresql title="PostgreSQL" role="img" aria-label="PostgreSQL" />
  ),
  Authentication: (
    <SiNodedotjs
      title="Authentication"
      role="img"
      aria-label="Authentication"
    />
  ),
  Prisma: <SiPrisma title="Prisma" role="img" aria-label="Prisma" />,
  API: <SiNodedotjs title="API" role="img" aria-label="API" />,
};

const TechBadge: React.FC<{ tech: string }> = memo(({ tech }) => {
  return (
    <span className="inline-flex items-center gap-1 m-1 text-xs font-medium rounded-full text-[var(--text-color)]">
      {techIconMap[tech] || null}
      <span className="sr-only">{tech}</span> {tech}
    </span>
  );
});

const groupedTechStacks: { [category: string]: string[] } = {
  Frontend: ["HTML", "CSS", "React", "TypeScript", "Vite", "Tailwind CSS"],
  "Backend & Databases": ["Express", "PostgreSQL", "MySQL"],
  Languages: ["Python", "C", "C++", "JavaScript"],
};

interface ProjectHighlight {
  id: string;
  title: string;
  preview: string;
  github?: string; // Made optional
  category: string;
  description: string;
  tech: string[];
}

const projectHighlights: ProjectHighlight[] = [
  {
    id: "1",
    title: "PokéInventory",
    preview: "https://inventory-application-xiyr.onrender.com/",
    category: "Full-Stack",
    description:
      "Full-stack Pokémon and Trainer collection manager with CRUD operations and search/filter functionality.",
    tech: ["EJS", "Tailwind CSS", "JavaScript", "Express", "PostgreSQL"],
  },
  {
    id: "2",
    title: "Freedom Wall",
    preview: "https://web-production-2b2eb.up.railway.app/",
    category: "Full-Stack",
    description:
      "Community platform for sharing thoughts, concerns, and unspoken feelings.",
    tech: ["EJS", "CSS", "JavaScript", "Express", "PostgreSQL"],
  },
  {
    id: "3",
    title: "Nutcha Bites",
    preview: "https://nutcha-bites.vercel.app/",
    category: "Frontend",
    description:
      "E-commerce prototype with shopping cart and checkout functionality.",
    tech: ["React", "Vite", "Tailwind CSS", "TypeScript"],
  },
  // // Example project without GitHub link:
  // {
  //   id: "4",
  //   title: "Sample Project",
  //   preview: "https://example.com",
  //   category: "Frontend",
  //   description: "Example project without GitHub repository",
  //   tech: ["React", "TypeScript"],
  // },
];

interface PhotoSectionProps {
  photoUrl?: string;
  showPhoto?: boolean;
}

const PhotoSection: React.FC<PhotoSectionProps> = memo(
  ({ photoUrl, showPhoto }) => {
    if (showPhoto === false) return null;
    const defaultPhoto = "../assets/about-me-pic.jpg";
    return (
      <div className="w-full md:w-2/5 flex justify-center mb-8 md:mb-0">
        <img
          src={photoUrl ? photoUrl : defaultPhoto}
          loading="lazy"
          alt="John Escarlan Professional Portrait"
          className="rounded-full max-w-full md:max-w-full object-cover border-4 border-[var(--accent-color)] transform hover:scale-105 transition duration-300"
        />
      </div>
    );
  }
);

const BioSection: React.FC = memo(() => {
  return (
    <div className="w-full md:w-3/5 md:pl-12">
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <p className="text-base text-pretty text-start leading-relaxed mb-4">
        Mathematics major and self-taught full-stack developer passionate about
        building impactful web solutions. I have successfully built applications
        that:
      </p>
      <ul className="list-disc pl-6 mb-6 text-base text-pretty">
        <li>
          Optimize React applications to achieve a Lighthouse Performance score
          of 90+.
        </li>
        <li>
          Reduced SQL response times by 30% through strategic query
          optimization.
        </li>
      </ul>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Core Stack</h3>
        {Object.entries(groupedTechStacks).map(([category, techs]) => (
          <div key={category} className="mb-3">
            <h4 className="font-medium text-[var(--text-color)] mb-1">
              {category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {techs.map((tech) => (
                <TechBadge key={tech} tech={tech} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Project Highlights</h3>
        <div className="flex flex-col gap-4">
          {projectHighlights.map((project) => (
            <div
              key={project.id}
              className="group relative p-4 border border-[var(--secondary-color)] rounded-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
            >
              <div className="flex flex-row items-center justify-between">
                <h4 className="text-base font-medium">{project.title}</h4>
                <div className="flex gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
                  <Link
                    to={project.preview}
                    target="_blank"
                    className="hover:text-[var(--accent-color)]"
                    aria-label={`Live demo of ${project.title}`}
                  >
                    <MdOpenInNew className="text-lg" />
                  </Link>
                  {project.github && (
                    <Link
                      to={project.github}
                      target="_blank"
                      className="hover:text-[var(--accent-color)]"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <FiGithub className="text-lg" />
                    </Link>
                  )}
                </div>
              </div>

              <div className="mt-2 overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-[500px] opacity-0 group-hover:opacity-100">
                <div className="pt-2 border-t border-[var(--secondary-color)]">
                  <p className="text-sm mb-1">
                    <span className="font-semibold">Category:</span>{" "}
                    {project.category}
                  </p>
                  <p className="text-sm mb-2">
                    <span className="font-semibold">Description:</span>{" "}
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <TechBadge key={t} tech={t} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <HashLink
          smooth
          to="/#portfolio"
          role="button"
          aria-label="View all projects"
          className="inline-block px-6 py-3 text-base sm:text-base font-medium rounded-md text-[var(--text-color)] bg-[var(--accent-color)] transition transform duration-200 hover:scale-105 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-color)]"
        >
          View All Projects
        </HashLink>
      </div>

      <div className="flex flex-wrap text-sm items-center space-x-4">
        <p className="flex gap-1 items-center text-balance break-normal text-justify leading-relaxed">
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
          download="John_Escarlan_Resume.pdf"
          rel="noopener noreferrer"
          className="text-[var(--text-color)] hover:underline"
          aria-label="Download Resume"
        >
          Resume
        </Link>
      </div>

      {/* <div className="mt-4 p-4 bg-[var(--secondary-color)] rounded">
        <h4 className="text-sm font-semibold mb-2 text-[var(--text-color)]">
          Currently Exploring
        </h4>
        <div className="flex gap-2">
          <TechBadge tech="Authentication" />
          <TechBadge tech="Prisma" />
          <TechBadge tech="API" />
        </div>
        <p className="text-sm mt-2 text-gray-500">
          Actively learning about authentication, Prisma, and APIs.
        </p>
      </div> */}
    </div>
  );
});

interface AboutMeProps {
  photoUrl?: string;
  showPhoto?: boolean;
}

const About: React.FC<AboutMeProps> = memo(({ photoUrl, showPhoto = true }) => {
  return (
    <section
      aria-label="About Me Section"
      className="relative overflow-hidden bg-[var(--primary-color)] text-[var(--text-color)] pt-24 pb-12 px-4 sm:px-6 md:px-12"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-start animate-fadeIn">
        <PhotoSection photoUrl={photoUrl} showPhoto={showPhoto} />
        <BioSection />
      </div>
    </section>
  );
});

export default About;
