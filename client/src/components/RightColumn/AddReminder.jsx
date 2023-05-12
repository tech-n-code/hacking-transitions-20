import React, { useState, useContext } from "react";
import "../../styles/RightColumn.css";
import LeftColumnContext from "../../context/LeftColumnContext";



export default function AddReminder({setShowAddModal}){
    const { cohortIdForInfo } = useContext(LeftColumnContext);
    const[ note, setNote] = useState("");
    const [ student, setStudent ] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const test = {note , student}
        console.log(test)
        fetch(`http://localhost:8000/api/cohorts/${cohortIdForInfo + 1}/students`, {
            method: "POST",
            headers: { "Content-Type" : "application/json"},
            body: JSON.stringify(test)
        }).then(() =>{
            console.log('Note has been added');
            setShowAddModal(false)
        })
        
    }
    return(
        <span>

            <form onSubmit={ handleSubmit }>
                <label >Add note</label>
                <textarea 
                    required
                    value={ note }
                    onChange={(e) => setNote(e.target.value)}
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
                <button className="addCancel" onClick={() => setShowAddModal(false)}>
                    Cancel
                </button>
        </span>
    )
}