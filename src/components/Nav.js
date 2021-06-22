import React from "react"
import {Link} from "react-router-dom"

const Nav = (props) => {

    /////////////////////////
    // Constants
    /////////////////////////

    /////////////////////////
    // Functions
    /////////////////////////

    /////////////////////////
    // Render
    /////////////////////////

    return (
        <>
            <nav className = 'navBar'>
                <ul>
                    <div className="nav-item-cont">
                        <Link
                            to="/home"
                        >
                            <i className="fas fa-calendar-day fa-2x"></i>
                            <li>Today</li>
                        </Link>
                    </div>
                    <div className="nav-item-cont">
                        <Link
                            to="/week"
                        >
                            <i className="fas fa-calendar-week fa-2x"></i>
                            <li>Week</li>
                        </Link>
                    </div>
                    <div 
                        className="nav-item-cont"
                        onClick={() => props.handleAdd()}
                    >
                        <div className="plus-cont">
                            <li>+</li>
                        </div>
                    </div>
                    <div className="nav-item-cont">
                        <Link
                            to="/month"
                        >
                            <i className="far fa-calendar-alt fa-2x"></i>
                            <li>Month</li>
                        </Link>
                    </div>
                    <div className="nav-item-cont">
                        <Link
                            to="/year"
                        >
                            <i className="fas fa-running fa-2x"></i>
                            <li>Year</li>
                        </Link>
                    </div>
                </ul>
            </nav>

        </>
    )
}

export default Nav