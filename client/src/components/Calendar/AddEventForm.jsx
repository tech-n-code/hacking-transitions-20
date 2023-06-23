import React, { useState } from "react";

const AddEventForm = () => {
  const [title, setTitle] = useState("");
  const [startDateTime, setStartDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");
  const [allDayEvent, setAllDayEvent] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleStartDateTimeChange = (datetime) => {
    setStartDateTime(datetime);
  };

  const handleEndDateTimeChange = (datetime) => {
    setEndDateTime(datetime);
  };

  const handleAllDayEventChange = (event) => {
    setAllDayEvent(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle form submission here
    console.log("Title:", title);
    console.log("Start Date/Time:", startDateTime.toString());
    console.log("End Date/Time:", endDateTime.toString());
    console.log("All-Day Event:", allDayEvent);

    // Clear form inputs
    setTitle("");
    setStartDateTime("");
    setEndDateTime("");
    setAllDayEvent(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={handleTitleChange} />
      </div>
      <div>
        <label>Start Date/Time:</label>
      </div>
      <div>
        <label>End Date/Time:</label>
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
    </form>
  );
};

export default AddEventForm;
