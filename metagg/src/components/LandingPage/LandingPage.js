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
    await axios.post('http://localhost:4000/api/user/by-name', {"name": this.state.search})
    .then(res => {
      console.log(res.data);
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