import React, {Component} from 'react'

function Profile () {

    return(
        <div className='profile'>
            <h3 className='welcome'>Hello! I'm Betsy, a Salt Lake City, UT based Software Developer.</h3>
            <h4 className='careerCode'>career = graphicDesign => softwareDeveloper</h4>
            <p className='profileHistory'>My interest in coding grew over the years while I worked as a graphic designer. Since beginning my design journey over a decade ago, I've dabbled in courses for CSS, HTML, Ruby and Python as well as Adobe Dreamweaver. After completing a UX online course through Springboard, I realized I loved the user experience but wanted to be more involved in coding and building interfaces. I finally decided to take the plunge and attend the VSchool Full-Stack JavaScript Bootcamp in downtown SLC this year because I was drawn to their package of a wealth of consistently updated material with a fabulous team and a high level of alumni support. As a software engineer I value building clean designs with an eye for thoughtful user experience.</p>

            <p className='skills'>
            <h5 className='skillsHeader'>Software Development:</h5>
            <b>Front End:</b> React, JavaScript, ES6, HTML5, CSS<br />
            <b>Back End:</b> Node.js, Express, MongoDB, Mongoose<br />
            <b>Other:</b> Git, JSON<br />
            <h5 className='skillsHeader'>Design:</h5>
            <b>Adobe Creative Suite:</b> InDesign, Photoshop, Illustrator<br />
            <b>Other:</b> QuarkXPress, WordPress<br />
            <b>UX:</b> InVision, Sketch, Balsamiq
            </p>
            <h5 className='contactHeader'>Contact:</h5>
            <p className='contact'><b>email:</b> betsypopek@gmail.com</p>
            <p className='contactPhone'><b>phone:</b> 603.682.7185</p>
            <a href="/images/BPopekSLC_12-16-19.pdf" download className='resumeLink'>
                {/* <img src="/images/BPopekSLC_12-16-19.pdf" alt="BP Resume"/> */}
                DOWNLOAD RESUME
            </a>
        </div>
    )
}

export default Profile;