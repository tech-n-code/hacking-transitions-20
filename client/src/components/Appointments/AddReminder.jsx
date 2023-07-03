import React, { useState, useContext } from "react";
import "./Appointments.css";
import AppointmentContext from "../../context/AppointmentContext.jsx";
import CohortContext from "../../context/CohortContext.jsx";
import Modal from "react-modal";
Modal.setAppElement("#root");

export default function AddReminder({showAddModal, setShowAddModal}){
    const { 
        selectedStudent,
        setSelectedStudent
    } = useContext(AppointmentContext);

    const { 
        students,
        setUpdate
    } = useContext(CohortContext);

    const[ note, setNote ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newNote = {
            note: `${note}`,
            student_id: `${selectedStudent}`
        }
        fetch(`/api/notes`, {
            method: "POST",
            headers: { "Content-Type" : "application/json"},
            body: JSON.stringify(newNote)
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
            border: '1px solid #000',
            background: '#E0EAF8',
            color: 'white',
            overflow: 'auto',
            borderRadius: '10px',
            outline: 'black',
            padding: '15px',
            boxShadow: "0px 10px 20px -10px rgba(0, 0, 0, 0.75)",
            zIndex: 101,
          }}
    
        return(
    
        <Modal 
        isOpen={showAddModal}
        onRequestClose={closeModal}
        style={modalStyle}
        >
            <div className="modalOverlay">
            <span className="Form">
                <form >
                    <div>
                    <label style={{
                            fontSize: '24px',
                            fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
                            fontWeight: 'bold',
                            margin: '10px auto 10px',
                            display: 'block',
                            textAlign: 'center'
                        }}>Add Note</label>
                        <select
                        style={{
                            margin: 'auto auto 20px',
                            display: 'block',
                        }}
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
                    <textarea 
                        // required
                        value={ note }
                        onChange={(e) => setNote(e.target.value)}
                        style={{
                            fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
                        }}
                        rows="10" cols="40"
                        ></textarea>
                    <div className="buttonContainer">
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
            </div>
        </Modal>
        
    )
}
