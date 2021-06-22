import React from "react"
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
                <button className="small"><i className="fas fa-ellipsis-h"></i></button>
            </div>
        )
    })

    /////////////////////////
    // Functions
    /////////////////////////

    const handleAdd = () => {
        props.handleAddSettings("day", "task", new Date())
        props.handleAdd()
    }

    /////////////////////////
    // Render
    /////////////////////////

    return (
        <div className="home-today-tasks-cont">
            <div className="headline">
                <p>Tasks</p>
                <button
                    onClick={() => handleAdd()}
                >+</button>
            </div>
            <div className="today-tasks-cont">
                {taskList}
            </div>
        </div>
    )
}

export default HomeTodayTasks