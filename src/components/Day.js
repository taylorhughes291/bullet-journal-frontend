import React, {useState} from "react"
import DayTasks from "./DayTasks"
import DayEvents from "./DayEvents"

const Day = (props) => {

    /////////////////////////
    // Constants
    /////////////////////////

    const [selectedView, setSelectedView] = useState("events")

    /////////////////////////
    // Functions
    /////////////////////////

    /////////////////////////
    // Render
    /////////////////////////

    return (
        <>
            <div className="events-tasks-buttons-cont">
                <div 
                    className={selectedView === "events" ? "selected" : ""}
                    onClick={() => setSelectedView("events")}
                >
                    <h5>Events</h5>
                </div>
                <div 
                    className={selectedView === "tasks" ? "selected" : ""}
                    onClick={() => setSelectedView("tasks")}
                >
                    <h5>Tasks</h5>
                </div>
            </div>
            {selectedView === "tasks" && <DayTasks 
                tasks={props.tasks}
                updateTask={props.updateTask}
                deleteTask={props.deleteTask}
                selectedDate={props.selectedDate}
                handleAddSettings={props.handleAddSettings}
                handleAdd={props.handleAdd}
            />}
            {selectedView === "events" && <DayEvents 
                events={props.events}
                updateEvent={props.updateEvent}
                deleteEvent={props.deleteEvent}
                selectedDate={props.selectedDate}
                handleAddSettings={props.handleAddSettings}
                handleAdd={props.handleAdd}
            />}
        </>
    )
}

export default Day