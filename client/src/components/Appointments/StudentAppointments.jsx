import React, { useContext, useState, useEffect } from "react";
import AppointmentContext from "../../context/AppointmentContext.jsx";
import "./StudentAppointments.css";
import Scroll from "./Scroll";
import ChangeReminder from "./ChangeReminder";

export default function StudentAppointments() {
  const { students, notes, setNoteSelected, setNoteId } =
    useContext(AppointmentContext);
  const [expandedNoteIds, setExpandedNoteIds] = useState([]);
  const [notesToDelete, setNotesToDelete] = useState([]);

  const [editNote, setEditNote] = useState(false);

  const handleEditClick = () => {
    setEditNote(true);
    console.log(editNote);
  };

  const [deleteConfirmation, setDeleteConfirmation] = useState(null);

  useEffect(() => {
    // Remove deleted notes from the state
    setNotesToDelete([]);
  }, [notes]);

  const handleDeleteClick = (noteId) => {
    setDeleteConfirmation(noteId);
  };

  const handleConfirmDeleteClick = (noteId) => {
    if (noteId) {
      // Check if the noteId is provided
      fetch(`/api/notes/${noteId}`, {
        method: "DELETE",
      })
        .then(() => {
          console.log("Note " + noteId + " has been deleted");
          setNotesToDelete((prevNotes) => [...prevNotes, noteId]);
          setDeleteConfirmation(null);
        })
        .catch((error) => {
          console.error("Error deleting note:", error);
          setDeleteConfirmation(null);
        });
    }
  };

  const handleCancelDeleteClick = () => {
    setDeleteConfirmation(null);
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
                    : note.note.length > 70
                    ? note.note.slice(0, 70) + "... "
                    : note.note;
                  const showSeeMoreButton = note.note.length > 70;
                  const showCollapseButton =
                    note.note.length > 70 && isExpanded;
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
                              handleNoteToggle(note.id, event)
                            }
                          >
                            Collapse note
                          </span>
                        )}
                      </div>

                      <button
                        className="editButton"
                        onClick={() => {
                          handleEditClick(note.id);
                          setNoteId(note.id);
                          setNoteSelected(note.note);
                        }}
                      >
                        Edit
                      </button>
                      {deleteConfirmation === note.id ? (
                        <div>
                          <button
                            className="confirmDeleteButton"
                            onClick={() =>
                              handleConfirmDeleteClick(deleteConfirmation)
                            }
                          >
                            Confirm
                          </button>

                          <button
                            className="cancelDeleteButton"
                            onClick={handleCancelDeleteClick}
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          className="deleteButton"
                          onClick={() => handleDeleteClick(note.id)}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </Scroll>
      <ChangeReminder editNote={editNote} setEditNote={setEditNote} />
    </div>
  );
}
