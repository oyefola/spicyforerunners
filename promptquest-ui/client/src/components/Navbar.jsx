import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-gray-800 text-white">
      {/* Left Side: Title */}
      <div className="text-2xl font-bold">
        Prompt Quest
      </div>
      
      {/* Right Side: Avatar and XP Points */}
      <div className="flex items-center space-x-4">
        {/* XP Points */}
        <div className="bg-yellow-400 text-black rounded-full px-4 py-1 font-semibold">
          XP: 150
        </div>
        {/* Avatar */}
        <img
          src="https://via.placeholder.com/40" // Placeholder avatar image
          alt="User Avatar"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
      </div>
    </nav>
  );
};

export default Navbar;
