import React, {useState} from "react"

const AddEventInput = (props) => {

    const [eventFormData, setEventFormData] = useState({
        name: "",
        startDate: "",
        endDate: ""
      })

      const handleEventChange = (event) => {
        setEventFormData({
          ...eventFormData,
          [event.target.name]: event.target.value
        })
      }

      const handleEventSubmit = (event) => {
        event.preventDefault()
        const body = {
            name: eventFormData.name,
            startDate: eventFormData.startDate,
            userId: props.userId,
            endDate: eventFormData.endDate
        }
    console.log(body);
    }

    return (
        <div >
                <form
                  onSubmit={handleEventSubmit}
                >
                  <input 
                    type="text"
                    placeholder="Event Name"
                    name="name"
                    onChange={handleEventChange}
                  ></input>
                  <input 
                    type="text"
                    placeholder="Start Date"
                    name="startDate"
                    onChange={handleEventChange}
                  ></input>
                  <input 
                    type="text"
                    placeholder="End Date"
                    name="endDate"
                    onChange={handleEventChange}
                  ></input>
                  <input type="submit"></input>
                </form>
              </div>
    )
}

export default AddEventInput