import React from 'react';
import { Card } from '@/components/ui/card';
import { Award, Heart, Users, Clock, Flower2, ShieldCheck } from 'lucide-react';
import naomiImage from '@/assets/naomi1.jpg';

export default function About() {
  const achievements = [
    {
      icon: Award,
      title: "רופאה מוסמכת",
      description: "רפואת משפחה ודיקור רפואי"
    },
    {
      icon: Flower2,
      title: "גישה הוליסטית",
      description: "שילוב רפואה מערבית ומזרחית"
    },
    {
      icon: Users,
      title: "טיפול אישי",
      description: "התאמה אינדיבידואלית לכל מטופל"
    },
    {
      icon: ShieldCheck,
      title: "בטיחות מירבית",
      description: "מחטים סטריליות חד פעמיות"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
            אודות ד״ר קוביליאנסקי
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            הכירו את
            <span className="block text-green-600 font-medium">ד״ר נעמי קוביליאנסקי דברת</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            רופאת משפחה מוסמכת עם התמחות בדיקור יבש, המתמקד בטיפול בכאבים כרוניים ושיפור תפקוד השרירים. 
            דיקור יבש הוא טכניקה מתקדמת המשתמשת במחטים דקות כדי לשחרר מתח בשרירים ולהקל על כאבים, 
            תוך שיפור התנועה והגמישות.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Doctor Photo */}
          <div className="relative lg:order-1">
            <div className="relative overflow-hidden rounded-3xl">
            <img
                src={naomiImage}              // 👈 use here
                alt="Naomi"
                className="w-full h-full object-cover"
            />
              
              {/* Decorative elements */}
            </div>
          </div>

          {/* Biography Content */}
          <div className="space-y-8 lg:order-2">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-gray-900">ד״ר נעמי קוביליאנסקי</h3>
              
              <div className="prose prose-lg text-gray-600 space-y-4 text-right">
                <p>
                  ד״ר קוביליאנסקי היא רופאת משפחה המתמחה בטיפול במחלות כרוניות, בריאות הנפש, 
                  בריאות ילדים, ומניעת מחלות. עם ניסיון רב, היא מספקת טיפול מותאם אישית למגוון רחב של מצבים רפואיים.
                </p>
                
                <p>
                  ד״ר קוביליאנסקי מאמינה בטיפול רפואי הוליסטי ומשלבת דיקור יבש כדי לשפר כאבים כרוניים ומצבים רפואיים נוספים. 
                </p>
                
                <p>
                  בזמנה הפנוי, ד״ר קוביליאנסקי נהנית לעסוק ביוגה ומדיטציה, ומשתתפת בקורסי השתלמות 
                  בתחום הרפואה האינטגרטיבית כדי להישאר מעודכנת בשיטות הטיפול החדישות ביותר.
                </p>
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">השכלה ותעודות</h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full ml-3"></div>
                  <span>דוקטור לרפואה, אוניברסיטת בר אילן</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full ml-3"></div>
                  <span>התמחות ברפואת משפחה, כללית</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full ml-3"></div>
                  <span>תעודת מומחה בדיקור רפואי, המכללה הישראלית לדיקור</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full ml-3"></div>
                  <span>רישיון משרד הבריאות לעיסוק בדיקור רפואי</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="p-8 border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl mx-auto flex items-center justify-center">
                  <achievement.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}