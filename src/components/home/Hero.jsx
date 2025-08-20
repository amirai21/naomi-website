import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Calendar, MapPin } from 'lucide-react';
import dikurImage from '@/assets/dry_needling.jpg';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-screen flex items-center" dir="rtl">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-32 right-16 w-48 h-48 bg-green-100 rounded-full opacity-30 blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Right Content */}
          <div className="space-y-8 lg:order-2">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-blue-600 rounded-full ml-2"></span>
                מקבלת מטופלים חדשים
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-light text-gray-900 leading-tight">
                דיקור רפואי
                <span className="block text-blue-600 font-medium">לבריאות ורווחה</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                טיפולי דיקור רפואי מקצועיים המשלבים רפואה מערבית ומזרחית. 
                בניסיון רב שנים ברפואת משפחה ודיקור רפואי מוסמך.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Calendar className="w-5 h-5 ml-3" />
                קבעו תור
              </Button>
              
              <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50 px-8 py-6 text-lg rounded-xl transition-all duration-300">
                <Phone className="w-5 h-5 ml-3" />
                צרו קשר היום
              </Button>
            </div>
            
            {/* Quick Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-gray-200">
              <div className="flex items-center text-gray-600">
                <Phone className="w-5 h-5 ml-3 text-blue-500" />
                <span className="font-medium">050-123-4567</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 ml-3 text-green-500" />
                <span>רח' הבריאות 456, תל אביב</span>
              </div>
            </div>
          </div>
          
          {/* Left Content - Doctor Image */}
          <div className="relative lg:order-1">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src={dikurImage}
                alt="ד״ר נעמי קוביליאנסקי במהלך טיפול דיקור"
                className="w-full h-[600px] object-cover"
              />
              
              {/* Overlay Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌿</span>
                  </div>
                  <div className="text-right max-w-sm">
                    <h3 className="text-xl font-semibold text-gray-900">ד״ר נעמי קוביליאנסקי</h3>
                    <p className="text-blue-600 font-medium">דיקור רפואי ורפואת משפחה</p>
                    <p className="text-gray-600 text-sm">רופאה מוסמכת עם התמחות בדיקור</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-lg p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">מוסמכת</div>
                <div className="text-gray-600 text-sm">דיקור רפואי</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">1500+</div>
                <div className="text-gray-600 text-sm">טיפולים מוצלחים</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}