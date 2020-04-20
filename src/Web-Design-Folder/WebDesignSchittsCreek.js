import React, {Component} from 'react'
import Iframe from 'react-iframe'

class WebDesignSchittsCreek extends Component {

    render(){
        return(
            <div className='parentDiv'>
                <div className='webGitHubLinks'>
                    <a href="https://www.schittscreektrivia.com/" className='projectLinkWebPage'>Visit Schitt's Creek Trivia</a> 
                    <br></br>
                    <a href="https://github.com/BPopek/SchittsCreekAPI" className='projectLinkWebPage'>Visit Github Repository</a>
                </div>
                <p className='projectDescriptionWeb'>
                    I built a fan website and trivia game for the Schitt's Creek TV show. After spending weeks doing tutorials while staying at home during the Coronavirus pandemic I wanted something that would be a fun project and would combine many skills in one project: 
                        <ul className='skillsUsedList'>
                            <li> Created a RESTful API</li>
                            <li> Full-stack CRUD website</li>
                            <li> User Authorization</li>
                        </ul>
                    Built with React.js, JavaScript, HTML, Sass, Express, MongoDB and Node.js.
                </p>
                    <Iframe url='https://www.schittscreektrivia.com/'
                        className='iframe'
                        display='initial'/>
                    <p className='iframeDisclaimer'>Note: iFrame viewer shown above does not display responsive content. <br /> Window itself is responsive and will resize, but content is not responsive.</p>
            </div>
        )
    }
}

export default WebDesignSchittsCreek;