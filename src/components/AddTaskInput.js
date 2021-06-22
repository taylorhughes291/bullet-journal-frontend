import React, {useState} from "react"

const AddTaskInput = (props) => {

    const [taskFormData, setTaskFormData] = useState({
        name: "",
        dueDate: props.addSettings.date
      })

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
            dueDate: taskFormData.dueDate,
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
              "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        })
        .then((response) => response.json())
        .then((data) => {
          setTaskFormData(emptyForm)
          props.setModalShow(false)
          props.getData()
        })
    }


    return (
        <div >
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
                  <input 
                    type="text"
                    name="dueDate"
                    value={taskFormData.dueDate}
                    placeholder="Due Date"
                    onChange={handleTaskChange}
                  ></input>
                  <input type="submit"></input>
                </form>
              </div>
    )
}

export default AddTaskInput