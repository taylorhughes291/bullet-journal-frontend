import React from "react"
import Moment from "react-moment"
import moment from "moment"

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

export default HomeWeekTasks