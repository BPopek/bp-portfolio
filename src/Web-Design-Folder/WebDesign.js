import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

//thumbs for web page
import CHThumb from '../images/Web/CH-Sign-Thumb.jpg';
import ClueMMThumb from '../images/Web/clueMM-thumb.png';
import Alta from '../images/Web/Alta-thumb.png';


class WebDesign extends Component {
    render(){
        return(
            <div className='homeContainer'>
                <Switch>
                    <Route path='/web-design'>
                    <div className='projectParentRelative'>
                        <Link to="/web-design/CooperHewitt">
                            <div className='projectParentAbsolute'>
                                <div className='projectBar'>
                                    <h1 className='projectName'>Cooper Hewitt</h1>
                                    <h2 className='projectType'>Web Design </h2>
                                </div>
                            </div>
                            <img src={CHThumb} className='designthumb' alt='Cooper Hewitt Project'></img>
                        </Link>
                    </div>
                    <div className='projectParentRelative'>
                        <Link to="/web-design/ClueMM">
                        <div className='projectParentAbsolute'>
                            <div className='projectBar'>
                                <h1 className='projectName'>Clue Murder Mystery</h1>
                                <h2 className='projectType'>Web Design </h2>
                            </div>
                        </div>
                        <img src={ClueMMThumb} className='designthumb' alt='Clue Murder Mystery Project'></img>
                        </Link>
                    </div>

                    <div className='projectParentRelative'>
                        <Link to="/web-design/Alta">   
                        <div className='projectParentAbsolute'>
                            <div className='projectBar'>
                                <h1 className='projectName'>Alta Ski Area</h1>
                                <h2 className='projectType'>Web Design </h2>
                            </div>
                        </div>
                        <img src={Alta} className='designthumb' alt='Alta Mockup Website'></img>
                        </Link>
                    </div>
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default WebDesign;