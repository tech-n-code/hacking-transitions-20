import React, { useContext } from "react";
import CohortContext from "../../context/CohortContext";
import "./CohortDetails.css";
import AppointmentContext from "../../context/AppointmentContext.jsx";

const CohortDetails = () => {
    const {
        cohortClicked,
        cohortClickedId,
        cohorts,
        setCohortClicked,
        students,
        instructors,
        assignColor,
        formatDate,
        setStudentClicked,
        setStudentModalOpen,
    } = useContext(CohortContext);

    const { events } = useContext(AppointmentContext);

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

    const cohortInstructor = instructors.find((instructor) => instructor.cohort_id === cohortClickedId);

    const cohortInstructorName = cohortInstructor ? `${cohortInstructor.firstname} ${cohortInstructor.lastname}` : null;

    const getBadgeMsg = (givenDate) => {
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

    const getStudentETS = (givenStudentId) => {
        const studentETS = events.find((event) => event.title === 'ETS' && event.student_id === givenStudentId);
        const studentETSdate = studentETS ? studentETS.startdate : null;
        return studentETSdate;
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
                            setStudentModalOpen(false);
                        }}
                    >
                        X
                    </div>
                </div>
            </div>
            <div className="cohort-basic-info">
                <div className="cohort-bacic-info-column">
                    <span>Start Date:</span>
                    <span>{formatDate(cohorts[cohortClickedId].startdate)}</span>
                </div>
                <div className="cohort-bacic-info-column">
                    <span>End Date:</span>
                    <span>{formatDate(cohorts[cohortClickedId].enddate)}</span>
                </div>
                <div className="cohort-bacic-info-column">
                    <span>Instructor:</span>
                    <span>{cohortInstructorName}</span>
                </div>
                <div className="cohort-bacic-info-column">
                    <span>Number Of Students:</span>
                    <span>{students.length}</span>
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
                        const etsDate = formatDate(getStudentETS(student.id));
                        const formattedPhoneNumber =
                            student.phonenumber.replace(
                                /(\d{3})(\d{3})(\d{4})/,
                                "($1)-$2-$3"
                            );
                        const badgeColor = assignColor(etsDate);
                        const badgeMsg = getBadgeMsg(etsDate);
                        return (
                            <tr
                                key={index}
                                onClick={() => {
                                    setStudentClicked(student.id);
                                    setStudentModalOpen(true);
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
