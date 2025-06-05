import React, { useState, useEffect, useRef } from 'react';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedItem, setSelectedItem] = useState('About');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateIndicator = () => {
      const selectedElement = navRefs.current[selectedItem];
      if (selectedElement) {
        const rect = selectedElement.getBoundingClientRect();
        const navContainer = selectedElement.closest('.flex.items-center');
        const containerRect = navContainer?.getBoundingClientRect();
        
        if (containerRect) {
          setIndicatorStyle({
            width: rect.width,
            height: rect.height,
            transform: `translateX(${rect.left - containerRect.left}px)`,
          });
        }
      }
    };

    setTimeout(updateIndicator, 10);
    
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [selectedItem, isScrolled]);

  const handleItemClick = (itemName: string) => {
    setSelectedItem(itemName);
  };

  if (isScrolled) {
    return (
      <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${className}`}>
        <div className="bg-white/10 backdrop-blur-lg px-3 md:px-6 py-2 md:py-3 rounded-2xl shadow-2xl border border-white/20">
          <div className="flex items-center space-x-1 md:space-x-4 relative">
            {/* Animated indicator */}
            <div 
              className="absolute bg-white/20 backdrop-blur-lg rounded-lg shadow-lg border border-white/30 transition-all duration-500 ease-out"
              style={indicatorStyle}
            />
            
            {/* Navigation Links */}
            {navItems.map((item) => (
              <a
                key={item.name}
                ref={(el) => { navRefs.current[item.name] = el; }}
                href={item.href}
                onClick={() => handleItemClick(item.name)}
                className="px-2 md:px-3 py-1 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 text-white drop-shadow-sm relative z-10"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${className}`}>
      <div className="flex items-center space-x-1 md:space-x-3 relative">
        {/* Animated indicator */}
        <div 
          className="absolute bg-white/15 backdrop-blur-lg rounded-xl md:rounded-2xl shadow-2xl border border-white/30 transition-all duration-500 ease-out"
          style={indicatorStyle}
        />
        
        {/* Separated Navigation Links */}
        {navItems.map((item) => (
          <a
            key={item.name}
            ref={(el) => { navRefs.current[item.name] = el; }}
            href={item.href}
            onClick={() => handleItemClick(item.name)}
            className="px-2 md:px-4 py-2 md:py-3 rounded-xl md:rounded-2xl text-xs md:text-sm font-medium transition-all duration-200 text-white/80 drop-shadow-sm relative z-10"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;