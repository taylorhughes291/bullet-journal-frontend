import React from "react"
import HomeTodayEvents from "./HomeTodayEvents"
import HomeTodayTasks from "./HomeTodayTasks"
import Moment from "react-moment"
import {Link} from "react-router-dom"

const HomeToday = (props) => {

    /////////////////////////
    // Constants
    /////////////////////////
    
    const {events, tasks, updateEvent, updateTask, deleteTask, deleteEvent, date} = props

    /////////////////////////
    // Functions
    /////////////////////////

    /////////////////////////
    // Render
    /////////////////////////

    return (
        <>
            <div className="today-cont">
                <div className="today-headline-cont">
                    <p>Today, <Moment format="MM/DD/YYYY">{props.date}</Moment></p>
                    <Link
                        to="/today"
                    ><button>All</button></Link>
                </div>
                <HomeTodayEvents 
                    events={events}
                    updateEvent={updateEvent}
                    deleteEvent={deleteEvent}
                    date={date}
                />
                <HomeTodayTasks 
                    tasks={tasks}
                    updateTask={updateTask}
                    deleteTask={deleteTask}
                    date={date}
                />
            </div>
        </>
    )
}

export default HomeToday