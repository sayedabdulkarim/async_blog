import React, { Component } from 'react'

import { connect } from 'react-redux'

import { fetchStreams } from '../../actions/action'

import { Link } from 'react-router-dom'

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams()
  }
  
  renderAdmin = (stream) => {
    if(stream.userId === this.props.currentUserId){
      return(
        <div className="right floated content">
          <Link to={`/streams/edit/${ stream.id }`} className="ui button primary">EDIT</Link>
          <Link  to={`/streams/delete/${ stream.id }`} className="ui button negative">DELETE</Link>
        </div>
      )
    }
  }

  // renderCreate = (stream) => {
  //   if(){}
  // }

  render() {
    // console.log(this.props, ' props');
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">
          {
            this.props.userData.map(item => {
              return(
                <div className="item" key={ item.id }>
                    { this.renderAdmin(item) }
                  <i className="large middle aligned icon camera"></i>
                  <div className="content">
                    { item.title }
                    <div className="description">{ item.description }</div>
                  </div>
                </div>
              )
            })
          }
        </div>
        { 
          !this.props.isSignedIn ? (
            <div style={{ textAlign: 'right'}}>
              <Link to="/streams/new" className="ui button primary">CREATE STREAM</Link>
            </div>
          ) : ''
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    userData: Object.values(state.streamReducer),
    // userData: state.streamReducer.userData,
    currentUserId: state.authReducer.userId,
    isSignedIn: state.authReducer.isSignedIn
  }
}

const mapDispatchToProps = dispatch => {
  return{
    fetchStreams: () => dispatch(fetchStreams())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamList)