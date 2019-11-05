import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

class Navbar extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }
    render() {
        const loginRegLink = (
            <ul className = "navbar-nav">
                <li className = "nav-Item">
                    <link to = "/login" className="nav-link">
                        Login
                    </link>
                </li>
                <li className = "nav-Item">
                    <link link to = "/register" className="nav-link">
                        Register
                    </link>

                </li>
            </ul>
        )
        const userLink = (
            <ul className = "navbar-nav">
                <li className = "nav-Item">
                    <link to = "/profile" className="nav-link">
                        User
                    </link>
                </li>
                <li className = "nav-Item">
                    <a href = "" onClick = {this.logOut.bind}></a>

                </li>
            </ul>
        )
    }
    
}