import React, {useContext}  from "react";
import LeftColumn from "../LeftColumn/LeftColumn.jsx";
import Footer from "../Footer/Footer.jsx"
import StudentDetail from '../StudentRender/StudentDetails.jsx'
import Header from "../Header/Header.jsx";
import CohortDetails from "../CohortRender/CohortDetails.jsx";
import LeftColumnContext from "../../context/LeftColumnContext";

const App = () => {

  const { cohortClicked } = useContext(LeftColumnContext);

  return (
    <>
      <Header />
      <LeftColumn />
      <StudentDetail /> 
      {cohortClicked !== "" ? <CohortDetails /> : <></>}
      <Footer />
    </>
  );
};

export default App;
