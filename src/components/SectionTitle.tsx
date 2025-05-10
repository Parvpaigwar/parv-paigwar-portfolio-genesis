
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  align = 'left',
  className = '' 
}) => {
  return (
    <div className={cn(
      'mb-12',
      align === 'center' && 'text-center',
      align === 'right' && 'text-right',
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-4">
        {align === 'left' && (
          <span className="h-px w-12 bg-neon-cyan inline-block" />
        )}
        <span className="text-gradient">{title}</span>
        {align === 'right' && (
          <span className="h-px w-12 bg-neon-cyan inline-block" />
        )}
      </h2>
      {subtitle && (
        <p className="text-soft-purple text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
