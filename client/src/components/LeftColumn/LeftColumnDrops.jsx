import React, {useContext} from "react";
import LeftColumnContext from "../../context/LeftColumnContext";

function LeftColumnDrop(){
    const {handleDropClicked} = useContext(LeftColumnContext);
    return(
        <h1>Hi there</h1>
    )
}
export default LeftColumnDrop;