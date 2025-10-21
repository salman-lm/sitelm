import React, { useState, useEffect, useRef } from 'react';
import { INITIAL_VIDEO_TOOLS, INITIAL_IMAGE_TOOLS, LONG_VIDEO_TOOLS, AUDIO_TOOLS } from '../constants';
import type { Tool } from '../constants';

const allTools = [...INITIAL_VIDEO_TOOLS, ...INITIAL_IMAGE_TOOLS, ...LONG_VIDEO_TOOLS, ...AUDIO_TOOLS];
// Deduplicate tools that might exist in multiple categories
const uniqueTools = allTools.reduce((acc, current) => {
  if (!acc.find(item => item.name === current.name)) {
    acc.push(current);
  }
  return acc;
}, [] as Tool[]);

interface HeaderProps {
  onNavigate: (pageState: { page: string; toolType?: string; tool?: Tool }) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, searchQuery, setSearchQuery }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<Tool[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const desktopSearchRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);
  
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        desktopSearchRef.current && !desktopSearchRef.current.contains(event.target as Node) &&
        mobileSearchRef.current && !mobileSearchRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
        setSearchResults([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === '') {
        setSearchResults([]);
        return;
    }

    const filtered = uniqueTools.filter(tool =>
        tool.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setIsSearchOpen(false);
  };

  const handleAnchorLink = (hash: string) => {
    setIsMenuOpen(false);
    onNavigate({ page: 'home' });
    setTimeout(() => {
        const elementId = hash.substring(1);
        const header = document.querySelector('header');
        const targetElement = document.getElementById(elementId);
        if (targetElement && header) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            const offset = 20; // Provides 20px of space between header and section
            
            window.scrollTo({
                top: targetPosition - headerHeight - offset,
                behavior: 'smooth'
            });
        }
    }, 100);
  };

  const handlePageLink = (page: string) => {
    setIsMenuOpen(false);
    clearSearch();
    onNavigate({ page: page });
  };
  
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    clearSearch();
    onNavigate({ page: 'home' });
  };

  const navLinks = [
    { type: 'anchor', href: '#video-tools', label: 'Video Tools' },
    { type: 'anchor', href: '#viral-video-tools', label: 'Viral Video Tools' },
    { type: 'anchor', href: '#voice-tools', label: 'Voice Tools' },
    { type: 'anchor', href: '#about-us', label: 'About Us' },
    { type: 'page', page: 'contact', label: 'Contact Us' },
  ];
  
  const SearchResultsDropdown: React.FC<{onResultClick: () => void}> = ({ onResultClick }) => (
    <div className="absolute top-full mt-2 w-full max-h-96 overflow-y-auto bg-gray-900/80 backdrop-blur-md border border-white/10 rounded-lg shadow-xl z-10 animate-fade-in" style={{animationDuration: '150ms'}}>
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map(tool => (
            <li key={tool.name}>
              <a href={tool.url} target="_blank" rel="noopener noreferrer" onClick={onResultClick} className="flex items-center p-3 hover:bg-white/5 transition-colors duration-200">
                <div className="w-8 h-8 mr-3 text-white shrink-0 [&>svg]:w-full [&>svg]:h-full rounded-full overflow-hidden" dangerouslySetInnerHTML={{ __html: tool.logo }} />
                <span className="text-white truncate">{tool.name}</span>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <div className="p-4 text-gray-400 text-center">No tools found.</div>
      )}
    </div>
  );

  return (
    <>
      <header className="sticky top-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <a href="#" onClick={handleLogoClick} className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              AILM.in
            </a>
            
            <div className="hidden md:flex items-center space-x-6">
              <nav className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <button 
                    key={link.label} 
                    onClick={() => link.type === 'anchor' ? handleAnchorLink(link.href!) : handlePageLink(link.page!)}
                    className="text-gray-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>

              <div className="relative flex items-center" ref={desktopSearchRef}>
                 <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search tools..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => setIsSearchOpen(true)}
                  className={`bg-white/5 text-white placeholder-gray-500 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 ease-in-out ${isSearchOpen || searchQuery ? 'w-48 px-4 py-2' : 'w-0 p-0'}`}
                />
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 text-gray-300 hover:text-white transition-colors"
                  aria-label="Toggle search"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                {searchQuery && isSearchOpen && <div className="w-72 right-0"><SearchResultsDropdown onResultClick={clearSearch}/></div>}
              </div>
            </div>
            
            <div className="md:hidden flex items-center space-x-2">
               <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 text-white"
                  aria-label="Toggle search"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none z-50"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          <div ref={mobileSearchRef} className={`relative md:hidden transition-all duration-300 ease-in-out ${isSearchOpen ? 'max-h-20 py-2' : 'max-h-0 py-0 overflow-hidden'}`}>
             <input
                type="text"
                placeholder="Search tools..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full bg-white/5 text-white placeholder-gray-500 border border-white/10 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {searchQuery && <SearchResultsDropdown onResultClick={clearSearch}/>}
          </div>
        </div>
      </header>

      <div 
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-md md:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-10" >
           {navLinks.map((link) => (
             <button 
               key={link.label} 
               onClick={() => link.type === 'anchor' ? handleAnchorLink(link.href!) : handlePageLink(link.page!)}
               className="text-2xl font-semibold text-gray-300 hover:text-white transition-colors"
            >
               {link.label}
             </button>
           ))}
        </div>
      </div>
    </>
  );
};

export default Header;