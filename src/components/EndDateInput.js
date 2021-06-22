import React from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

    const EndDateInput = (props) => {
    return (
        <DatePicker
        selected={props.eventFormData.endDate}
        onChange={(date) => {
            props.setEventFormData({
            ...props.eventFormData,
            endDate: new Date(date)
            })
        }}
        timeInputLabel="Time:"
        dateFormat="MM/dd/yyyy h:mm aa"
        showTimeInput
        minDate={props.eventFormData.startDate}
        shouldCloseOnSelect={false}
        />
    );
    };

export default EndDateInput