import React, {useState} from "react"
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
    const [selectedDate, setSelectedDate] = useState("")


    /////////////////////////
    // Functions
    /////////////////////////

    /////////////////////////
    // Render
    /////////////////////////

    return (
        <div className="month">
            <div className="headline-next-cont">
                <h2>{month.format('MMMM YYYY')}</h2>
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
                handleAddSettings={props.handleAddSettings}
                handleAdd={props.handleAdd}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            />
            <MonthTasks 
                tasks={props.tasks}
                updateTask={props.updateTask}
                deleteTask={props.deleteTask}
                lastOfMonth={lastOfMonth}
                monthStart={monthStart}
                date={props.date}
                handleAddSettings={props.handleAddSettings}
                handleAdd={props.handleAdd}
            />
        </div>
    )
}

export default Month