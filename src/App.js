import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";
import Signup from "./components/Signup";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div
      id="bimg"
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url("https://cdn.pixabay.com/photo/2017/12/22/08/01/literature-3033196_1280.jpg")`,
        backgroundSize: "cover",

        height: "100vh",
        objectFit: "contain",
      }}
    >
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Login}></PrivateRoute>
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <div className="navbar navbar-inverse navbar-static-top">
              <Route path="/homepage">
                <Homepage />
              </Route>
            </div>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}
export default App;
