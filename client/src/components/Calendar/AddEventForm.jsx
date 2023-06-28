import React, { useState, useContext } from "react";
import "./NewCalendar.css";
import AppointmentContext from "../../context/AppointmentContext";

const AddEventForm = ({ handleModalClose }) => {
  const [title, setTitle] = useState("");
  const [startDateTime, setStartDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");
  const [allDayEvent, setAllDayEvent] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [addEventErrorMsg, setaddEventErrorMsg] = useState("");
  const { students, setUpdate } = useContext(AppointmentContext);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleStartDateTimeChange = (e) => {
    setStartDateTime(e.target.value);
  };

  const handleEndDateTimeChange = (e) => {
    setEndDateTime(e.target.value);
  };

  const handleAllDayEventChange = (event) => {
    setAllDayEvent(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle form submission here
    console.log("Title:", title);
    console.log("Start Date/Time:", startDateTime);
    console.log("End Date/Time:", endDateTime);
    console.log("All-Day Event:", allDayEvent);
    console.log("Student:", selectedStudent);

    //API Route to add event to database
    const newEvent = {
      title: `${title}`,
      startdate: `${startDateTime}`,
      enddate: `${endDateTime}`,
      allDayEvent: `${allDayEvent}`,
      student_id: `${selectedStudent}`,
    };

    if (!newEvent.title || !newEvent.startdate || !newEvent.enddate || !newEvent.allDayEvent || !newEvent.student_id) {
      setaddEventErrorMsg("Incomplete Form")
      return;
    }

    console.log(newEvent);
    fetch(`/api/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEvent),
    }).then(() => {
      console.log("Event has been added");
    });

    // Clear form inputs
    setTitle("");
    setStartDateTime("");
    setEndDateTime("");
    setAllDayEvent(false);

    //Close Modal
    handleModalClose();
    setUpdate(true);
  };

  return (
    <div className="calendar-AddEventModal">
      <form onSubmit={handleSubmit}>
        <div className="calendar-AddEventModal-elements">
          <label>Title:</label>
          <input type="text" value={title} onChange={handleTitleChange} />
        </div>
        <div className="calendar-AddEventModal-elements">
          <label>Start Date/Time:</label>
          <input
            type="datetime-local"
            value={startDateTime}
            onChange={handleStartDateTimeChange}
          />
        </div>
        <div className="calendar-AddEventModal-elements">
          <label>End Date/Time:</label>
          <input
            type="datetime-local"
            value={endDateTime}
            onChange={handleEndDateTimeChange}
          />
        </div>
        <div className="calendar-AddEventModal-elements">
          <label>
            All-Day Event:
            <input
              type="checkbox"
              checked={allDayEvent}
              onChange={handleAllDayEventChange}
            />
          </label>
        </div>
        <div className="calendar-AddEventModal-elements">
          <label>Student:</label>
          <select
            value={selectedStudent}
            onChange={(e) => setSelectedStudent(e.target.value)}
          >
            <option value=""> Please select a student</option>
            {students.map((student, x) => {
              return (
                <option key={x} value={student.id}>
                  {student.firstname} {student.lastname}
                </option>
              );
            })}
          </select>
        </div>
          <div className="calendar-ModalBtnContainer-outter">
            <div className="calendar-ModalBtnContainer">
              <button className="calendar-ModalButton" type="submit">Submit</button>
              <button className="calendar-ModalButton" type="button" onClick={handleModalClose}>
                Cancel
              </button>
            </div>
          </div>
            <div className="calendar-AddEventModal-error-container">
              <div className="calendar-AddEventModal-error">
                {addEventErrorMsg && <p>{addEventErrorMsg}</p>}
              </div>
            </div>
      </form>
    </div>
  );
};

export default AddEventForm;
