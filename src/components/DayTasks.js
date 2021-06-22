import React from "react"
import Moment from "react-moment"
import moment from "moment"

const DayTasks = (props) => {

    /////////////////////////
    // Constants
    /////////////////////////

    /////////////////////////
    // Functions
    /////////////////////////

    const handleAdd = () => {
        props.handleAddSettings("day", "task", new Date(props.selectedDate))
        props.handleAdd()
    }

    /////////////////////////
    // Render
    /////////////////////////

    const dayTasks = props.tasks.filter((item, index) => {
        const selectedDate = moment.utc(props.selectedDate)
        return (
            moment(item.fields.dueDate).isSame(selectedDate, "day") && item.fields.taskCycle.day
        )
    })

    const taskList = dayTasks.map((item, index) => {
        return (
            <div className="day-task-cont" key={index}>
                <p
                    onClick={() => props.handleComplete(item.pk)}
                    className={ item.fields.isComplete ? "task-name strike" : "task-name" }
                >{item.fields.name}</p>
                <p>...</p>
            </div>
        )
    })

    return (
        <>
            <div className="headline-add-cont">
                <p>Tasks, {props.selectedDate.format('MM/DD/YYYY')}</p>
                <button
                    onClick={() => handleAdd()}
                >+</button>
            </div>
            <div className="day-tasks-cont">
                {taskList}
            </div>
        </>
    )
}

export default DayTasks