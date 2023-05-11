import React, {useContext}  from "react";
import LeftColumn from "../LeftColumn/LeftColumn.jsx";
import Footer from "../Footer/Footer.jsx"
import StudentDetail from '../StudentRender/StudentDetails.jsx'
import Header from "../Header/Header.jsx";
import CohortDetails from "../CohortRender/CohortDetails.jsx";
import LeftColumnContext from "../../context/LeftColumnContext";
import RightColumn from "../RightColumn/RightColumn.jsx";

const App = () => {

  const { cohortClicked, renderStudent } = useContext(LeftColumnContext);

  return (
    <>
      <Header />
      <LeftColumn />
      {renderStudent ? <StudentDetail />: ''}
      {cohortClicked !== "" ? <CohortDetails />  : <></>}
      {cohortClicked !== "" ? <RightColumn />  : <></>}
      <Footer />
    </>
  );
};

export default App;
