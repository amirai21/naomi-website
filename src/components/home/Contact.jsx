import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar,
  Flower2,
  Car,
  CreditCard
} from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "טלפון",
      details: "050-123-4567",
      subtext: "להזמנת תורים ושאלות דחופות"
    },
    {
      icon: Mail,
      title: "דוא״ל",
      details: "naomi@acupuncture-clinic.co.il",
      subtext: "לפניות לא דחופות ומידע כללי"
    },
    {
      icon: MapPin,
      title: "כתובת",
      details: "רחוב הבריאות 456, קומה 3",
      subtext: "תל אביב, ישראל 67890"
    }
  ];

  const officeHours = [
    { day: "יום ראשון", hours: "סגור" }, // Sunday - Closed
    { day: "יום שני", hours: "16:00 - 19:00" }, // Monday
    { day: "יום שלישי", hours: "סגור" }, // Tuesday - Closed
    { day: "יום רביעי", hours: "14:00 - 17:00" }, // Wednesday
    { day: "יום חמישי", hours: "16:00 - 19:00" }, // Thursday
    { day: "יום שישי", hours: "13:00 - 16:00" }, // Friday
    { day: "יום שבת", hours: "סגור" } // Saturday - Closed
  ];

  const practiceFeatures = [
    {
      icon: Flower2,
      title: "מחטים סטריליות",
      description: "מחטים חד פעמיות בטוחות ואיכותיות"
    },
    {
      icon: Car,
      title: "חניה נוחה",
      description: "חניה זמינה ליד הבניין"
    },
    {
      icon: CreditCard,
      title: "אפשרויות תשלום",
      description: "מזומן, כרטיסי אשראי וביטוחי השלמה"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
            צרו קשר
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            יצירת קשר עם
            <span className="block text-green-600 font-medium">המרפאה לדיקור</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            אנו כאן לעזור בצרכי הבריאות שלכם. פנו אלינו לקביעת תור לטיפול דיקור או 
            לכל שאלה על הטיפולים שלנו.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-center space-y-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl mx-auto flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                      <p className="text-blue-600 font-medium mb-1">{info.details}</p>
                      <p className="text-sm text-gray-600">{info.subtext}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Treatment Information */}
            <Card className="p-8 border-r-4 border-green-500 bg-green-50">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Flower2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">התייעצות ראשונית</h3>
                  <p className="text-gray-700 mb-3">
                    בפגישה הראשונה נבצע אבחון מקיף ונסביר על תהליך הטיפול המתאים עבורכם.
                  </p>
                  <p className="text-lg font-semibold text-green-600">משך הפגישה: כ-30 דקות</p>
                  <p className="text-sm text-gray-600 mt-2">כולל אבחון, הסבר והטיפול הראשון</p>
                </div>
              </div>
            </Card>

            {/* Schedule Appointment CTA */}
            <Card className="p-8 bg-gradient-to-r from-blue-600 to-green-600 text-white">
              <div className="text-center space-y-6">
                <Calendar className="w-16 h-16 mx-auto opacity-80" />
                <div>
                  <h3 className="text-2xl font-semibold mb-3">מוכנים להתחיל?</h3>
                  <p className="text-lg opacity-90 mb-6">
                    קבעו תור להתייעצות ראשונית ונתחיל במסע לבריאות טבעית
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
                  קביעת תור מקוונת
                    </Button>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
                      התקשרו לקביעת תור
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Office Hours & Features */}
          <div className="space-y-8">
            
                {/* Office Hours */}
            <Card className="p-6 shadow-lg">
              <div className="flex items-center mb-6">
                <Clock className="w-6 h-6 text-blue-600 ml-3" />
                <h3 className="text-xl font-semibold text-gray-900">שעות קבלה</h3>
              </div>
              
              <div className="space-y-3">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-gray-700">{schedule.day}</span>
                    <span className={`text-sm ${schedule.hours === 'סגור' ? 'text-red-500' : 'text-gray-600'}`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>תורים דחופים</strong> - נשתדל להתאים תור באותו יום או למחרת
                </p>
              </div>
            </Card>

            {/* Practice Features */}
            <Card className="p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">מאפייני הטיפול</h3>
              <div className="space-y-6">
                {practiceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 space-x-reverse">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}