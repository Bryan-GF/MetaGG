import React, {Component} from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'
import {setOverview, setRanked} from '../../actions/index';
import ProfileHeader from './ProfileHeader';
import RankedHeader from './RankedHeader';
import {Link} from 'react-router-dom';
import ChampionStats from './ChampionStats/ChampionStats';
import MatchHistory from './MatchHistory/MatchHistory';
import Overview from './Overview/Overview';

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
    await this.props.setRanked(this.props.overview.accountId);
  }

  render() {
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
        <div className="profilePageNav">
          <Link to={{pathname: `/profile/${this.props.region}/${this.props.overview.name}/overview`,
                     search: this.props.history.location.search}}>Overview</Link>
          <Link to={{pathname: `/profile/${this.props.region}/${this.props.overview.name}/match-history`,
                      search: this.props.history.location.search}}>Match History</Link>
          <Link to={{pathname: `/profile/${this.props.region}/${this.props.overview.name}/champion-stats`,
                      search: this.props.history.location.search}}>Champion Stats</Link>
        </div>
        {!this.props.settingOverview ?
        <div>
        <Route path="/profile/:region/:name/overview" component={Overview} />
        <Route path="/profile/:region/:name/match-history" component={MatchHistory} />
        <Route path="/profile/:region/champion-stats" component={ChampionStats} />
        </div>
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
    region: state.profileReducer.region,
    settingOverview: state.profileReducer.settingOverview,
    rankedData: state.profileReducer.rankedData,
    settingRanked: state.profileReducer.settingRanked
  }
}

export default withRouter(connect(
  mapStateToProps, {setOverview, setRanked}
)(ProfilePage))