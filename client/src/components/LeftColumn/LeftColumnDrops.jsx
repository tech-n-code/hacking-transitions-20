import React, {useContext} from "react";
import LeftColumnContext from "../../context/LeftColumnContext";
import "../../../src/styles/LeftColumn.css"

function LeftColumnDrop(){
    const {handleDropClicked, dropDownClicked, cohortClicked, handleCohortClicked} = useContext(LeftColumnContext);

    const arrowClass = dropDownClicked ? "LCADown" : "LCAUp";
    const buttonClass = cohortClicked || dropDownClicked  ? "LCwasClicked" : "LCnotClicked";



    return(
        <div className= {`leftColumnDrop ${buttonClass}`}>
            <div className="LcCohort" onClick={handleCohortClicked}>MCSP-19</div>
            <i className = {`leftColumnArrow ${arrowClass}`} onClick={handleDropClicked}></i>   
        </div>
    )
}
export default LeftColumnDrop;