import React, { useContext, useEffect } from "react";
import CohortContext from "../../context/CohortContext";
import "./CohortDetails.css";
import { useState } from "react";

const CohortDetails = () => {
    const {
        cohortClicked,
        cohortIdForInfo,
        cohorts,
        setCohortClicked,
        students,
        assignColor,
        setStudentClicked,
        setIsStudentModalOpen,
    } = useContext(CohortContext);

    const getBranchName = (branchId) => {
        switch (branchId) {
            case 1:
                return "Air Force";
            case 2:
                return "Army";
            case 3:
                return "Marines";
            case 4:
                return "Navy";
            default:
                return "Unknown";
        }
    };

    const getbadgeMsg = (givenDate) => {
        const today = new Date();
        const futureDate = new Date(givenDate);
        if (today >= futureDate) {
            return "Done";
        } else {
            const timeLeft = futureDate.getTime() - today.getTime();
            const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));
            return `${daysLeft} days`;
        }
    }

    return (
        <div className="cohort-details-container">
            <div className="cohort-details-header">
                <div>
                    {cohortClicked}
                    <div
                        className="cohort-close"
                        onClick={() => {
                            setCohortClicked("");
                            setIsStudentModalOpen(false);
                        }}
                    >
                        X
                    </div>
                </div>
            </div>
            <div className="cohort-basic-info">
                <div className="cohort-bacic-info-column">
                    <span>Start Date:</span>
                    <span>{cohorts[cohortIdForInfo].startdate}</span>
                </div>
                <div className="cohort-bacic-info-column">
                    <span>End Date:</span>
                    <span>{cohorts[cohortIdForInfo].enddate}</span>
                </div>
                <div className="cohort-bacic-info-column">
                    <span>Instructor:</span>
                    <span>{cohorts[cohortIdForInfo].instructor_id}</span>
                </div>
                <div className="cohort-bacic-info-column">
                    <span>Number Of Students:</span>
                    <span>{cohorts[cohortIdForInfo].numberofstudents}</span>
                </div>
            </div>
            <table className="cohort-details-table">
                <thead>
                    <tr>
                        <th className="cohort-details-table-header">
                            First Name
                        </th>
                        <th className="cohort-details-table-header">
                            Last Name
                        </th>
                        <th className="cohort-details-table-header">Branch</th>
                        <th className="cohort-details-table-header">
                            Duty Status
                        </th>
                        <th className="cohort-details-table-header" colSpan="2">
                            ETS Status
                        </th>
                        <th className="cohort-details-table-header">
                            Phone Number
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => {
                        const branch = getBranchName(student.branch_id);
                        const etsDate = new Date(
                            student.ets_date
                        ).toLocaleDateString("en-US");
                        const formattedPhoneNumber =
                            student.phonenumber.replace(
                                /(\d{3})(\d{3})(\d{4})/,
                                "($1)-$2-$3"
                            );
                        const badgeColor = assignColor(student.ets_date);
                        const badgeMsg = getbadgeMsg(student.ets_date);
                        return (
                            <tr
                                key={index}
                                onClick={() => {
                                    setStudentClicked(student.id);
                                    setIsStudentModalOpen(true);
                                }}
                            >
                                <td className="cohort-student-entry">
                                    {student.firstname}
                                </td>
                                <td className="cohort-student-entry">
                                    {student.lastname}
                                </td>
                                <td className="cohort-student-entry">
                                    {branch}
                                </td>
                                <td className="cohort-student-entry">
                                    {student.dutystatus}
                                </td>
                                <td className="cohort-student-entry">
                                    {etsDate}
                                </td>
                                <td className="cohort-student-entry">
                                    <span
                                        className="cohort-details-badge"
                                        id={`cohort-badge-${badgeColor}`}
                                    >{badgeMsg}</span>
                                </td>
                                <td className="cohort-student-entry">
                                    {formattedPhoneNumber}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default CohortDetails;
