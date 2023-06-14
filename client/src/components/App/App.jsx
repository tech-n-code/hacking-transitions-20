import React, {useContext, useState}  from "react";
import CohortNav from "../CohortNav/CohortNav.jsx";
import Footer from "../Footer/Footer.jsx";
import StudentDetail from "../StudentDetails/StudentDetails.jsx";
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
import Logout from "../Logout/Logout.jsx";

const App = () => {
  const { cohortClicked, isStudentModalOpen } = useContext(CohortContext);

  return (
    <UserProvider>
      <AuthProvider
        authStorageType="cookie"
        authStorageName="_auth_t"
        authTimeStorageName="_auth_time"
        stateStorageName="_auth_state"
        cookieDomain={window.location.hostname}
        cookieSecure={window.location.protocol === "https:"}
      >
        <AuthContent />
      </AuthProvider>
    </UserProvider>
  );
};


const AuthContent = () => {
  const [mode, setMode] = useState("login"); // Add a new state variable called "mode" and initialize it to "login"
  const { isAuthenticated } = useUser(); // Get the new isAuthenticated variable from the context

  const { cohortClicked, isStudentModalOpen } = useContext(CohortContext);

  const handleModeChange = (newMode) => {
    setMode(newMode);
  };

  return (
    <>
      <Header />
      {!isAuthenticated && (
        <div className="auth-container">
          {mode === 'login' ? <Login handleModeChange={handleModeChange}/> : <Register handleModeChange={handleModeChange} />}
          {/* <button onClick={() => handleModeChange(mode === 'login' ? 'register' : 'login')}>
            {mode === 'login' ? 'New User' : 'Existing User'}
          </button> */}
        </div>
      )}
        {isAuthenticated && (
          <>
          <Logout />
            <CohortNav />
            <div className="body-container">
              {cohortClicked !== "" ? <Appointments /> : <></>}
              <div className="content-container">
                <Calendar />
                {cohortClicked !== "" ? <CohortDetails /> : <></>}
                {isStudentModalOpen ? <StudentDetail /> : ""}
              </div>
            </div>
            <Footer />
          </>
        )}
      
    </>
  );
};

export default App;




