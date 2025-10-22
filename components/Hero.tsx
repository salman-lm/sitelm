import React, { useState, useEffect, useCallback } from 'react';

const TEXTS_TO_ANIMATE = [
  "Discover Tools That Saves You Hours.",
  "Turn Ideas into High Quality Visuals.",
  "Create Stunning AI-Powered Videos.",
  "Generate Art from Your Imagination."
];
const TYPING_SPEED = 120;
const DELETING_SPEED = 50;
const DELAY_BETWEEN_TEXTS = 2000;

interface HeroProps {
  onNavigate: (pageState: { page: string }) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [text, setText] = useState('');
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(TYPING_SPEED);

  const handleTyping = useCallback(() => {
    const i = loopNum % TEXTS_TO_ANIMATE.length;
    const fullText = TEXTS_TO_ANIMATE[i];

    if (isDeleting) {
      setText(prev => prev.substring(0, prev.length - 1));
      setTypingSpeed(DELETING_SPEED);
    } else {
      setText(prev => fullText.substring(0, prev.length + 1));
      setTypingSpeed(TYPING_SPEED);
    }

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), DELAY_BETWEEN_TEXTS);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(prev => prev + 1);
    }
  }, [isDeleting, loopNum, text]);


  useEffect(() => {
    const timer = setTimeout(() => {
      handleTyping();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, handleTyping, typingSpeed]);
  
  const handleExploreClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onNavigate({ page: 'explore' });
  };

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
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight break-words">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400">
            {text}
          </span>
          <span className="animate-pulse text-blue-300">|</span>
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