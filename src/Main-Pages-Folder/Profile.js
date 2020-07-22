import React, { useLayoutEffect } from 'react'
import BPopekResume from '../images/BPopekResume.pdf'
// import BPopekResume2 from '.../public/BPopekSLC_12-16-19.pdf'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
// var Scroll = require('react-scroll')
// var scroller = Scroll.scroller;

function Profile () {
    useLayoutEffect(() => {
        scroll.scrollToTop();
    })

    return(
        <div className='profile-container'>
            <div className='profile'>
                <div className='welcome'>
                    <h4 className='welcomeName'>Hello! I am Betsy </h4>                   
                    <h4 className='welcomeDescription'>a Full-Stack Developer</h4>
                </div>
                <h4 className='careerCode'>career = graphicDesigner =&gt; softwareDeveloper</h4>
                <h4 className='categorySpacer'>ABOUT</h4>

                <div className='profileHistory'>My name is <p className='highlight'>Betsy Popek</p>. I am a Salt Lake City, Utah based <p className='highlight'>full-stack software developer</p> who values building clean designs with an eye for thoughtful user experience.
                </div>
                <div className='profileHistory'>
                    My interest in <p className='highlight'>development and coding</p> grew over the years while working as a graphic designer. Since beginning my design journey over a decade ago, I've dabbled in courses for CSS, HTML, Ruby and Python as well as Adobe Dreamweaver. After completing a UX online course through Springboard, I realized that while I love the user experience, I want to be <p className='highlight'>more involved in coding and building interfaces</p> instead of handing that off to a developer. 
                </div>
                <div className='profileHistory'>
                    Last year I finally decided to take the plunge and attended the V School<p className='highlight'> Full-Stack (MERN) JavaScript </p>program in downtown SLC. I was drawn to their package of a wealth of consistently updated material with a fabulous team and a high level of alumni support. 
                </div>
            </div>
            <div className='profile2'>
            <h4 className='categorySpacer'>SKILLS</h4>

                <h5 className='profileHeader'>Software Development:</h5>
                <hr className='profileLineSD' />
                <p className='profileSmHead'>Front End: <span className='profileDetail'>React, JavaScript, ES6, HTML5, CSS, Sass, Bootstrap, jQuery</span></p> 
                <p className='profileSmHead'>Back End: <span className='profileDetail'>Node.js, Express, MongoDB, Mongoose</span></p>
                <p className='profileSmHead'>Other: <span className='profileDetail'>Git, JSON, Agile, Wordpress</span></p>
                <h5 className='profileHeader'>Design:</h5>
                <hr className='profileLineD' />
                <p className='profileSmHead'>Adobe Creative Suite: <span className='profileDetail'>InDesign, Photoshop, Illustrator</span></p>
                <p className='profileSmHead'>Other: <span className='profileDetail'>QuarkXPress, WordPress</span></p>
                <p className='profileSmHead'>UX: <span className='profileDetail'>InVision, Sketch, Balsamiq</span></p>
                <h5 className='profileHeader'>Contact:</h5>
                <hr className='profileLineC' />
                {/* <p className='profileSmHead'>Email: <span className='profileDetail'>betsypopek@gmail.com</span></p> */}
                <p className='profileSmHead'>Email: <a href="mailto:betsypopek@gmail.com" className='profileDetailEmail'>betsypopek@gmail.com</a></p>
                <p className='profileSmHeadPhone'>Phone: <span className='profileDetail'>801-448-7273</span></p>
                <a download href={BPopekResume}  className='resumeLink'>DOWNLOAD RESUME</a>
            </div>
        </div>
    )
}

export default Profile;