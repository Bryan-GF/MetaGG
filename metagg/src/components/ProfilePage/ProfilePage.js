import React, {Component} from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import { connect } from 'react-redux'
import {setOverview} from '../../actions/index';
import ProfileHeader from './ProfileHeader';

class ProfilePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
       
    }
  }

  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('name');
    this.props.setOverview(username);
  }

  render() {
    console.log(this.props.overview);
    return (
      <div>
        {!this.props.settingOverview ?
          <ProfileHeader overview={this.props.overview}/>
          :
          null
        }
      </div>
    );
  }
  
}

const mapStateToProps = (state) => {
  return {
    overview: state.profileReducer.overview,
  }
}

export default withRouter(connect(
  mapStateToProps, {setOverview}
)(ProfilePage))