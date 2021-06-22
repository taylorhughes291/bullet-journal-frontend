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

    const [selectedView, setSelectedView] = useState("calendar")


    /////////////////////////
    // Functions
    /////////////////////////

    /////////////////////////
    // Render
    /////////////////////////

    return (
        <div className="month">
            <div className="headline">
                <h2>{month.format('MMMM YYYY')}</h2>
            </div>
            <div className="events-tasks-buttons-cont">
                <div
                    onClick={() => setSelectedView("calendar")}
                    className={selectedView === "calendar" ? "selected" : "" }
                >
                    <h5>Calendar</h5>
                </div>
                <div
                    onClick={() => setSelectedView("tasks")}
                    className={selectedView === "tasks" ? "selected" : "" }
                >
                    <h5>Tasks</h5>
                </div>
            </div>
            {selectedView === "calendar" && <Calendar 
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
            />}
            {selectedView === "tasks" && <MonthTasks 
                tasks={props.tasks}
                updateTask={props.updateTask}
                deleteTask={props.deleteTask}
                lastOfMonth={lastOfMonth}
                monthStart={monthStart}
                date={props.date}
                handleAddSettings={props.handleAddSettings}
                handleAdd={props.handleAdd}
            />}
        </div>
    )
}

export default Month