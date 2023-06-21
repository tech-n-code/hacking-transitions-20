import React, { useContext, useState } from "react";
import AppointmentContext from "../../context/AppointmentContext.jsx";
import "./StudentAppointments.css";
import Scroll from "./Scroll";

export default function StudentAppointments() {
  const { students, tasks, setNoteSelected, setTaskId } = useContext(
    AppointmentContext
  );
  const [expandedNoteIds, setExpandedNoteIds] = useState([]);

  const handleNoteToggle = (taskId, event) => {
    const target = event.target;

    // Check if the event target matches the expand or collapse button
    const isExpandButton = target.classList.contains("expandButton");
    const isCollapseButton = target.classList.contains("collapseButton");

    if (isExpandButton || isCollapseButton) {
      setExpandedNoteIds((prevExpandedNoteIds) => {
        if (prevExpandedNoteIds.includes(taskId)) {
          return prevExpandedNoteIds.filter((id) => id !== taskId); // Collapse the note if it is already expanded
        } else {
          return [...prevExpandedNoteIds, taskId]; // Expand the clicked note
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
                  const isExpanded = expandedNoteIds.includes(task.id);
                  const noteDisplay = isExpanded
                    ? task.note
                    : task.note.length > 100
                    ? task.note.slice(0, 100) + "... "
                    : task.note;
                  const showSeeMoreButton = task.note.length > 100;
                  const showCollapseButton = task.note.length > 100 && isExpanded;

                  return (
                    <div key={task.id} className="noteContainer">
                      <div className="reminder">
                        <div
                          className={isExpanded ? "noteExpanded" : "noteCollapsed"}
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
                            onClick={(event) => handleNoteToggle(task.id, event)}
                          >
                            Collapse note
                          </span>
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
    </div>
  );
}
