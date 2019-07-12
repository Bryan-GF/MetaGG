import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import ProfilePage from './components/ProfilePage/ProfilePage';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route path="/profile/:region/:name" component={ProfilePage} />
      </div>
    );
  }
  
}

export default App;
