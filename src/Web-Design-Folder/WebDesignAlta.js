import React, {Component} from 'react'
import Iframe from 'react-iframe'

class WebDesignAlta extends Component {

    render(){
        return(
            <div className='parentDiv'>
                <div className='webGitHubLinks'>
                    <a href="http://business-time-alta.surge.sh/" className='projectLinkWebPage'>Visit Alta Ski Area Project Website</a> 
                    <br></br>
                    <a href="https://github.com/BPopek/Business-Time---Alta-Ski-Area" className='projectLinkWebPage'> Visit Github Repository</a>
                </div>
                <p className='projectDescriptionWeb'>
                    Exercise to create a business website for Alta Ski Area.<br /> Website is fully responsive, utilizing three different sizes to cleanly organize information.<br /> Website is built using CSS & HTML.
                </p>
                <Iframe url='http://business-time-alta.surge.sh/'
                    className='iframe'
                    display='initial'/>
                <p className='iframeDisclaimer'>Note: iFrame viewer shown above does not display responsive content. <br /> Window itself is responsive and will resize, but content is not responsive.</p>
            </div>
        )
    }
}

export default WebDesignAlta;