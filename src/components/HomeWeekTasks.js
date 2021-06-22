import React, {useState} from "react"
import moment from "moment"
import Add from "./Add"

const HomeWeekTasks = (props) => {

    /////////////////////////
    // Constants
    /////////////////////////

    const weekTasks = props.tasks.filter((item, index) => {
        const todayDate = moment.utc(props.date)
        return (
            moment(item.fields.dueDate).isSame(todayDate, "week") && item.fields.taskCycle.week && !item.fields.isComplete
        )
    })

    const taskList = weekTasks.map((item, index) => {
        return (
            <div className="today-task-cont" key={index}>
                <p>{item.fields.name}</p>
                <p>...</p>
            </div>
        )
    })

    /////////////////////////
    // Functions
    /////////////////////////

    const handleAdd = () => {
        props.handleAddSettings("week", "task")
        props.handleAdd()
    }

    /////////////////////////
    // Render
    /////////////////////////

    return (
        <>
        <div>
            <p>Tasks</p>
            <button
                onClick={() => handleAdd()}
            >+</button>
        </div>
        <div className="today-tasks-cont">
            {taskList}
        </div>
    </>
    )
}

export default HomeWeekTasks