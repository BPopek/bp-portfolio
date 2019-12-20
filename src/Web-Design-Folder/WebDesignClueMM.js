import React, {Component} from 'react'
// import ClueMM from '../images/Web/clueMM-thumb.png'
import Iframe from 'react-iframe'

class WebDesignClueMM extends Component {
    
    render(){
        return(
            <div className='parentDiv'>
                <div className='webGitHubLinks'>
                    <a href="https://clue-murder-mystery.herokuapp.com/" className='projectLinkWebPage'>Visit Clue Murder Mystery Project Website</a> 
                    <br></br>
                    <p className='herokuDisclaimer'>
                        Please note that loading time of the game is due to Heroku and not the design of the website.
                    </p>
                    <a href="https://github.com/BPopek/ClueMurderMystery" className='projectLinkWebPage'> Visit Github Repository</a>
                </div>
                <p className='projectDescriptionWeb'>
                    Full Stack Group Project inspired by the 1949 Clue board game. <br />Our group built the front and back end of the game so the user interacts with various API endpoints loaded with our data (endpoints include clues, suspects and weapons).<br /> I designed and implemented the font-end design to complete the full interactive game experience.<br /> Project built with React.js, JavaScript, HTML, CSS, Axios, Express, MongoDB and Node.js.
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