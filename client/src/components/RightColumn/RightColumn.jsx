import React from "react";
import StudentAppointments from "./StudentAppointments";
import "../../styles/RightColumn.css"

export default function RightColumn(){
   
   

    return(
        <div className="Appointments">
            <div className="RemindersHeader">
                Appointment reminders
            </div>
            <div className="StudentNames">
                <StudentAppointments/>
            </div>
        </div>
    )
}