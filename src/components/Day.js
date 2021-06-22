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
                handleAddSettings={props.handleAddSettings}
                handleAdd={props.handleAdd}
            />
            <DayEvents 
                events={props.events}
                updateEvent={props.updateEvent}
                deleteEvent={props.deleteEvent}
                selectedDate={props.selectedDate}
                handleAddSettings={props.handleAddSettings}
                handleAdd={props.handleAdd}
            />
        </>
    )
}

export default Day