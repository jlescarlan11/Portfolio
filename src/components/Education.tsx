// Education.tsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface EducationEntry {
  id: string;
  schoolName: string;
  yearsAttended: string;
  awards?: string;
  achievements?: string;
  skills?: string[];
}

interface EducationCardProps {
  entry: EducationEntry;
}

const EducationCard: React.FC<EducationCardProps> = ({ entry }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      role="article"
      aria-label={`Education entry from ${entry.schoolName}`}
      className=" bg-[var(--primary-color)] text-[var(--text-color)] border border-[var(--secondary-color)] rounded-lg p-6 transition transform duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--secondary-color)]"
    >
      <div className="flex items-center gap-4 mb-4">
        <img
          src={`/school-logos/${entry.id}.png`}
          alt=""
          className="w-12 h-12 object-contain"
          loading="lazy"
        />
        <h3 className="text-2xl font-bold">{entry.schoolName}</h3>
      </div>

      <p className="text-base mb-1">
        <span className="sr-only">Years attended: </span>
        {entry.yearsAttended}
      </p>

      {entry.achievements && (
        <>
          <p
            className={`text-base font-extralight text-pretty hyphens-auto text-start ${
              !isExpanded ? "line-clamp-3" : ""
            }`}
          >
            <span className="font-semibold text-[var(--text-color)]">
              Achievements:{" "}
            </span>
            {entry.achievements}
          </p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 text-[var(--accent-color)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"
            aria-expanded={isExpanded}
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>
        </>
      )}

      {entry.skills && entry.skills.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {entry.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-[var(--secondary-color)] text-[var(--text-color)] rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

const Education: React.FC = () => {
  const [educationData, setEducationData] = useState<EducationEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/data/education.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch education data");
        return response.json();
      })
      .then((data) => {
        setEducationData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="text-center py-8 text-[var(--text-color)]">
        Loading education data...
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

  return (
    <section
      role="region"
      aria-label="Education Section"
      className="relative overflow-hidden bg-[var(--primary-color)] text-[var(--text-color)] pt-24 pb-12 px-4 sm:px-6 md:px-12"
    >
      <div className="container mx-auto animate-fadeIn">
        <h2 className="text-4xl font-bold text-center mb-8">Education</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {educationData.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <EducationCard entry={entry} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
