import React, { Component } from 'react'
import styles from './App.css'

import 'babel-polyfill';


import { connect } from 'react-redux'

//router
import { BrowserRouter as Router, HashRouter, Route, Switch } from 'react-router-dom'

//pages
import Header from './Header'

import StreamCreate from './streams/streamCreate'
import StreamDelete from './streams/streamDelete'
import StreamEdit from './streams/streamEdit'
import StreamList from './streams/streamList'
import StreamShow from './streams/streamShow'


class App extends Component {
  render() {
    console.log(this.props, ' props');
    return (
      <div className="ui container">
        <HashRouter>
          <Header />
          <Switch>
            <Route path="/streams/show" component={ StreamShow }/>
            <Route path="/streams/edit" component={ StreamEdit }/>
            <Route path="/streams/delete" component={ StreamDelete }/>
            <Route path="/streams/new" component={ StreamCreate }/>
            <Route path="/" component={ StreamList }/>
          </Switch>
        </HashRouter>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return{
    // replaceme: state.replaceme
  }
}

const mapDispatchToProps = dispatch => {
  return{}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)