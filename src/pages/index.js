import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import youTeachMeThumb from '../assets/images/thumbs/youTeachMeThumb.jpg'
import poke from '../assets/images/thumbs/poke.jpg'
import coolorsClone from '../assets/images/thumbs/coolorsClone.jpg'

import youTeachMe from '../assets/images/fulls/youTeachMe.jpg'


const DEFAULT_IMAGES = [
    { id: '1', source: youTeachMe, thumbnail: youTeachMeThumb, caption: 'youTeachMe', description: 'Created using React, Node, Javascript and Redux, youTeachMe is an app I contributed to where users stuck on coding problems can connect with people who can help. My main contribution was creating and styling the chat feature by implementing a technology called Socket.IO Client.', url:'http://104.248.185.128:5309', url2:'https://github.com/truckbrothers/youteachme', link:'View the hosted app here.', repo:`View this app's github repository here.`},
    { id: '2', source: poke, thumbnail: poke, caption: 'Poké', description: 'A Pokémon themed social media app where users can create profiles and add Pokémon to their profiles, rename them or release them. Users can also view the profiles of other users. This app was created using React, Node, Javascript and Redux.', url:'http://104.248.177.96:4004', url2:'https://github.com/davidac9/pokemon-social', link:'View the hosted app here.', repo:`View this app's github repository here.`},
    { id: '3', source: coolorsClone, thumbnail: coolorsClone, caption: 'Random Color Generator', description: 'This app is a clone I created of the color generator feature at coolors.com using React. The app generates random color hex codes, displays the colors on screen and uses The Color API to show color names. Colors can also be locked to prevent them from being lost upon randomization. ', url:'https://github.com/davidac9/coolors-clone', link:'', repo:`View this app's github repository here.`},
    { id: '3', source: coolorsClone, thumbnail: coolorsClone, caption: 'Random Color Generator', description: 'This app is a clone I created of the color generator feature at coolors.com using React. The app generates random color hex codes, displays the colors on screen and uses The Color API to show color names. Colors can also be locked to prevent them from being lost upon randomization. ', url:'https://github.com/davidac9/coolors-clone', link:'', repo:`View this app's github repository here.`}
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
                        <p>I am 24 years old and I love coding and solving complex problems using fun and creative solutions. I first learned to code through a college course that taught me about using Python. Since then I've gone through a Web Development Bootcamp at DevMountain and learned to create full stack web applications. I also served a mission in the Philippines where I became fluent in Tagalog and developed a love for learning about foreign languages and cultures. Another hobby of mine is gaming. I grew up playing video games all the time and to this day I'll still spend some of my free time playing games with friends and family.</p>
                        {/* <ul className="actions">
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul> */}
                        <br/>
                        <h2>Skills</h2>
                        <p>Javascript | React | Node | PostgreSQL | Redux | HTML | CSS | Git</p>
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description, url, url2, link, repo }) => ({
                            source,
                            thumbnail,
                            caption,
                            description,
                            url,
                            url2,
                            link,
                            repo
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