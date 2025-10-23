import React, { useState, useEffect } from 'react';

interface HeroProps {
  onNavigate: (pageState: { page: string }) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const handleExploreClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onNavigate({ page: 'explore' });
  };
  
  const textOptions = [
    "Turn Text into High-Quality Videos.",
    "Create Viral Videos in Seconds.",
    "Generate Realistic Voices from Text.",
    "Bring Creative Visions to Life."
  ];
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = textOptions[textIndex];
      
      if (isDeleting) {
        // Deleting text
        setCurrentText(currentText.substring(0, currentText.length - 1));
      } else {
        // Typing text
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      // Logic to switch between typing and deleting
      if (!isDeleting && currentText === fullText) {
        // Pause at the end of typing
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
      }
    };

    const typingSpeed = isDeleting ? 75 : 150;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex]);


  return (
    <div className="relative h-[60vh] w-full flex items-center justify-center text-center overflow-hidden">
      <video
        src="https://ik.imagekit.io/wee6hkfuj/1022.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/60 z-1"></div>
      
      <div className="relative z-10 px-4 w-full">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight break-words h-24 sm:h-28 md:h-32 flex items-center justify-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400">
            {/* The non-breaking space ensures the height is maintained even when text is empty */}
            {currentText || '\u00A0'}
            <span className="cursor-blink">|</span>
          </span>
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
          Discover the best AI tools to bring your creative visions to life.
        </p>
        
        <div className="mt-12">
            <button onClick={handleExploreClick} className="group relative inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-transform duration-300 transform hover:scale-105">
                <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-75 blur transition-opacity duration-300 group-hover:opacity-100"></span>
                <span className="relative">Explore AI Tools</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;