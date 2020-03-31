import React, { Component } from 'react';

import { connect } from 'react-redux'

//actions
import { createStream, fetchStreams, fetchStream, deleteStream, editStream0 } from '../../actions/action'

import { Field, reduxForm } from 'redux-form'


//
import StreamsForm from './streamsForm'

class StreamCreate extends Component {

  componentDidMount() {
  }
  
  // onSubmit = ({title, description}) => {
  onSubmit = (formValues) => {
    // e.preventDefault()
    // console.log('submitted');
    this.props.createStream(formValues)
    // alert(title)
    // alert(description)
    // console.log(formValues, ' formValues');
  }

  render() {
    // console.log(this.props.userData, ' userData propsssss');
    return (
      <div>
        <h3>Stream Form</h3>
        <StreamsForm 
          onSubmit={ this.onSubmit }
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state, ' stateeeeeeeee')
  return{
    userData: state.streamReducer.userData
  }
}

const mapDispatchToProps = dispatch => {
  return{
    createStream: (val) => dispatch(createStream(val)),
  }
}

// export default connect(null, { createStream })(formWrapped)
export default connect(mapStateToProps, mapDispatchToProps)(StreamCreate)