import React, {useContext}  from "react";
import LeftColumn from "../LeftColumn/LeftColumn.jsx";
import Footer from "../Footer/Footer.jsx"
import StudentDetail from '../StudentRender/StudentDetails.jsx'
import Header from "../Header/Header.jsx";
import CohortDetails from "../CohortRender/CohortDetails.jsx";
import LeftColumnContext from "../../context/LeftColumnContext";
import RightColumn from "../RightColumn/RightColumn.jsx";
import Register from "../Register.jsx";
import Login from "../Login.jsx";
import { AuthProvider } from "react-auth-kit";

const App = () => {

  const { cohortClicked } = useContext(LeftColumnContext);

  return (
    <>
      <AuthProvider authStorageType="cookie" authStorageName="_auth_t" authTimeStorageName="_auth_time" stateStorageName="_auth_state" cookieDomain={window.location.hostname} cookieSecure={window.location.protocol==="https:"}>
      <Header />
      <LeftColumn />
      <Register />
      <Login />
      {/* <StudentDetail /> */}
      {cohortClicked !== "" ? <CohortDetails />  : <></>}
      {cohortClicked !== "" ? <RightColumn />  : <></>}
      <Footer />
      </AuthProvider>
    </>
  );
};

export default App;
