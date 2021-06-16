import React from "react"
import HomeTodayEvents from "./HomeTodayEvents"
import HomeTodayTasks from "./HomeTodayTasks"

const HomeToday = () => {
    return (
        <>
            <h2>HomeToday Page</h2>
            <HomeTodayEvents />
            <HomeTodayTasks />
        </>
    )
}

export default HomeToday