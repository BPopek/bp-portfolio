import React, {Component} from 'react';
import '../appMainStyles.scss';
import '../pageDesignStyles.scss';

import {Switch, Route} from 'react-router-dom'
import Home from './Home';

import WebDesignContainer from '../Web-Design-Folder/WebDesignContainer';
import WebDesignAlta from '../Web-Design-Folder/WebDesignAlta';
import WebDesignCH from '../Web-Design-Folder/WebDesignCH';
import WebDesignClueMM from '../Web-Design-Folder/WebDesignClueMM';
import WebDesignOrdino from '../Web-Design-Folder/WebDesignOrdino';
import WebDesignDJLuvaLuva from '../Web-Design-Folder/WebDesignDJLuvaLuva';

import GraphicDesignContainer from '../Graphic-Design-Folder/GraphicDesignContainer';
import GraphicDesignCPO from '../Graphic-Design-Folder/GraphicDesignCPO';
import GraphicDesignBC from '../Graphic-Design-Folder/GraphicDesignBC';
import GraphicDesignSammy from '../Graphic-Design-Folder/GraphicDesignSammy';
import GraphicDesignPrint from '../Graphic-Design-Folder/GraphicDesignPrint';
import GraphicDesignBA from '../Graphic-Design-Folder/GraphicDesignBA';
import GraphicDesignMisc from '../Graphic-Design-Folder/GraphicDesignMisc';

import Profile from './Profile';
import Navbar from './Navbar';
import Footer from './Footer';
import UXDesignContainer from '../UX-Design-Folder/UXDesignContainer';
// import UXDesignWafflerFullPage from '../UX-Design-Folder/UXDesignWafflerFullPage';

class App extends Component {
  
  render(){
    return (
      <div className="App">
        <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/web-design' component={WebDesignContainer} />
              <Route exact path='/web-design/DjLuvaLuva' component={WebDesignDJLuvaLuva} />
              <Route exact path='/web-design/Ordino' component={WebDesignOrdino} />
              <Route exact path='/web-design/Alta' component={WebDesignAlta} />
              <Route exact path='/web-design/CooperHewitt' component={WebDesignCH} />
              <Route exact path='/web-design/ClueMM' component={WebDesignClueMM} />
              <Route exact path='/graphic-design' component={GraphicDesignContainer} />
              <Route exact path='/graphic-design/CPO' component={GraphicDesignCPO} />
              <Route exact path='/graphic-design/BC' component={GraphicDesignBC} />
              <Route exact path='/graphic-design/Sammy' component={GraphicDesignSammy} />
              <Route exact path='/graphic-design/BlueAngels' component={GraphicDesignBA} />
              <Route exact path='/graphic-design/Print' component={GraphicDesignPrint} />
              <Route exact path='/graphic-design/MISC' component={GraphicDesignMisc} />
              <Route exact path='/ux-design' component={UXDesignContainer} />
              {/* <Route exact path='/ux-design/waffler' component={UXDesignWafflerFullPage} /> */}
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
