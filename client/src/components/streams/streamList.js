import React, { Component } from 'react'

import { connect } from 'react-redux'

import { fetchStreams } from '../../actions/action'

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams()
  }
  
  render() {
    console.log(this.props.userData, ' props');
    return (
      <div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    // userData: state.streamReducer.userData
  }
}

const mapDispatchToProps = dispatch => {
  return{
    fetchStreams: () => dispatch(fetchStreams())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamList)