import React, {Component} from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';

const region = {}

class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
        search: '',
        region: 'naW'
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {

  }

  async handleSearch() {
    await axios.get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${this.state.search}?api_key=${process.env.REACT_APP_RIOT_API}`)
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));
    this.props.history.push(`/profile/${this.state.region}/${this.state.search}/overview`);
  }

  render() {
    return (
      <div>
          <input placeholder="Search Summoner" onChange={(ev) => {this.setState({search: ev.target.value})}}/>
          <button onClick={() => { this.handleSearch()}}>Search</button>
      </div>
    );
  }
  
}

export default withRouter(LandingPage);