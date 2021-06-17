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
import {useState, useEffect} from "react"

function App() {

  /////////////////////////
  // Constants
  /////////////////////////

  const [userId, setUserId] = useState("2")
  const [date, setDate] = useState("")
  const [tasks, setTasks] = useState([])
  const [events, setEvents] = useState([])

  const url = process.env.REACT_APP_BACKENDURL

  /////////////////////////
  // Functions
  /////////////////////////

  const getData = () => {
    const getUrl = url + "/user/" + userId
    console.log(getUrl);
    fetch(getUrl)
    .then((response) => (response.json()))
    .then((data) => {
      setTasks(data.data.tasks)
      setEvents(data.data.events)
    })
  }
  
  const updateTask = () => {

  }

  const updateEvent = () => {

  }

  const deleteUser = () => {

  }

  const deleteTask = () => {

  }

  const deleteEvent = () => {

  }

  /////////////////////////
  // Render
  /////////////////////////

  useEffect(() => {
    getData()
  }, [])

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
          <Create 
            setUserId={setUserId}
          />
        </Route>
        <Route
          path="/home"
        >
          <Home 
            tasks={tasks}
            events={events}
          />
        </Route>
        <Route
          path="/login"
        >
          <Login 
            setUserId={setUserId}
          />
        </Route>
        <Route
          path="/month"
        >
          <Month 
            tasks={tasks}
            events={events}
          />
        </Route>
        <Route
          path="/week"
        >
          <Week 
            tasks={tasks}
            events={events}
          />
        </Route>
        <Route
          path="/year"
        >
          <Year 
            tasks={tasks}
            events={events}
          />
        </Route>
      </Switch>
      <Nav />
    </div>
  );
}

export default withRouter(App);
