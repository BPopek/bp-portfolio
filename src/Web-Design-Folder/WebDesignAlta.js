import React, {Component} from 'react'
import Iframe from 'react-iframe'

class WebDesignAlta extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div className='parentDiv'>
                <div className='webGitHubLinks'>
                    <a href="http://business-time-alta.surge.sh/" className='projectLink'>Visit Alta Ski Area Project Website</a> 
                    <br></br>
                    <a href="https://github.com/BPopek/Business-Time---Alta-Ski-Area" className='projectLink'> Visit Github Repository</a>
                </div>
                
                <Iframe url='http://business-time-alta.surge.sh/'
                    width='683px'
                    height='450px'
                    className='iframe'
                    display='initial'
                    position='relative' />
            </div>
        )
    }
}

export default WebDesignAlta;