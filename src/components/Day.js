import React from "react"
import DayTasks from "./DayTasks"
import DayEvents from "./DayEvents"

const Day = (props) => {

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
            <div className="events-tasks-buttons-cont">
                <div>
                    <h5>Events</h5>
                </div>
                <div>
                    <h5>Tasks</h5>
                </div>
            </div>
            <DayTasks 
                tasks={props.tasks}
                updateTask={props.updateTask}
                deleteTask={props.deleteTask}
                selectedDate={props.selectedDate}
            />
            <DayEvents 
                events={props.events}
                updateEvent={props.updateEvent}
                deleteEvent={props.deleteEvent}
                selectedDate={props.selectedDate}
            />
        </>
    )
}

export default Day