import React, { useContext } from "react";
import "./CohortNav.css";
import CohortContext from "../../context/CohortContext";

function CohortNavNames() {
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
							className='cohortNavNames'
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
export default CohortNavNames;
