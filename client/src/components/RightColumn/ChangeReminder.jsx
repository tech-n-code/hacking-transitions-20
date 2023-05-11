import React from "react";
import "../../styles/RightColumn.css"


export default function ChangeReminder(){
    return(
        <span>
            <button>Edit</button>
            <form >
                <label >Edit note</label>
                <input type="text" 
                required
                />
            </form>
        </span>
    )
}