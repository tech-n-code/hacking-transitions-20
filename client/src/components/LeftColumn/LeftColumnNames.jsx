import React, {useContext} from "react";
import "../../../src/styles/LeftColumn.css"
import LeftColumnContext from "../../context/LeftColumnContext";

function LeftColumnNames(){
    const {students, setStudentClicked, setRenderStudent} = useContext(LeftColumnContext);

    return (
        <>
            {students.map((student, index) => {
                return(                
                <div key={index} className="leftColumnNames">
                    <div 
                    className="LCName" onClick={() => {
                    setStudentClicked(student.id);
                    setRenderStudent(true)
                    }}>
                    {student.firstname} 
                    {student.lastname}
                    </div>
                </div>
                )
            })}
        </>
    );
}
export default LeftColumnNames;