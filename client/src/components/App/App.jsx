import React  from "react";
import LeftColumn from "../LeftColumn/LeftColumn.jsx";
import Footer from "../Footer/Footer.jsx"
import StudentDetail from '../StudentRender/StudentDetails.jsx'
import Header from "../Header/Header.jsx";

const App = () => {
  return (
    <>
      <Header />
      <LeftColumn />
      <StudentDetail />
      <Footer />
    </>
  );
};

export default App;
