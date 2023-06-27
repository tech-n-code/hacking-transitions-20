import React, { useState, useEffect, useContext, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import AddEventForm from "./AddEventForm";
import Modal from "react-modal";
import "./NewCalendar.css";
import AppointmentContext from "../../context/AppointmentContext.jsx";
import CohortContext from "../../context/CohortContext.jsx";
import { Tooltip } from "react-tooltip";

const NewCalendar = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isAddEventOpen, setIsAddEventOpen] = useState(false);
  const [calendarEvents, setCalendarEvents] = useState([]);
  // const [openAddEventModal, setOpenAddEventModal] = useState(false);
  const { events } = useContext(AppointmentContext);
  const { students, cohortClickedId, update, setUpdate } =
    useContext(CohortContext);

  console.log(events);

  const handleModalClose = () => {
    setIsAddEventOpen(false);
  };

  const openAddEventModal = () => {
    setIsAddEventOpen(true);
  };

  const handleViewChange = (view) => {
    console.log("Selected view: " + view);
  };

  const handleEventClick = (info) => {
    setSelectedEvent(info.event);
    console.log("Selected event: " + selectedEvent);
  };

  const getEventOwner = (givenStudentId) => {
    const eventOwner = students.find(
      (student) => student.id === givenStudentId
    );
    const eventOwnerFirstName = eventOwner ? eventOwner.firstname : null;
    const eventOwnerLastName = eventOwner ? eventOwner.lastname : null;
    return eventOwnerFirstName + " " + eventOwnerLastName;
  };

  useEffect(() => {
    setUpdate(false);
    const formattedEvents = events.map((event) => ({
      start: new Date(event.startdate),
      end: new Date(event.enddate),
      title: event.title + ": " + getEventOwner(event.student_id),
      allDay: event.allday,
      extendedProps: {
        "data-tip": event.title + ": " + getEventOwner(event.student_id),
      },
    }));
    setCalendarEvents(formattedEvents);
  }, [update, cohortClickedId]);

  const headerToolbar = {
    left: `prev,next today addEventButton`,
    center: "title",
    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
  };

  const modalStyle = {
    overlay: {
      zIndex: 100,
      backgroundColor: "rgba(0, 0, 0, 0.0)",
    },
    content: {
      position: "absolute",
      top: "50%",
      bottom: "50%",
      left: "50%",
      right: "50%",
      transform: "translate(-50%, -50%)",
      height: "fit-content",
      width: "fit-content",
      border: "1px solid #ccc",
      background: "#0D0A40",
      color: "white",
      overflow: "auto",
      borderRadius: "10px",
      outline: "none",
      padding: "30px",
      zIndex: 101,
    },
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
        initialView="dayGridMonth"
        events={calendarEvents}
        eventContent={({ event }) => (
          <div data-tip={event.extendedProps["data-tip"]}>{event.title}</div>
        )}
        eventClick={handleEventClick}
        headerToolbar={headerToolbar}
        customButtons={{
          addEventButton: {
            text: "Add Event",
            click: openAddEventModal,
          },
        }}
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
      <Modal
        isOpen={isAddEventOpen}
        onRequestClose={handleModalClose}
        contentLabel="Add Event"
        style={modalStyle}
      >
        <AddEventForm handleModalClose={handleModalClose} />
      </Modal>
    </div>
  );
};

export default NewCalendar;
