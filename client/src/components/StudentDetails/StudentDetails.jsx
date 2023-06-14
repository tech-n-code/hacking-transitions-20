import React, { useContext, useState } from "react";
import Modal from "react-modal";
import "./StudentDetails.css";
import CohortContext from "../../context/CohortContext";
Modal.setAppElement("#root");

const StudentDetail = () => {
    const {
        studentdata,
        branchdata,
        assignColor,
        isStudentModalOpen,
        setIsStudentModalOpen,
    } = useContext(CohortContext);

    const studentName =
        studentdata && studentdata.length > 0
            ? studentdata[0].firstname + " " + studentdata[0].lastname
            : "";
    const studentStatus =
        studentdata && studentdata.length > 0 ? studentdata[0].dutystatus : "";
    const studentInstallation =
        studentdata && studentdata.length > 0 ? studentdata[0].base : "";
    const studentLocation =
        studentdata && studentdata.length > 0 ? studentdata[0].location : "";
    const studentEmail =
        studentdata && studentdata.length > 0 ? studentdata[0].email : "";
    let studentBranch = "";

    if (branchdata && branchdata.length > 0) {
        const foundBranch = branchdata.find(
            (branch) => branch.id === studentdata[0].branch_id
        );
        studentBranch = foundBranch ? foundBranch.name : "";
    }

    const formattedPhoneNumber = studentdata[0].phonenumber.replace(
        /(\d{3})(\d{3})(\d{4})/,
        "($1)-$2-$3"
    );
    const etsDate = new Date(studentdata[0].ets_date).toLocaleDateString(
        "en-us"
    );
    const setColor = assignColor(studentdata[0].ets_date);

    const modalStyle = {
        content: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: "fit-content",
            width: "fit-content",
            border: "1px solid",
            background: "#E0EAF8",
            overflow: "auto",
            borderRadius: "10px",
            outline: "none",
            padding: "30px",
            boxShadow: "0px 10px 20px -10px rgba(0, 0, 0, 0.75)",
        },
    };

    function closeModal() {
        setIsStudentModalOpen(false);
    }

    return (
        <Modal
            isOpen={isStudentModalOpen}
            onRequestClose={closeModal}
            style={modalStyle}
        >
            <table className="student-details-table">
                <thead>
                    <tr>
                        <th className="student-details-header" colSpan="2">
                            Student Details
                            <div
                                className="student-exit"
                                onClick={() => {
                                    setIsStudentModalOpen(false);
                                }}
                            >
                                X
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="column1">Name</td>
                        <td className="column2">{studentName}</td>
                    </tr>
                    <tr>
                        <td className="column1">Branch</td>
                        <td className="column2">{studentBranch}</td>
                    </tr>
                    <tr>
                        <td className="column1">Installation:</td>
                        <td className="column2">{studentInstallation}</td>
                    </tr>
                    <tr>
                        <td className="column1">Location:</td>
                        <td className="column2">{studentLocation}</td>
                    </tr>
                    <tr>
                        <td className="column1">Phone Number:</td>
                        <td className="column2">{formattedPhoneNumber}</td>
                    </tr>
                    <tr>
                        <td className="column1">Email:</td>
                        <td className="column2">{studentEmail}</td>
                    </tr>
                    <tr>
                        <td className="column1">ETS Date:</td>
                        <td className="column2">
                            {etsDate}
                            <div
                                className="student-details-circle"
                                id={setColor}
                            ></div>
                        </td>
                    </tr>
                    <tr>
                        <td className="column1 lowerLeft-cell">Duty Status</td>
                        <td className="column2 lowerRight-cell">
                            {studentStatus}
                        </td>
                    </tr>
                </tbody>
            </table>
        </Modal>
    );
};

export default StudentDetail;
