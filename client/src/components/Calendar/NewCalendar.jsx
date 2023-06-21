import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

const NewCalendar = () => {
  const [events, setEvents] = useState([]);
  const handleViewChange = (view) => {
    // Handle view change here if needed
    console.log("Selected view:", view);
  };

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((data) => {
        const formattedEvents = data.map((event) => ({
          date: new Date(event.startdate),
          title: `${event.title}`,
          allDay: `${event.allday}`,
        }));
        setEvents(formattedEvents);
      })
      .catch((err) => {
        console.error("Error fetching Calendar events: ", err);
      });
  }, []);

  const headerToolbar = {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
        initialView="dayGridMonth"
        events={events}
        headerToolbar={headerToolbar}
        views={{
          week: {
            type: "timeGridWeek",
            duration: { weeks: 1 },
          },
          day: {
            type: "timeGridDay",
            duration: { days: 1 },
          },
        }}
        onView={() => handleViewChange}
      />
    </div>
  );
};

export default NewCalendar;
