import React, {Component} from 'react'
// import CHhome from '../images/Web/CHhomepage.png'
import Iframe from 'react-iframe'

class WebDesignCH extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div className='parentDiv'>
                {/* <div className='thumb'  background={CHhome} alt='Cooper Hewitt Project'/> */}
                <div className='webGitHubLinks'>
                    <a href="http://cooper-hewitt-sdm.surge.sh/" className='projectLink'>Visit Cooper Hewitt Museum Project Website</a> 
                    <br></br>
                    <a href="https://github.com/BPopek/Cooper-Hewitt-SDM" className='projectLink'>Visit Github Repository</a>
                </div>
                
                <Iframe url='http://cooper-hewitt-sdm.surge.sh/'
                    width='683px'
                    height='450px'
                    className='iframe'
                    display='initial'
                    position='relative' />
            </div>
        )
    }
}

export default WebDesignCH;