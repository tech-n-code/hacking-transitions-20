import React, { useContext, useEffect } from 'react';
import LeftColumnContext from "../../context/LeftColumnContext";
import '../../styles/CohortDetails.css';


const CohortDetails = () => {

    const { cohortClicked, cohortIdForInfo, cohorts, setCohortClicked, students} = useContext(LeftColumnContext);
    /* branc_id, dutystatus, phonenumber, ets_date */
    return (
        <>
            <div className="cohortInfoContainer">
                <div className="cohortInfoHeader">
                    <div className="cohortInfoName">
                        {cohortClicked}
                        <div className="cohortClose" onClick={() => { setCohortClicked("") }}>X</div>
                    </div>
                </div>
                <div className="basicCohortInfo">
                    <div className="CInfo">{`Start Date: ${cohorts[cohortIdForInfo].startdate}`}</div>
                    <div className="CInfo">{`End Date: ${cohorts[cohortIdForInfo].enddate}`}</div>
                    <div className="CInfo">{`Instructor: ${cohorts[cohortIdForInfo].instructor_id}`}</div>
                    <div className="CInfo">{`Number Of Students: ${cohorts[cohortIdForInfo].numberofstudents}`}</div>
                </div>
                {students.map((student, index) => {
                    return (
                        <div key={index} className="cohortStudent">
                            <div>
                                {student.firstname}
                                {student.lastname}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default CohortDetails;