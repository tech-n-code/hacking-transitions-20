import React, {useContext} from "react";
import LeftColumnContext from "../../context/LeftColumnContext";
import "../../../src/styles/LeftColumn.css"

function LeftColumnDrop(){
    const {handleDropClicked, dropDownClicked} = useContext(LeftColumnContext);

    const arrowClass = dropDownClicked ? "LCADown" : "LCAUp";

    return(
        <div className="leftColumnDrop">
            <div className="LcCohort">MCSP-19</div>
                <i className = {`leftColumnArrow ${arrowClass}`} onClick={handleDropClicked}></i>   
        </div>
    )
}
export default LeftColumnDrop;