import React, { useState } from "react";
import "../../styles/RightColumn.css"


export default function AddReminder(){
    const[ note, setNote] = useState("");
    const [ student, setStudent ] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        const test = {note , student}
        console.log(test)
    }
    return(
        <span>
            <button className="addButton">Add</button>
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
                    <option value="student1">student1</option>
                    <option value="student2">student2</option>
                </select>
                <button>Submit</button>
            </form>
        </span>
    )
}