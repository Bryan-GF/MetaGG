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
    this.props.history.push({
      pathname: `/profile/${this.state.region}/overview`,
      search: `?name=${this.state.search}`,
    })
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