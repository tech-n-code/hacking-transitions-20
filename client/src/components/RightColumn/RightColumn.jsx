import React from "react";
import StudentAppointments from "./StudentAppointments";


export default function RightColumn(){
   
   

    return(
        <span className="rightColumn">
            <div className="RemindersHeader">
                Appointment reminders
            </div>
            <div className="StudentNames">
                <StudentAppointments/>
            </div>
        </span>
    )
}