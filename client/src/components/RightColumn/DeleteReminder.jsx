import React, { useState, useContext} from "react";
import "../../styles/RightColumn.css"
import LeftColumnContext from "../../context/LeftColumnContext";



export default function AddReminder({setDeleteNote}){
    const { cohortIdForInfo } = useContext(LeftColumnContext);
    // const[ deleted, setDeleted] = useState("");
    const [ student, setStudent ] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const test = { student}
        console.log(test)
        fetch(`http://localhost:8000/api/appointments`, {
            method: "DELETE",
        }).then(() =>{
            console.log('Note has been added');
            setDeleteNote(false)
        })
        
    }
    return(
        <span>
            <form onSubmit={ handleSubmit }>
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
                <button className="addCancel" onClick={() => setDeleteNote(false)}>
                    Cancel
                </button>
        </span>
    )
}