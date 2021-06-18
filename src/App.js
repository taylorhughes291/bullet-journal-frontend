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

function App(props) {

  /////////////////////////
  // Constants
  /////////////////////////

  const [userId, setUserId] = useState("")
  const [date, setDate] = useState("")
  const [tasks, setTasks] = useState([])
  const [events, setEvents] = useState([])

  const url = process.env.REACT_APP_BACKENDURL

  /////////////////////////
  // Functions
  /////////////////////////

  const getData = () => {
    const getUrl = url + "/user/" + userId
    fetch(getUrl)
    .then((response) => (response.json()))
    .then((data) => {
      setTasks(data.tasks)
      setEvents(data.events)
    })
  }
  
  const updateTask = (body, id) => {
    const putUrl = url + "/task/?id=" + id + "&user=" + userId
    fetch(putUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
    .then((response) => response.json())
    .then((data) => {
      setTasks(data);
    })
  }


  const updateEvent = (body, id) => {
    const putUrl = url + "/event/?id=" + id + "&user=" + userId
    fetch(putUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
    .then((response) => response.json())
    .then((data) => {
      setEvents(data);
    })
  }

  const deleteUser = () => {
    const deleteUrl = url + "/user/?id=" + userId
    fetch(deleteUrl, {
      method: "DELETE"
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
  }

  const deleteTask = (id) => {
    const deleteUrl = url + "/task/?id=" + id + "&user=" + userId
    fetch(deleteUrl, {
      method: "DELETE"
    })
    .then((response) => response.json())
    .then((data) => {
      setTasks(data)
    })
  }

  const deleteEvent = (id) => {
    const deleteUrl = url + "/event/?id=" + id + "&user=" + userId
    fetch(deleteUrl, {
      method: "DELETE"
    })
    .then((response) => response.json())
    .then((data) => {
      setEvents(data)
    })
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
            url={url}
          />
        </Route>
        <Route
          path="/home"
        >
          <Home 
            tasks={tasks}
            events={events}
            updateTask={updateTask}
            updateEvent={updateEvent}
            deleteTask={deleteTask}
            deleteEvent={deleteEvent}
          />
        </Route>
        <Route
          path="/login"
        >
          <Login 
            setUserId={setUserId}
            url={url}
          />
        </Route>
        <Route
          path="/month"
        >
          <Month 
            tasks={tasks}
            events={events}
            updateTask={updateTask}
            updateEvent={updateEvent}
            deleteTask={deleteTask}
            deleteEvent={deleteEvent}
          />
        </Route>
        <Route
          path="/week"
        >
          <Week 
            tasks={tasks}
            events={events}
            updateTask={updateTask}
            updateEvent={updateEvent}
            deleteTask={deleteTask}
            deleteEvent={deleteEvent}
          />
        </Route>
        <Route
          path="/year"
        >
          <Year 
            tasks={tasks}
            events={events}
            updateTask={updateTask}
            updateEvent={updateEvent}
            deleteTask={deleteTask}
            deleteEvent={deleteEvent}
          />
        </Route>
      </Switch>
      <div className={props.location.pathname === "/login" || props.location.pathname === "/create" ? "hidden" : ""} >
        <Nav />
      </div>
    </div>
  );
}

export default withRouter(App);
