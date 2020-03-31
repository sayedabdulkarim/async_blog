import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Modal from '../Modal'

import { connect } from 'react-redux'

import history from '../../history'

import { fetchStream, deleteStream } from '../../actions/action'

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
      // .then(res => res)
      // .then(res => console.log(res.data, ' dataaaa'))
  }
  
  render() {
    console.log(this.props, ' props');
    const actions = (
      <>
        <button onClick={() => this.props.deleteStream(this.props.match.params.id)} to="/" className="ui button negative">DELETE</button>
        <Link to="/" className="ui button">CANCEL</Link>
      </>
    )
    
    const onDismiss = () => {
      history.push('/')
    }
    
    const renderContent = () => {
      if(!this.props.userData){
        return 'Are you sure want to delete this stream ?'
      }

      return `Are you sure want to delete the stream with title ${ this.props.userData.title } ?`
    }
    
  return (
      <>
        <Modal 
          title='Delete Stream'
          content={ renderContent() }
          actions={ actions }
          onDismiss={ onDismiss }
        />
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return{
    userData: state.streamReducer[ownProps.match.params.id]
  }
}

const mapDispatchToProps = dispatch => {
  return{
    fetchStream: (id) => dispatch(fetchStream(id)),
    deleteStream: (id) => dispatch(deleteStream(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamDelete)
