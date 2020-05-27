import React, {Component} from 'react'
import Iframe from 'react-iframe'

class WebDesignWPExemplar extends Component {
    
    render(){
        return(
            <div className='parentDiv'>
                <div className='webGitHubLinks'>
                    <a href="http://bpwordpress.epizy.com/" 
                    className='projectLinkWebPage'>Wordpress Exemplar Website</a> 
                    {/* <p className='projectDescriptionOrdino'>Sample account available for viewing functionality. Username and password are both 'test'. </p> */}
                    <br></br>
                    <a href="https://github.com/BPopek/WP-Sites/tree/master/BPexample" className='projectLinkWebPage'>Visit Github Repository</a>
                </div>
                <p className='projectDescriptionWebWP'>
                    I created a Wordpress website to showcase my Wordpress capabilities. I have recently been reviewing my WordPress knowledge as I feel CMS websites are a valuable tool for many clients and companies.<br />This website utilizes hooks & actions for custom plugins, including a Custom Login plugin as well as a Single Post plugin to show a widget on individual posts but not other pages.  <br /> Website also uses a child theme to customize both the look and layout, and filter category labels to add "Category: " to these labels.
                </p>
                    <Iframe url='http://bpwordpress.epizy.com/'
                        className='iframe'
                        display='initial'/>
                    <p className='iframeDisclaimer'>Note: iFrame viewer shown above does not display responsive content. <br /> Window itself is responsive and will resize, but content is not responsive.</p>
            </div>
        )
    }
}

export default WebDesignWPExemplar;