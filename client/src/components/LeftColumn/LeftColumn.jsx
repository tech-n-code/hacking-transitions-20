import React from "react";
import LeftColumnDrop from "./LeftColumnDrops";
import LeftColumnNames from "./LeftColumnNames";
function LeftColumn(){
    return(
        <div>
            <LeftColumnDrop />
            <LeftColumnNames />    
        </div>
    )
}
export default LeftColumn;