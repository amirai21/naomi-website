import React from 'react';
import { 
  Flower2, 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  Heart,
  Shield,
  Award
} from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'אודות ד״ר קוביליאנסקי', href: '#about' },
    { name: 'טיפולי דיקור', href: '#services' },
    { name: 'צור קשר', href: '#contact' },
    { name: 'קביעת תורים', href: '#' },
    { name: 'מידע על טיפולים', href: '#' },
    { name: 'שאלות נפוצות', href: '#' }
  ];

  const treatments = [
    { name: 'טיפול כאבים כרוניים', href: '#services' },
    { name: 'חרדה ודיכאון', href: '#services' },
    { name: 'בעיות פוריות', href: '#services' },
    { name: 'הפרעות שינה', href: '#services' },
    { name: 'הפסקת עישון', href: '#services' },
    { name: 'חיזוק מערכת החיסון', href: '#services' }
  ];

  return (
    <footer className="bg-gray-900 text-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Practice Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <Flower2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">ד״ר נעמי קוביליאנסקי</h3>
                <p className="text-gray-400">דיקור רפואי ורפואת משפחה</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              מספקת טיפולי דיקור יבש מקצועיים על ידי רופאת משפחה מוסמכת.
            </p>
            
            <div className="flex space-x-4 space-x-reverse">
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-blue-400" />
              </div>
              <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-green-400" />
              </div>
              <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-purple-400" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">קישורים מהירים</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">טיפולי דיקור</h4>
            <ul className="space-y-3">
              {treatments.map((treatment, index) => (
                <li key={index}>
                  <a 
                    href={treatment.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {treatment.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">פרטי יצירת קשר</h4>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3 space-x-reverse">
                <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">050-123-4567</p>
                  <p className="text-gray-400 text-sm">קביעת תורים וייעוץ</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 space-x-reverse">
                <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">naomi@acupuncture-clinic.co.il</p>
                  <p className="text-gray-400 text-sm">פניות כלליות</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 space-x-reverse">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">רחוב הבריאות 456, קומה 3</p>
                  <p className="text-gray-400 text-sm">תל אביב, ישראל 67890</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 space-x-reverse">
                <Clock className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">א׳-ה׳: 9:00-18:00</p>
                  <p className="text-gray-400 text-sm">ו׳: 9:00-13:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 ד״ר נעמי קוביליאנסקי - מרפאת דיקור רפואי. כל הזכויות שמורות.
            </div>
            
            <div className="flex space-x-6 space-x-reverse text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">מדיניות פרטיות</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">תנאי שירות</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">הודעת פרטיות רפואית</a>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}