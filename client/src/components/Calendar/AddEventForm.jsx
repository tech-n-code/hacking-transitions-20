import React, { useState } from "react";

const AddEventForm = ({ handleModalClose }) => {
  const [title, setTitle] = useState("");
  const [startDateTime, setStartDateTime] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDateTime, setEndDateTime] = useState("");
  const [allDayEvent, setAllDayEvent] = useState(false);

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
      <button type="submit">Submit</button>
      <button type="button" onClick={handleModalClose}>
        Cancel
      </button>
    </form>
    // </LocalizationProvider>
  );
};

export default AddEventForm;
