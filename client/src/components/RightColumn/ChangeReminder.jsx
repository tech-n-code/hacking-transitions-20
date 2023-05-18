import React, { useContext } from "react";
import "../../styles/RightColumn.css"
import RightColumnContext from "../../context/RightColumnContext";

export default function ChangeReminder({ setEditNote }){
    const { noteSelected, taskId , setUpdate, setNoteSelected } = useContext(RightColumnContext);
    
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

    return(
        <span>
            <form onSubmit={ handleSubmit }>
                <textarea 
                    required
                    value={ noteSelected }
                    onChange={(e) => setNoteSelected(e.target.value)}
                    >{noteSelected}</textarea>             
                <button className="addSubmit" >Submit</button>
            </form>
                <button className="addCancel" onClick={() => setEditNote(false)}>
                    Cancel
                </button>
        </span>
    )
}