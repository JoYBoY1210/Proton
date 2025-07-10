import React from "react";

export default function Sidebar() {
  const buttonClasses = (bgColor, hoverBgColor, textColor = 'text-white') =>
    `cursor-pointer ${bgColor} ${hoverBgColor} p-1.5 rounded-lg w-full ${textColor} font-semibold transition-all 
     shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[3px_4px_0_0_rgba(128,128,128,1)] dark:hover:shadow-[3px_3px_0_0_rgba(255,255,255,0.8)] hover:shadow-[4px_3px_0_0_rgba(0,0,0,0.8)] active:translate-y-1 active:shadow-none`;

  return (
    <div className="w-60 bg-white dark:bg-black transition-colors duration-300 ease-in-out text-black dark:text-white h-full p-4 border-r border-gray-300 dark:border-gray-700">
      <h2 className="font-semibold text-lg mb-2">Tools</h2>

      <div className="space-y-4 mt-4">
        <button className={buttonClasses('bg-blue-600', 'hover:bg-blue-500')}>
          + Add Node
        </button>
        <button className={buttonClasses('bg-emerald-600', 'hover:bg-emerald-500')}>
          💾 Save
        </button>
        <button className={buttonClasses('bg-purple-600', 'hover:bg-purple-500')}>
          🚀 Deploy
        </button>
      </div>
    </div>
  );
}
