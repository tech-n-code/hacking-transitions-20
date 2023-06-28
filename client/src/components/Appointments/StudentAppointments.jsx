import React, { useContext, useState, useEffect } from "react";
import AppointmentContext from "../../context/AppointmentContext.jsx";
import "./StudentAppointments.css";
import Scroll from "./Scroll";
import ChangeReminder from "./ChangeReminder";

export default function StudentAppointments() {
  const { students, notes, setNoteSelected, setNoteId } = useContext(
    AppointmentContext
  );
  const [expandedNoteIds, setExpandedNoteIds] = useState([]);
  const [notesToDelete, setNotesToDelete] = useState([]);
  const [editNote, setEditNote] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);
  const [isDeleteButtonClicked, setIsDeleteButtonClicked] = useState(false); // Add state for delete button click
  const [deletedNoteId, setDeletedNoteId] = useState(null); // Track the noteId for which the delete button is clicked

  const handleEditClick = (note) => {
    setEditNote(true);
    console.log(editNote);
    setNoteId(note.id);
    setNoteSelected(note.note);
  };

  const handleDeleteClick = (noteId) => {
    setDeleteConfirmation(noteId);
    setIsDeleteButtonClicked(true); // Update delete button click state
    setDeletedNoteId(noteId); // Set the noteId for which the delete button is clicked
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
          setIsDeleteButtonClicked(false); // Reset delete button click state
          setDeletedNoteId(null); // Reset the noteId for which the delete button is clicked
        })
        .catch((error) => {
          console.error("Error deleting note:", error);
          setDeleteConfirmation(null);
          setIsDeleteButtonClicked(false); // Reset delete button click state
          setDeletedNoteId(null); // Reset the noteId for which the delete button is clicked
        });
    }
  };

  const handleCancelDeleteClick = () => {
    setDeleteConfirmation(null);
    setIsDeleteButtonClicked(false); // Reset delete button click state
    setDeletedNoteId(null); // Reset the noteId for which the delete button is clicked
  };

  useEffect(() => {
    // Remove deleted notes from the state
    setNotesToDelete([]);
  }, [notes]);

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
                    : note.note.length > 60
                    ? note.note.slice(0, 60) + "... "
                    : note.note;
                  const showSeeMoreButton = note.note.length > 60;
                  const showCollapseButton =
                    note.note.length > 60 && isExpanded;
                  const isNoteDeleted = deletedNoteId === note.id; // Check if the note is deleted

                  return (
                    <div key={note.id} className="noteContainer">
                      <div className="reminder-container">
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
                            onClick={(event) =>
                              handleNoteToggle(note.id, event)
                            }
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
                      </div>

                      <div className="reminder-button-container">
                        {isDeleteButtonClicked && isNoteDeleted ? null : ( // Conditionally render the editButton
                          <button
                            className="editButton"
                            onClick={() => handleEditClick(note)}
                          >
                            Edit
                          </button>
                        )}
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
