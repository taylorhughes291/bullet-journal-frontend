import React from "react"
import Moment from "react-moment"
import moment from "moment"

const DayEvents = (props) => {

    /////////////////////////
    // Constants
    /////////////////////////

    const dayEvents = props.events.filter((item, index) => {
        const selectedDate = moment.utc(props.selectedDate)
        return (
            item.fields.dateClass === "day" && (moment(item.fields.startDate).isSame(selectedDate, "day"))
        )
    })

    const eventsList = dayEvents.map((item, index) => {
        return (
            <div className="today-event-cont" key={index}>
                <p>{item.fields.name}</p>
                <p><Moment format="h:mm A" utc >{item.fields.startDate}</Moment> - <Moment format="h:mm A" utc >{item.fields.endDate}</Moment></p>
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
        <h2>DayEvents Page</h2>
    )
}

export default DayEvents