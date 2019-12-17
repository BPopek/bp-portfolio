import React, {Component} from 'react'
// import ClueMM from '../images/Web/clueMM-thumb.png'
import Iframe from 'react-iframe'

class WebDesignClueMM extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div className='parentDiv'>
                <div className='webGitHubLinks'>
                    <a href="https://clue-murder-mystery.herokuapp.com/" className='projectLinkWebPage'>Visit Clue Murder Mystery Project Website</a> 
                    <br></br>
                    <a href="https://github.com/BPopek/ClueMurderMystery" className='projectLinkWebPage'> Visit Github Repository</a>
                </div>
                <p className='projectDescription'>
                    Full Stack Group Project inspired by the 1949 Clue board game. <br />We built both front and back end of the game so the user interacts with API loaded with our data (endpoints include clues, suspects and weapons).<br />Project built with React.js, JavaScript, HTML, CSS, Axios, Express, MongoDB and Node.js.
                </p>
                <Iframe url='https://clue-murder-mystery.herokuapp.com/'
                    className='iframe'
                    display='initial'/>
                <p className='iframeDisclaimer'>Note: iFrame viewer shown above does not display responsive content. <br /> Window itself is responsive and will resize, but content is not responsive.</p>
            </div>
        )
    }
}

export default WebDesignClueMM;