import React from "react"
import Moment from "react-moment"

const HomeTodayEvents = (props) => {

    /////////////////////////
    // Constants
    /////////////////////////

    const eventsList = props.events.map((item, index) => {
            return (
                <div className="today-event-cont" key={index}>
                    <p>{item.fields.name}</p>
                    <p><Moment format="h:mm A" utc >{item.fields.startDate}</Moment></p>
                    <p>...</p>
                </div>
            )
        })

    /////////////////////////
    // Functions
    /////////////////////////

    /////////////////////////
    // Render
    /////////////////////////

    return (
        <>
            <div className="events-add-cont">
                <p>Events</p>
                <button>+</button>
            </div>
            <div className="today-events-cont">
                {eventsList}
            </div>
        </>
    )
}

export default HomeTodayEvents