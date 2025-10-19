import React, { useRef, useEffect, useState } from 'react';
import ToolCard from './ToolCard';
import type { Tool } from '../constants';

// Custom hook to detect if an element is on screen
const useOnScreen = (options: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(ref.current!);
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return [ref, isVisible] as const;
};

interface ToolSectionProps {
  id: string;
  title: string;
  description: string;
  tools: Tool[];
  toolType: string;
  onNavigate: (pageState: { page: string; toolType?: string; tool?: Tool; }) => void;
  underlineColor: string;
}

const INITIAL_DISPLAY_COUNT = 8;

const ToolSection: React.FC<ToolSectionProps> = ({ id, title, description, tools, toolType, onNavigate, underlineColor }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  const toolsToShow = tools.slice(0, INITIAL_DISPLAY_COUNT);

  return (
    <section id={id} ref={ref}>
      <div className={`max-w-3xl mx-auto text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <div className="relative inline-block mb-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
          <svg
            className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-3/4 h-3"
            viewBox="0 0 100 8"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M 2,4 Q 50,8 98,4"
              stroke={underlineColor}
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <p className="text-lg text-gray-400">{description}</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {toolsToShow.map((tool, index) => (
          <div 
             key={index} 
             className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
             style={{ transitionDelay: `${index * 100}ms` }}
          >
            <ToolCard tool={tool} onNavigate={onNavigate} />
          </div>
        ))}
      </div>
      {tools.length > INITIAL_DISPLAY_COUNT && (
        <div className={`text-center mt-12 transition-opacity duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={() => onNavigate({ page: 'all-tools', toolType: toolType })}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-transparent rounded-full overflow-hidden border border-gray-700 transition-all duration-300 hover:border-purple-500"
          >
             <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
             <span className="relative z-10">View All {toolType} Tools</span>
          </button>
        </div>
      )}
    </section>
  );
};

export default ToolSection;