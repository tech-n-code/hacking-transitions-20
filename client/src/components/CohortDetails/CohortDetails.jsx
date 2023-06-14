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
                <div>{`Start Date: ${cohorts[cohortIdForInfo].startdate}`}</div>
                <div>{`End Date: ${cohorts[cohortIdForInfo].enddate}`}</div>
                <div>{`Instructor: ${cohorts[cohortIdForInfo].instructor_id}`}</div>
                <div>{`Number Of Students: ${cohorts[cohortIdForInfo].numberofstudents}`}</div>
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
                        <th className="cohort-details-table-header">
                            ETS Date
                        </th>
                        <th className="cohort-details-table-header">Status</th>
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
                        const setColor = assignColor(student.ets_date);
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
                                    <div
                                        className="cohort-details-circle"
                                        id={setColor}
                                    ></div>
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
