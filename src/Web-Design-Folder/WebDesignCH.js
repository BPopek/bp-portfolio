import React, {Component} from 'react'
import CHhome from '../images/Web/CHhomepage.png'

class WebDesignCH extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div className='homeContainer'>
                <div className='thumb'  background={CHhome} alt='Cooper Hewitt Project'/>
            </div>
        )
    }
}

export default WebDesignCH;