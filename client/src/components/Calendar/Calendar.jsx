import React, { useState } from "react";
import '../../styles/Calendar.css'


const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events] = useState([
    { date: new Date(2023, 5, 10), title: "Meeting" },
    { date: new Date(2023, 5, 15), title: "Birthday Party" },
    { date: new Date(2023, 5, 22), title: "Conference" },
  ]);

  const goToPrevMonth = () => {
    setCurrentDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1)
    );
  };

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
  const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();

  const days = [];
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  days.push(...weekDays);
//   if (firstDayIndex > 7) {
//     for (let i = firstDayIndex - 7; i > 0; i--) {
//       days.push(null);
//     }
//   }
  for (let i = firstDayIndex; i > 0; i--) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({ day: i, isActive: true });
  }

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={goToPrevMonth}>&lt;</button>
        <h2>
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentYear}
        </h2>
        <button onClick={goToNextMonth}>&gt;</button>
      </div>
      <div className="weekdays">
        {weekDays.map((day, index) => (
          <div key={index} className="weekday">
            {day}
          </div>
        ))}
      </div>
      <div className="days">
        {days.map((day, index) => {
          if (day === null) {
            return <div key={index} className="day inactive"></div>;
          } else {
            const date = new Date(currentYear, currentMonth, day.day);
            const event = events.find(
              (event) => event.date.toDateString() === date.toDateString()
            );
            return (
              <div
                key={index}
                className={`day ${!day.isActive ? "inactive" : ""}`}
              >
                <div className="day-inner">
                  <div className="day-number">{day.day}</div>
                  {event && <span className="event">{event.title}</span>}
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Calendar;
