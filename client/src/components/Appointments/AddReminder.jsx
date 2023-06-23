import React, { useState, useContext } from "react";
import "./Appointments.css";
import AppointmentContext from "../../context/AppointmentContext";
import Modal from "react-modal";
Modal.setAppElement("#root");

export default function AddReminder({showAddModal, setShowAddModal}){
    const { students, setUpdate, } = useContext(AppointmentContext);
    // const [showAddModal, setShowAddModal ] = useState(AppointmentContext);
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
            setNote("");
            setSelectedStudent("")
        })
        
    }

    function closeModal(){
        setShowAddModal(false);
    } 




    
    const modalStyle = {
        overlay:{
            zIndex: 100,
            backgroundColor: 'rgba(0, 0, 0, 0.0)'
        },
        content:{
            position: 'absolute',
            top: '50%',
            bottom: '50%',
            left: '50%',
            right: '50%',
            transform: "translate(-50%, -50%)",
            height: "fit-content",
            width: "fit-content",
            border: '1px solid #ccc',
            background: '#0D0A40',
            color: 'white',
            overflow: 'auto',
            borderRadius: '10px',
            outline: 'none',
            padding: '30px',
            zIndex: 101,
            
          }}
    
    return(
        
        <Modal 
        isOpen={showAddModal}
        onRequestClose={closeModal}
        style={modalStyle}
        >
            <span className="Form">
                <form >
                    <div>
                    <label style={{
                            fontSize: '24px',
                            fontWeight: 'bold',
                            margin: 'auto auto 30px',
                            display: 'block',
                            textAlign: 'center'
                         }}>Add Note</label>
                    </div>
                    <textarea 
                        // required
                        value={ note }
                        onChange={(e) => setNote(e.target.value)}
                        rows="10" cols="40"
                        ></textarea>
                    <div className="buttonContainer">
                      <select
                        value={ selectedStudent }
                        onChange={(e) => setSelectedStudent(e.target.value)}
                        // required
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
                    <button className="addNoteSubmit" onClick={ handleSubmit }>Submit</button>
                        </span>
                        <span>
                    <button className="addNoteCancel" onClick={closeModal }>
                        Cancel
                    </button>
                        </span>
                    </div>
                </form>
            </span>
        </Modal>
        
    )
}