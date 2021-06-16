
import './App.css';
import Add from "./pages/Add"
import Create from "./pages/Create"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Month from "./pages/Month"
import Week from "./pages/Week"
import Year from "./pages/Year"
import Nav from "./components/Nav"
import {Switch, Route, Redirect, withRouter} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact path="/"
        >
          <Redirect to="/login" />
        </Route>
        <Route
          path="/add"
        >
          <Add />
        </Route>
        <Route
          path="/create"
        >
          <Create />
        </Route>
        <Route
          path="/home"
        >
          <Home />
        </Route>
        <Route
          path="/login"
        >
          <Login />
        </Route>
        <Route
          path="/month"
        >
          <Month />
        </Route>
        <Route
          path="/week"
        >
          <Week />
        </Route>
        <Route
          path="/year"
        >
          <Year />
        </Route>
      </Switch>
      <Nav />
    </div>
  );
}

export default withRouter(App);
