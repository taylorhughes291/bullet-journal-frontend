import React, {useState} from "react"
import {Modal, Button} from "react-bootstrap"
import AddEventInput from "./AddEventInput"
import AddTaskInput from "./AddTaskInput"

const Add = (props) => {

    /////////////////////////
    // Constants
    /////////////////////////

    const [workflow, setWorkflow] = useState("task")



    const {userId} = props

    /////////////////////////
    // Functions
    /////////////////////////

    const handleWorkflow = (event) => {
      setWorkflow(event.target.name)
    }





    function MyVerticallyCenteredModal(props) {

        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Add Item
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <button
                  name="task"
                  onClick={handleWorkflow}
                >Task</button>
                <button
                  name="event"
                  onClick={handleWorkflow}
                >Event</button>
              </div>
              <div
                className={ workflow === "task" ? "task-add" : "hidden task-add"}
              >
                <AddTaskInput
                  userId={userId}
                />
              </div>
              <div
                className={ workflow === "event" ? "event-add" : "event-add hidden"}
              >
                <AddEventInput
                  userId={userId}  
                />
              </div>
            </Modal.Body>
          </Modal>
        );
      }
      


    /////////////////////////
    // Render
    /////////////////////////

    return (
      <>
        <MyVerticallyCenteredModal
          show={props.modalShow}
          onHide={() => props.setModalShow(false)}
        />
      </>
    )
}

export default Add