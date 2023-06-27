import React, { useState, useEffect, useContext, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import "./NewCalendar.css";
import AppointmentContext from "../../context/AppointmentContext.jsx";
import CohortContext from "../../context/CohortContext.jsx";
import { Tooltip } from 'react-tooltip';

const NewCalendar = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isAddEventOpen, setIsAddEventOpen] = useState(false);
  const [calendarEvents, setCalendarEvents] = useState([]);
  const { events } = useContext(AppointmentContext);
  const { students, cohortClickedId, update, setUpdate } = useContext(CohortContext);

  // const handleViewChange = (view) => {
  //   console.log("Selected view: " + view);
  // };

  const handleEventClick = (info) => {
    setSelectedEvent(info.event);
    console.log("Selected event: " + selectedEvent);
  };

  const getEventOwner = (givenStudentId) => {
    const eventOwner = students.find((student) =>
    student.id === givenStudentId);
    const eventOwnerFirstName = eventOwner ? eventOwner.firstname : null;
    const eventOwnerLastName = eventOwner ? eventOwner.lastname : null;
    return eventOwnerFirstName + " " + eventOwnerLastName;
  }

  useEffect(() => {
    setUpdate(false)
    let formattedEvents = [];
    if (events.length > 0) {
      formattedEvents = events.map((event) => ({
        start: new Date(event.startdate),
        end: new Date(event.enddate),
        title: event.title + ": " + getEventOwner(event.student_id),
        allDay: event.allday,
        extendedProps: {
          'data-tip': event.title + ": " + getEventOwner(event.student_id),
          'tooltip-id': event.id
        }
      }));
    }
    setCalendarEvents(formattedEvents);
  }, [update, events, cohortClickedId]);

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
        initialDate="2023-05-01"
        events={calendarEvents}
        eventContent={({ event }) => {
          const tooltipId = event.extendedProps['tooltip-id'];
          return (
            <div 
            data-tooltip-id={tooltipId}
            data-tooltip-content={event.extendedProps['data-tip']}
            data-tooltip-place="top"
            >
              {event.title}
            </div>
          );
        }}
        eventClick={handleEventClick}
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
        // onView={() => handleViewChange}
      />
      {calendarEvents.map((event) => (
        <Tooltip
        className="calendar-tooltip"
        key={event.extendedProps['tooltip-id']}
        id={event.extendedProps['tooltip-id']}
        />
    ))}
    </div>
  );
};

export default NewCalendar;
