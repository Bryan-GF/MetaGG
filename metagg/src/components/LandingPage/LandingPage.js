import React, {Component} from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux'

class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
        search: '',
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {

  }

  async handleSearch() {
    this.props.history.push({
      pathname: `/profile/${this.props.region}/${this.state.search}/overview`,
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


const mapStateToProps = (state) => {
  return {
    region: state.profileReducer.region
  }
}

export default withRouter(connect(
  mapStateToProps, {}
)(LandingPage))