import React, { useState, useContext } from "react";
import "../../styles/RightColumn.css";
import LeftColumnContext from "../../context/LeftColumnContext";
import RightColumnContext from "../../context/RightColumnContext";



export default function AddReminder({setShowAddModal}){
    const { cohortIdForInfo } = useContext(LeftColumnContext);
    const { students } = useContext(RightColumnContext);
    const[ note, setNote] = useState("");
    const [ selectedStudent, setSelectedStudent ] = useState("")

    console.log("note state- ",note);
    console.log("selectedStudent state - ", selectedStudent)
    console.log("students state - ", students);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const appointmentNote = {
            note: `${note}`,
            student_id: `${selectedStudent}`
        }

        console.log(appointmentNote)
        
        fetch(`/api/appointments`, {
            method: "POST",
            headers: { "Content-Type" : "application/json"},
            body: JSON.stringify(appointmentNote)
        }).then(() =>{
            console.log('Note has been added');
            setShowAddModal(false);
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
                    value={ selectedStudent }
                    onChange={(e) => setSelectedStudent(e.target.value)}
                    required
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
                <button className="addSubmit">Submit</button>
            </form>
                <button className="addCancel" onClick={() => setShowAddModal(false)}>
                    Cancel
                </button>
        </span>
    )
}