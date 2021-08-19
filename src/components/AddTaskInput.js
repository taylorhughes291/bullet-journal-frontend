import React, {useState, useContext} from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment"
import {GlobalCtx} from "../App"

const AddTaskInput = (props) => {

    const [taskFormData, setTaskFormData] = useState({
        name: "",
        dueDate: new Date(props.addSettings.date)
      })

    const {gState, setGState} = useContext(GlobalCtx)

    const emptyForm = {
      name: "",
      dueDate: ""
    }

    const handleTaskChange = (event) => {
        setTaskFormData({
          ...taskFormData,
          [event.target.name]: event.target.value
        })
      }

    const handleTaskSubmit = (event) => {
        event.preventDefault()
        const body = {
            name: taskFormData.name,
            dueDate: moment(taskFormData.dueDate).format('YYYY-MM-DD'),
            userId: props.userId,
            taskCycle: {
              day: props.addSettings.taskCycle === "day" ? true : false,
              week: props.addSettings.taskCycle === "week" ? true : false,
              month: props.addSettings.taskCycle === "month" ? true : false
            }
        }
        const postUrl = props.url + "/task/"
        fetch(postUrl, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Authorization": `bearer ${gState.token}`
          },
          body: JSON.stringify(body)
        })
        .then((response) => response.json())
        .then((data) => {
          setTaskFormData(emptyForm)
          props.setModalShow(false)
          props.getData(props.userId)
        })
    }

    const DueDateInput = () => {
      return (
        <DatePicker
          selected={taskFormData.dueDate}
          onChange={(date) => {
            setTaskFormData({
              ...taskFormData,
              dueDate: new Date(date)
            })
          }}
          timeInputLabel="Time:"
          dateFormat={"MM/dd/yyyy"}
        />
      );
    };


    return (
        <>
          <form
            onSubmit={handleTaskSubmit}
          >
            <input 
              type="text"
              placeholder="Task Name"
              name="name"
              value={taskFormData.name}
              onChange={handleTaskChange}
            ></input>
            {props.addSettings.taskCycle === "day" && <DueDateInput />}
            <input className="submit" type="submit"></input>
          </form>
        </>
    )
}

export default AddTaskInput