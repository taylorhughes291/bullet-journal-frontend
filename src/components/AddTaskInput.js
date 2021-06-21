import React, {useState} from "react"

const AddTaskInput = (props) => {

    const [taskFormData, setTaskFormData] = useState({
        name: "",
        dueDate: ""
      })

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
            day: false,
            week: false,
            month: false
            }
        }
    console.log(body);
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