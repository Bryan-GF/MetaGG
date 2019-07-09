import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Route exact path="/" component={LandingPage} />
    );
  }
  
}

export default App;
