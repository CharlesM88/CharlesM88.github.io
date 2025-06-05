import React from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <Navbar />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-start justify-center pt-32 md:pt-40 p-4">
        <div className="text-left">
          <h1 className="text-6xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white drop-shadow-lg leading-tight">
            Hi,
          </h1>
          <h1 className="text-6xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white drop-shadow-lg leading-tight">
            I'm Charles.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;