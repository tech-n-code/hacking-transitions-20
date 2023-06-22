import React, { useState } from "react";
import StudentAppointments from "./StudentAppointments";
import "./Appointments.css"
import AddReminder from "./AddReminder";
import ChangeReminder from "./ChangeReminder";

export default function RightColumn(){
    const[ showAddModal, setShowAddModal ] = useState(false)
    const[ editNote, setEditNote ] = useState(false)
    
//a: use a div with a class of modal and a class of modal-content


    const handleAddClick = () =>{
        setShowAddModal(true)
    }

    const handleEditClick = () =>{
        setEditNote(true)
    }



    return(
        <div className="Appointments">
            <div className="RemindersHeader">
                Appointment Notes
            </div>
            <div className="buttons">
                <span className="addButton" onClick={handleAddClick}>
                    Add
                </span>
                <span className="editButton" onClick={handleEditClick}>
                    Edit
                </span>
                <span className="deleteButton" onClick={handleDeleteClick}>
                    Delete
                </span>
            </div>
            <div className="StudentNames">
                <StudentAppointments/>
            </div>
            {showAddModal && <AddReminder setShowAddModal = {setShowAddModal}/>}
            {editNote && <ChangeReminder setEditNote = {setEditNote}/>}
        </div>
    );
}