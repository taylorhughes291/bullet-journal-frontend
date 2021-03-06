import React from "react"
import Moment from "react-moment"
import moment from "moment"

const HomeTodayEvents = (props) => {

    /////////////////////////
    // Constants
    /////////////////////////

    const todayEvents = props.events.filter((item, index) => {
        const todayDate = moment.utc(props.date)
        return (
            item.fields.dateClass === "day" && (moment(item.fields.startDate).isSame(todayDate, "day"))
        )
    })

    const eventsList = todayEvents.map((item, index) => {
        return (
            <div className="today-event-cont" key={index}>
                <p><Moment format="h:mm A" utc >{item.fields.startDate}</Moment> - <Moment format="h:mm A" utc >{item.fields.endDate}</Moment>: {item.fields.name}</p>
                <button className="small"><i class="fas fa-ellipsis-h"></i></button>
            </div>
        )
    })

    /////////////////////////
    // Functions
    /////////////////////////

    const handleAdd = () => {
        props.handleAddSettings("day", "event", new Date())
        props.handleAdd()
    }

    /////////////////////////
    // Render
    /////////////////////////

    return (
        <div className="home-today-events-cont">
            <div className="events-add-cont">
                <p>Events</p>
                <button
                    onClick={() => handleAdd()}
                >+</button>
            </div>
            <div className="today-events-cont">
                {eventsList}
            </div>
        </div>
    )
}

export default HomeTodayEvents