import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import youTeachMeThumb from '../assets/images/thumbs/youTeachMeThumb.jpg'
import poke from '../assets/images/thumbs/poke.jpg'

import youTeachMe from '../assets/images/fulls/youTeachMe.jpg'


const DEFAULT_IMAGES = [
    { id: '1', source: youTeachMe, thumbnail: youTeachMeThumb, caption: 'youTeachMe', description: 'Created using React, Node, Javascript, Redux and Express, youTeachMe is an app I contributed to where users stuck on coding problems can connect with people who can help. My main contribution was creating and styling the chat feature by implementing a technology called Socket.IO Client. View the hosted project at ', url:'http://104.248.185.128:5309'},
    { id: '2', source: poke, thumbnail: poke, caption: 'Poké', description: 'A Pokémon themed social media app where users can create profiles and add Pokémon to their profiles, rename them or release them. Users can also view the profiles of other users. This app was created using React, Node, Javascript, Redux and Express. View the hosted project at ', url:'http://104.248.177.96:4004'},

];

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "David Collett"
        const siteDescription = "My portfolio"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>About Me<br />
                            </h2>
                        </header>
                        <p>I am 23 years old and I love coding and solving complex problems using fun and creative solutions. I first learned to code through a college course that taught me about using Python. Since then I've gone through a Web Development Bootcamp at DevMountain and learned to create full stack web applications. I also served a mission in the Philippines where I became fluent in Tagalog and developed a love for learning about foreign languages and cultures.</p>
                        {/* <ul className="actions">
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul> */}
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description, url }) => ({
                            source,
                            thumbnail,
                            caption,
                            description,
                            url
                        }))} />

                        {/* <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul> */}
                    </section>

                    <section id="three">
                        <h2>Contact Me</h2>
                        <p>I'd love to hear from you! Feel free to call me or send me a text or email.</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                {/* <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form> */}
                                {/* <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul> */}
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        {/* 1234 Somewhere Rd.<br /> */}
                                        Lehi, UT 84043<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        509-460-3653
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        {/* <a href="#"> */}
                                            davida.collett95@gmail.com
                                            {/* </a> */}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex