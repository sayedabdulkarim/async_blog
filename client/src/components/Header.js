import React, { Component } from 'react'


//
import GoogleAuth from './auth/googleAuth'

import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">Streamy</Link>
        <div className="right menu">
          <Link to="/streams/edit" className="item">All Streams</Link>
          <GoogleAuth />
        </div>
      </div>
    )
  }
}
