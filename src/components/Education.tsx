// Education.tsx
// =============================================================================
// Updated Education Component for Personal Portfolio
//
// This version aligns the Education section styling with the About section by using
// a similar container structure and spacing. The container now uses a flex-based
// layout with "mx-auto min-h-dvh relative flex flex-col items-center" to ensure that
// the content is centered and spaced consistently across all devices.
//
// The cards still use the accent, primary, and secondary color variables and modern
// hover effects, ensuring consistent design language throughout your portfolio.
// =============================================================================

import React from "react";

// -----------------------------------------------------------------------------
// EducationEntry Interface
// -----------------------------------------------------------------------------
interface EducationEntry {
  id: string;
  schoolName: string;
  yearsAttended: string;
  awards: string;
  achievements: string;
}

// -----------------------------------------------------------------------------
// Sample Education Data
// -----------------------------------------------------------------------------
const educationData: EducationEntry[] = [
  {
    id: "1",
    schoolName: "University of the Philippines",
    yearsAttended: "2022 - Present",
    awards: "College Scholar (2022-2023), University Scholar (2023)",
    achievements:
      "Bachelor's in Mathematics; conducted research on computational methods.",
  },
  {
    id: "2",
    schoolName: "South East Asia Institute of Trade and Technology",
    yearsAttended: "2020 - 2022",
    awards: "Best in Mathematics, Best in Statistics and  Probability",
    achievements:
      "Graduated top of the class; organized school coding competitions.",
  },
  {
    id: "2",
    schoolName: "North Fairview High School",
    yearsAttended: "2016 - 2020",
    awards:
      "Graduated with Honors, 1st Place Math Quiz Bowl (2019), District Level Qualifier Damath Competition",
    achievements:
      "Graduated top of the class; organized school coding competitions.",
  },
  // Additional entries can be added here.
];

// -----------------------------------------------------------------------------
// EducationCard Component Props
// -----------------------------------------------------------------------------
interface EducationCardProps {
  entry: EducationEntry;
}

// -----------------------------------------------------------------------------
// EducationCard Component
// -----------------------------------------------------------------------------
const EducationCard: React.FC<EducationCardProps> = ({ entry }) => {
  return (
    <div
      role="article"
      aria-label={`Education entry from ${entry.schoolName}`}
      className="bg-[var(--primary-color)] text-[var(--text-color)] border border-[var(--secondary-color)] rounded-lg p-6 transition transform duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--secondary-color)]"
    >
      <h3 className="text-2xl font-bold mb-2">
        <span className="text-[var(--accent-color)]">{entry.schoolName}</span>
      </h3>
      <p className="text-base mb-1">{entry.yearsAttended}</p>
      <p className="text-base mb-2">
        <span className="font-semibold text-[var(--accent-color)]">
          Awards:{" "}
        </span>
        {entry.awards}
      </p>
      <p className="text-base">{entry.achievements}</p>
    </div>
  );
};

// -----------------------------------------------------------------------------
// Education Component
// -----------------------------------------------------------------------------
const Education: React.FC = () => {
  return (
    <section
      role="contentinfo"
      aria-label="Education Section"
      className="bg-[var(--primary-color)] text-[var(--text-color)] px-4 sm:px-6 md:px-12 animate-fadeIn"
    >
      <div className="mx-auto relative flex flex-col items-center py-12">
        <h2 className="text-4xl font-bold text-center my-8">Education</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {educationData.map((entry) => (
            <EducationCard key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
