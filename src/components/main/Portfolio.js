import React from 'react'
import Header from './Header'
import Sleuth from '../links/sleuth'
import Payday from '../links/payday'
import Envi from '../links/envi'


function Portfolio() {
    return (
        <div>
            <Header></Header>
            <div className="main right">
            <div className="content">
                <h3 className="heading">Portfolio</h3>
                <p className="info">Click on the links to see the info</p>
                
                <a href="#payday" className="code-link">Payday Api</a>
                <a href="#envi" className="code-link ">Envi</a><br></br>
                <a href="#sleuth" className="code-link top">Sleut-io</a>
                <p className="info top-more">Alot of the things that i built are for single use senerios<br></br>So i just included the projects related to the web,<br></br> much more code uploads coming soon<br></br> such as my Vue and React experiments</p>
            </div>
        </div>
            <Payday></Payday>
            <Sleuth></Sleuth>
            <Envi></Envi>
        
        </div>
    )
}

export default Portfolio
