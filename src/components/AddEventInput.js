import React, {useState} from "react"
import moment from "moment"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

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
              "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        })
        .then((response) => response.json())
        .then((data) => {
          setEventFormData(emptyForm)
          props.setModalShow(false)
          props.getData()
        })
      }

      const StartDateInput = () => {
        return (
          <DatePicker
            selected={eventFormData.startDate}
            onChange={(date) => {
              setEventFormData({
                ...eventFormData,
                startDate: new Date(date)
              })
            }}
            timeInputLabel="Time:"
            dateFormat="MM/dd/yyyy h:mm aa"
            showTimeInput
          />
        );
      };

      const EndDateInput = () => {
        return (
          <DatePicker
            selected={eventFormData.endDate}
            onChange={(date) => {
              setEventFormData({
                ...eventFormData,
                endDate: new Date(date)
              })
            }}
            timeInputLabel="Time:"
            dateFormat="MM/dd/yyyy h:mm aa"
            showTimeInput
            minDate={eventFormData.startDate}
          />
        );
      };

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
                  <StartDateInput />
                  <EndDateInput />
                  <input type="submit"></input>
                </form>
              </div>
    )
}

export default AddEventInput