import React, {Component} from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux'

class Overview extends Component {

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
          Overview
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
)(Overview))