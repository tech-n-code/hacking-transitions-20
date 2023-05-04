import React, {createContext, useEffect, useState} from "react";

const LeftColumnContext = createContext();

export const LeftColumnProvider = ({children}) => {
    const [dropDownClicked, setDropDownClicked] = useState(false);
    const [cohortClicked, setCohortClicked] = useState(false);
    const [addCohortClicked, setAddChohortClicked] = useState(false);
    const [editCohortClicked, setEditCohortClicked] = useState(false);
    
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
            setDropDownClicked(true);
        }
    }
    const handleCohortClicked = () => {
        if (cohortClicked) {
            setCohortClicked(false);
        } else {
            setCohortClicked(true);
        }
    }

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
        closeEditCohort
    }}>
        {children}
    </LeftColumnContext.Provider>
    )
}

export default LeftColumnContext;