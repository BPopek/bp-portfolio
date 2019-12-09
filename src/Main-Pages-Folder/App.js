import React, {Component} from 'react';
import '../appMainStyles.scss';
import '../pageDesignStyles.scss';

import {Switch, Route} from 'react-router-dom'
import UXDesignContainer from '../UX-Design-Folder/UXDesignContainer';
import Home from './Home';
import WebDesignContainer from '../Web-Design-Folder/WebDesignContainer';
import GraphicDesignContainer from '../Graphic-Design-Folder/GraphicDesignContainer';
import Profile from './Profile';
import Navbar from './Navbar';
import Footer from './Footer';
import UXDesignWafflerFullPage from '../UX-Design-Folder/UXDesignWafflerFullPage';

class App extends Component {
  constructor(){
    super()
  }
  render(){
    return (
      <div className="App">
        <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/web-design' component={WebDesignContainer} />
              <Route path='/graphic-design' component={GraphicDesignContainer} />
              <Route exact path='/ux-design' component={UXDesignContainer} />
              <Route exact path='/ux-design/waffler' component={UXDesignWafflerFullPage} />
              <Route path='/profile' component={Profile} />
              {/* <Route Path='/ux-design-waffler'>
                <UXDesignWafflerFullPage />
              </Route> */}
            </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
