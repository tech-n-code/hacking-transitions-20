import React, { useContext } from "react";
import "../../../src/styles/LeftColumn.css";
import CohortContext from "../../context/CohortContext";

function LeftColumnNames() {
	const { studentss, setStudentClicked, setRenderStudent, setCohortClicked } =
		useContext(CohortContext);

	return (
		<>
			{studentss
				.sort((a, b) => a.firstname.localeCompare(b.firstname))
				.map((student, index) => {
					return (
						<div
							key={index}
							className='leftColumnNames'
						>
							<div
								className='LCName'
								onClick={() => {
									setStudentClicked(student.id);
									setRenderStudent(true);
									setCohortClicked("");
								}}
							>
								{student.firstname} {student.lastname}
							</div>
						</div>
					);
				})}
		</>
	);
}
export default LeftColumnNames;
