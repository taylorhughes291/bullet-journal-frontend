import React from "react"
import DayTasks from "./DayTasks"
import DayEvents from "./DayEvents"

const Day = () => {
    return (
        <>
            <h2>Day Page</h2>
            <DayTasks />
            <DayEvents />
        </>
    )
}

export default Day