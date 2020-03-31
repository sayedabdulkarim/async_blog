import React, { Component } from 'react'
import ReactDOM from 'react-dom'

//history
import history from '../history'

export default class Modal extends Component {
  render() {
    return ReactDOM.createPortal(
      <div onClick={ this.props.onDismiss } style={{ border: '5px solid red'}} className="ui dimmer modals visible active">
        <div onClick={ e => e.stopPropagation() } style={{ border: '5px solid green'}} className="ui standard modal visible active">
          <div className="header">{ this.props.title }</div>
          <div className="content">{ this.props.content }</div>
          <div className="actions">{ this.props.actions }</div>
        </div>
      </div>,
      document.querySelector('#modal')
    )
  }
}
