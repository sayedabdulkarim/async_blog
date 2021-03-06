import React, { Component } from 'react';

import { connect } from 'react-redux'

//actions
import { createStream, fetchStreams, fetchStream, deleteStream, editStream0 } from '../../actions/action'

import { Field, reduxForm } from 'redux-form'

class StreamsForm extends Component {

  componentDidMount() {
  }
  

  renderError = ({ error, touch }) => {
    if(touch, error){
      return(
        <div className="ui error message">
          <div className="header">{ error }</div>
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    // console.log(formProps, ' propsssssssssssss');
    // return <input {...formProps.input}/>
    // console.log(meta, ' metaaaa')
    const className =  `field ${ meta.error && meta.touched ? 'error' : ''}`
    return (
      <div className="field">
        <label>{ label }</label>
        <input autoComplete= "" {...input} placeholder={ label }/>
        {/* {this.renderError(meta)} */}
        { meta.touched && meta.error ? (<div className="ui error message"><div className="header">{ meta.error }</div></div>) : <div></div>}
      </div>
    )
    // return <input onChange={ formProps.input.onChange } value={ formProps.input.value }/>
    // return <input onChange={ formProps.input.onChange } />
    // return <input type="text" name="" id=""/>
  }

  // onSubmit = ({title, description}) => {
  onSubmit = (formValues) => {

    this.props.onSubmit(formValues)
    // this.props.createStream(formValues)
  }

  render() {
    // console.log(this.props.userData, ' userData propsssss');

    return (
      <form className="ui form error" onSubmit={ this.props.handleSubmit(this.onSubmit) }>
        <Field name="title" component={ this.renderInput } label="Enter Title"/>
        <Field name="description" component={ this.renderInput } label="Enter Description"/>

        <button className="ui button primary" type="submit">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {}
  if(!formValues.title){
    errors.title = 'You must enter a title.'
  }
  if(!formValues.description){
    errors.description = 'You must enter a description.'
  }
  return errors
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

export default reduxForm({
  form: 'streamForm',
  validate
})(StreamsForm);

// export default connect(null, { createStream })(formWrapped)
// export default connect(mapStateToProps, mapDispatchToProps)(formWrapped)