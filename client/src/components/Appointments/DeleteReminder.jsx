import React, { useState, useContext } from "react";
import "./Appointments.css";
import AppointmentContext from "../../context/AppointmentContext";

export default function DeleteReminder() {
  const [selectedStudent, setSelectedStudent] = useState("");
  const { students, setUpdate } = useContext(AppointmentContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8000/api/appointments/${selectedStudent}`, {
      method: "DELETE",
    })
      .then(() => {
        console.log("Note has been deleted");
        setUpdate(true);
      })
      .catch((error) => {
        console.error("Error deleting note:", error);
      });

      fetch(`/api/appointments/${selectedStudent}`, {
        method: "DELETE",
    }).then(() => {
        console.log('Note has been deleted');
        // setDeleteNote(false);
        // setUpdate(true);
    })
  };

  return (
    <span>
      <div>
        <label>
          Select student's notes to Delete <br />{" "}
          <p>*CAUTION: this will delete all notes for the selected student</p>
        </label>
      </div>
      <select
        value={selectedStudent}
        onChange={(e) => setSelectedStudent(e.target.value)}
        required
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
      <div>
        <span>
          <button className="addSubmit" onClick={handleSubmit}>
            Delete Notes
          </button>
        </span>
        <span>
          <button className="addCancel" onClick={() => setDeleteNote(false)}>
            Cancel
          </button>
        </span>
      </div>
    </span>
  );
}



const handleSubmit = (e) => {
    console.log("form submission")
    e.preventDefault();

    fetch(`http://localhost:8000/api/appointments/${selectedStudent}`, {
        method: "DELETE",
    }).then(() =>{
        console.log('Note has been deleted');
        setDeleteNote(false);
        setUpdate(true);
    })

    fetch(`/api/appointments/${selectedStudent}`, {
        method: "DELETE",
    }).then(() => {
        console.log('Note has been deleted');
        setDeleteNote(false);
        setUpdate(true);
    })
}