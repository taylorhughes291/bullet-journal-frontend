import React from "react"
import HomeToday from "../components/HomeToday"
import HomeWeek from "../components/HomeWeek"

const Home = () => {
    return (
        <>
            <h2>Home Page</h2>
            <HomeToday />
            <HomeWeek />
        </>
    )
}

export default Home