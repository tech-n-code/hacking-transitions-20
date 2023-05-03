import React, {createContext, useEffect, useState} from "react";

const LeftColumnContext = createContext();

export const LeftColumnProvider = ({children}) => {
    const [dropDownClicked, setDropDownClicked] = useState(false);

    const handleDropClicked = () =>{
        if(dropDownClicked){
            setDropDownClicked(false);
        }else{
            setDropDownClicked(true);
        }
    }

    return( <LeftColumnContext.Provider value = {{
        dropDownClicked,
        handleDropClicked
    }}>
        {children}
    </LeftColumnContext.Provider>
    )
}

export default LeftColumnContext;