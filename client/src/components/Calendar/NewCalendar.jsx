import React, { useState, useEffect, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import Modal from "react-modal";
import AddEventForm from "./AddEventForm";
import "./NewCalendar.css";

Modal.setAppElement("#root");

const NewCalendar = () => {
  const [events, setEvents] = useState([]);
  const [isAddEventOpen, setIsAddEventOpen] = useState(false);

  const openAddEventModal = () => {
    setIsAddEventOpen(true);
  };

  const handleModalClose = () => {
    setIsAddEventOpen(false);
  };

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
        events={events}
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
