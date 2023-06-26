import React, { useContext } from "react";
import "./CohortNav.css";
import CohortContext from "../../context/CohortContext";

function CohortNav() {
  const {
		handleCohortClicked,
		cohorts,
	} = useContext(CohortContext);
  
  return (
    <div className="cohortNav">
      <div className="cohortNavHeader">Cohorts</div>
      <div className="cohortNavDrop-container">
        <>
          {cohorts.map((cohort, index) => {
            return (
              <React.Fragment key={index}>
                <div className="cohortNavDrop" onClick = {() => handleCohortClicked(cohort.title, cohort.id)}>
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
