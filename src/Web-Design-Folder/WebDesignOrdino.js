import React, {Component} from 'react'
import Iframe from 'react-iframe'

class WebDesignOrdino extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div className='parentDiv'>
                <div className='webGitHubLinks'>
                    <a href="http://cooper-hewitt-sdm.surge.sh/" className='projectLinkWebPage'>Ordino Job Organizer</a> 
                    <br></br>
                    <a href="https://github.com/BPopek/Cooper-Hewitt-SDM" className='projectLinkWebPage'>Visit Github Repository</a>
                </div>
                <p className='projectDescriptionWeb'>
                    React app for organizing the job search process.<br /> Users are able to add, edit and delete jobs as needed.<br />Full stack CRUD website.<br />Built with React.js, Sass, Axios, Express, Express-JWT, MongoDB, Mongoose, Local Storage, and Node.js.
                </p>
                    <Iframe url='http://cooper-hewitt-sdm.surge.sh/'
                        className='iframe'
                        display='initial'/>
                    <p className='iframeDisclaimer'>Note: iFrame viewer shown above does not display responsive content. <br /> Window itself is responsive and will resize, but content is not responsive.</p>
            </div>
        )
    }
}

export default WebDesignOrdino;