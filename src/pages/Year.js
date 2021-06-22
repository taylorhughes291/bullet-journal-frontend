import React from "react"
import YearMonths from "../components/YearMonths"

const Year = (props) => {

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
        <div className="year">
            <YearMonths 
                tasks={props.tasks}
                events={props.events}
                updateTask={props.updateTask}
                updateEvent={props.updateEvent}
                deleteTask={props.deleteTask}
                deleteEvent={props.deleteEvent}
                date={props.date}
                handleAdd={props.handleAdd}
                handleAddSettings={props.handleAddSettings}
            />
        </div>
    )
}

export default Year