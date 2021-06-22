import React, {useState} from "react"
import Day from "../components/Day"
import WeekTasks from "../components/WeekTasks"
import Moment from "react-moment"
import moment from "moment"

const Week = (props) => {

    /////////////////////////
    // Constants
    /////////////////////////



    moment.updateLocale('en', {
        week: {
            dow: 0
        }
    })

    const todayDate = moment(props.date)
    const weekStart = todayDate.clone().startOf('isoweek')

    const [selectedDate, setSelectedDate] = useState(todayDate)

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

    return (
        <>
            <div>
                <img src="https://placeimg.com/100/50/any" alt="small logo" />
                <img src="https://placeimg.com/50/50/any" alt="hamburger options menu" />
            </div>
            <div>
                <div
                    onClick={() => setSelectedDate(weekStart.clone())}
                >
                    <h6>M</h6>
                    <p><Moment date={weekStart} format={"M/DD"}></Moment></p>
                </div>
                <div
                    onClick={() => setSelectedDate(weekStart.clone().add(1, 'days'))}
                >
                    <h6>T</h6>
                    <p><Moment date={weekStart} format={"M/DD"} add={{days: 1}} ></Moment></p>
                </div>
                <div
                    onClick={() => setSelectedDate(weekStart.clone().add(2, 'days'))}
                >
                    <h6>W</h6>
                    <p><Moment date={weekStart} format={"M/DD"} add={{days: 2}} ></Moment></p>
                </div>
                <div
                    onClick={() => setSelectedDate(weekStart.clone().add(3, 'days'))}
                >
                    <h6>Th</h6>
                    <p><Moment date={weekStart} format={"M/DD"} add={{days: 3}} ></Moment></p>
                </div>
                <div
                    onClick={() => setSelectedDate(weekStart.clone().add(4, 'days'))}
                >
                    <h6>F</h6>
                    <p><Moment date={weekStart} format={"M/DD"} add={{days: 4}} ></Moment></p>
                </div>
                <div
                    onClick={() => setSelectedDate(weekStart.clone().add(5, 'days'))}
                >
                    <h6>Sa</h6>
                    <p><Moment date={weekStart} format={"M/DD"} add={{days: 5}} ></Moment></p>
                </div>
                <div
                    onClick={() => setSelectedDate(weekStart.clone().add(6, 'days'))}
                >
                    <h6>Su</h6>
                    <p><Moment date={weekStart} format={"M/DD"} add={{days: 6}} ></Moment></p>
                </div>
            </div>
            <Day 
                tasks={props.tasks}
                events={props.events}
                updateTask={props.updateTask}
                updateEvent={props.updateEvent}
                deleteTask={props.deleteTask}
                deleteEvent={props.deleteEvent}
                selectedDate={selectedDate}
                handleComplete={handleComplete}
            />
            <WeekTasks 
                tasks={props.tasks}
                updateTask={props.updateTask}
                deleteTask={props.deleteTask}
                weekStart={weekStart}
                handleComplete={handleComplete}
                modalShow={props.modalShow}
                setModalShow={props.setModalShow}
            />
        </>
    )
}

export default Week