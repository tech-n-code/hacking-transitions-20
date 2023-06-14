import React, { useState, useContext } from "react";
import "./Appointments.css";
import AppointmentContext from "../../context/AppointmentContext";
import Modal from "react-modal";
Modal.setAppElement("#root");

export default function AddReminder(){
    const { students, setUpdate } = useContext(AppointmentContext);
    const[ showAddModal, setShowAddModal ] = useState(false)
    // const {} = useContext(Appointments);
    const[ note, setNote ] = useState("");
    const [ selectedStudent, setSelectedStudent ] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const appointmentNote = {
            note: `${note}`,
            student_id: `${selectedStudent}`
        }
        fetch(`/api/appointments`, {
            method: "POST",
            headers: { "Content-Type" : "application/json"},
            body: JSON.stringify(appointmentNote)
        }).then(() =>{
            console.log('Note has been added');
            setShowAddModal(false);
            setUpdate(true);
        })
        
    }

    function closeModal(){
    setIsStudentModalOpen(false)
    }
    

    
    return(
        <Modal 
        isOpen={setShowAddModal}
        onRequestClose={closeModal}
        style={modalStyle}
>
            <span className="Form">
                <form onSubmit={ handleSubmit }>
                    <div>
                    <label >Add note</label>
                    </div>
                    <textarea 
                        required
                        value={ note }
                        onChange={(e) => setNote(e.target.value)}
                        rows="5" cols="40"
                        ></textarea>
                    <div>
                    <select
                        value={ selectedStudent }
                        onChange={(e) => setSelectedStudent(e.target.value)}
                        required
                    >
                        <option value="" > Please select a student</option>
                        {students.map((student, x) => {
                            return (
                                <option 
                                    key={x} 
                                    value={student.id}
                                >
                                    {student.firstname} {student.lastname}
                                </option>
                            )
                        })}
                    </select>
                    </div>
                    <div>
                        <span>
                    <button className="addSubmit">Submit</button>
                        </span>
                        <span>
                    <button className="addCancel" onClick={() => setShowAddModal(false)}>
                        Cancel
                    </button>
                        </span>
                    </div>
                </form>
            </span>
            </Modal>
    )
}