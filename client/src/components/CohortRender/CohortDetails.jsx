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
                    let branch;
                    if (student.branch_id === 1) {
                        branch = "Air Force";
                    } else if (student.branch_id === 2) {
                        branch = "Army";
                    } else if (student.branch_id === 3) {
                        branch = "Marines";
                    } else if (student.branch_id === 4) {
                        branch = "Navy";
                    } else {
                        branch = "Unknown";
                    }
                    const etsDate = new Date(student.ets_date).toLocaleDateString('en-US')
                    const formattedPhoneNumber = student.phonenumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1)-$2-$3');
                    return (
                        <div key={index} className="cohortStudent">
                            <div>{`${student.firstname} ${student.lastname} ${branch} ${student.dutystatus} ${etsDate} ${formattedPhoneNumber}`}</div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default CohortDetails;