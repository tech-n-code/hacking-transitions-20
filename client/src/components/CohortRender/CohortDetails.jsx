import React, { useContext, useEffect } from 'react';
import LeftColumnContext from "../../context/LeftColumnContext";
import '../../styles/CohortDetails.css';


const CohortDetails = () => {

    const { cohortClicked, cohortIdForInfo, cohorts, setCohortClicked} = useContext(LeftColumnContext);

    return (
        <>
           {/* <div className='cohortInfoContainer'>
                <div className="cohortInfoHeader">
                    <div className="cohortInfoName">
                        {cohortClicked}
                        <div className="cohortClose" onClick={() =>{setCohortClicked("")}}>X</div>
                    </div>
                    <div className="cohortInfoTypeContainer">
                        <div className="cohortInfoType">Start Date</div>
                        <div className="cohortInfoType">End Date</div>
                        <div className="cohortInfoType">Instructor</div>
                        <div className="cohortInfoType">Student Count</div>
                    </div>
                </div>
                <div className="cohortInfoBox">
                    <div className="cohortInfoEntry">{cohorts[cohortIdForInfo].startdate}</div>
                    <div className="cohortInfoEntry">{cohorts[cohortIdForInfo].enddate}</div>
                    <div className="cohortInfoEntry">{cohorts[cohortIdForInfo].instructor_id}</div>
                    <div className="cohortInfoEntry">{cohorts[cohortIdForInfo].numberofstudents}</div>
                </div>
            </div> */}
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
            </div>
        </>
    );
};

export default CohortDetails;