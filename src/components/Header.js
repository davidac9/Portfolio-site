import React from 'react'

import Footer from './Footer'
import davidpic from '../assets/images/davidpic.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={davidpic} alt="" /></a>
                    <h1><strong>I am David Collett</strong>, a Web Developer <br />
                    looking for opportunities to <br />
                    become an even better developer!</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
