import React from 'react';

const TailwindTest = () => {
  return (
    <div className="p-8 m-4 bg-blue-500 text-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Tailwind CSS Test</h1>
      <p className="text-lg">If you can see this with blue background and white text, Tailwind CSS is working!</p>
      <button className="mt-4 px-4 py-2 bg-white text-blue-500 rounded hover:bg-blue-100 transition-colors">
        Test Button
      </button>
    </div>
  );
};

export default TailwindTest; 