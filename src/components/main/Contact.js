import React from 'react'
import Header from './Header'
import Footer from './Footer'
function Contact() {
    return (
        <div>
            <Header></Header>
            <div className="main center-contact">
                <div className="content">
                    <h3 className="heading">Contact Me</h3>
                    <p className="info center">Email</p>
                    <code className="code">saziknows@gmail.com</code><br/>
                    <p className="info center top">Number</p>
                    <code className="code top">0605097199</code><br/>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Contact
