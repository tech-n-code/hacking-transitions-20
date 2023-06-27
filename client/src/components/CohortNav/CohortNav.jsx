import React, { useContext } from "react";
import "./CohortNav.css";
import CohortContext from "../../context/CohortContext";

function CohortNav() {
  const {
		cohortClicked,
    handleCohortClicked,
		cohorts,
	} = useContext(CohortContext);
  
  return (
    <div className="cohortNav">
      <div className="cohortNavHeader">Cohorts</div>
      <div className="cohortNavDrop-container">
        <>
          {cohorts.map((cohort, index) => {
            const buttonClass = cohortClicked === cohort.title ? "cohortClicked" : "cohortNotClicked";
            return (
              <React.Fragment key={index}>
                <div
                className={`cohortNavDrop ${buttonClass}`}
                onClick = {() => handleCohortClicked(cohort.title, cohort.id)}>
                  {cohort.title}
                </div>
              </React.Fragment >
            );
          })}
        </>
      </div>
    </div>
  );
}
export default CohortNav;
