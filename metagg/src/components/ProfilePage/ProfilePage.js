import React, {Component} from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';

class ProfilePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
       
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
          <p>Test</p>
      </div>
    );
  }
  
}

export default withRouter(ProfilePage);