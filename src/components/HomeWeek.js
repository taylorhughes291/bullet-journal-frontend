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
        <div className="home-week">
            <div className="week-headline-cont">
                <p>This Week</p>
                <Link
                    to="/week"
                ><button>All</button></Link>
            </div>
            <HomeWeekTasks 
                tasks={props.tasks}
                updateTask={props.updateTask}
                deleteTask={props.deleteTask}
                handleAdd={props.handleAdd}
                modalShow={props.modalShow}
                setModalShow={props.setModalShow}
                userId={props.userId}
                handleAddSettings={props.handleAddSettings}
            />
        </div>
    )
}

export default HomeWeek