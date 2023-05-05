import React, {useContext}  from "react";
import LeftColumn from "../LeftColumn/LeftColumn.jsx";
import Footer from "../Footer/Footer.jsx"
import StudentDetail from '../StudentRender/StudentDetails.jsx'
import Header from "../Header/Header.jsx";
import CohortDetails from "../CohortRender/CohortDetails.jsx";

const App = () => {
  return (
    <>
      <Header />
      <LeftColumn />
      <StudentDetail />
      <CohortDetails />
      <Footer />
    </>
  );
};

export default App;
