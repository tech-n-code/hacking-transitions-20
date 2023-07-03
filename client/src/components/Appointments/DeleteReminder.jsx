/**
 * Legacy component; not used after sprint 1.
 */

import React, { useState, useContext } from "react";
import "./Appointments.css";
import CohortContext from "../../context/CohortContext.jsx";

export default function DeleteReminder() {
  const [selectedStudent, setSelectedStudent] = useState("");
  const { students, setUpdate } = useContext(CohortContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8000/api/notes/${selectedStudent}`, {
      method: "DELETE",
    })
      .then(() => {
        console.log("Note has been deleted");
        setUpdate(true);
      })
      .catch((error) => {
        console.error("Error deleting note:", error);
      });

      fetch(`/api/notes/${selectedStudent}`, {
        method: "DELETE",
    }).then(() => {
        console.log('Note has been deleted');
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
