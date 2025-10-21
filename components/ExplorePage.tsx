import React, { useState, useRef, useEffect } from 'react';
import {
  INITIAL_VIDEO_TOOLS,
  INITIAL_IMAGE_TOOLS,
  LONG_VIDEO_TOOLS,
  VIRAL_SHORT_TOOLS,
  WRITING_TOOLS,
  AUDIO_TOOLS,
  CHATBOT_TOOLS,
  CODING_TOOLS,
  RESEARCH_TOOLS,
  BUSINESS_TOOLS,
  PRODUCTIVITY_TOOLS,
  DATA_TOOLS,
  EDUCATION_TOOLS,
  HEALTHCARE_TOOLS,
  LEGAL_FINANCE_TOOLS,
  ECOMMERCE_TOOLS,
  HR_RECRUITING_TOOLS,
  GAMING_TOOLS,
  STORYTELLING_TOOLS,
  AUTOMATION_TOOLS,
  SEARCH_DISCOVERY_TOOLS,
  SECURITY_PRIVACY_TOOLS,
  EXPERIMENT_SANDBOX_TOOLS
} from '../constants';
import type { Tool } from '../constants';
import ToolCard from './ToolCard';
import ComingSoonPopup from './ComingSoonPopup';

// Consolidate video tools and deduplicate
const videoAndAnimationTools = [...INITIAL_VIDEO_TOOLS, ...LONG_VIDEO_TOOLS].reduce((acc, current) => {
  if (!acc.find(item => item.name === current.name)) {
    acc.push(current);
  }
  return acc;
}, [] as Tool[]);

// Combine all tools from active categories for the 'All' view.
const allTools = [
    ...videoAndAnimationTools,
    ...VIRAL_SHORT_TOOLS,
    ...AUDIO_TOOLS,
    ...INITIAL_IMAGE_TOOLS,
    ...WRITING_TOOLS,
].reduce((acc, current) => {
    if (!acc.find(item => item.name === current.name)) {
      acc.push(current);
    }
    return acc;
}, [] as Tool[]);


const categories: { [key: string]: Tool[] } = {
  'All': allTools,
  'Video & Animation': videoAndAnimationTools,
  'Viral Shorts': VIRAL_SHORT_TOOLS,
  'Image & Design': INITIAL_IMAGE_TOOLS,
  'Writing & Content': WRITING_TOOLS,
  'Audio & Voice': AUDIO_TOOLS,
  'Chatbots & Assistants': CHATBOT_TOOLS,
  'Coding & Development': CODING_TOOLS,
  'Research & Knowledge': RESEARCH_TOOLS,
  'Business & Marketing': BUSINESS_TOOLS,
  'Productivity & Workflow': PRODUCTIVITY_TOOLS,
  'Data & Analytics': DATA_TOOLS,
  'Education & Learning': EDUCATION_TOOLS,
  'Healthcare & Wellness': HEALTHCARE_TOOLS,
  'Legal & Finance': LEGAL_FINANCE_TOOLS,
  'E-commerce & Sales': ECOMMERCE_TOOLS,
  'HR & Recruiting': HR_RECRUITING_TOOLS,
  'Gaming & Entertainment': GAMING_TOOLS,
  'Creative Storytelling': STORYTELLING_TOOLS,
  'Automation & Integrations': AUTOMATION_TOOLS,
  'Search & Discovery': SEARCH_DISCOVERY_TOOLS,
  'Security & Privacy': SECURITY_PRIVACY_TOOLS,
  'Experiment & Sandbox': EXPERIMENT_SANDBOX_TOOLS,
};

const categoryOrder = [
  'All', 'Video & Animation', 'Viral Shorts', 'Audio & Voice', 'Image & Design', 'Writing & Content', 'Chatbots & Assistants',
  'Coding & Development', 'Research & Knowledge', 'Business & Marketing', 'Productivity & Workflow', 'Data & Analytics',
  'Education & Learning', 'Healthcare & Wellness', 'Legal & Finance', 'E-commerce & Sales', 'HR & Recruiting',
  'Gaming & Entertainment', 'Creative Storytelling', 'Automation & Integrations', 'Search & Discovery',
  'Security & Privacy', 'Experiment & Sandbox'
];

const activeCategoryNames = new Set([
  'All', 'Video & Animation', 'Viral Shorts', 'Audio & Voice', 'Image & Design', 'Writing & Content'
]);

const comingSoonToolsSet = new Set([
    ...CHATBOT_TOOLS, ...CODING_TOOLS, ...RESEARCH_TOOLS, ...BUSINESS_TOOLS,
    ...PRODUCTIVITY_TOOLS, ...DATA_TOOLS, ...EDUCATION_TOOLS, ...HEALTHCARE_TOOLS,
    ...LEGAL_FINANCE_TOOLS, ...ECOMMERCE_TOOLS, ...HR_RECRUITING_TOOLS, ...GAMING_TOOLS,
    ...STORYTELLING_TOOLS, ...AUTOMATION_TOOLS, ...SEARCH_DISCOVERY_TOOLS,
    ...SECURITY_PRIVACY_TOOLS, ...EXPERIMENT_SANDBOX_TOOLS
].map(tool => tool.name));


interface ExplorePageProps {
  onNavigate: (pageState: { page: string; tool?: Tool }) => void;
}

const ExplorePage: React.FC<ExplorePageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const toolsToShow = categories[selectedCategory] || [];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return;
        // Check if the element is actually scrollable horizontally
        if (container.scrollWidth > container.clientWidth) {
          e.preventDefault();
          container.scrollLeft += e.deltaY;
        }
      };
      container.addEventListener('wheel', onWheel, { passive: false });
      return () => container.removeEventListener('wheel', onWheel);
    }
  }, []);

  const handleCategoryClick = (category: string) => {
    if (activeCategoryNames.has(category)) {
      setSelectedCategory(category);
    } else {
      setIsPopupOpen(true);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 sm:py-24 text-white animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Explore AI Tools
          </h1>
          <p className="text-lg text-gray-400">
            Discover a curated collection of the best AI tools for content creation.
          </p>
        </div>

        <div className="mb-12 flex justify-center">
          <div className="w-full max-w-7xl">
            <div 
              ref={scrollContainerRef}
              className="flex space-x-2 sm:space-x-4 pb-4 -mx-4 px-4 overflow-x-auto no-scrollbar" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {categoryOrder.map(category => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`flex-shrink-0 whitespace-nowrap rounded-full px-5 py-3 text-sm sm:text-base font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-purple-500 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'glass-card text-gray-300 hover:border-purple-500/50 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {toolsToShow.map((tool, index) => {
             const isComingSoon = 
              (selectedCategory === 'All' && comingSoonToolsSet.has(tool.name)) ||
              !activeCategoryNames.has(selectedCategory);
              
            return (
              <div
                key={`${selectedCategory}-${tool.name}-${index}`}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 50}ms`, opacity: 0 }}
              >
                <ToolCard 
                  tool={tool} 
                  onNavigate={onNavigate}
                  isComingSoon={isComingSoon}
                  onComingSoonClick={() => setIsPopupOpen(true)}
                />
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <button onClick={() => onNavigate({ page: 'home' })} className="text-gray-300 hover:text-white transition-colors">
            &larr; Back to Home
          </button>
        </div>
      </div>
      <ComingSoonPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
};

export default ExplorePage;