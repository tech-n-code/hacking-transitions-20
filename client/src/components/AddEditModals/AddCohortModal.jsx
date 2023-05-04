import React, {useContext} from "react";
import "../../styles/AddEditModals.css"
import LeftColumnContext from "../../context/LeftColumnContext";

function AddCohortModal(){
    const {closeAddCohort} = useContext(LeftColumnContext)
    return(
        <h1 onClick={closeAddCohort}>Hello World</h1>
    )
}
export default AddCohortModal;