import React, { useState, useEffect, useContext } from "react";
import LeftColumnContext from "../../context/LeftColumnContext";
import "../../styles/StudentAppointments.css"

export default function StudentAppointments(){
    const [students, setStudents] = useState([]);
    const { cohortIdForInfo } = useContext(LeftColumnContext);
    const [ tasks, setTasks ] = useState([])

   
    
    useEffect(() => {
        fetch(`/api/cohorts/${cohortIdForInfo + 1}/students`)
            .then(response => response.json())
            .then(data => setStudents(data))
            .catch(error => console.log(error));
    }, [cohortIdForInfo]);

    useEffect(() => {
        fetch('/api/appointments')
            .then(response => response.json())
            .then(data => setTasks(data))
            .catch(error => console.log(error));
    }, []);

    console.log("tasks state = ", tasks);
    console.log("students state = ", students);

    return (
        <div>
          {students.map((student, indexed) => {
            const studentTasks = tasks.filter(task => task.student_id === student.id);
            console.log("studentTasks Array = ", studentTasks)
      
            return (
              <div key={indexed}>
                <div className="studentNames">
                  {student.firstname} {student.lastname}
                </div>
                <div className="appointments">
                  Reminder:
                  {studentTasks.map((task, i) => {
                    return (
                      <div key={i}>
                        <div>{task.note}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      );
}