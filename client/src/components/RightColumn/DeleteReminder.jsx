import React from "react";
import "../../styles/RightColumn.css"


export default function DeleteReminder(){
    return(
        <span>
            <button>Delete</button>
            <form >
                <label >Delete note</label>
                <input type="text" 
                required
                />
            </form>
        </span>
    )
}