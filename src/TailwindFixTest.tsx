import React from 'react';

const TailwindFixTest: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-xl">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Tailwind CSS Test</h1>
        <p className="text-gray-600 mb-6">
          This component is using Tailwind CSS classes. If you can see proper styling, Tailwind is working!
        </p>
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors">
            Blue Button
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors">
            Green Button
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md transition-colors">
            Red Button
          </button>
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-md transition-colors">
            Purple Button
          </button>
        </div>
        <div className="mt-6 p-4 bg-gray-100 rounded-md">
          <h2 className="font-semibold text-gray-700 mb-2">Tailwind Features:</h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>Responsive design</li>
            <li>Utility-first approach</li>
            <li>Component styling</li>
            <li>Dark mode support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TailwindFixTest; 