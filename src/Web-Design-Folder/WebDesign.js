import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

//thumbs for web page
import CHThumb from '../images/Web/CH-Sign-Thumb.jpg';
import ClueMMThumb from '../images/Web/clueMM-thumb.png';
import Alta from '../images/Web/Alta-thumb.png';
import Ordino from '../images/Web/Ordino-thumb.png';
import DJLuvaLuva from '../images/Web/DJLuvaLuva-Thumb.png';
import SchittsCreek from '../images/Web/Schitts-Creek-thumb.png';

class WebDesign extends Component {
    render(){
        return(
            <div className='homeContainer web-design'>
                {/* <Switch>
                    <Route path='/web-design'> */}

                    <div className='projectParentRelative'>
                        <Link to="/web-design/SchittsCreek">
                            <div className='projectParentAbsolute'>
                                <div className='projectBar'>
                                    <h1 className='projectName'>Schitt's Creek Trivia</h1>
                                    <h2 className='projectType'>Web Design </h2>
                                </div>
                            </div>
                        <img src={SchittsCreek} className='designthumb' alt="Schitt's Creek Fan Homepage"></img>
                        </Link>
                    </div>

                    <div className='projectParentRelative'>
                        <Link to="/web-design/DjLuvaLuva">
                            <div className='projectParentAbsolute'>
                                <div className='projectBar'>
                                    <h1 className='projectName'>DJ Luva Luva</h1>
                                    <h2 className='projectType'>Web Design </h2>
                                </div>
                            </div>
                        <img src={DJLuvaLuva} className='designthumb' alt='DJ Luva Luva Homepage'></img>
                        </Link>
                    </div>

                    <div className='projectParentRelative'>
                        <Link to="/web-design/Ordino">
                        <div className='projectParentAbsolute'>
                            <div className='projectBar'>
                                <h1 className='projectName'>Ordino Job Organizer</h1>
                                <h2 className='projectType'>Web Design </h2>
                            </div>
                        </div>
                        <img src={Ordino} className='designthumb' alt='Ordino Job Organizer Sample Page'></img>
                        </Link>
                    </div>

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
                    {/* </Route>
                </Switch> */}
            </div>
        )
    }
}

export default WebDesign;