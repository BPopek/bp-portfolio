import React, {Component} from 'react'
import Iframe from 'react-iframe'

class WebDesignDJLuvaLuva extends Component {

    render(){
        return(
            <div className='parentDiv'>
                <div className='webGitHubLinks'>
                    <a href="https://www.djluvaluva.com/" className='projectLinkWebPage'>Visit DJ Luva Website</a> 
                    <br></br>
                    <a href="https://github.com/BPopek/dj-luva-luva" className='projectLinkWebPage'>Visit Github Repository</a>
                </div>
                <p className='projectDescriptionWeb'>
                    Professional website built for a local musician, DJ Luva Luva. <br />
                    Built with React.js, JavaScript, HTML, Sass, Express, MongoDB and Node.js.
                </p>
                    <Iframe url='https://www.djluvaluva.com/'
                        className='iframe'
                        display='initial'/>
                    <p className='iframeDisclaimer'>Note: iFrame viewer shown above does not display responsive content. <br /> Window itself is responsive and will resize, but content is not responsive.</p>
            </div>
        )
    }
}

export default WebDesignDJLuvaLuva;