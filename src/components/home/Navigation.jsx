import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { scroll_to_id } from '@/utils/scroll';
import { call_phone } from '@/utils/phone';
import { 
  Menu, 
  X, 
  Phone, 
  Calendar,
  Flower2 
} from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    scroll_to_id(sectionId);
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'בית', id: 'home' },
    { name: 'אודות', id: 'about' },
    { name: 'טיפולים', id: 'services' },
    { name: 'צור קשר', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`} dir="rtl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <Flower2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">ד״ר נעמי קוביליאנסקי</h1>
              <p className="text-sm text-gray-600 hidden sm:block">דיקור רפואי ורפואת משפחה</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50" onClick={() => call_phone('050-123-4567')}>
              <Phone className="w-4 h-4 ml-2" />
              050-123-4567
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => scrollToSection('calendar')}>
              <Calendar className="w-4 h-4 ml-2" />
              קבעו תור
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-right text-gray-700 hover:text-blue-600 font-medium py-2"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 space-y-3">
                <Button variant="outline" className="w-full border-blue-200 text-blue-700 hover:bg-blue-50" onClick={() => call_phone('050-123-4567')}>
                  <Phone className="w-4 h-4 ml-2" />
                  צרו קשר
                </Button>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={() => scrollToSection('calendar')}>
                  <Calendar className="w-4 h-4 ml-2" />
                  קבעו תור
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}