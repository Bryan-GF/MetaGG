import React, {Component} from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import { connect } from 'react-redux'
import {setOverview, setRanked} from '../../actions/index';
import ProfileHeader from './ProfileHeader';
import RankedHeader from './RankedHeader';

class ProfilePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
       
    }
  }

  async componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('name');
    await this.props.setOverview(username);
    await this.props.setRanked(this.props.overview.id);
  }

  render() {
    console.log(this.props.rankedData);
    return (
      <div>
        {!this.props.settingOverview ?
          <ProfileHeader overview={this.props.overview}/>
          :
          null
        }
        {!this.props.settingRanked ? 
          <RankedHeader stats={this.props.rankedData}/>
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
    settingOverview: state.profileReducer.settingOverview,
    rankedData: state.profileReducer.rankedData,
    settingRanked: state.profileReducer.settingRanked
  }
}

export default withRouter(connect(
  mapStateToProps, {setOverview, setRanked}
)(ProfilePage))