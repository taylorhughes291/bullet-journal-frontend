import React, {useEffect, useState} from "react"
import {Modal, Button} from "react-bootstrap"
import AddEventInput from "./AddEventInput"
import AddTaskInput from "./AddTaskInput"

const Add = (props) => {

    /////////////////////////
    // Constants
    /////////////////////////

    const {userId, addSettings, url, setModalShow, getData} = props

    /////////////////////////
    // Functions
    /////////////////////////

    const handleWorkflow = (event) => {
      props.setAddSettings(addSettings.taskCycle, event.target.name)
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
                  onClick={() => handleWorkflow()}
                >Task</button>
                <button
                  name="event"
                  onClick={() => handleWorkflow()}
                >Event</button>
              </div>
              <div
                className={ addSettings.category === "task" ? "task-add" : "hidden task-add"}
              >
                <AddTaskInput
                  userId={userId}
                  addSettings={addSettings}
                  url={url}
                  setModalShow={setModalShow}
                  getData={getData}
                />
              </div>
              <div
                className={ addSettings.category === "event" ? "event-add" : "event-add hidden"}
              >
                <AddEventInput
                  userId={userId}
                  url={url}
                  setModalShow={setModalShow}
                  getData={getData}
                  addSettings={addSettings}
                />
              </div>
            </Modal.Body>
          </Modal>
        );
      }
      


    /////////////////////////
    // Render
    /////////////////////////

    const loaded = () => {
      return (
        <>
          <MyVerticallyCenteredModal
            show={props.modalShow}
            onHide={() => props.setModalShow(false)}
          />
        </>
      )
    }

    const loading = () => {
      return (
        <h3>Loading...</h3>
      )
    }

    return addSettings.category !== "" ? loaded() : loading()
}

export default Add