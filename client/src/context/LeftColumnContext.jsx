import React, {createContext, useEffect, useState} from "react";

const LeftColumnContext = createContext();

export const LeftColumnProvider = ({children}) => {
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
        fetch('/api/cohorts')
            .then(response => response.json())
            .then(data => setCohorts(data))
            .catch(error => console.log(error));
    }, []);

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
    }
    useEffect(() => {
        fetch('http://localhost:8000/api/cohorts')
            .then(response => response.json())
            .then(data => setCohorts(data))
            .catch(error => console.log(error));
    }, []);

    return( <LeftColumnContext.Provider value = {{
        dropDownClicked,
        handleDropClicked,
        cohortClicked, 
        handleCohortClicked,
        addCohortClicked,
        openAddCohort,
        closeAddCohort,
        editCohortClicked,
        openEditCohort,
        closeEditCohort,
        cohorts
    }}>
        {children}
    </LeftColumnContext.Provider>
    )
}

export default LeftColumnContext;