"use client";

import { useState, useEffect } from 'react';

interface CursorFollowerProps {
  size?: number;  
  text?: string; 
  show?: boolean; 
}

const CursorFollower: React.FC<CursorFollowerProps> = ({ size = 50, text, show = true }) => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    if (!show) return; 

    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({
        x: e.clientX - size / 2, 
        y: e.clientY - size / 2, 
      });
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, [size, show]); 

  if (!show) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9] flex justify-center items-center"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        width: `${size}px`,
        height: `${size}px`,
        background: 'rgba(255, 255, 255, 0.189)', 
        borderRadius: '50%', 
        border: '2px solid rgba(255, 255, 255, 0.18)',
        backdropFilter: 'blur(19px)', 
        WebkitBackdropFilter: 'blur(19px)', 
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', 
        transition: 'transform 0.1s ease-out',
      }}
    >
      {text && <span style={{ color: '#01010', fontSize: '14px', fontWeight: 'bold' }}>{text}</span>}
    </div>
  );
};

export default CursorFollower;
