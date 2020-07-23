import React, {Component} from 'react'
import Iframe from 'react-iframe'

class WebDesignOrdino extends Component {
    
    render(){

        window.scrollTo(0,0);

        return(
            <div className='parentDiv'>
                <div className='webGitHubLinks'>
                    <a href="https://ordino-job-organizer.herokuapp.com/login" className='projectLinkWebPage'>Ordino Job Organizer</a> 
                    <p className='projectDescriptionOrdino'>Sample account available for viewing functionality. Username and password are both 'test'. </p>
                    <br></br>
                    <a href="https://github.com/BPopek/ordino-job-organizer" className='projectLinkWebPage'>Visit Github Repository</a>
                </div>
                <p className='projectDescriptionWeb'>
                    React app for organizing the job search process.<br /> Users are able to add, edit and delete jobs as needed.<br />Full stack CRUD website.<br />Built with React.js, Sass, Axios, Express, Express-JWT, MongoDB, Mongoose, Local Storage, and Node.js.
                </p>
                    <Iframe url='https://ordino-job-organizer.herokuapp.com/login'
                        className='iframe'
                        display='initial'/>
                    <p className='iframeDisclaimer'>Note: iFrame viewer shown above does not display responsive content. <br /> Window itself is responsive and will resize, but content is not responsive.</p>
            </div>
        )
    }
}

export default WebDesignOrdino;