import React from "react"
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
            <div className="item" key={index}>
                <p
                    onClick={() => props.handleComplete(item.pk)}
                    className={ item.fields.isComplete ? "task-name strike" : "task-name" }
                >{item.fields.name}</p>
                <button className="small"><i className="fas fa-ellipsis-h"></i></button>
            </div>
        )
    })

    return (
        <div class="top-level-cont">
            <div className="headline">
                <p>Tasks, {props.selectedDate.format('MM/DD/YYYY')}</p>
                <button
                    onClick={() => handleAdd()}
                >+</button>
            </div>
            <div className="items">
                {taskList}
            </div>
        </div>
    )
}

export default DayTasks