"use client";

import { useState, useEffect } from "react";

interface CursorFollowerProps {
  size?: number;
  text?: string;
  show?: boolean;
}

const CursorFollower: React.FC<CursorFollowerProps> = ({
  size = 50,
  text,
  show = true,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!show) return;

    const updateCursorPosition = ({ clientX, clientY }: MouseEvent) =>
      setPosition({ x: clientX + 5, y: clientY + 5 });

    window.addEventListener("mousemove", updateCursorPosition);
    return () => window.removeEventListener("mousemove", updateCursorPosition);
  }, []);

  if (!show) return null;

  return (
    <div
      className={ `fixed pointer-events-none z-10 flex items-center justify-center rounded-full border border-secondary backdrop-blur-md transition-transform duration-100` }
      style={ {
        top: `${ position.y }px`,
        left: `${ position.x }px`,
        width: `${ size }px`,
        height: `${ size }px`,
      } }
    >
      { text && (
        <span
          className="text-sm text-black"
          style={ {
            mixBlendMode: "difference",
            color: "#191919",
          } }
        >
          { text }
        </span>
      ) }
    </div>
  );
};

export default CursorFollower;
