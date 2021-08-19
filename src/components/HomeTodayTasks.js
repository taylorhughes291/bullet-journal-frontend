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


    /////////////////////////
    // Functions
    /////////////////////////

    const handleAdd = () => {
        props.handleAddSettings("day", "task", new Date())
        props.handleAdd()
    }

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


    const taskList = todayTasks.map((item, index) => {
        const isLate = item.fields.dueDate === item.fields.originalDate ? false : true
        let className = "task-name"
        if (item.fields.isComplete) {
            className += " strike"
        }
        if (isLate) {
            className += " late"
        }
        return (
            <div className="today-task-cont" key={index}>
                <p
                    onClick={() => handleComplete(item.pk)}
                    className={className}
                >{item.fields.name}</p>
                <button className="small"><i className="fas fa-ellipsis-h"></i></button>
            </div>
        )
    })

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