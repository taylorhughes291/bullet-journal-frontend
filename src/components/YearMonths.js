import React from "react"
import moment from "moment"

const YearMonth = (props) => {

    /////////////////////////
    // Constants
    /////////////////////////

    const todayMonth = moment(props.date)

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

    const handleAdd = (day) => {
        props.handleAddSettings("month", "task", new Date(day))
        props.handleAdd()
    }

    /////////////////////////
    // Render
    /////////////////////////

    const months = []

    for (let i = 1; i <= 12; i += 1) {
        const month = todayMonth.clone().add(i - 1, 'months')

        const monthEvents = props.events.filter((item, index) => {
            return (
                item.fields.dateClass === "month" && (moment(item.fields.startDate).isSameOrBefore(month, 'month') && moment(item.fields.endDate).isSameOrAfter(month, 'month'))
            )
        })
        
        const monthEventsRender = monthEvents.map((item, index) => {
            return (
                <li key={index} ><p>{moment(item.fields.startDate).format('M/DD')} - {moment(item.fields.endDate).format('M/DD')}: {item.fields.name}</p><button>...</button></li>
            )
        })

        const monthTasks = props.tasks.filter((item, index) => {
            return (
                !item.fields.isComplete && item.fields.taskCycle.month && moment(item.fields.dueDate).isSame(month, 'month')
            )
        })
        
        const monthTasksRender = monthTasks.map((item, index) => {
            return (
                <li 
                    key={index}
                    onClick={() => handleComplete(item.pk)}
                ><p>{item.fields.name}</p><button>...</button></li>
            )
        })
        
        months.push(
            <div className="year-month-cont">
                <div className="year-month-headline-cont">
                    <p>{month.format('MMMM YYYY')}</p>
                    <button
                        onClick={() => handleAdd(month)}
                    >+</button>
                </div>
                <div className="date" key={i}>
                    <ul>
                        {monthEventsRender}
                        {monthTasksRender}
                    </ul>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="year-months-cont">
                {months}
            </div>
        </>
    )
}

export default YearMonth