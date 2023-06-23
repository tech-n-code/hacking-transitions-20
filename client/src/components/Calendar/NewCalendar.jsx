import React, { useState, useEffect, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import Modal from "react-modal";
import "./NewCalendar.css";
import { Tooltip } from 'react-tooltip';

Modal.setAppElement("#root");

const NewCalendar = () => {
  const calendarRef = useRef(null);
  const [events, setEvents] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isAddEventOpen, setIsAddEventOpen] = useState(false);

  const openAddEventModal = () => {
    setIsAddEventOpen(true);
  };

  const handleViewChange = (view) => {
    // Handle view change here if needed
    console.log("Selected view:", view);
  };

  const handleEventClick = (info) => {
    setSelectedEvent(info.event);
    setModalIsOpen(true);
    console.log(selectedEvent);
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

  useEffect(() => {
    const calendarApi = calendarRef.current.getApi();

    const updateEventRender = () => {
      const eventElements =
        calendarApi.el.getElementsByClassName("fc-event-main");

      Array.from(eventElements).forEach((element) => {
        const title = element.innerText;

        const tooltip = document.createElement("div");
        tooltip.className = "event-tooltip";
        tooltip.textContent = title;

        element.addEventListener("mouseenter", () => {
          element.appendChild(tooltip);
        });

        element.addEventListener("mouseleave", () => {
          element.removeChild(tooltip);
        });
      });
    };

    calendarApi.on("datesRender", updateEventRender);

    return () => {
      calendarApi.off("datesRender", updateEventRender);
    };
  }, []);

  const headerToolbar = {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
    // extraButtons: [
    //   {
    //     text: "Add Event",
    //     click: openAddEventModal,
    //   },
    // ],
  };

  const modalStyle = {
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
      background: "#fff",
      overflow: "auto",
      borderRadius: "10px",
      outline: "none",
      padding: "30px",
    },
  };

  return (
    <div>
      <FullCalendar
        ref={calendarRef}
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
        style={modalStyle}
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
