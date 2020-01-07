import React from 'react'
import BPopekResume from '../images/BPopekDeveloperResume.pdf'
// import BPopekResume2 from '.../public/BPopekSLC_12-16-19.pdf'


function Profile () {

    return(
        <>
        <div className='profile'>
            <h3 className='welcome'>Hello! I'm Betsy, a Salt Lake City, UT based Software Developer.</h3>
            <h4 className='careerCode'>career = graphicDesign => softwareDeveloper</h4>
            <p className='profileHistory'>My interest in coding grew over the years while I worked as a graphic designer. Since beginning my design journey over a decade ago, I've dabbled in courses for CSS, HTML, Ruby and Python as well as Adobe Dreamweaver. After completing a UX online course through Springboard, I realized I loved the user experience but wanted to be more involved in coding and building interfaces. I finally decided to take the plunge and attend the VSchool Full-Stack (MERN) JavaScript Bootcamp in downtown SLC this year because I was drawn to their package of a wealth of consistently updated material with a fabulous team and a high level of alumni support. As a software engineer I value building clean designs with an eye for thoughtful user experience.</p>
            </div>
        <div className='profile2'>
            <h5 className='profileHeader'>Software Development:</h5>
            <p className='profileSmHead'>Front End: <span className='profileDetail'>React, JavaScript, ES6, HTML5, CSS</span></p> 
            <p className='profileSmHead'>Back End: <span className='profileDetail'>Node.js, Express, MongoDB, Mongoose</span></p>
            <p className='profileSmHead'>Other: <span className='profileDetail'>Git, JSON</span></p>
            <h5 className='profileHeader'>Design:</h5>
            <p className='profileSmHead'>Adobe Creative Suite: <span className='profileDetail'>InDesign, Photoshop, Illustrator</span></p>
            <p className='profileSmHead'>Other: <span className='profileDetail'>QuarkXPress, WordPress</span></p>
            <p className='profileSmHead'>UX: <span className='profileDetail'>InVision, Sketch, Balsamiq</span></p>
            <h5 className='profileHeader'>Contact:</h5>
            {/* <p className='profileSmHead'>Email: <span className='profileDetail'>betsypopek@gmail.com</span></p> */}
            <p className='profileSmHead'>Email: <a href="mailto:betsypopek@gmail.com" className='profileDetailEmail'>betsypopek@gmail.com</a></p>
            <p className='profileSmHeadPhone'>Phone: <span className='profileDetail'>801-448-7273</span></p>
            <a download href={BPopekResume}  className='resumeLink'>DOWNLOAD RESUME</a>
        </div>
        </>
    )
}

export default Profile;