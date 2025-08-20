import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { 
  Zap, 
  Heart, 
  Brain, 
  Flower2, 
  Users,
  Shield,
  Clock,
  Target,
  Moon,
  Smile
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Zap,
      title: "טיפול כאבים כרוניים",
      description: "דיקור לטיפול בכאבי גב, צוואר, מפרקים וכאבים כרוניים אחרים.",
      color: "bg-red-500"
    },
    {
      icon: Heart,
      title: "בעיות לב וכלי דם",
      description: "טיפול תומך ביתר לחץ דם, הפרעות קצב ובעיות זרימת דם.",
      color: "bg-red-500"
    },
    {
      icon: Brain,
      title: "חרדה ודיכאון",
      description: "דיקור לשיפור מצב הרוח, הפחתת חרדה וחיזוק הרווחה הנפשית.",
      color: "bg-purple-500"
    },
    {
      icon: Flower2,
      title: "בעיות פוריות",
      description: "טיפול תומך לשיפור הפוריות אצל נשים וגברים, כולל תמיכה ב-IVF.",
      color: "bg-pink-500"
    },
    {
      icon: Moon,
      title: "הפרעות שינה",
      description: "דיקור לטיפול בנדודי שינה, שינה לא איכותית ולבעיות קשורות שינה.",
      color: "bg-indigo-500"
    },
    {
      icon: Target,
      title: "הפסקת עישון",
      description: "תמיכה בהפסקת עישון ופטיעה מהתמכרויות אחרות באמצעות דיקור.",
      color: "bg-green-500"
    },
    {
      icon: Users,
      title: "בעיות נשים",
      description: "טיפול בהפרעות מחזור, גיל המעבר, כאבי וסת ובעיות גינקולוגיות.",
      color: "bg-pink-500"
    },
    {
      icon: Smile,
      title: "מתח וחרדה",
      description: "הקלה על מתח, חרדה כללית ושיפור היכולת להתמודד עם לחצים.",
      color: "bg-blue-500"
    },
    {
      icon: Shield,
      title: "חיזוק מערכת החיסון",
      description: "טיפולים לחיזוק מערכת החיסון והתנגדות לזיהומים.",
      color: "bg-green-500"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            טיפולי דיקור רפואי
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            שירותי
            <span className="block text-blue-600 font-medium">דיקור מקצועיים</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            טיפולי דיקור רפואי המשלבים בין חכמת הרפואה המזרחית העתיקה לבין הידע הרפואי המערבי המודרני, 
            לטיפול מקיף ויעיל במגוון רחב של מצבים.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Treatment Process */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-12 mb-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-semibold text-center text-gray-900 mb-8">תהליך הטיפול</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto flex items-center justify-center text-white text-xl font-bold">1</div>
                <h4 className="text-xl font-semibold text-gray-900">אבחון ראשוני</h4>
                <p className="text-gray-600">בדיקה מקיפה על פי עקרונות הרפואה המזרחית והמערבית</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-500 rounded-full mx-auto flex items-center justify-center text-white text-xl font-bold">2</div>
                <h4 className="text-xl font-semibold text-gray-900">תכנית טיפול אישית</h4>
                <p className="text-gray-600">הכנת תוכנית טיפול מותאמת אישית לצרכים שלכם</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto flex items-center justify-center text-white text-xl font-bold">3</div>
                <h4 className="text-xl font-semibold text-gray-900">טיפולי דיקור</h4>
                <p className="text-gray-600">ביצוע טיפולים עם מעקב רציף ועדכון התוכנית לפי הצורך</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-12 text-center text-white">
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-3xl lg:text-4xl font-semibold">
              מוכנים להתחיל את המסע לבריאות טבעית?
            </h3>
            <p className="text-xl opacity-90">
              קבעו תור להתייעצות ראשונית וגלו איך דיקור רפואי יכול לעזור לכם
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-300">
                <Clock className="w-5 h-5 ml-2 inline" />
                קבעו תור
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                למידע נוסף על הטיפולים
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}