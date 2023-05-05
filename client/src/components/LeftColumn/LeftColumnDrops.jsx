import React, { useContext } from "react";
import LeftColumnContext from "../../context/LeftColumnContext";
import "../../../src/styles/LeftColumn.css";
import LeftColumnNames from "./LeftColumnNames";

<<<<<<< HEAD
function LeftColumnDrop(){
    const {handleDropClicked, dropDownClicked, cohortClicked, handleCohortClicked, cohorts} = useContext(LeftColumnContext);
=======
function LeftColumnDrop() {
    const { handleDropClicked, dropDownClicked, cohortClicked, handleCohortClicked, cohorts, openDropDown, toggleDropDown} = useContext(LeftColumnContext);
>>>>>>> develop

    

<<<<<<< HEAD


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
=======
    return (
        <>
            {cohorts.map((cohort, index) => {
                const buttonClass = cohortClicked === cohort.courseid ? "LCwasClicked" : "LCnotClicked";
                const arrowClass = dropDownClicked === cohort.courseid ? "LCADown" : "LCAUp";
                return (
                    <div key={index}>
                        <div className={`leftColumnDrop ${buttonClass}`}>
                            <div className="LcCohort" onClick={() => handleCohortClicked(cohort.courseid)}>
                                {cohort.courseid}
                            </div>
                            <i className={`leftColumnArrow ${arrowClass}`} onClick={() => { handleDropClicked(cohort.courseid, cohort.id); toggleDropDown(cohort.courseid); }}></i>
                        </div>
                        {openDropDown === cohort.courseid && <LeftColumnNames />}
                    </div>
                );
            })}
        </>
    );
>>>>>>> develop
}

export default LeftColumnDrop;
