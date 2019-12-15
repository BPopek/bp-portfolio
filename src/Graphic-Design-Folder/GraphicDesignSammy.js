import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

//images for Sammy carousel
import SammyMoxie from '../images/GD/Sammy/SammyMoxie.jpg';
import SammyMoxieCB from '../images/GD/Sammy/SammyCBBottle.jpg';
import SammyMoxieTravel from '../images/GD/Sammy/SammyTravel.jpg';


class GraphicDesignSammy extends Component {

    render(){
        
        return(
            <>
                <Switch>
                    <Route path='/graphic-design/Sammy'>
                        <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} swipeable={true} dynamicHeight={true} useKeyboardArrows={true} width={'50vw'}>
                            <div>
                                <img src={SammyMoxie} alt='Sammy Has Moxie'/>
                            </div>
                            <div>
                                <img src={SammyMoxieCB} alt='Sammy Has Moxie CamelBak Bottle'/>
                            </div>
                            <div>
                                <img src={SammyMoxieTravel} alt='Sammy Has Moxie Travel Mug'/>
                            </div>
                        </Carousel>
                        {/* <img src={SammyMoxie} className='GDesignShirt' alt='Sammy Has Moxie'/>
                        <img src={SammyMoxieCB} className='GDesignShirt' alt='Sammy Has Moxie CamelBak'/>
                        <img src={SammyMoxieTravel} className='GDesignShirt' alt='Sammy Has Moxie Travel Mug'/> */}
                    </Route>                 
                </Switch>
            </>
        )
    }
}

export default GraphicDesignSammy;