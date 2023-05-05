import React, {useContext} from "react";
import LeftColumnDrop from "./LeftColumnDrops";
import "../../../src/styles/LeftColumn.css"
import LeftColumnFooter from "./LeftColumnFooter";

function LeftColumn(){

    return(
        <div className="leftColumn">
            <div className="leftColumnHeader">Cohorts</div>
            <LeftColumnDrop />
            <LeftColumnFooter />
        </div>
    )
}
export default LeftColumn;