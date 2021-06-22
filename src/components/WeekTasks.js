import React from "react"
import moment from "moment"

const WeekTasks = (props) => {

    /////////////////////////
    // Constants
    /////////////////////////


    /////////////////////////
    // Functions
    /////////////////////////

    const handleAdd = () => {
        props.handleAddSettings("week", "task", new Date(props.selectedDate))
        props.handleAdd()
    }

    /////////////////////////
    // Render
    /////////////////////////

    const weekTasks = props.tasks.filter((item, index) => {
        return (
            (moment(item.fields.dueDate).isSameOrAfter(props.weekStart.clone(), "day") && moment(item.fields.dueDate).isSameOrBefore(props.weekStart.clone().add(6, 'days'), "day")) && item.fields.taskCycle.week
        )
    })

    const taskList = weekTasks.map((item, index) => {
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
        <div className="top-level-cont">
            <div className="headline">
                <p>This Week's Tasks</p>
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

export default WeekTasks