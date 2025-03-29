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
      <rect x="0" y="0" width="200" height="200" />
      <path
        d="
          M 0  40 H 200
          M 0  80 H 200
          M 0 120 H 200
          M 0 160 H 200
          M 40  0 V 200
          M 80  0 V 200
          M 120 0 V 200
          M 160 0 V 200
        "
        stroke="var(--text-color)"
        strokeWidth="1"
      />
    </svg>
  );
};

export default GridLine;
