import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import AddPayment from './components/AddPayment';
import UpdatePayment from './components/UpdatePayment';
import ViewPayment from './components/ViewPayment';

function App() {
  return (
    <Router>
    <div className="App">
       <ul className="nav">
        <div className="navbar-brand ">Payment Module</div>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              View Payment
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/addpayment">
              Add Payment
            </Link>
          </li>
          </ul>


          <hr />

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
