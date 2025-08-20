import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export function CalendarWidget({ on_select }) {
  return (
    <div dir="rtl">
      <Calendar onClickDay={(value) => on_select?.(value)} locale="he-IL" />
    </div>
  );
}

export default CalendarWidget;


