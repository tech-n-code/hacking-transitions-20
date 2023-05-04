import React, {useContext} from "react";
import LeftColumnContext from "../../context/LeftColumnContext";
import "../../../src/styles/LeftColumn.css"

function LeftColumnDrop(){
    const {handleDropClicked, dropDownClicked, cohortClicked, handleCohortClicked, cohorts} = useContext(LeftColumnContext);

    const arrowClass = dropDownClicked ? "LCADown" : "LCAUp";
    const buttonClass = cohortClicked || dropDownClicked  ? "LCwasClicked" : "LCnotClicked";



    return(
        <>
            {cohorts.map((cohort, index) => (
                <div key = {index} className= {`leftColumnDrop ${buttonClass}`}>
                    <div className="LcCohort" onClick={handleCohortClicked}>{cohort.courseid}</div>
                    <i className = {`leftColumnArrow ${arrowClass}`} onClick={handleDropClicked}></i>   
                </div>    
            ))}
        </>
    )
}
export default LeftColumnDrop;