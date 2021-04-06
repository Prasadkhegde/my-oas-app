import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import AddPayment from "./components/AddPayment";
import UpdatePayment from "./components/UpdatePayment";
import ViewPayment from "./components/ViewPayment";

function App() {
  return (
    <Router>
      <div className="App">
        <>
          <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Payment Module</Navbar.Brand>
            <ul class="navbar-nav float-right">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse
                id="responsive-navbar-nav"
                variant="dark"
              ></Navbar.Collapse>
            </ul>
            <NavDropdown title="Payment" id="collasible-nav-dropdown">
              <Nav className="mr-auto">
                <NavDropdown.Item href="#action/3.1" className="bg-secondary">
                  {" "}
                  <Link className="nav-link active" aria-current="page" to="/">
                    View Payment
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="bg-secondary">
                  <Link className="nav-link" to="/addpayment" variant="dark">
                    Add Payment
                  </Link>
                </NavDropdown.Item>
              </Nav>
            </NavDropdown>
          </Navbar>
          <br />
        </>
        <Switch>
          <Route exact path="/">
            <ViewPayment />
          </Route>

          <Route path="/addpayment">
            <AddPayment />
          </Route>
          <Route path="/update/:paymentId" component={UpdatePayment}></Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
