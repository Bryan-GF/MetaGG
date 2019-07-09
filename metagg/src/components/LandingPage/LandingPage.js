import React, {Component} from 'react';
import { withRouter } from 'react-router';

class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
        search: '',
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    this.props.history.push(`/profile/naW/${this.state.search}/overview`);
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