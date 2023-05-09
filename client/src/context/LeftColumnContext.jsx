import React, {createContext, useEffect, useState} from "react";

const LeftColumnContext = createContext();

export const LeftColumnProvider = ({children}) => {
<<<<<<< HEAD
    const [dropDownClicked, setDropDownClicked] = useState("");
    const [cohortClicked, setCohortClicked] = useState("");
    const [cohorts, setCohorts] = useState([]);
    const [openDropDown, setOpenDropdown] = useState(null);
    const [students, setStudents] = useState([]);
    const [cohortId, setcohortId] = useState(1);

    const handleDropClicked = (value, id) =>{
        if(dropDownClicked === value){
            setDropDownClicked("")    
=======
    const [dropDownClicked, setDropDownClicked] = useState(false);
    const [cohortClicked, setCohortClicked] = useState(false);
    const [addCohortClicked, setAddChohortClicked] = useState(false);
    const [editCohortClicked, setEditCohortClicked] = useState(false);
    const [cohorts, setCohorts] = useState([]);
    const openAddCohort = () => {
        setAddChohortClicked(true);
    }
    const closeAddCohort = () => {
        setAddChohortClicked(false);
    }
    const openEditCohort = () => {
        setEditCohortClicked(true);
    }
    const closeEditCohort = () => {
        setEditCohortClicked(false);
    }
    const handleDropClicked = () =>{
        if(dropDownClicked){
            setDropDownClicked(false);
>>>>>>> 4a33dc3 (added map for the cohorts, there is a cors issue)
        }else{
            setDropDownClicked(value)
            setcohortId(id)
        } 
    }

    const handleCohortClicked = (cohort) => {
        if(cohortClicked === cohort){
            setCohortClicked("")
        }else{
            setCohortClicked(cohort)   
        } 
    }
    

    useEffect(() => {
        fetch('http://localhost:8000/api/cohorts')
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

    const toggleDropDown = (cohortId) => {
        if (openDropDown === cohortId) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(cohortId);
        }
<<<<<<< HEAD
    };
=======
    }
    useEffect(() => {
        fetch('http://localhost:8000/api/cohorts')
            .then(response => response.json())
            .then(data => setCohorts(data))
            .catch(error => console.log(error));
    }, []);
>>>>>>> 4a33dc3 (added map for the cohorts, there is a cors issue)

    return( <LeftColumnContext.Provider value = {{
        dropDownClicked,
        handleDropClicked,
        cohortClicked, 
        handleCohortClicked,
<<<<<<< HEAD
        cohorts,
        toggleDropDown,
        openDropDown,
        students
=======
        addCohortClicked,
        openAddCohort,
        closeAddCohort,
        editCohortClicked,
        openEditCohort,
        closeEditCohort,
        cohorts
>>>>>>> 4a33dc3 (added map for the cohorts, there is a cors issue)
    }}>
        {children}
    </LeftColumnContext.Provider>
    )
}

export default LeftColumnContext;