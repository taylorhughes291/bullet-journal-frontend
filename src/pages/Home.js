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

    return (
        <>
            <div>
                <img src="https://placeimg.com/100/50/any" alt="small logo" />
                <img src="https://placeimg.com/50/50/any" alt="hamburger options menu" />
            </div>
            <HomeToday 
                tasks={tasks}
                events={events}
                updateTask={updateTask}
                updateEvent={updateEvent}
                deleteTask={deleteTask}
                deleteEvent={deleteEvent}
                date={date}
            />
            <HomeWeek 
                tasks={tasks}
                date={date}
            />
        </>
    )
}

export default Home