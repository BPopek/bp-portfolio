import React, {Component} from 'react'
// import CHhome from '../images/Web/CHhomepage.png'
import Iframe from 'react-iframe'

class WebDesignCH extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div className='parentDiv'>
                <div className='webGitHubLinks'>
                    <a href="http://cooper-hewitt-sdm.surge.sh/" className='projectLinkWebPage'>Visit Cooper Hewitt Museum Project Website</a> 
                    <br></br>
                    <a href="https://github.com/BPopek/Cooper-Hewitt-SDM" className='projectLinkWebPage'>Visit Github Repository</a>
                </div>
                <p className='projectDescription'>
                    React website project featuring the Cooper Hewitt Museum.<br /> Fully responsive and utilizes multiple API's provided by Cooper Hewitt.<br />Built with React.js, JavaScript, HTML, CSS, Axios, and Node.js.
                </p>
                    <Iframe url='http://cooper-hewitt-sdm.surge.sh/'
                        className='iframe'
                        display='initial'/>
                    <p className='iframeDisclaimer'>Note: iFrame viewer shown above does not display responsive content. <br /> Window itself is responsive and will resize, but content is not responsive.</p>
            </div>
        )
    }
}

export default WebDesignCH;