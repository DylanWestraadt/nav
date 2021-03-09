import React from 'react'

function Sleuth() {
    return (
        <div>
            <div className="main right" id="sleuth">
            <div className="content">
                <h3 className="heading">Sleuth-io</h3>
                <p className="info">Tiny little terminal app made with Python to do:Whois lookups,</p>
                <p className="info">Traceroute, IP Geoloacting</p>
                <p className="info">To run:</p>
                <code className="code-port">
                     git clone https://github.com/DylanWestraadt/projects.git<br></br>
                     cd sleuth-io<br></br>
                     python3 sleuth-io.py

                </code>
               
            </div>
        </div>
        </div>
    )
}

export default Sleuth
