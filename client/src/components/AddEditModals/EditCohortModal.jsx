import React, {useContext} from "react";
import "../../styles/AddEditModals.css"
import LeftColumnContext from "../../context/LeftColumnContext";

function EditCohortModal(){
    const {closeEditCohort} = useContext(LeftColumnContext)
    return(
        <h1 onClick={closeEditCohort}>Hi</h1>
    )
}
export default EditCohortModal;