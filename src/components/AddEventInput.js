import React, {useState, useContext} from "react"
import moment from "moment"
import StartDateInput from "./StartDateInput"
import EndDateInput from "./EndDateInput"
import {GlobalCtx} from "../App"

const AddEventInput = (props) => {

    const [eventFormData, setEventFormData] = useState({
        name: "",
        startDate: new Date(props.addSettings.date),
        endDate: new Date(props.addSettings.date)
      })

      const emptyForm = {
        name: "",
        startDate: "",
        endDate: ""
      }
      const {gState, setGState} = useContext(GlobalCtx)

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
            startDate: moment(eventFormData.startDate).format('YYYY-MM-DD HH:mm'),
            userId: props.userId,
            endDate: moment(eventFormData.endDate).format('YYYY-MM-DD HH:mm')
        }
        console.log(body);
        const postUrl = props.url + "/event/"
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
          setEventFormData(emptyForm)
          props.setModalShow(false)
          props.getData(props.userId)
        })
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
                    value={eventFormData.name}
                  ></input>
                  <StartDateInput 
                    eventFormData={eventFormData}
                    setEventFormData={setEventFormData}
                  />
                  <EndDateInput 
                    eventFormData={eventFormData}
                    setEventFormData={setEventFormData}
                  />
                  <input className="submit" type="submit"></input>
                </form>
              </div>
    )
}

export default AddEventInput