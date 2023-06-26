import React, {createContext, useEffect, useState, useContext} from "react";
import CohortContext from "./CohortContext.jsx";

const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
    const { cohortClickedId, update, setUpdate } = useContext(CohortContext);
    const [ students, setStudents ] = useState([]);
    const [ student, setStudent ] = useState("");
    const [ notes, setNotes ] = useState([]);
    const [ events, setEvents ] =useState([]);
    const [ noteId, setNoteId ] = useState(null);
    const [ noteSelected, setNoteSelected ] = useState("");
    const [ showAddModal, setShowAddModal ] = useState(false);

    //Gets all students in a cohort
    useEffect(() => {
        fetch(`/api/cohorts/${cohortClickedId}/students`)
            .then(response => response.json())
            .then(data => setStudents(data))
            .catch(error => console.error(error));
    }, [cohortClickedId]);

    //Gets all notes in a cohort
    useEffect(() => {
        setUpdate(false)
        fetch(`/api/cohorts/${cohortClickedId}/notes`)
            .then(response => response.json())
            .then(data =>setNotes(data))
            .catch(error => console.error(error));
    }, [update === true]);
    
    //Gets all events in a cohort
    useEffect(() => {
        setUpdate(false)
        fetch(`/api/cohorts/${cohortClickedId}/events`)
            .then(response => response.json())
            .then(data =>setEvents(data))
            .catch(error => console.error(error));
    }, [update === true]);

    return( <AppointmentContext.Provider value = {{
        students,
        student,
        setStudent,
        notes,
        events,
        update,
        setUpdate,
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