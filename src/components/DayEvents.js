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
            <div className="day-event-cont" key={index}>
                <p>{item.fields.name}</p>
                <p><Moment format="h:mm A" utc >{item.fields.startDate}</Moment> - <Moment format="h:mm A" utc >{item.fields.endDate}</Moment></p>
                <p>...</p>
            </div>
        )
    })

    /////////////////////////
    // Functions
    /////////////////////////

    const handleAdd = () => {
        props.handleAddSettings("day", "event", new Date(props.selectedDate))
        props.handleAdd()
    }

    /////////////////////////
    // Render
    /////////////////////////

    return (
        <>
             <div className="day-events-add-cont">
                <p>Events, {props.selectedDate.format('MM/DD/YYYY')}</p>
                <button
                    onClick={() => handleAdd()}
                >+</button>
            </div>
            <div className="day-events-cont">
                {eventsList}
            </div>
        </>
    )
}

export default DayEvents