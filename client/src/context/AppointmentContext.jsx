import React, {createContext, useEffect, useState, useContext} from "react";
import CohortContext from "./CohortContext.jsx";

const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
    const { 
        students,
        cohortClickedId,
        update,
        setUpdate
    } = useContext(CohortContext);

    const [ notes, setNotes ] = useState([]);
    const [ events, setEvents ] =useState([]);
    const [ noteId, setNoteId ] = useState(null);
    const [ noteSelected, setNoteSelected ] = useState("");
    const [ notesToDelete, setNotesToDelete ] = useState([]);
    const [ showAddModal, setShowAddModal ] = useState(false);
    const [ selectedStudent, setSelectedStudent ] = useState("");
    
    //Gets all notes in a cohort
    useEffect(() => {
        setUpdate(false)
        fetch(`/api/cohorts/${cohortClickedId}/notes`)
            .then(response => response.json())
            .then(data =>setNotes(data))
            .catch(error => console.error(error));
    }, [update, cohortClickedId]);
    
    //Gets all events in a cohort
    useEffect(() => {
        setUpdate(false)
        fetch(`/api/cohorts/${cohortClickedId}/events`)
            .then(response => response.json())
            .then(data =>setEvents(data))
            .catch(error => console.error(error));
    }, [update, cohortClickedId]);

    return( <AppointmentContext.Provider value = {{
        students,
        notes,
        events,
        update,
        setUpdate,
        noteSelected,
        setNoteSelected,
        noteId,
        setNoteId,
        showAddModal,
        setShowAddModal,
        notesToDelete,
        setNotesToDelete,
        selectedStudent,
        setSelectedStudent,
    }}>
        {children}
    </AppointmentContext.Provider>
    )
}

export default AppointmentContext;