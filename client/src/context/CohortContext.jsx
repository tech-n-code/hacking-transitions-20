import React, {createContext, useEffect, useState, useContext} from "react";
import AppointmentContext from "./AppointmentContext.jsx";

const CohortContext = createContext();

export const CohortProvider = ({children}) => {
    const [ update, setUpdate ] = useState(false);
    const [ cohorts, setCohorts ] = useState([]);
    const [ students, setStudents ] = useState([]);
    const [ instructors, setInstructors ] = useState([]);
    const [ cohortClicked, setCohortClicked ] = useState("");
    const [ cohortClickedId, setCohortClickedId ] = useState(1);
    const [ studentID, setStudentClicked ] = useState(1);
    const [ studentdata, setStudentData ] = useState(null);
    const [ branchdata, setBranchData ] = useState(null);
    const [ studentModalOpen, setStudentModalOpen ] = useState(false);

    const handleCohortClicked = (cohortTitle, cohortId) => {
        if(cohortClicked === cohortTitle){
            setCohortClicked("");
        } else {
            setCohortClicked(cohortTitle);
            setCohortClickedId(cohortId);
            setStudentModalOpen(false);
            setUpdate(true);
        } 
    };

    //Gets all branches
    useEffect(() => {
        fetch('/api/branches')
            .then(response => response.json())
            .then(data => setBranchData(data))
            .catch(error => console.error(error));
    }, []);
    
    //Gets all cohorts
    useEffect(() => {
        fetch('/api/cohorts')
            .then(response => response.json())
            .then(data => setCohorts(data))
            .catch(error => console.error(error));
    }, []);

    //Gets all instructors
    useEffect(() => {
        fetch('/api/instructors')
            .then(response => response.json())
            .then(data => setInstructors(data))
            .catch(error => console.error(error));
    }, []);

    //Gets student by studentId
    useEffect(() => {
        fetch(`/api/students/${studentID}`)
            .then(response => response.json())
            .then(data => setStudentData(data))
            .catch(error => console.error(error));
    }, [studentID]);

    //Gets all students on a cohort by cohortId
    useEffect(() => {
        fetch(`/api/cohorts/${cohortClickedId}/students`)
            .then(response => response.json())
            .then(data => setStudents(data))
            .catch(error => console.error(error));
    }, [cohortClickedId]);

    function formatDate(timestampDate) {
        const formattedDate = new Date(timestampDate).toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });
        return formattedDate;
    }

    function formatDateWithTime(timestampDate) {
        const dateObj = new Date(timestampDate);
        const isMidnight = timestampDate.includes("T05:00:00.000Z");
      
        let formattedDate = dateObj.toLocaleDateString("en-US", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        });
      
        //Only include time if it's not midnight
        if (!isMidnight) {
          const timeString = dateObj.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          });
      
          //Split timeString to get time and AM/PM
          const [time, ampm] = timeString.split(" ");
          formattedDate += ` ${time} ${ampm}`;
        }
        return formattedDate;
    }
      
    function assignColor(dateInput) {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Set the time to midnight

        const inputDate = new Date(dateInput);
        inputDate.setHours(0, 0, 0, 0); // Set the time to midnight

        const timeDifference = inputDate.getTime() - today.getTime();
        const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24)); // Convert milliseconds to days

        let color;
        if (daysDifference < 0) {
            color = "green"; // Date has passed
        } else if (daysDifference <= 30) {
            color = "red"; // Less than a month away
        } else {
            color = "yellow"; // More than a month away
        }
        return color;
    }

    return( <CohortContext.Provider value = {{
        branchdata,
        setCohortClicked,
        cohortClickedId,
        setCohortClickedId,
        cohortClicked, 
        handleCohortClicked,
        cohorts,
        students,
        setStudents,
        studentID,
        studentModalOpen,
        setStudentModalOpen,
        studentdata,
        setStudentData,
        setStudentClicked,
        instructors,
        setInstructors,
        update,
        setUpdate,
        assignColor,
        formatDate,
        formatDateWithTime,
    }}>
        {children}
    </CohortContext.Provider>
    )
}

export default CohortContext;