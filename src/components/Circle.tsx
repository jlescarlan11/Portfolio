// UnfilledCircle.tsx
import React from "react";

// Define props to accept className
interface CircleProps {
  className?: string;
}

const Circle: React.FC<CircleProps> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="40" />
    </svg>
  );
};

export default Circle;
