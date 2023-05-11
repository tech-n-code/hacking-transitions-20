import React from "react";
import StudentAppointments from "./StudentAppointments";
import "../../styles/RightColumn.css"
import AddReminder from "./AddReminder";
import DeleteReminder from "./DeleteReminder";
import ChangeReminder from "./ChangeReminder";

export default function RightColumn(){
   
   

    return(
        <div className="Appointments">
            <div className="RemindersHeader">
                Appointment Notes
            </div>
            <div className="buttons">
                    <AddReminder className="button"/>
                    <ChangeReminder className="button"/>   
                    <DeleteReminder className="button"/>
            </div>
            <div className="StudentNames">
                <StudentAppointments/>
            </div>
        </div>
    )
}