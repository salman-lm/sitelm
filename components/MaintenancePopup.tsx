import React from 'react';

const MaintenancePopup: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in" style={{ animationDuration: '300ms' }}>
      <div className="glass-card rounded-xl p-8 max-w-md w-full mx-4 text-center transform transition-all duration-300 animate-popup-in">
        <div className="mb-6">
          <h1 className="text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            AILM.in
          </h1>
        </div>
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-400">
          Under Maintenance
        </h2>
        <p className="text-gray-300 text-lg">
          This site is currently undergoing maintenance.
        </p>
        <p className="text-gray-300 text-lg mt-2">
          Thanks for visiting, please try another day.
        </p>
      </div>
    </div>
  );
};

export default MaintenancePopup;
