import React, { useContext } from "react";
import CohortContext from "../../context/CohortContext";
import "./CohortNav.css";
import CohortNavNames from "./CohortNavNames";

function CohortNavDrops() {
	const {
		handleDropClicked,
		dropDownClicked,
		cohortClicked,
		handleCohortClicked,
		cohorts,
		openDropDown,
		toggleDropDown,
	} = useContext(CohortContext);

	return (
		<>
			{cohorts.map((cohort, index) => {
				const buttonClass =
					cohortClicked === cohort.courseid ? "LCwasClicked" : "LCnotClicked";
				const arrowClass =
					dropDownClicked === cohort.courseid ? "LCADown" : "LCAUp";
				return (
					<React.Fragment key={cohort.courseid}>
						<div
							key={index}
							className={`cohortNavDrop ${buttonClass}`}
						>
							<div
								className='LcCohort'
								onClick={() =>
									handleCohortClicked(cohort.courseid, cohort.id - 1, cohort.id)
								}
							>
								{cohort.courseid}
							</div>
							<i
								className={`cohortNavArrow ${arrowClass}`}
								onClick={() => {
									handleDropClicked(cohort.courseid, cohort.id);
									toggleDropDown(cohort.courseid);
								}}
							></i>
						</div>
						{openDropDown === cohort.courseid && <CohortNavNames />}
					</React.Fragment>
				);
			})}
		</>
	);
}

export default CohortNavDrops;
