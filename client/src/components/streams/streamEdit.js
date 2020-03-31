import React, { Component } from 'react'

import { connect } from 'react-redux'

//
import { fetchStreams, fetchStream, editStream } from '../../actions/action'

//
import StreamsForm from './streamsForm'

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStreams()

    this.props.fetchStream(this.props.match.params.id)
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues)
    console.log(formValues, ' formValues')
  }

  render() {
    console.log(this.props, ' propsssss');
    const findData = this.props.userData.find(i => i.id === parseInt(this.props.match.params.id))
    // console.log(findData.title, ' success');
    return (
      <div>
        <h2>Edit a Stream</h2>
        { findData ? <h1>{ findData.description } </h1>  : <h1>LOADING.....</h1> }

        <hr/>
        <hr/>

        {/* {
          findData ? (
            <StreamsForm 
              initialValues={{
                title: `${ findData.title }`,
                description: `${ findData.description }`
              }}
              onSubmit={ this.onSubmit }
            />
          ) : ''
        } */}
        <StreamsForm 
              initialValues={ this.props.stream }
              onSubmit={ this.onSubmit }
            />     
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps, ' ownPropssssssssssss')
  return{
    userData: Object.values(state.streamReducer),
    // userData: state.streamReducer,
    stream: state.streamReducer[ownProps.match.params.id]
  }  
}

const mapDispatchToProps = dispatch => {
  return{
    fetchStreams: () => dispatch(fetchStreams()),
    fetchStream: (id) => dispatch(fetchStream(id)),
    editStream: (id, formValues) => dispatch(editStream(id, formValues))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamEdit)