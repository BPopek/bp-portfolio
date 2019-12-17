import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import UXDesignWaffler from './UXDesignWaffler';

class UXDesignContainer extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div className=''>
                <UXDesignWaffler />
            </div>
        )
    }
}

export default UXDesignContainer;