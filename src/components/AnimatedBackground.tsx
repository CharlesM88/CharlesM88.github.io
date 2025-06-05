import React from 'react';

interface AnimatedBackgroundProps {
  opacity?: number;
  animationDuration?: number;
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  opacity = 0.9, 
  animationDuration = 30,
  className = ""
}) => {
  return (
    <>
      <div 
        className={`absolute inset-0 ${className}`}
        style={{
          opacity,
          background: `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.4) 0%, transparent 50%),
            linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%, #f5576c 75%, #4facfe 100%)
          `,
        }}
      />

      <div 
        className={`absolute inset-0 ${className}`}
        style={{
          opacity: opacity * 0.7,
          background: `linear-gradient(45deg, #f5576c, #4facfe, #667eea, #764ba2)`,
          backgroundSize: '400% 400%',
          animation: `smoothShift ${animationDuration}s ease-in-out infinite`,
          mixBlendMode: 'overlay',
        }}
      />

      <style>{`
        @keyframes smoothShift {
          0% { background-position: 0% 50%; }
          25% { background-position: 100% 50%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </>
  );
};

export default AnimatedBackground;