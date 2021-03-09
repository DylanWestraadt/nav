import React from 'react'

function Payday() {
    return (
        <div>
            <div className="main right" id="payday">
                <div className="content">
                    <h3 className="heading">Payday flask api</h3>
                    <p className="info">An Flask Api I built to deliver Web-Based Payloads through Json</p>
                <p className="info">The database has more than 4000 Payloads, ranging from XSS to SQL and even XXE </p>
                <p className="info">To run:</p>
                <code className="code-port">
                     git clone https://github.com/DylanWestraadt/projects.git<br></br>
                     cd projects<br></br>
                     unzip payday.zip<br></br>
                     cd payday<br></br>
                     python3 app.py<br></br>

                </code>
                </div>            
            </div>
        </div>
    )
}

export default Payday
