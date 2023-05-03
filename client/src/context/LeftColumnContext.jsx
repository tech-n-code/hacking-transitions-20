import React, {createContext, useEffect, useState} from "react";

const LeftColumnContext = createContext();

export const LeftColumnProvider = ({children}) => {
    const [dropDownClicked, setDropDownClicked] = useState(false);
    const [cohortClicked, setCohortClicked] = useState(false);
    

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
        handleCohortClicked
    }}>
        {children}
    </LeftColumnContext.Provider>
    )
}

export default LeftColumnContext;