import React from "react";
import LeftColumnDrop from "./LeftColumnDrops";
import LeftColumnNames from "./LeftColumnNames";
import "../../../src/styles/LeftColumn.css"
function LeftColumn(){
    return(
        <div className="leftColumn">
            <div className="leftColumnHeader">Cohorts</div>
            <LeftColumnDrop />
            <LeftColumnNames />    
        </div>
    )
}
export default LeftColumn;