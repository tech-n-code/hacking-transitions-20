import React, { useContext, useEffect } from 'react';
import LeftColumnContext from "../../context/LeftColumnContext";
import '../../styles/CohortDetails.css';


const CohortDetails = () => {

    const { cohortClicked, cohortIdForInfo, cohorts } = useContext(LeftColumnContext);

    console.log("cohorts ", cohorts);
    console.log("cohort-clicked", cohortClicked);
    console.log('cohortId', cohortIdForInfo);


    return (
        <>
            <h1 className='cohort-title'>{cohortClicked}</h1>
            <table>
                <tbody>
                    <tr>
                        <td
                            id='details-0'
                            className='column1'
                        >Course Title</td>
                        <td
                        className='column2'>
                        {cohorts[cohortIdForInfo].courseid}</td>
                    </tr>
                    <tr>
                        <td
                            id='details-1'
                            className='column1'
                        >Start Date</td>
                        <td
                        className='column2'>
                        {cohorts[cohortIdForInfo].startdate}</td>
                    </tr>
                    <tr>
                        <td
                            id='details-2'
                            className='column1'
                        >End Date</td>
                        <td
                            className='column2'>
                            {cohorts[cohortIdForInfo].enddate}</td>
                    </tr>
                    <tr>
                        <td
                            id='details-3'
                            className='column1'
                        >Instructor</td>
                        <td
                        className='column2'>
                        {cohorts[cohortIdForInfo].instructor_id}</td>
                    </tr>
                    <tr>
                        <td
                            id='details-4'
                            className='column1'
                        >Number of Students</td>
                        <td
                        className='column2'>
                        {cohorts[cohortIdForInfo].numberofstudents}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default CohortDetails;