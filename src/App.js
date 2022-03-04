import './App.css';
import SideBar from './Components/SideBar';
import Dashboard from './pages/dashboard';
import MyAccount from './pages/account';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <Router>
          <SideBar
          />
          <Switch>
            <Route exact path={"/"}>
              <Dashboard />
            </Route>
            <Route exact path={"/account"}>
              <MyAccount />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
