import React, {useContext}  from "react";
import LeftColumn from "../LeftColumn/LeftColumn.jsx";
import Footer from "../Footer/Footer.jsx"
import StudentDetail from '../StudentRender/StudentDetails.jsx'
import Header from "../Header/Header.jsx";
import AddCohortModal from "../AddEditModals/AddCohortModal.jsx";
import EditCohortModal from "../AddEditModals/EditCohortModal.jsx";
import LeftColumnContext from "../../context/LeftColumnContext.jsx";

const App = () => {
  const { addCohortClicked, editCohortClicked} = useContext(LeftColumnContext);
  return (
    <>
      <Header />
      {addCohortClicked ? (<AddCohortModal/>) : (<></>)}
      {editCohortClicked ? (<EditCohortModal/>) : (<></>)}
      <LeftColumn />
      <StudentDetail />
      <Footer />
    </>
  );
};

export default App;
