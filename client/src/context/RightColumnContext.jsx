import React, {createContext, useEffect, useState, useContext} from "react";
import LeftColumnContext from "./LeftColumnContext.jsx";

const RightColumnContext = createContext();

export const RightColumnProvider = ({children}) => {
    const [students, setStudents] = useState([]);
    const { cohortIdForInfo } = useContext(LeftColumnContext);
    const [ tasks, setTasks ] = useState([]);

    useEffect(() => {
        fetch(`/api/cohorts/${cohortIdForInfo + 1}/students`)
            .then(response => response.json())
            .then(data => setStudents(data))
            .catch(error => console.log(error));
    }, [cohortIdForInfo]);

    useEffect(() => {
        fetch('/api/appointments')
            .then(response => response.json())
            .then(data => setTasks(data))
            .catch(error => console.log(error));
    }, []);
    

    return( <RightColumnContext.Provider value = {{
        students,
        tasks
    }}>
        {children}
    </RightColumnContext.Provider>
    )
}

export default RightColumnContext;