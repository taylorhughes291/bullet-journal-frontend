import React from "react"
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


    /////////////////////////
    // Functions
    /////////////////////////

    const handleAdd = () => {
        props.handleAddSettings("week", "task", new Date())
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


    const taskList = weekTasks.map((item, index) => {
        return (
            <div className="today-task-cont" key={index}>
                <p
                    onClick={() => handleComplete(item.pk)}
                    className={ item.fields.isComplete ? "task-name strike" : "task-name" }
                >{item.fields.name}</p>
                <button className="small"><i className="fas fa-ellipsis-h"></i></button>
            </div>
        )
    })

    return (
        <div className="home-week-tasks-cont"> 
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

export default HomeWeekTasks