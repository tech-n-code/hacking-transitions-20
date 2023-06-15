import React, { useContext } from "react";
import "./Appointments.css"
import AppointmentContext from "../../context/AppointmentContext";
import Modal from "react-modal";

export default function ChangeReminder({ setEditNote }){
    const { noteSelected, taskId , setUpdate, setNoteSelected, showAddModal, setShowAddModal } = useContext(AppointmentContext);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`/api/appointments/${taskId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ note: noteSelected }) // Wrap noteSelected in an object with the key "note"
        }).then(response => {
                if (response.ok) {
                    console.log('Note has been updated');
                    setEditNote(false);
                    setUpdate(true);
                } else {
                    throw new Error('Failed to update note');
                }
            }).catch(error => {
                console.error(error);
            });
    };

    const modalStyle = {
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
            background: '#fff',
            overflow: 'auto',
            borderRadius: '10px',
            outline: 'none',
            padding: '30px'
          }}

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
                <label> Click note you would like to edit </label>
                </div>
                <textarea 
                    required
                    value={ noteSelected }
                    onChange={(e) => setNoteSelected(e.target.value)}
                    rows="5" cols="40"
                    >{noteSelected}</textarea>      
                    <div>
                    <span>
                <button className="addSubmit" >Submit</button>
                    </span>
                    <span>
                <button className="addCancel" onClick={() => {setEditNote(false), setNoteSelected("")}}>
                    Cancel
                </button>
                    </span>
                    </div>       
            </form>
        </span>
            </Modal>
    )
}