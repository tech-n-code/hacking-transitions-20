import React, { useContext, useState } from "react";
import AppointmentContext from "../../context/AppointmentContext";
import "./StudentAppointments.css";
import Scroll from "./Scroll";
import DeleteReminder from "./DeleteReminder";

export default function StudentAppointments() {
  const { students, tasks, setNoteSelected, setTaskId } = useContext(AppointmentContext);
  const [tasksToDelete, setTasksToDelete] = useState([]);

  const handleDeleteClick = (taskId) => {
    //q: why is this fetch not working?
    //a: because it's not a valid url
    // fetch(`/api/appointments/${taskId}`, {



    fetch(`/api/appointments/${taskId}`, {
      method: "DELETE",
  }).then(() => {
      console.log('Note ' + taskId + ' has been deleted');
      // setDeleteNote(false);
      // setUpdate(true);
  })
  .catch((error) => {
    console.error("Error deleting note:", error);
  });

    fetch(`http://localhost:8000/api/appointments/${taskId}`, {
      method: "DELETE",
    })
      .then(() => {
        console.log("Note has been deleted");
        // setTasksToDelete((prevTasks) => [...prevTasks, taskId]);
      })
      .catch((error) => {
        console.error("Error deleting note:", error);
      });

  };

  return (
    <div>
      <Scroll>
        {students.map((student, indexed) => {
          const studentTasks = tasks.filter((task) => task.student_id === student.id);
          const hasTasks = studentTasks.length > 0; // Check if the student has tasks

          return (
            <div key={indexed}>
              {hasTasks && ( // Only render the student's name if there are tasks
                <div className="studentNames">
                  {student.firstname} {student.lastname}
                </div>
              )}
              <div className="appointments">
                {studentTasks.map((task, i) => {
                  if (tasksToDelete.includes(task.id)) {
                    return null; // Skip rendering the deleted task
                  }
                  return (
                    <div key={i}>
                      <div
                        className="reminder"
                        onClick={() => {
                          setTaskId(task.id);
                          setNoteSelected(task.note);
                        }}
                      >
                        {task.note}
                        <button className="deleteButton" onClick={() => handleDeleteClick(task.id)}>
                          Delete
                        </button>
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
