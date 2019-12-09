import React, {Component} from 'react'
import CHhome from '../images/Web/CHhomepage.png'

class WebDesignCH extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div className='WebDesign'>
                <div className='webDesignCHitem'  background={CHhome} alt='Cooper Hewitt Project'/>
            </div>
        )
    }
}

export default WebDesignCH;