import React, { useState, useContext, useEffect } from "react";
import Modal from "react-modal";
import "./StudentDetails.css";
import CohortContext from "../../context/CohortContext.jsx";
import AppointmentContext from "../../context/AppointmentContext.jsx";
Modal.setAppElement("#root");
import AddReminder from "../Appointments/AddReminder";
import ChangeReminder from "../Appointments/ChangeReminder";

const StudentDetail = () => {
  const {
    studentID,
    studentdata,
    branchdata,
    assignColor,
    formatDate,
    studentModalOpen,
    setStudentModalOpen,
  } = useContext(CohortContext);

  const { notes, events, showAddModal, setShowAddModal, } = useContext(AppointmentContext);

  const studentNotes = notes.filter((note) => note.student_id === studentID);
  const studentEvents = events.filter((event) => event.student_id === studentID);

  const studentName = studentdata && studentdata.length > 0
    ? studentdata[0].firstname + " " + studentdata[0].lastname
    : "";
  const studentStatus = studentdata && studentdata.length > 0 
    ? studentdata[0].dutystatus
    : "";
  const studentInstallation = studentdata && studentdata.length > 0
    ? studentdata[0].base
    : "";
  const studentLocation = studentdata && studentdata.length > 0
    ? studentdata[0].location
    : "";
  const studentEmail = studentdata && studentdata.length > 0
    ? studentdata[0].email
    : "";

  const formattedPhoneNumber = studentdata[0].phonenumber.replace(
    /(\d{3})(\d{3})(\d{4})/,
    "($1)-$2-$3"
  );
  
  const handleAddReminder = () => {
    // setIsStudentModalOpen(false);
    setShowAddModal(true);
  }
  const [editNote, setEditNote] = useState(false);

  const handleChangeReminder =()=>{
    setEditNote(true);
  }

  const [deleteConfirmation, setDeleteConfirmation] = useState(null);
  const [notesToDelete, setNotesToDelete] = useState([]);

  useEffect(() => {
    // Remove deleted notes from the state
    setNotesToDelete([]);
  }, [notes]);

  const handleDeleteClick = (noteId) => {
    setDeleteConfirmation(noteId);
  };

  const handleConfirmDeleteClick = (noteId) => {
    if (noteId) {
      // Check if the noteId is provided
      fetch(`/api/notes/${noteId}`, {
        method: "DELETE",
      })
        .then(() => {
          console.log("Note " + noteId + " has been deleted");
          setNotesToDelete((prevNotes) => [...prevNotes, noteId]);
          setDeleteConfirmation(null);
        })
        .catch((error) => {
          console.error("Error deleting note:", error);
          setDeleteConfirmation(null);
        });
    }
  };

  const handleCancelDeleteClick = () => {
    setDeleteConfirmation(null);
  };

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
  };
  
  const getStudentETS = (givenStudentId) => {
    const studentETS = events.find((event) =>
      event.title === 'ETS' && event.student_id === givenStudentId);
    const studentETSdate = studentETS ? studentETS.startdate : null;
    return studentETSdate;
  }
  
  const getStudentBranch = (givenStudentBranchId) => {
    const foundBranch = branchdata.find((branch) =>
      branch.id === givenStudentBranchId);
    const studentBranch = foundBranch ? foundBranch.name : null;
    return studentBranch;
  }

  const studentBranch = getStudentBranch(studentdata[0].branch_id);
  const studentETSdate = getStudentETS(studentID);
  const badgeColor = assignColor(studentETSdate);
  const badgeMsg = getBadgeMsg(studentETSdate);

  const modalStyle = {
    overlay: {
      zIndex: 100,
    },
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
      zIndex: 101,
    },
  };

  function closeModal() {
    setStudentModalOpen(false);
  }

  return (
    <Modal
      isOpen={studentModalOpen}
      onRequestClose={closeModal}
      style={modalStyle}
    >
      <div className="modal-container">
        <table className="student-details-table">
          <thead>
            <tr>
              <th className="student-details-header" colSpan="2">
                Student Details
                <div
                  className="student-exit"
                  onClick={() => {
                    setStudentModalOpen(false);
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
                <span>{formatDate(studentETSdate)}</span>
                <span
                  className="student-details-badge"
                  id={`student-badge-${badgeColor}`}
                >
                  {badgeMsg}
                </span>
              </td>
            </tr>
            <tr>
              <td className="column1 lowerLeft-cell">Duty Status</td>
              <td className="column2 lowerRight-cell">{studentStatus}</td>
            </tr>
          </tbody>
        </table>
        <span style={{ height: "20px" }}></span>
        <table className="student-details-appt-table">
          <thead>
            <tr>
              <th className="student-details-appt-header" colSpan="2">
                Appointments:
              </th>
            </tr>
          </thead>
          <tbody>
            {events.length > 0 ? (
              studentEvents.map((studentEvent, index) => {
                const currentDate = new Date();
                const appointmentDate = new Date(studentEvent.startdate);
                const isStrikethrough = currentDate.getTime() > appointmentDate.getTime();
                return (
                <tr key={index}>
                  <td className={`student-details-appt ${isStrikethrough ? 'strikethrough-text' : ''}`}>
                    {formatDate(studentEvent.startdate)}
                  </td>
                  <td className="student-details-appt">{studentEvent.title}</td>
                </tr>
                );
              })
            ) : (
              <tr>
                <td className="student-details-appt">None.</td>
              </tr>
            )}
          </tbody>
        </table>
        <span style={{ height: "20px" }}></span>
        <table className="student-details-appt-table">
          <thead>
            <tr>
              <th className="student-details-appt-header" colSpan="2">
                Notes:
                <button style={{marginRight: '5px', marginLeft: 'auto'}} className='addButton' onClick={handleAddReminder}>Add </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {notes.length > 0 ? (
              studentNotes.map((studentNote, index) => {
                return (
                <tr key={index}>
                  <td className={`student-details-appt`}>
                    {studentNote.note}
                    <button 

                  style={{marginRight: '5px', marginLeft: 'auto'}}
                  className='editButton' onClick={handleChangeReminder}
                  >Edit</button>
                   {deleteConfirmation === studentNote.id ? (
                        <div>
                          <button
                            className="confirmDeleteButton"
                            onClick={() =>
                              handleConfirmDeleteClick(deleteConfirmation)
                            }
                          >
                            Confirm
                          </button>

                          <button
                            className="cancelDeleteButton"
                            onClick={handleCancelDeleteClick}
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          className="deleteButton"
                          onClick={() => handleDeleteClick(studentNote.id)}
                        >
                          Delete
                        </button>
                      )}
                  </td>
                </tr>
                );
              })
            ) : (
              <tr>
                <td className="student-details-appt">None.</td>
              </tr>
            )}
          </tbody>
        </table>
        <AddReminder showAddModal={showAddModal} setShowAddModal={setShowAddModal} />
        <ChangeReminder editNote = {editNote} setEditNote = {setEditNote}/>
      </div>
     </Modal>
  );
};

export default StudentDetail;
