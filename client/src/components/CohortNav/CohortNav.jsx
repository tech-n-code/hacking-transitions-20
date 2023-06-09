import React from "react";
import CohortNavDrops from "./CohortNavDrops";
import "./CohortNav.css"

function CohortNav(){

    return(
        <div className="cohortNav">
            <div className="cohortNavHeader">Cohorts</div>
            <CohortNavDrops />
        </div>
    )
}
export default CohortNav;