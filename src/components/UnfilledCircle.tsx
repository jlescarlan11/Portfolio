// UnfilledCircle.tsx
import React from "react";

// Define props to accept className
interface UnfilledCircleProps {
  className?: string;
}

const UnfilledCircle: React.FC<UnfilledCircleProps> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="40" strokeWidth="4" fill="none" />
    </svg>
  );
};

export default UnfilledCircle;
