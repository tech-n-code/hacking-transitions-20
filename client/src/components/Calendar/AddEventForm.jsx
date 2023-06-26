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

    // Clear form inputs
    setTitle("");
    setStartDateTime("");
    setEndDateTime("");
    setAllDayEvent(false);

    //Close Modal
    handleModalClose();
  };

  return (
    // <LocalizationProvider dateAdapter={dateAdapter}>
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
    // </LocalizationProvider>
  );
};

export default AddEventForm;
