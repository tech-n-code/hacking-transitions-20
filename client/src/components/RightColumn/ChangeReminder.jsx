import React, { useState, useContext} from "react";
import "../../styles/RightColumn.css"
import LeftColumnContext from "../../context/LeftColumnContext";
import RightColumnContext from "../../context/RightColumnContext";



export default function AddReminder({setEditNote}){
    const { cohortIdForInfo } = useContext(LeftColumnContext);
    const { edit, setEdit, student, setStudent, noteSelected} = useContext(RightColumnContext);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const test = {edit , student}
        console.log(test)
        fetch(`http://localhost:8000/api/cohorts/${cohortIdForInfo+1}/students`, {
            method: "PATCH",
            headers: { "Content-Type" : "application/json"},
            body: JSON.stringify(test)
        }).then(() =>{
            console.log('edit has been added');
            setShowAddModal(false)
        })
        
    }
    return(
        <span>
            <form onSubmit={ handleSubmit }>
                <label >Add edit</label>
                <textarea 
                    required
                    value={ edit }
                    onChange={(e) => setEdit(e.target.value)}
                    ></textarea>
                <label >Select student</label>
                <select
                    value={ student }
                    onChange={(e) => setStudent(e.target.value)}
                    required
                >
                    <option value="" > Please select a student</option>
                    <option value="student 1">student 1</option>
                    <option value="student 2">student 2</option>
                </select>
                <button className="addSubmit">Submit</button>
            </form>
                <button className="addCancel" onClick={() => setEditNote(false)}>
                    Cancel
                </button>
        </span>
    )
}