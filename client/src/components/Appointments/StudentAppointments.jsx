import React, { useContext } from "react";
import AppointmentContext from "../../context/AppointmentContext";
import "./StudentAppointments.css"
import Scroll from "./Scroll";

export default function StudentAppointments() {
  const { students, tasks, setNoteSelected, setTaskId } = useContext(AppointmentContext);

  return (
    <div>
      <Scroll>
        {students.map((student, indexed) => {
          const studentTasks = tasks.filter(task => task.student_id === student.id);
          const hasTasks = studentTasks.length > 0; // Check if the student has tasks

          return (
            <div key={indexed}>
              {hasTasks && ( // Only render the student's name if there are tasks
                <div className="studentNames">
                  {student.firstname} {student.lastname}
                </div>
              )}
              <div className="appointments">
                {studentTasks.map((task, i) => (
                  <div key={i}>
                    <div
                      className="reminder"
                      onClick={() => {
                        setTaskId(task.id);
                        setNoteSelected(task.note);
                      }}
                    >
                      {task.note}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </Scroll>
    </div>
  );
}
