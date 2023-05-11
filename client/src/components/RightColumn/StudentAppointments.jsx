import React, { useState, useEffect, useContext } from "react";
import LeftColumnContext from "../../context/LeftColumnContext";
import "../../styles/StudentAppointments.css"

export default function StudentAppointments(){
    const [students, setStudents] = useState([]);
    const { cohortIdForInfo } = useContext(LeftColumnContext);
    const [ tasks, setTasks ] = useState([])

   
    
    useEffect(() => {
        fetch(`http://localhost:8000/api/cohorts/${cohortIdForInfo + 1}/students`)
            .then(response => response.json())
            .then(data => setStudents(data))
            .catch(error => console.log(error));
    }, [cohortIdForInfo]);
    
    useEffect(() => {
        fetch(`http://localhost:8000/api/appointments`)
            .then(response => response.json())
            .then(data => setTasks(data))
            .catch(error => console.log(error));
    }, [tasks]);

    

    return(
        <div>
            {students.map((student, indexed) =>{
                return(
                    <div key={indexed}>
                        <div className="studentNames">
                            {student.firstname} {student.lastname}
                        </div>
                        <div className="appointments">
                            Reminder: {tasks.map(( appointments, i) =>{
                                return(
                                    <div key={ i }>
                                        <div>
                                            { appointments.note }
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

//let setAppointments = tasks.find(obj => obj.student[id] === task.id);
//let setAppointments = tasks.find(obj => obj.student[id] === tasks.student_id);