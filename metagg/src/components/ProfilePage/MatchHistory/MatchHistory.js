import React, {Component} from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux'

class MatchHistory extends Component {

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
          Match History
      </div>
    );
  }
  
}


const mapStateToProps = (state) => {
  return {
    
  }
}

export default withRouter(connect(
  mapStateToProps, {}
)(MatchHistory))