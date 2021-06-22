import React from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

const StartDateInput = (props) => {
    return (
      <DatePicker
        selected={props.eventFormData.startDate}
        onChange={(date) => {
          props.setEventFormData({
            ...props.eventFormData,
            startDate: new Date(date)
          })
        }}
        timeInputLabel="Time:"
        dateFormat="MM/dd/yyyy h:mm aa"
        showTimeInput
        shouldCloseOnSelect={false}
      />
    );
  };

  export default StartDateInput