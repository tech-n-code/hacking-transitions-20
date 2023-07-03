import React, { useState } from "react";
import StudentAppointments from "./StudentAppointments";
import "./Appointments.css"
import AddReminder from "./AddReminder";
import ChangeReminder from "./ChangeReminder";

export default function Appointments(){
    const[ showAddModal, setShowAddModal ] = useState(false)
    const[ editNote, setEditNote ] = useState(false)
    
    const handleAddClick = () =>{
        setShowAddModal(!showAddModal)
        console.log('Show Modal: ' + showAddModal);
    }

    const closeModal = (e) => {
        setShowAddModal(false);
        console.log('Show Modal: ' + showAddModal);
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
            </div>
            <div className="StudentNames">
                <StudentAppointments/>
            </div>
            <AddReminder setShowAddModal = {setShowAddModal} closeModal = {closeModal} showAddModal = {showAddModal}/>
            <ChangeReminder editNote = {editNote} setEditNote = {setEditNote}/>
        </div>
    );
}