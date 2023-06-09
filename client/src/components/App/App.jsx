import React, {useContext}  from "react";
import CohortNav from "../CohortNav/CohortNav.jsx";
import Footer from "../Footer/Footer.jsx";
import StudentDetail from '../StudentDetails/StudentDetails.jsx';
import Header from "../Header/Header.jsx";
import CohortDetails from "../CohortDetails/CohortDetails.jsx";
import CohortContext from "../../context/CohortContext";
import Appointments from "../Appointments/Appointments.jsx";
import Register from "../Register/Register.jsx";
import Login from "../Login/Login.jsx";
import { AuthProvider } from "react-auth-kit";
import { UserProvider, useUser } from "../UserProvider.jsx";
import "./App.css";
import Calendar from "../Calendar/Calendar.jsx";

const App = () => {

  const { cohortClicked, renderStudent } = useContext(CohortContext);

  return (
    <UserProvider>
      <AuthProvider authStorageType="cookie" authStorageName="_auth_t" authTimeStorageName="_auth_time" stateStorageName="_auth_state" cookieDomain={window.location.hostname} cookieSecure={window.location.protocol==="https:"}>
        <AuthContent />
      </AuthProvider>
    </UserProvider>
  );
};

const AuthContent = () => {
  const { isAuthenticated } = useUser(); // Get the new isAuthenticated variable from the context
  const { cohortClicked, renderStudent } = useContext(CohortContext);
  return (
    <>
      <Header />
      {!isAuthenticated && (
        <div className="auth-container">
            <Register />
            <Login />
        </div>
      )}
      {isAuthenticated && (
        <>
          <CohortNav />
          <Calendar />
          {renderStudent ? <StudentDetail />: ''}
          {cohortClicked !== "" ? <CohortDetails />  : <></>}
          {cohortClicked !== "" ? <Appointments />  : <></>}
          <Footer />
        </>
      )}
    </>
  );
};

export default App;