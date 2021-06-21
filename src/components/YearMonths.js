import React from "react"
import Moment from "react-moment"
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

    /////////////////////////
    // Render
    /////////////////////////

    const months = []

    for (let i = 1; i <= 6; i += 1) {
        const monthEvents = props.events.filter((item, index) => {
            return (
                item.fields.dateClass === "month" && (moment(item.fields.startDate).isSameOrBefore(todayMonth.clone().add(i - 1, 'months'), 'month') && moment(item.fields.endDate).isSameOrAfter(todayMonth.clone().add(i - 1, 'months'), 'month'))
            )
        })
        
        const monthEventsRender = monthEvents.map((item, index) => {
            return (
                <li key={index} ><p>{moment(item.fields.startDate).format('M/DD')} - {moment(item.fields.endDate).format('M/DD')}: {item.fields.name}</p><button>...</button></li>
            )
        })

        const monthTasks = props.tasks.filter((item, index) => {
            return (
                !item.fields.isComplete && item.fields.taskCycle.month && moment(item.fields.dueDate).isSame(todayMonth.clone().add(i - 1, 'months'), 'month')
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
                    <p>{todayMonth.clone().add(i - 1, 'months').format('MMMM YYYY')}</p>
                    <button>+</button>
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