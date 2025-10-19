import React from 'react';
import type { Tool } from '../constants';

interface ToolDetailsPageProps {
  tool: Tool;
  onNavigate: (pageState: { page: string }) => void;
}

const ToolDetailsPage: React.FC<ToolDetailsPageProps> = ({ tool, onNavigate }) => {
  // This is safe because the content is from a trusted source (our own constants.tsx file)
  // and not from user input.
  const articleContent = { __html: tool.article };

  return (
    <div className="container mx-auto px-4 py-16 sm:py-24 text-white animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mb-8 text-center sm:text-left">
          <div 
            className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 p-2 glass-card rounded-full flex items-center justify-center [&>svg]:w-full [&>svg]:h-full overflow-hidden"
            dangerouslySetInnerHTML={{ __html: tool.logo }}
          />
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              {tool.name}
            </h1>
          </div>
        </div>
        
        <div className="glass-card rounded-xl p-6 md:p-10">
          <div 
            className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-4"
            dangerouslySetInnerHTML={articleContent}
          />
           <div className="mt-10 text-center">
              <a 
                href={tool.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-transform duration-300 transform hover:scale-105"
              >
                  <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-75 blur transition-opacity duration-300 group-hover:opacity-100"></span>
                  <span className="relative">Try {tool.name} Now</span>
              </a>
          </div>
        </div>
        
        <div className="mt-12 text-center">
            <button onClick={() => onNavigate({ page: 'explore' })} className="text-gray-300 hover:text-white transition-colors">&larr; Back to Explore</button>
        </div>
      </div>
    </div>
  );
};

export default ToolDetailsPage;