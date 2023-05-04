import React, {useContext} from "react";
import "../../styles/LeftColumn.css"
import LeftColumnContext from "../../context/LeftColumnContext";

function LeftColumnFooter(){
    const {openAddCohort, openEditCohort} = useContext(LeftColumnContext);
    return(
        <div className="LCfooterContainer">
            <div className="LCFbtn" onClick={openAddCohort}>Add</div>
            <div className="LCFbtn" onClick={openEditCohort}>Edit</div>
        </div>
    )
}
export default LeftColumnFooter;