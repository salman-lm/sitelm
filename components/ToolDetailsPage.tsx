import React, { useState } from 'react';
import type { Tool } from '../constants';

interface ToolDetailsPageProps {
  tool: Tool;
  onNavigate: (pageState: { page: string }) => void;
}

const ToolDetailsPage: React.FC<ToolDetailsPageProps> = ({ tool, onNavigate }) => {
  const [isCopied, setIsCopied] = useState(false);
  // This is safe because the content is from a trusted source (our own constants.tsx file)
  // and not from user input.
  const articleContent = { __html: tool.article };

  const handleShare = async () => {
    const shareData = {
      title: `Check out ${tool.name} on AILM.in`,
      text: `Discover ${tool.name}, a powerful AI tool for content creation, featured on AILM.in.`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User might have cancelled the share action.
        console.log("Share action was cancelled or failed.");
      }
    } else {
      // Fallback for desktop or unsupported browsers
      navigator.clipboard.writeText(window.location.href).then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 sm:py-24 text-white animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          {/* Left Side: Logo & Name */}
          <div className="flex items-center gap-6">
            <div 
              className="flex-shrink-0 w-20 h-20 sm:w-28 sm:h-28 glass-card rounded-full flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>img]:w-full [&>img]:h-full [&>img]:!object-cover overflow-hidden"
              dangerouslySetInnerHTML={{ __html: tool.logo }}
            />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              {tool.name}
            </h1>
          </div>
          
          {/* Right Side: Buttons */}
          <div className="flex items-center gap-4 flex-shrink-0">
             <a 
                href={tool.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative inline-block px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-transform duration-300 transform hover:scale-105"
              >
                  <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-75 blur transition-opacity duration-300 group-hover:opacity-100"></span>
                  <span className="relative">Visit Site</span>
              </a>
              <button
                onClick={handleShare}
                className="p-3 rounded-full glass-card text-gray-300 hover:text-white hover:border-purple-500/50 transition-all duration-300"
                aria-label="Share this tool"
                title={isCopied ? "Link Copied!" : "Share this tool"}
              >
                {isCopied ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6.002l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.367a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                )}
              </button>
          </div>
        </div>
        
        <div className="glass-card rounded-xl p-6 md:p-10 mb-12">
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
      </div>
    </div>
  );
};

export default ToolDetailsPage;