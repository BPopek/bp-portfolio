import React, {Component} from 'react'
import WebDesignCH from './WebDesignCH'

class WebDesignContainer extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div className='Container'>
                <WebDesignCH alt='project'/>
            </div>
        )
    }
}

export default WebDesignContainer;