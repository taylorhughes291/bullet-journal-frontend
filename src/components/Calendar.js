import React from "react"
import Moment from "react-moment"
import moment from "moment"

const Calendar = (props) => {

    /////////////////////////
    // Constants
    /////////////////////////

    /////////////////////////
    // Functions
    /////////////////////////

    /////////////////////////
    // Render
    /////////////////////////

    const dates = []

    for (let i = 1; i <= parseInt(props.lastOfMonth.date()); i += 1) {
        const headline = props.events.find((item, index) => {
            return (
                item.fields.dateClass === "month" && (moment(item.fields.startDate).isSameOrBefore(props.monthStart.clone().add(i - 1, 'days'), 'day') && moment(item.fields.endDate).isSameOrAfter(props.monthStart.clone().add(i - 1, 'days'), 'day'))
            )
        })
        console.log(headline);
        dates.push(
            <div className="date" key={i}>
                <p>{i}. {headline ? headline.fields.name : ""}</p>
                <button>...</button>
            </div>
        )
    }


    return (
        <>
            {dates}
        </>
    )
}

export default Calendar