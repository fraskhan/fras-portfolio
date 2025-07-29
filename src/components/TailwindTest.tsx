import React from 'react';

const TailwindTest: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          🧪 Tailwind CSS Test Suite
        </h1>
        
        {/* Basic Tailwind Classes Test */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Basic Tailwind Classes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-red-500 text-white p-4 rounded-lg shadow-lg">
              <h3 className="font-bold">Red Background</h3>
              <p className="text-sm opacity-90">If you see this red box, basic Tailwind is working!</p>
            </div>
            <div className="bg-green-500 text-white p-4 rounded-lg shadow-lg">
              <h3 className="font-bold">Green Background</h3>
              <p className="text-sm opacity-90">Grid and responsive classes working!</p>
            </div>
            <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg">
              <h3 className="font-bold">Blue Background</h3>
              <p className="text-sm opacity-90">Spacing and typography working!</p>
            </div>
          </div>
        </div>

        {/* Custom Colors Test */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Custom Colors from Config</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-primary text-white-100 p-6 rounded-lg border-2 border-white-100/20">
              <h3 className="font-bold text-lg">Primary Color</h3>
              <p className="text-white-100/80">#121212 - Dark Background</p>
              <div className="mt-2 w-full h-4 bg-primary rounded"></div>
            </div>
            <div className="bg-secondary text-white-100 p-6 rounded-lg border-2 border-white-100/20">
              <h3 className="font-bold text-lg">Secondary Color</h3>
              <p className="text-white-100/80">#8B5A2B - Brown Accent</p>
              <div className="mt-2 w-full h-4 bg-secondary rounded"></div>
            </div>
            <div className="bg-accent text-primary p-6 rounded-lg border-2 border-primary/20">
              <h3 className="font-bold text-lg">Accent Color</h3>
              <p className="text-primary/80">#87CEEB - Sky Blue</p>
              <div className="mt-2 w-full h-4 bg-accent rounded"></div>
            </div>
          </div>
        </div>

        {/* Responsive Test */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Responsive Design Test</h2>
          <div className="bg-purple-600 text-white p-4 rounded-lg">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              This text changes size at different breakpoints:
              <br />
              <span className="font-mono">
                sm: text-base | md: text-lg | lg: text-xl | xl: text-2xl
              </span>
            </p>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="bg-green-600 border-l-4 border-green-400 p-4 rounded">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl">✅</span>
            </div>
            <div className="ml-3">
              <p className="text-green-100 font-semibold">
                If you can see all the colored sections above with proper styling, Tailwind CSS is working correctly!
              </p>
              <p className="text-green-200 text-sm mt-1">
                Check the browser console - there should be no NaN errors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailwindTest; 