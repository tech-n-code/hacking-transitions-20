import React, { useContext } from "react";
import "./Appointments.css"
import AppointmentContext from "../../context/AppointmentContext";
import Modal from "react-modal";

export default function ChangeReminder({ editNote, setEditNote }){
    const { noteSelected, noteId , setUpdate, setNoteSelected, showAddModal, setShowAddModal } = useContext(AppointmentContext);

    
    // const handleEditClick = () =>{
    //     setEditNote(true)
    // }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`/api/notes/${noteId}`, {
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
            zIndex: 101,
          }}

          function closeModal(){
            setStudentModalOpen(false)
            } 

    return(
        <Modal 
        isOpen={editNote}
        onRequestClose={closeModal}
        style={modalStyle}
        >
    <div className="modalOverlay">
        <span className="Form">
            <form onSubmit={ handleSubmit }>
                <div>
                <label style={{
                            fontSize: '24px',
                            fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
                            fontWeight: 'bold',
                            margin: '10px auto 10px',
                            display: 'block',
                            textAlign: 'center'
                        }}>Edit Note</label>
                <textarea 
                    required
                    value={ noteSelected }
                    onChange={(e) => setNoteSelected(e.target.value)}
                    rows="5" cols="40"
                    >{noteSelected}</textarea>      
                    <div>
                    <span>
                <button className="addNoteSubmit" >Submit</button>
                    </span>
                    <span>
                <button className="addNoteCancel" onClick={() => {setEditNote(false), setNoteSelected("")}}>
                    Cancel
                </button>
                    </span>
                    </div> 
                    </div>      
            </form>
        </span>
        </div>
            </Modal>
    )
}