import React, {useState} from "react"
import {Link, withRouter} from "react-router-dom"
import logo from "../assets/city-journal.png"

const Login = (props) => {

    /////////////////////////
    // Constants
    /////////////////////////

    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

    /////////////////////////
    // Functions
    /////////////////////////

    const handleChange = (event) => {
        setLogin({
            ...login,
            [event.target.name]: event.target.value
        })
    }

    const handleLogin = (event) => {
        event.preventDefault()
        const getUrl = props.url + "/user/?email=" + login.email + "&password=" + login.password
        console.log(getUrl);
        fetch(getUrl)
        .then((response) => response.json())
        .then((data) => {
            if (data.status === 200) {
                props.setUserId(
                    data.userId
                )
                props.history.push('/home')
            } else if (data.status === 409) {
                alert("This username does not exist. Please consider creating an account or trying a new username.")
            } else if (data.status === 403) {
                alert("You have entered an incorrect password. Please Try again.")
            }
        })
    }

    /////////////////////////
    // Render
    /////////////////////////

    return (
        <div className="login-cont">
            <img src={logo} alt="login bullet journal logo" />
            <form
                onSubmit={handleLogin}
            >
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={login.email}
                    onChange={handleChange}
                ></input>
                <input
                    type="text"
                    name="password"
                    placeholder="Password"
                    value={login.password}
                    onChange={handleChange}
                ></input>
                <input
                    type="submit"
                    value="LOGIN"
                ></input>
            </form>
            <p>Don't have an account? <Link to="/create" >Sign Up</Link></p>
        </div>
    )
}

export default withRouter(Login)