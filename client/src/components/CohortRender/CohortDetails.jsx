import React, { useContext, useEffect } from 'react';
import LeftColumnContext from "../../context/LeftColumnContext";
// import '../../styles/CohortDetails.css';
import '../../styles/StudentDetails.css'

const CohortDetails = () => {

    const { cohortClicked, cohortId, cohorts } = useContext(LeftColumnContext);

    console.log("cohorts ", cohorts);
    console.log("cohort-clicked", cohortClicked);
    console.log('cohortID', cohortId);


    return (
        <>
            <h1>{cohortClicked}</h1>
            <table>
                <tbody>
                    <tr>
                        <td
                            id='details-0'
                            className='column1'
                        >Course Title</td>
                        <td
                        className='column2'>
                        BLANK</td>
                    </tr>
                    <tr>
                        <td
                            id='details-1'
                            className='column1'
                        >Start Date</td>
                        <td
                        className='column2'>
                        BLANK</td>
                    </tr>
                    <tr>
                        <td
                            id='details-2'
                            className='column1'
                        >End Date</td>
                        <td
                            className='column2'>
                            BLANK</td>
                    </tr>
                    <tr>
                        <td
                            id='details-3'
                            className='column1'
                        >Current Taskers</td>
                        <td
                        className='column2'>
                        BLANK</td>
                    </tr>
                    <tr>
                        <td
                            id='details-4'
                            className='column1'
                        >Instructor</td>
                        <td
                        className='column2'>
                        BLANKNAME</td>
                    </tr>
                    <tr>
                        <td
                            id='details-5'
                            className='column1'
                        >Number of Students</td>
                        <td
                        className='column2'>
                        BLANK</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default CohortDetails;