import React, { useState, useContext} from "react";
import "../../styles/RightColumn.css"
import LeftColumnContext from "../../context/LeftColumnContext";
import RightColumnContext from "../../context/RightColumnContext";



export default function ChangeReminder({setEditNote}){
    const { cohortIdForInfo } = useContext(LeftColumnContext);
    const { edit, setEdit, student, setStudent, noteSelected, taskId , setUpdate, setNoteSelected } = useContext(RightColumnContext);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`/api/appointments/${taskId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ note: noteSelected }) // Wrap noteSelected in an object with the key "note"
        })
            .then(response => {
                if (response.ok) {
                    console.log(JSON.stringify(noteSelected));
                    console.log('Note has been updated');
                    setEditNote(false);
                    setUpdate(true);
                } else {
                    throw new Error('Failed to update note');
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

    return(
        <span>
            <form onSubmit={ handleSubmit }>
                {/* <label >Add edit</label> */}
                <textarea 
                    required
                    value={ noteSelected }
                    onChange={(e) => setNoteSelected(e.target.value)}
                    >{noteSelected}</textarea>
                {/* <label >Select student</label> */}
                {/* <select
                    value={ student }
                    onChange={(e) => setStudent(e.target.value)}
                    required
                >
                    <option value="" > Please select a student</option>
                    <option value="student 1">student 1</option>
                    <option value="student 2">student 2</option>
                </select> */}
                <button className="addSubmit" >Submit</button>
            </form>
                <button className="addCancel" onClick={() => setEditNote(false)}>
                    Cancel
                </button>
        </span>
    )
}