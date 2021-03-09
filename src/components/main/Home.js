import React from 'react'
import Header from './Header'
import Owl from './Owl'
import Footer from "./Footer"
function Home() {
    return (
        <div>
            <Header></Header>
            <div className="main">
            <div className="content">
                <h3 className="heading">Welcome to my stuff!</h3>
                <p className="info"> My favourite tools are:</p>
                
                <code className="code">HTML</code>
                <code className="code">CSS</code>
                <code className="code">SCSS</code>
                <code className="code">Javascript</code>
                <code className="code">Node</code><br/>
                <code className="code top">ExpressJS</code>
                <code className="code top">Vue</code>
                <code className="code top">and soon React..</code>
            </div>
        </div>
        <Owl></Owl>
        <Footer></Footer>
    </div>   
    )
}

export default Home
