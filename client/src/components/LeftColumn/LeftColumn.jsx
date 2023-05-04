import React, {useContext} from "react";
import LeftColumnDrop from "./LeftColumnDrops";
import LeftColumnNames from "./LeftColumnNames";
import "../../../src/styles/LeftColumn.css"
import LeftColumnContext from "../../context/LeftColumnContext";
import LeftColumnFooter from "./LeftColumnFooter";

function LeftColumn(){
    const{dropDownClicked} = useContext(LeftColumnContext)
    return(
        <div className="leftColumn">
            <div className="leftColumnHeader">Cohorts</div>
            <LeftColumnDrop />
            {dropDownClicked ? (<LeftColumnNames />):(<></>)} 
            <LeftColumnFooter />
        </div>
    )
}
export default LeftColumn;