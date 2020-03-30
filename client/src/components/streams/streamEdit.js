import React, { Component } from 'react'

import { connect } from 'react-redux'

//
import { fetchStreams } from '../../actions/action'

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStreams()
  }
  
  render() {
    console.log(this.props, ' propsssss');
    // const findData = this.props.userData.find(i => i.id === this.props.match.params.id)
    // console.log(findData, ' success');
    return (
      <div>
        StreamEdit
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    userData: Object.values(state.streamReducer)
    // userData: state.streamReducer
  }  
}

const mapDispatchToProps = dispatch => {
  return{
    fetchStreams: () => dispatch(fetchStreams())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamEdit)