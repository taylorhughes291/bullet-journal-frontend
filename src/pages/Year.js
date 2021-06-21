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
        <>
            <div>
                <img src="https://placeimg.com/100/50/any" alt="small logo" />
                <img src="https://placeimg.com/50/50/any" alt="hamburger options menu" />
            </div>
            <YearMonths 
                tasks={props.tasks}
                events={props.events}
                updateTask={props.updateTask}
                updateEvent={props.updateEvent}
                deleteTask={props.deleteTask}
                deleteEvent={props.deleteEvent}
                date={props.date}
            />
        </>
    )
}

export default Year