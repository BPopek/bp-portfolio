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
                    <a href="https://clue-murder-mystery.herokuapp.com/" className='projectLink'>Visit Clue Murder Mystery Project Website</a> 
                    <br></br>
                    <a href="https://github.com/BPopek/ClueMurderMystery" className='projectLink'> Visit Github Repository</a>
                </div>
                
                <Iframe url='https://clue-murder-mystery.herokuapp.com/'
                    width='683px'
                    height='450px'
                    className='iframe'
                    display='initial'
                    position='relative' />
            </div>
        )
    }
}

export default WebDesignClueMM;