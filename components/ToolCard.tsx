import React, { useRef } from 'react';
import type { Tool } from '../constants';

interface ToolCardProps {
  tool: Tool;
  onNavigate: (pageState: { page: string; tool: Tool }) => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, onNavigate }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    const rotateX = (y / height) * -15;
    const rotateY = (x / width) * 15;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  };
  
  const handleCardClick = () => {
    onNavigate({ page: 'tool-details', tool });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
  }

  return (
    <div
      ref={cardRef}
      onClick={handleCardClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col items-center p-4 glass-card rounded-xl aspect-square backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 cursor-pointer"
      style={{ transformStyle: 'preserve-3d', transition: 'transform 0.1s ease' }}
    >
      <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-75 transition-opacity duration-300 blur-md"></div>
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-evenly text-center">
        <div 
          className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 text-white transition-transform duration-300 group-hover:scale-110 [&>svg]:w-full [&>svg]:h-full rounded-full overflow-hidden"
          dangerouslySetInnerHTML={{ __html: tool.logo }}
          style={{ transform: 'translateZ(40px)' }}
        />
        <div style={{ transform: 'translateZ(20px)' }}>
          <p className="font-semibold text-sm sm:text-base text-gray-200">{tool.name}</p>
        </div>
        <a 
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
          className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-700 rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110"
          style={{ transform: 'translateZ(30px)' }}
        >
          Try it
        </a>
      </div>
    </div>
  );
};

export default ToolCard;