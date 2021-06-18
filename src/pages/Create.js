import React, {useState} from "react"
import {withRouter} from "react-router-dom"

const Create = (props) => {

    /////////////////////////
    // Constants
    /////////////////////////

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    })

    /////////////////////////
    // Functions
    /////////////////////////

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const postUrl = props.url + "/user/"
        fetch(postUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.status === 200) {
                props.setUserId(data.data[0].pk)
                props.history.push("/home")
            } else if (data.status === 403) {

            }
        })
    }

    /////////////////////////
    // Render
    /////////////////////////

    return (
        <>
            <div className="back-logo-cont">
                <img src="https://placeimg.com/50/50/any" alt="back button" />
                <img src="https://placeimg.com/100/50/any" alt="back button" />
            </div>
            <h2>New Account</h2>
            <img src="https://placeimg.com/150/125/any" alt="back button" />
            <form
                onSubmit={handleSubmit}
            >
                <input
                    placeholder="Name"
                    name="name"
                    input="text"
                    value={form.name}
                    onChange={handleChange}
                ></input>
                <input
                    placeholder="Email"
                    name="email"
                    input="text"
                    value={form.email}
                    onChange={handleChange}
                ></input>
                <input
                    placeholder="Phone"
                    name="phone"
                    input="text"
                    value={form.phone}
                    onChange={handleChange}
                ></input>
                <input
                    placeholder="Password"
                    name="password"
                    input="text"
                    value={form.password}
                    onChange={handleChange}
                ></input>
                <input
                    type="submit"
                ></input>
            </form>
        </>
    )
}

export default withRouter(Create)