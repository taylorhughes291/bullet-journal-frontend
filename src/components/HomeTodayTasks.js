import React from "react"
import Moment from "react-moment"
import moment from "moment"

const HomeTodayTasks = (props) => {

    /////////////////////////
    // Constants
    /////////////////////////

    const todayTasks = props.tasks.filter((item, index) => {
        const todayDate = moment.utc(props.date)
        return (
            moment(item.fields.dueDate).isSame(todayDate, "day") && item.fields.taskCycle.day && !item.fields.isComplete
        )
    })

    const taskList = todayTasks.map((item, index) => {
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

    /////////////////////////
    // Render
    /////////////////////////

    return (
        <>
            <div>
                <p>Tasks</p>
                <button>+</button>
            </div>
            <div className="today-tasks-cont">
                {taskList}
            </div>
        </>
    )
}

export default HomeTodayTasks