
import React, { useState, useEffect, useRef } from 'react';

interface TypewriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 2000,
  className = '',
}) => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);
  
  useEffect(() => {
    if (texts.length === 0) return;

    let timer: NodeJS.Timeout;

    if (isWaiting) {
      timer = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, delayBetween);
      return () => clearTimeout(timer);
    }

    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      } else {
        timer = setTimeout(() => {
          setCurrentText((prevText) => prevText.slice(0, -1));
        }, deletingSpeed);
      }
    } else {
      const fullText = texts[currentIndex];
      
      if (currentText === fullText) {
        setIsWaiting(true);
      } else {
        timer = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [
    currentText,
    currentIndex,
    isDeleting,
    isWaiting,
    texts,
    typingSpeed,
    deletingSpeed,
    delayBetween,
  ]);

  return (
    <span className={`inline-block ${className}`}>
      {currentText}
      <span className="inline-block w-[2px] h-[1em] bg-neon-cyan ml-0.5 align-middle animate-blink"></span>
    </span>
  );
};

export default Typewriter;
