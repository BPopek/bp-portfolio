import React, {Component} from 'react'
// import Iframe from 'react-iframe'
import { Carousel } from 'react-responsive-carousel';

import WP1 from '../images/Web/WP/WP1.png';
import WP2 from '../images/Web/WP/WP2.png';
import WP3 from '../images/Web/WP/WP3.png';
import WP4 from '../images/Web/WP/WP4.png';

class WebDesignWPExemplar extends Component {
    
    render(){

        window.scrollTo(0,0);

        return(
            <div className='parentDiv'>
                <div className='webGitHubLinks'>
                    <a href="http://bpwordpress.epizy.com/" 
                    className='projectLinkWebPage'>Wordpress Exemplar Website</a> 
                    <br></br>
                    <a href="https://github.com/BPopek/WP-Sites/tree/master/BPexample" className='projectLinkWebPage'>Visit Github Repository</a>
                </div>
                <p className='projectDescriptionWebWP'>
                    I created a Wordpress website to showcase my Wordpress capabilities. I have recently been reviewing my WordPress knowledge as I feel CMS websites are a valuable tool for many clients and companies.<br />This website utilizes hooks & actions for custom plugins, including a Custom Login plugin as well as a Single Post plugin to show a widget on individual posts but not other pages.  <br /> Website also uses a child theme to customize both the look and layout, and filter category labels to add "Category: " to these labels.
                </p>
                    {/* <Iframe url='http://bpwordpress.epizy.com/'
                        className='iframe'
                        display='initial'/>
                    <p className='iframeDisclaimer'>Note: iFrame viewer shown above does not display responsive content. <br /> Window itself is responsive and will resize, but content is not responsive.</p> */}
                    <div className='carouselDivWP'>
                        <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} swipeable={true} dynamicHeight={true} useKeyboardArrows={true} autoPlay={true} centerMode={true} transitionTime={300}>
                                <div className='imageCarouselWP'>
                                    <img src={WP1} alt='Wordpress Exemplar Screenshot'/>
                                </div>
                                <div className='imageCarouselWP'>
                                    <img src={WP2} alt='Wordpress Exemplar Screenshot'/>
                                </div>
                                <div className='imageCarouselWP'>
                                    <img src={WP3} alt='Wordpress Exemplar Screenshot'/>
                                </div>
                                <div className='imageCarouselWP'>
                                    <img src={WP4} alt='Wordpress Exemplar Screenshot'/>
                                </div>
                            </Carousel>
                        </div>   
            </div>
        )
    }
}

export default WebDesignWPExemplar;