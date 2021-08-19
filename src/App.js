import './App.css';
import Add from "./components/Add"
import Create from "./pages/Create"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Month from "./pages/Month"
import Week from "./pages/Week"
import Year from "./pages/Year"
import Nav from "./components/Nav"
import {Switch, Route, Redirect, withRouter} from "react-router-dom"
import {useState, useEffect, createContext} from "react"
import smallLogo from "./assets/city-journal-small.png"
import jwt_decode from "jwt-decode"

export const GlobalCtx = createContext(null)

function App(props) {

  /////////////////////////
  // Constants
  /////////////////////////

  const [userId, setUserId] = useState("-1")
  const [gState, setGState] = useState({
    token: ""
  })
  const [date, setDate] = useState("")
  const [tasks, setTasks] = useState([{
    fields: {
      name: "",
      isComplete: "",
      taskCycle: {
        day: false,
        week: false,
        month: false
      },
      dueDate: "",
      userId: ""
    }
  }])
  const [events, setEvents] = useState([{
    fields: {
      name: "",
      startDate: "",
      endDate: "",
      userId: "",
      dateClass: ""
    }
  }])
  const [modalShow, setModalShow] = useState(false);
  const [addSettings, setAddSettings] = useState({
    taskCycle: "day",
    category: "task",
    date: ""
  })

  const url = process.env.REACT_APP_BACKENDURL

  /////////////////////////
  // Functions
  /////////////////////////

  const getData = (user) => {
    const getUrl = url + "/user/" + user + "/"
    fetch(getUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `bearer ${gState.token}`
      }
    })
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
        "Content-Type": "application/json",
        "Authorization": `bearer ${gState.token}`
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
        "Content-Type": "application/json",
        "Authorization": `bearer ${gState.token}`
      },
      body: JSON.stringify(body)
    })
    .then((response) => response.json())
    .then((data) => {
      setEvents(data);
    })
  }

  // const deleteUser = () => {
  //   const deleteUrl = url + "/user/?id=" + userId
  //   fetch(deleteUrl, {
  //     method: "DELETE"
  //   })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //   })
  // }

  const deleteTask = (id) => {
    const deleteUrl = url + "/task/?id=" + id + "&user=" + userId
    fetch(deleteUrl, {
      method: "DELETE", headers: {
        "Authorization": `bearer ${gState.token}`
      }
    })
    .then((response) => response.json())
    .then((data) => {
      setTasks(data)
    })
  }

  const deleteEvent = (id) => {
    const deleteUrl = url + "/event/?id=" + id + "&user=" + userId
    fetch(deleteUrl, {
      method: "DELETE",
      headers: {
        "Authorization": `bearer ${gState.token}`
      },
    })
    .then((response) => response.json())
    .then((data) => {
      setEvents(data)
    })
  }

  const handleAdd = () => {
    setModalShow(true)
  }

  const handleAddSettings = (taskCycle, category, date) => {
    setAddSettings({
      taskCycle,
      category,
      date
    })
  }

  /////////////////////////
  // Render
  /////////////////////////
  
  useEffect(() => {
    if (gState.token !== "") {
      getData(userId)
      setDate(new Date())
    }
  }, [userId, gState])

  useEffect(() => {
    const token = JSON.parse(window.localStorage.getItem("token"))
    if (token) {
      setUserId(jwt_decode(token).userId)
      setGState({
        ...gState,
        token
      })
    } else {
        props.history.push("/login")
      }
  }, [])

  return (
    <GlobalCtx.Provider value={{gState, setGState}}>
      <div className="App">
        <div className="non-nav">
          <header className={props.location.pathname === "/login" || props.location.pathname === "/create" ? "hidden" : ""}>
              <img src={smallLogo} className="small-logo" alt="small logo" />
              <i className="fas fa-bars fa-2x"></i>
          </header>
          <Switch>
            <Route
              exact path="/"
            >
              <Redirect to="/login" />
            </Route>
            <Route
              path="/create"
            >
              <Create 
                setUserId={setUserId}
                url={url}
                getData={getData}
                setDate={setDate}
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
                date={date}
                handleAdd={handleAdd}
                userId={userId}
                handleAddSettings={handleAddSettings}
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
                date={date}
                handleAddSettings={handleAddSettings}
                handleAdd={handleAdd}
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
                modalShow={modalShow}
                setModalShow={setModalShow}
                handleAddSettings={handleAddSettings}
                handleAdd={handleAdd}
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
                date={date}
                handleAdd={handleAdd}
                handleAddSettings={handleAddSettings}
              />
            </Route>
          </Switch>
          <Add 
              modalShow={modalShow}
              setModalShow={setModalShow}
              userId={userId}
              addSettings={addSettings}
              setAddSettings={setAddSettings}
              url={url}
              getData={getData}
          />
        </div>
        <div className={props.location.pathname === "/login" || props.location.pathname === "/create" ? "hidden" : ""} >
          <Nav 
            handleAdd={handleAdd}
            handleAddSettings={handleAddSettings}
          />
        </div>
      </div>
    </GlobalCtx.Provider>
  );
}

export default withRouter(App);
