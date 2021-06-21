import React from "react"
import Moment from "react-moment"
import moment from "moment"

const MonthTasks = (props) => {

    /////////////////////////
    // Constants
    /////////////////////////

    /////////////////////////
    // Functions
    /////////////////////////

    const handleComplete = (pk) => {
        const selectedTask = props.tasks.find((item, index) => {
            return (
                item.pk === pk
            )
        })
        const body = {
            ...selectedTask.fields,
            isComplete: !selectedTask.fields.isComplete
        }
        props.updateTask(body, pk)
    }

    /////////////////////////
    // Render
    /////////////////////////

    const monthTasks = props.tasks.filter((item, index) => {
        return (
            (moment(item.fields.dueDate).isSameOrAfter(props.monthStart.clone(), "day") && moment(item.fields.dueDate).isSameOrBefore(props.lastOfMonth)) && item.fields.taskCycle.month
        )
    })

    const taskList = monthTasks.map((item, index) => {
        return (
            <div className="day-task-cont" key={index}>
                <p
                    onClick={() => handleComplete(item.pk)}
                    className={ item.fields.isComplete ? "task-name strike" : "task-name" }
                >{item.fields.name}</p>
                <p>...</p>
            </div>
        )
    })

    return (
        <>
            <div className="week-tasks-cont">
                {taskList}
                <button>Add Task</button>
            </div>
        </>
    )
}

export default MonthTasks