import React, {createContext, useEffect, useState, useContext} from "react";
import CohortContext from "./CohortContext.jsx";

const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
    const [ students, setStudents ] = useState([]);
    const { cohortIdForInfo } = useContext(CohortContext);
    const [ notes, setNotes ] = useState([]);
    const [ update, setUpdate ] = useState(false);
    const [ edit, setEdit ] = useState("");
    const [ student, setStudent ] = useState("");
    const [ noteId, setNoteId ] = useState(null);
    const [ noteSelected, setNoteSelected ] = useState("");
    const[ showAddModal, setShowAddModal ] = useState(false)

    useEffect(() => {
        fetch(`/api/cohorts/${cohortIdForInfo + 1}/students`) //why +1 ???
            .then(response => response.json())
            .then(data => setStudents(data))
            .catch(error => console.log(error));
    }, [cohortIdForInfo]);

    useEffect(() => {
        setUpdate(false)
        
        fetch('/api/notes')
            .then(response => response.json())
            .then(data =>setNotes(data))
            .catch(error => console.log(error));
    }, [update===true]);
    
    return( <AppointmentContext.Provider value = {{
        students,
        notes,
        update,
        setUpdate,
        edit,
        setEdit,
        student,
        setStudent,
        noteSelected,
        setNoteSelected,
        noteId,
        setNoteId,
        showAddModal,
        setShowAddModal
    }}>
        {children}
    </AppointmentContext.Provider>
    )
}

export default AppointmentContext;