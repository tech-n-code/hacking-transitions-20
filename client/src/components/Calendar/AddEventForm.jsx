import React, { useState, useContext } from "react";
import AppointmentContext from "../../context/AppointmentContext";

const AddEventForm = ({ handleModalClose }) => {
  const [title, setTitle] = useState("");
  const [startDateTime, setStartDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");
  const [allDayEvent, setAllDayEvent] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState("");
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

    console.log(newEvent);
    fetch(`/api/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEvent),
    }).then(() => {
      console.log("Event has been added");
      //setUpdate(true);
    });

    // Clear form inputs
    setTitle("");
    setStartDateTime("");
    setEndDateTime("");
    setAllDayEvent(false);

    //Close Modal
    handleModalClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={handleTitleChange} />
      </div>
      <div>
        <label>Start Date/Time:</label>
        <input
          type="datetime-local"
          value={startDateTime}
          onChange={handleStartDateTimeChange}
        />
      </div>
      <div>
        <label>End Date/Time:</label>
        <input
          type="datetime-local"
          value={endDateTime}
          onChange={handleEndDateTimeChange}
        />
      </div>
      <div>
        <label>
          All-Day Event:
          <input
            type="checkbox"
            checked={allDayEvent}
            onChange={handleAllDayEventChange}
          />
        </label>
      </div>
      <div>
        <label>Student:</label>
        <select
          style={{ margin: "auto auto 20px", display: "block" }}
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
      <button type="submit">Submit</button>
      <button type="button" onClick={handleModalClose}>
        Cancel
      </button>
    </form>
  );
};

export default AddEventForm;
