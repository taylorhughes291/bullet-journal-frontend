import React, {useState} from "react"
import {withRouter, Link} from "react-router-dom"
import smallLogo from "../assets/city-journal-small.png"

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
                props.setDate(new Date())
                props.history.push("/home")
            } else if (data.status === 403) {
                alert("this user already exists.")
            }
        })
    }

    /////////////////////////
    // Render
    /////////////////////////

    return (
        <div className="create-cont">
            <div className="back-logo-cont">
                <Link
                    to="/login"
                >
                    <i class="fas fa-arrow-left fa-2x"></i>
                </Link>
                <img src={smallLogo} className="small-logo" alt="city journal small logo" />
            </div>
            <h2>NEW ACCOUNT</h2>
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
                    value="SUBMIT"
                ></input>
            </form>
        </div>
    )
}

export default withRouter(Create)