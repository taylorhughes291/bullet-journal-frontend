import React from "react"
import HomeToday from "../components/HomeToday"
import HomeWeek from "../components/HomeWeek"

const Home = (props) => {

    /////////////////////////
    // Constants
    /////////////////////////

    const {tasks, events, updateTask, updateEvent, deleteTask, deleteEvent, date, setDate} = props

    /////////////////////////
    // Functions
    /////////////////////////

    /////////////////////////
    // Render
    /////////////////////////

    const loaded = () => {
        return (
            <div className="home-cont">
                <HomeToday 
                    tasks={tasks}
                    events={events}
                    updateTask={updateTask}
                    updateEvent={updateEvent}
                    deleteTask={deleteTask}
                    deleteEvent={deleteEvent}
                    date={date}
                    handleAddSettings={props.handleAddSettings}
                    handleAdd={props.handleAdd}
                />
                <HomeWeek 
                    tasks={tasks}
                    date={date}
                    handleAdd={props.handleAdd}
                    modalShow={props.modalShow}
                    setModalShow={props.setModalShow}
                    userId={props.userId}
                    handleAddSettings={props.handleAddSettings}
                />
            </div>
        )
    }

    const loading = () => {
        return (
            <h2>Loading...</h2>
        )
    }

    return props.tasks ? loaded() : loading()
}

export default Home