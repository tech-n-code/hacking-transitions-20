import React, { useContext, useEffect } from 'react';
import LeftColumnContext from "../../context/LeftColumnContext";
import '../../styles/CohortDetails.css'

const CohortDetails = () => {

    const {cohortClicked} = useContext(LeftColumnContext);

    console.table(cohortClicked);


    return (
        <>
            <div>{cohortClicked}</div>
        </>
    );
};

export default CohortDetails;
