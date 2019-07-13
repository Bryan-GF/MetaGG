import React, {Component} from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux'
import {getMatchHistory} from '../../../actions/index';
import MatchCard from './MatchCard';

class MatchHistory extends Component {

  constructor(props) {
    super(props);
    this.state = {
        beginIndex: 0,
        endIndex: 20
    }
  }

  async componentDidMount() {
    console.log(this.props.overview.accountId)
    await this.props.getMatchHistory(this.props.overview.accountId, this.state.beginIndex, this.state.endIndex);
  }

  render() {
    return (
      <div>
          {this.props.gettingMatchHistory ? 
            <p>Loading...</p>
            :
            <div>
              {this.props.matchHistory.map(match => <MatchCard info={match}/>)}
            </div>
           
          }
      </div>
    );
  }
  
}


const mapStateToProps = (state) => {
  return {
    overview: state.profileReducer.overview,
    matchHistory: state.profileReducer.matchHistory,
    gettingMatchHistory: state.profileReducer.gettingMatchHistory
  }
}

export default withRouter(connect(
  mapStateToProps, { getMatchHistory}
)(MatchHistory))