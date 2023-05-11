import React, {createContext, useEffect, useState} from "react";

const LeftColumnContext = createContext();

export const LeftColumnProvider = ({children}) => {
    const [dropDownClicked, setDropDownClicked] = useState("");
    const [cohortClicked, setCohortClicked] = useState("");
    const [cohorts, setCohorts] = useState([]);
    const [openDropDown, setOpenDropdown] = useState(null);
    const [students, setStudents] = useState([]);
    const [cohortId, setcohortId] = useState(1);
    const [cohortIdForInfo, setCohortIdForInfo] = useState(1);
    const [studentID, setStudentClicked] = useState('');
    const [studentdata, setStudentData] = useState(null);
    const [branchdata, setBranchData] = useState(null);
    const [renderStudent, setRenderStudent] = useState(false)

    const handleDropClicked = (value, id) =>{
        if(dropDownClicked === value){
            setDropDownClicked("")    
        }else{
            setDropDownClicked(value)
            setcohortId(id)
        } 
    }

    const handleCohortClicked = (cohort, id) => {
        if(cohortClicked === cohort){
            setCohortClicked("")
        }else{
            setCohortClicked(cohort)
            setCohortIdForInfo(id)   
        } 
    }

    useEffect(() => {
        if(branchdata){
            console.log(branchdata);
        }
    }, [studentdata]);

    useEffect(() => {
        fetch(`http://localhost:8000/api/branches`)
            .then(response => response.json())
            .then(data => setBranchData(data))
            .catch(error => console.log(error));
    }, []);
    
    useEffect(() => {
        if(studentdata){
            console.log(studentdata);
        }
    }, [studentdata]);

    useEffect(() => {
        fetch(`http://localhost:8000/api/cohorts/${cohortId}/students/${studentID}`)
            .then(response => response.json())
            .then(data => setStudentData(data))
            .catch(error => console.log(error));
    }, [cohortId, studentID]);

    useEffect(() => {
        fetch('http://localhost:8000/api/cohorts')
            .then(response => response.json())
            .then(data => setCohorts(data))
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        fetch('/api/cohorts')
            .then(response => response.json())
            .then(data => setCohorts(data))
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:8000/api/cohorts/${cohortId}/students`)
            .then(response => response.json())
            .then(data => setStudents(data))
            .catch(error => console.log(error));
    }, [cohortId]);

    useEffect(() => {
        fetch(`/api/cohorts/${cohortId}/students`)
            .then(response => response.json())
            .then(data => setStudents(data))
            .catch(error => console.log(error));
    }, [cohortId]);

    const toggleDropDown = (cohortId) => {
        if (openDropDown === cohortId) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(cohortId);
        }
    };

    return( <LeftColumnContext.Provider value = {{
        studentID,
        renderStudent,
        setRenderStudent,
        studentdata,
        branchdata,
        setStudentClicked,
        setStudentData,
        dropDownClicked,
        handleDropClicked,
        cohortClicked, 
        handleCohortClicked,
        cohorts,
        toggleDropDown,
        openDropDown,
        students,
        cohortId,
        cohortIdForInfo,
        setStudents
    }}>
        {children}
    </LeftColumnContext.Provider>
    )
}

export default LeftColumnContext;