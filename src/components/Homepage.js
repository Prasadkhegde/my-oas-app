import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import AddPayment from "./AddPayment";
import UpdatePayment from "./UpdatePayment";
import ViewPayment from "./ViewPayment";
import AddUser from "./AddUser";
import UpdateUser from "./UpdateUser";
import ViewUser from "./ViewUser";
import AddLogin from "./AddLogin";
import ViewLogin from "./ViewLogin";
import ChangePassword from "./ChangePassword";
import ViewCollege from "./ViewCollege";
import AddCollege from "./AddCollege";
import UpdateCollege from "./UpdateCollege";
import AddCourse from "./AddCourse";
import UpdateCourse from "./UpdateCourse";
import ViewCourse from "./ViewCourse";
import AddBranch from "./AddBranch";
import ViewBranch from "./ViewBranch";
import UpdateBranch from "./UpdateBranch";
import AddProgram from "./AddProgram";
import ViewProgram from "./ViewProgram";
import UpdateProgram from "./UpdateProgram";
import AddProgramScheduled from "./AddProgramScheduled";
import UpdateProgramScheduled from "./UpdateProgramScheduled";
import ViewProgramScheduled from "./ViewProgramScheduled";
import AddUniversity from "./AddUniversity";
import UpdateUniversity from "./UpdateUniversity";
import ViewUniversity from "./ViewUniversity";
import AddApplication from "./AddApplication";
import ViewApplication from "./ViewApplication";
import UpdateApplication from "./UpdateApplication";
import DeleteApplication from "./DeleteApplication";
import Login from "./Login";

