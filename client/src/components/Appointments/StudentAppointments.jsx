import React, { useContext, useState, useEffect } from "react";
import AppointmentContext from "../../context/AppointmentContext.jsx";
import "./StudentAppointments.css";
import Scroll from "./Scroll";

export default function StudentAppointments() {
  const { students, notes, setNoteSelected, setNoteId } = useContext(AppointmentContext);
  const [expandedNoteIds, setExpandedNoteIds] = useState([]);
  const [notesToDelete, setnotesToDelete] = useState([]);

  useEffect(() => {
    // Remove deleted notes from the state
    setnotesToDelete([]);
  }, [notes]);

  const handleDeleteClick = (noteId) => {
    fetch(`/api/notes/${noteId}`, {
      method: "DELETE",
    })
      .then(() => {
        console.log("Note " + noteId + " has been deleted");
        setnotesToDelete((prevNotes) => [...prevNotes, noteId]);
      })
      .catch((error) => {
        console.error("Error deleting note:", error);
      });
  };

  const handleNoteToggle = (noteId, event) => {
    const target = event.target;
    const isExpandButton = target.classList.contains("expandButton");
    const isCollapseButton = target.classList.contains("collapseButton");

    if (isExpandButton || isCollapseButton) {
      setExpandedNoteIds((prevExpandedNoteIds) => {
        if (prevExpandedNoteIds.includes(noteId)) {
          return prevExpandedNoteIds.filter((id) => id !== noteId);
        } else {
          return [...prevExpandedNoteIds, noteId];
        }
      });
    }
  };

  return (
    <div>
      <Scroll>
        {students.map((student, indexed) => {
          const studentNotes = notes.filter(
            (note) => note.student_id === student.id
          );
          const hasNotes = studentNotes.length > 0;

          return (
            <div key={indexed}>
              {hasNotes && (
                <div className="studentNames">
                  {student.firstname} {student.lastname}
                </div>
              )}
              <div className="appointments">
                {studentNotes.map((note) => {
                  if (notesToDelete.includes(note.id)) {
                    return null; // Skip rendering the deleted note
                  }

                  const isExpanded = expandedNoteIds.includes(note.id);
                  const noteDisplay = isExpanded
                    ? note.note
                    : note.note.length > 100
                    ? note.note.slice(0, 100) + "... "
                    : note.note;
                  const showSeeMoreButton = note.note.length > 100;
                  const showCollapseButton =
                    note.note.length > 100 && isExpanded;

                  return (
                    <div key={note.id} className="noteContainer">
                      <div
                        className="reminder"
                        onClick={() => {
                          setNoteId(note.id);
                          setNoteSelected(note.note);
                        }}
                      >
                        <div
                          className={
                            isExpanded ? "noteExpanded" : "noteCollapsed"
                          }
                          onClick={(event) => handleNoteToggle(note.id, event)}
                        >
                          {noteDisplay}
                          {!isExpanded && showSeeMoreButton && (
                            <span className="expandButton">Expand note</span>
                          )}
                        </div>
                        {showCollapseButton && (
                          <span
                            className="collapseButton"
                            onClick={(event) =>
                              handleNoteToggle(note.id, event
)
                            }
                          >
                            Collapse note
                          </span>
                        )}
                      </div>
                      <button
                        className="deleteButton"
                        onClick={() => handleDeleteClick(note.id)}
                      >
                        Delete
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </Scroll>
    </div>
  );
}
