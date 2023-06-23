import React, { useContext, useState, useEffect } from "react";
import AppointmentContext from "../../context/AppointmentContext.jsx";
import "./StudentAppointments.css";
import Scroll from "./Scroll";

export default function StudentAppointments() {
  const { students, tasks, setNoteSelected, setTaskId } =
    useContext(AppointmentContext);
  const [expandedNoteIds, setExpandedNoteIds] = useState([]);
  const [tasksToDelete, setTasksToDelete] = useState([]);

  useEffect(() => {
    // Remove deleted tasks from the state
    setTasksToDelete([]);
  }, [tasks]);

  const handleDeleteClick = (taskId) => {
    fetch(`/api/appointments/${taskId}`, {
      method: "DELETE",
    })
      .then(() => {
        console.log("Note " + taskId + " has been deleted");
        setTasksToDelete((prevTasks) => [...prevTasks, taskId]);
      })
      .catch((error) => {
        console.error("Error deleting note:", error);
      });
  };

  const handleNoteToggle = (taskId, event) => {
    const target = event.target;
    const isExpandButton = target.classList.contains("expandButton");
    const isCollapseButton = target.classList.contains("collapseButton");

    if (isExpandButton || isCollapseButton) {
      setExpandedNoteIds((prevExpandedNoteIds) => {
        if (prevExpandedNoteIds.includes(taskId)) {
          return prevExpandedNoteIds.filter((id) => id !== taskId);
        } else {
          return [...prevExpandedNoteIds, taskId];
        }
      });
    }
  };

  return (
    <div>
      <Scroll>
        {students.map((student, indexed) => {
          const studentTasks = tasks.filter(
            (task) => task.student_id === student.id
          );
          const hasTasks = studentTasks.length > 0;

          return (
            <div key={indexed}>
              {hasTasks && (
                <div className="studentNames">
                  {student.firstname} {student.lastname}
                </div>
              )}
              <div className="appointments">
                {studentTasks.map((task) => {
                  if (tasksToDelete.includes(task.id)) {
                    return null; // Skip rendering the deleted task
                  }

                  const isExpanded = expandedNoteIds.includes(task.id);
                  const noteDisplay = isExpanded
                    ? task.note
                    : task.note.length > 70
                    ? task.note.slice(0, 70) + "... "
                    : task.note;
                  const showSeeMoreButton = task.note.length > 70;
                  const showCollapseButton =
                    task.note.length > 70 && isExpanded;

                  return (
                    <div key={task.id} className="noteContainer">
                      <div
                        className="reminder"
                        onClick={() => {
                          setTaskId(task.id);
                          setNoteSelected(task.note);
                        }}
                      >
                        <div
                          className={
                            isExpanded ? "noteExpanded" : "noteCollapsed"
                          }
                          onClick={(event) => handleNoteToggle(task.id, event)}
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
                              handleNoteToggle(task.id, event
)
                            }
                          >
                            Collapse note
                          </span>
                        )}
                      </div>
                      <button
                        className="deleteButton"
                        onClick={() => handleDeleteClick(task.id)}
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
