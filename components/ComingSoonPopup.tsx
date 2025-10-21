import React from 'react';

interface ComingSoonPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ComingSoonPopup: React.FC<ComingSoonPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in" 
      style={{ animationDuration: '300ms' }}
      onClick={onClose}
    >
      <div 
        className="glass-card rounded-xl p-6 sm:p-8 max-w-md w-full mx-4 text-center transform transition-all duration-300 animate-popup-in"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the popup
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Coming Soon!
        </h2>
        <p className="text-gray-300 text-base sm:text-lg">
          We are working very hard on adding these tools.
        </p>
        <p className="text-gray-300 text-base sm:text-lg mt-2">
          Kindly visit again soon.
        </p>
        <div className="mt-8">
          <button 
            onClick={onClose}
            className="group relative inline-block px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-transform duration-300 transform hover:scale-105"
          >
            <span className="relative">Got it</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPopup;
