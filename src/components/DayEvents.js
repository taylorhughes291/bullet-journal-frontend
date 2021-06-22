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
            <div className="item" key={index}>
                <p><Moment format="h:mm A" utc >{item.fields.startDate}</Moment> - <Moment format="h:mm A" utc >{item.fields.endDate}</Moment>: {item.fields.name}</p>
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
        <div className="top-level-cont">
             <div className="headline">
                <p>Events, {props.selectedDate.format('MM/DD/YYYY')}</p>
                <button
                    onClick={() => handleAdd()}
                >+</button>
            </div>
            <div className="items">
                {eventsList}
            </div>
        </div>
    )
}

export default DayEvents