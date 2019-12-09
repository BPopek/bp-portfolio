import React, {Component} from 'react'
import ClueMM from '../images/Web/clueMM-thumb.png'

class WebDesignClueMM extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div className='WebDesign'>
                <div className='webDesignClueMM'  background={ClueMM} alt='Clue Murder Mystery'/>
            </div>
        )
    }
}

export default WebDesignCH;