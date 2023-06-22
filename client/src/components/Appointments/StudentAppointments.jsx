import React, { useContext, useState } from "react";
import AppointmentContext from "../../context/AppointmentContext.jsx";
import "./StudentAppointments.css";
import Scroll from "./Scroll";
import DeleteReminder from "./DeleteReminder";

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



//og
// import React, { useContext, useState } from "react";
// import AppointmentContext from "../../context/AppointmentContext";
// import "./StudentAppointments.css"
// import Scroll from "./Scroll";
// import DeleteReminder from "./DeleteReminder";

// export default function StudentAppointments() {
//   const { students, tasks, setNoteSelected, setTaskId } = useContext(AppointmentContext);
//   const [ deleteNote, setDeleteNote ] = useState(false)

//   const handleDeleteClick = () =>{
//     setDeleteNote(true)
//     console.log(deleteNote)
//   }

//   return (
//     <div>
//       <Scroll>
      
//         {students.map((student, indexed) => {
//           const studentTasks = tasks.filter(task => task.student_id === student.id);
//           const hasTasks = studentTasks.length > 0; // Check if the student has tasks
          
//           return (
//             <div key={indexed}>
//               {hasTasks && ( // Only render the student's name if there are tasks
//                 <div className="studentNames">
//                   {student.firstname} {student.lastname} 
//               <button className="deleteButton" onClick={() => handleDeleteClick()}>
//               Delete
//               </button>
//                 </div>
//               )}
//               <div className="appointments">
//                 {studentTasks.map((task, i) => (
//                   <div key={i}>
//                     <div
//                       className="reminder"
//                       onClick={() => {
//                         setTaskId(task.id);
//                         setNoteSelected(task.note);
//                       }}
//                     >
//                       {task.note}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           );
//         })}
//       </Scroll>
//     </div>
//   );
// }
