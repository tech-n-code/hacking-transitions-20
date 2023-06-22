import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import Modal from "react-modal";

Modal.setAppElement("#root");

const NewCalendar = () => {
  const [events, setEvents] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleViewChange = (view) => {
    // Handle view change here if needed
    console.log("Selected view:", view);
  };

  const handleEventClick = (info) => {
    setSelectedEvent(info.event);
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
    setSelectedEvent(null);
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
        onView={() => handleViewChange}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModalClose}
        contentLabel="Event Details"
      >
        <div>
          <h2>{selectedEvent?.title}</h2>
          <p>{selectedEvent?.startdate?.toDateString()}</p>
          <button onClick={handleModalClose}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default NewCalendar;
