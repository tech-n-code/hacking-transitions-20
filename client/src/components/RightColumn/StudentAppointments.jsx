import React, { useState, useEffect, useContext } from "react";
import LeftColumnContext from "../../context/LeftColumnContext";
import "../../styles/StudentAppointments.css"

export default function StudentAppointments(){
    const [students, setStudents] = useState([]);
    const { cohortIdForInfo } = useContext(LeftColumnContext);

   
    
    useEffect(() => {
        fetch(`http://localhost:8000/api/cohorts/${cohortIdForInfo + 1}/students`)
            .then(response => response.json())
            .then(data => setStudents(data))
            .catch(error => console.log(error));
    }, [cohortIdForInfo]);


    return(
        <div>
            {students.map((student, indexed) =>{
                return(
                    <div key={indexed}>
                        <div className="studentNames">
                            {student.firstname} {student.lastname}
                        </div>
                        <div className="appointments">
                        Reminder: {student.appointments}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}