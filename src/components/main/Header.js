import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div>
            <div className="header">
                <div className="logo">Dylan Westraadt</div>

                <div className="nav">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/portfolio">Portfolio</Link>
                <Link className="link" to="/contact">Contact</Link>
                </div>    
            </div>
        </div>
    )
}

export default Header
