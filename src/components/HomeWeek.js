import React from "react"
import HomeWeekTasks from "./HomeWeekTasks"
import {Link} from "react-router-dom"

const HomeWeek = (props) => {

    /////////////////////////
    // Constants
    /////////////////////////

    /////////////////////////
    // Functions
    /////////////////////////

    /////////////////////////
    // Render
    /////////////////////////

    return (
        <>
            <div className="wee-headline-cont">
                <p>This Week</p>
                <Link
                    to="/week"
                ><button>All</button></Link>
            </div>
            <HomeWeekTasks 
                tasks={props.tasks}
                updateTask={props.updateTask}
                deleteTask={props.deleteTask}
            />
        </>
    )
}

export default HomeWeek