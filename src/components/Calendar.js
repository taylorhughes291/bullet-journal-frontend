import React from "react"
import moment from "moment"

const Calendar = (props) => {

    /////////////////////////
    // Constants
    /////////////////////////


    /////////////////////////
    // Functions
    /////////////////////////

    const handleAdd = (day) => {
        props.handleAddSettings("month", "event", new Date(day))
        props.handleAdd()
    }

    /////////////////////////
    // Render
    /////////////////////////

    const dates = []

    for (let i = 1; i <= parseInt(props.lastOfMonth.date()); i += 1) {
        const day = props.monthStart.clone().add(i - 1, 'days')
        const headline = props.events.find((item, index) => {
            return (
                item.fields.dateClass === "month" && (moment(item.fields.startDate).isSameOrBefore(day, 'day') && moment(item.fields.endDate).isSameOrAfter(day, 'day'))
            )
        })
        dates.push(
            <div 
                className="date" 
                key={i}
            >
                <div className="complete-date">
                    <div className="date-value-cont">
                        <div className="day-of-week"><p>{day.format('dd')} </p></div>
                        <p> {i}. </p>
                    </div>
                    <p className="content">{headline ? headline.fields.name : ""}</p>
                </div>
                <button
                    onClick={() => handleAdd(day)}
                ><i className="fas fa-ellipsis-h"></i></button>
            </div>
        )
    }


    return (
        <div className="calendar">
            {dates}
        </div>
    )
}

export default Calendar