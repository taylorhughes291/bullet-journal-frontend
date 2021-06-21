import React from "react"
import Calendar from "../components/Calendar"
import MonthTasks from "../components/MonthTasks"
import Moment from "react-moment"
import moment from "moment"

const Month = (props) => {

    /////////////////////////
    // Constants
    /////////////////////////

    const month = moment(props.date)
    const lastOfMonth = month.clone().endOf('month')
    const monthStart = month.clone().startOf('month')


    /////////////////////////
    // Functions
    /////////////////////////

    /////////////////////////
    // Render
    /////////////////////////

    return (
        <>
            <div>
                <img src="https://placeimg.com/100/50/any" alt="small logo" />
                <img src="https://placeimg.com/50/50/any" alt="hamburger options menu" />
            </div>
            <div className="headline-next-cont">
                <h2>{month.format('MMMM YYYY')}</h2>
                <button>></button>
            </div>
            <div className="events-tasks-buttons-cont">
                <div>
                    <h5>Calendar</h5>
                </div>
                <div>
                    <h5>Tasks</h5>
                </div>
            </div>
            <Calendar 
                events={props.events}
                updateEvents={props.Events}
                deleteEvents={props.deleteEvents}
                lastOfMonth={lastOfMonth}
                monthStart={monthStart}
                date={props.date}
            />
            <MonthTasks 
                tasks={props.tasks}
                updateTask={props.updateTask}
                deleteTask={props.deleteTask}
                lastOfMonth={lastOfMonth}
                monthStart={monthStart}
                date={props.date}
            />
        </>
    )
}

export default Month