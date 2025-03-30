// UnfilledCircle.tsx
import React from "react";

// Define props to accept className
interface GrigLineProps {
  className?: string;
}

const GridLine: React.FC<GrigLineProps> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path
            d="M 30 0 L 0 0 0 30"
            fill="none"
            stroke="var(--secondary-color)"
            stroke-width="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
};

export default GridLine;
