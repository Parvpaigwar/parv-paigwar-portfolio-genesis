
import React, { useState, useEffect } from 'react';

interface CursorProps {
  color?: string;
  outerSize?: number;
  innerSize?: number;
  outerScale?: number;
  innerScale?: number;
}

const AnimatedCursor: React.FC<CursorProps> = ({
  color = '#64ffda',
  outerSize = 32,
  innerSize = 8,
  outerScale = 1.5,
  innerScale = 0.7,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isActiveClickable, setIsActiveClickable] = useState(false);

  useEffect(() => {
    // Check if device has a pointer - only show custom cursor on non-touch devices
    const hasTouchEvent = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (hasTouchEvent) return;

    setVisible(true);

    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
      document.body.addEventListener('mouseover', onMouseOver);
      document.body.addEventListener('mouseout', onMouseOut);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.body.removeEventListener('mouseover', onMouseOver);
      document.body.removeEventListener('mouseout', onMouseOut);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = () => {
      setVisible(true);
    };

    const onMouseLeave = () => {
      setVisible(false);
    };

    const onMouseDown = () => {
      setIsActive(true);
    };

    const onMouseUp = () => {
      setIsActive(false);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.classList.contains('clickable') ||
        target.parentElement?.classList.contains('clickable')
      ) {
        setIsActiveClickable(true);
      }
    };

    const onMouseOut = () => {
      setIsActiveClickable(false);
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  if (!visible) return null;

  return (
    <>
      <div
        className="cursor-dot-outline fixed pointer-events-none z-[9999] transition-transform duration-100 will-change-transform"
        style={{
          border: `1px solid ${color}`,
          opacity: isActiveClickable || isActive ? 0.8 : 0.5,
          height: outerSize + 'px',
          width: outerSize + 'px',
          borderRadius: '50%',
          transform: `translate(${position.x - outerSize / 2}px, ${position.y - outerSize / 2}px) scale(${isActiveClickable ? outerScale : 1})`,
          mixBlendMode: 'difference',
          filter: `blur(${isActiveClickable ? 0 : 0}px)`,
          boxShadow: isActiveClickable ? `0 0 8px ${color}` : 'none',
        }}
      />
      <div
        className="cursor-dot fixed pointer-events-none z-[9999] transition-transform duration-300 will-change-transform"
        style={{
          backgroundColor: color,
          height: innerSize + 'px',
          width: innerSize + 'px',
          borderRadius: '50%',
          opacity: isActiveClickable ? 0.5 : 1,
          transform: `translate(${position.x - innerSize / 2}px, ${position.y - innerSize / 2}px) scale(${isActive ? innerScale : 1})`,
        }}
      />
    </>
  );
};

export default AnimatedCursor;
