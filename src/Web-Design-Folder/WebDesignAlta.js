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
                    <a href="http://business-time-alta.surge.sh/" className='projectLinkWebPage'>Visit Alta Ski Area Project Website</a> 
                    <br></br>
                    <a href="https://github.com/BPopek/Business-Time---Alta-Ski-Area" className='projectLinkWebPage'> Visit Github Repository</a>
                </div>
                <p className='projectDescription'>
                    Exercise to create a business website for Alta Ski Area. Website is fully responsive, utilizing three different sizes for a variety of screens. Built using CSS & HTML.
                </p>
                <Iframe url='http://business-time-alta.surge.sh/'
                    
                    className='iframe'
                    display='initial'
                    position='relative' />
            </div>
        )
    }
}

export default WebDesignAlta;