export default function Homepage() {
  return (
    <nav className=" navbar fixed-top">
      <Router>
        <>
          <Navbar collapseOnSelect expand="xs" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Online Admission System</Navbar.Brand>
            <ul className="navbar-nav float-right">
              <Navbar.Collapse
                id="responsive-navbar-nav"
                variant="dark"
              ></Navbar.Collapse>
            </ul>

            <NavDropdown title="LoginDetails" id="collasible-nav-dropdown">
              <Nav className="mr-auto">
                <NavDropdown.Item href="#action/3.1" className="bg-secondary">
                  {" "}
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/viewlogin"
                  >
                    View Login
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="bg-secondary">
                  <NavLink className="nav-link" to="/addlogin" variant="dark">
                    Add Login
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="bg-secondary">
                  <NavLink className="nav-link" to="/login" variant="dark">
                    Logout
                  </NavLink>
                </NavDropdown.Item>
              </Nav>
            </NavDropdown>

            <NavDropdown title="User" id="collasible-nav-dropdown">
              <Nav className="mr-auto">
                <NavDropdown.Item href="#action/3.1" className="bg-secondary">
                  {" "}
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/viewuser"
                  >
                    View User
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="bg-secondary">
                  <NavLink className="nav-link" to="/adduser" variant="dark">
                    Add User
                  </NavLink>
                </NavDropdown.Item>
              </Nav>
            </NavDropdown>

            <NavDropdown title="University" id="collasible-nav-dropdown">
              <Nav className="mr-auto">
                <NavDropdown.Item href="#action/3.1" className="bg-secondary">
                  {" "}
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/viewuniversity"
                  >
                    View University
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="bg-secondary">
                  <NavLink
                    className="nav-link"
                    to="/adduniversity"
                    variant="dark"
                  >
                    Add University
                  </NavLink>
                </NavDropdown.Item>
              </Nav>
            </NavDropdown>

            <NavDropdown title="College" id="collasible-nav-dropdown">
              <Nav className="mr-auto">
                <NavDropdown.Item href="#action/3.1" className="bg-secondary">
                  {" "}
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/viewcollege"
                  >
                    View College
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="bg-secondary">
                  <NavLink className="nav-link" to="/addcollege" variant="dark">
                    Add College
                  </NavLink>
                </NavDropdown.Item>
              </Nav>
            </NavDropdown>

            <NavDropdown title="Branch" id="collasible-nav-dropdown">
              <Nav className="mr-auto">
                <NavDropdown.Item href="#action/3.1" className="bg-secondary">
                  {" "}
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/branches"
                  >
                    View Branch
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="bg-secondary">
                  <NavLink className="nav-link" to="/addbranch" variant="dark">
                    Add Branch
                  </NavLink>
                </NavDropdown.Item>
              </Nav>
            </NavDropdown>

            <NavDropdown title="Course" id="collasible-nav-dropdown">
              <Nav className="mr-auto">
                <NavDropdown.Item href="#action/3.1" className="bg-secondary">
                  {" "}
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/viewcourse"
                  >
                    View Course
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="bg-secondary">
                  <NavLink className="nav-link" to="/addcourse" variant="dark">
                    Add Course
                  </NavLink>
                </NavDropdown.Item>
              </Nav>
            </NavDropdown>

            <NavDropdown title="Program" id="collasible-nav-dropdown">
              <Nav className="mr-auto">
                <NavDropdown.Item href="#action/3.1" className="bg-secondary">
                  {" "}
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/programs"
                  >
                    View Program
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="bg-secondary">
                  <NavLink className="nav-link" to="/addprogram" variant="dark">
                    Add Program
                  </NavLink>
                </NavDropdown.Item>
              </Nav>
            </NavDropdown>

            <NavDropdown title="Program Schedule" id="collasible-nav-dropdown">
              <Nav className="mr-auto">
                <NavDropdown.Item href="#action/3.1" className="bg-secondary">
                  {" "}
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/programScheduled"
                  >
                    View ProgramSchedule
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="bg-secondary">
                  <NavLink
                    className="nav-link"
                    to="/addprogramScheduled"
                    variant="dark"
                  >
                    Add ProgramSchedule
                  </NavLink>
                </NavDropdown.Item>
              </Nav>
            </NavDropdown>

            <NavDropdown title="Application" id="collasible-nav-dropdown">
              <Nav className="mr-auto">
                <ul>
                  <NavDropdown.Item href="#action/3.1" className="bg-secondary">
                    {" "}
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      to="/viewapplication"
                    >
                      View Application
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" className="bg-secondary">
                    <NavLink
                      className="nav-link active"
                      to="/addapplication"
                      variant="dark"
                    >
                      Add Application
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3" className="bg-secondary">
                    <NavLink
                      className="nav-link active"
                      to="/deleteapplication"
                      variant="dark"
                    >
                      Delete Application
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4" className="bg-secondary">
                    <NavLink
                      className="nav-link active"
                      to="/updateapplication"
                      variant="dark"
                    >
                      Update Application
                    </NavLink>
                  </NavDropdown.Item>
                </ul>
              </Nav>
            </NavDropdown>

            <NavDropdown title="Payment" id="collasible-nav-dropdown">
              <Nav className="mr-auto">
                <NavDropdown.Item href="#action/3.1" className="bg-secondary">
                  {" "}
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/viewpayment"
                  >
                    View Payment
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="bg-secondary">
                  <NavLink className="nav-link" to="/addpayment" variant="dark">
                    Add Payment
                  </NavLink>
                </NavDropdown.Item>
              </Nav>
            </NavDropdown>
          </Navbar>
        </>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route exact path="/viewpayment">
            <ViewPayment />
          </Route>

          <Route path="/addpayment">
            <AddPayment />
          </Route>
          <Route
            path="/updatepayment/:paymentId"
            component={UpdatePayment}
          ></Route>

          <Route exact path="/viewuser">
            <ViewUser />
          </Route>
          <Route path="/adduser">
            <AddUser />
          </Route>
          <Route path="/updateuser/:userId" component={UpdateUser}></Route>
          <Route exact path="/addlogin">
            <AddLogin />
          </Route>
          <Route path="/viewlogin">
            <ViewLogin />
          </Route>
          <Route path="/change/:userId" component={ChangePassword}></Route>

          <Route path="/addcollege">
            <AddCollege />
          </Route>

          <Route
            path="/updatecollege/:collegeRegId"
            component={UpdateCollege}
          ></Route>
          <Route path="/viewcollege">
            <ViewCollege />
          </Route>

          <Route exact path="/viewcourse">
            <ViewCourse />
          </Route>
          <Route path="/addcourse">
            <AddCourse />
          </Route>
          <Route
            path="/updateCourse/:courseId"
            component={UpdateCourse}
          ></Route>

          <Route exact path="/branches">
            <ViewBranch />
          </Route>
          <Route path="/addbranch">
            <AddBranch />
          </Route>
          <Route
            path="/updateBranch/:branchId"
            component={UpdateBranch}
          ></Route>

          <Route exact path="/programs">
            <ViewProgram />
          </Route>
          <Route path="/addprogram">
            <AddProgram />
          </Route>
          <Route
            path="/updateProgram/:programId"
            component={UpdateProgram}
          ></Route>

          <Route exact path="/viewuniversity">
            <ViewUniversity />
          </Route>
          <Route path="/adduniversity">
            <AddUniversity />
          </Route>
          <Route
            path="/updateUniversity/:universityId"
            component={UpdateUniversity}
          ></Route>

          <Route exact path="/programScheduled">
            <ViewProgramScheduled />
          </Route>
          <Route path="/addprogramScheduled">
            <AddProgramScheduled />
          </Route>
          <Route
            path="/updateProgramScheduled/:scheduleId"
            component={UpdateProgramScheduled}
          ></Route>

          <Route path="/addapplication" component={AddApplication} />
          <Route path="/updateapplication" component={UpdateApplication} />
          <Route path="/viewapplication" component={ViewApplication} />
          <Route path="/deleteapplication" component={DeleteApplication} />
        </Switch>
      </Router>
    </nav>
  );
}
