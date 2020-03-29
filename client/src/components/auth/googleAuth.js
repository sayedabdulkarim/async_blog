import React, { Component } from 'react';

//
import axios from 'axios'

import { connect } from 'react-redux'

import { signIn, signOut } from '../../actions/action'


class GoogleAuth extends Component {

  // state = {
  //   auth: null,
  //   isSignedIn: null
  // }

 componentDidMount() {

   window.gapi.load('client:auth2', () => {
     window.gapi.client.init({
       clientId: '195023238947-hgaf9uu5sug2p397evlml32pdcj6m3o5.apps.googleusercontent.com',
       scope: 'email'
     })
     .then(() => {
      this.auth = window.gapi.auth2.getAuthInstance()
      // this.setState({ auth : this.auth, isSignedIn: this.auth.isSignedIn.get()  });
      this.onAuthChange(this.auth.isSignedIn.get())  
      this.auth.isSignedIn.listen(this.onAuthChange)
      //  this.auth = window.gapi.auth2.getAuthInstance()
     })
   })
 }
 

 onAuthChange = (isSignedIn) => {
  //  if(isSignedIn){
  //    this.props.signIn(this.auth.currentUser.get().getId())
  //  }
  //  else{
  //    this.props.signOut()
  //  }
  isSignedIn ? this.props.signIn(this.auth.currentUser.get().getId()) : this.props.signOut() 
}

//  onAuthChange = () => {
//    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
//  }

 onSignInClick = () => {
  this.auth.signIn()
  // console.log(this.props, ' signIn cliked')

  // console.log(this.state, ' signIn');
 }

 onSignOutClick = () => {
  this.auth.signOut()
  // console.log(this.props, ' signOut cliked')
  // console.log(this.state, ' signOut');
 }

 
 render() {
    // console.log(this.props, ' props');

    let signStatus = ''
    if(this.props.isSignedIn === null){
      // signStatus = <strong>WE dont know, You are signIn :(</strong>
      signStatus = null
      // signStatus = <button onClick={ this.onSignInClick } className="ui green google button"><i className="google icon"></i>Sign In with Google</button>
    }
    else if(this.props.isSignedIn){
      // signStatus = <strong>I am Signed In</strong>
      signStatus = <button onClick={ this.onSignOutClick } className="ui red google button"><i className="google icon"></i>Sign Out</button>
    }
    else{
    //  signStatus = <strong>I am not Signed In</strong>
      signStatus = <button onClick={ this.onSignInClick } className="ui green google button"><i className="google icon"></i>Sign In with Google</button>

    }
    // const auth = window.gapi.auth2.getAuthInstance()
    // console.log(this.state.auth.isSignedIn.get(), ' auth')
    // console.log(this.state, ' state')
    return (
      <div>
        {/* hello */}
        { signStatus } 
        {/* { this.renderAuthButton }  */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { isSignedIn, userId } = state.authReducer
  // const { } = state.form
  // console.log(state.form, ' formmmmmmmmmmmmm');
  return{
    // name,
    isSignedIn,
    userId
  }
}

const mapDispatchToProps = dispatch => {
  return{
    signIn: (id) => dispatch(signIn(id)), 
    signOut: () => dispatch(signOut()),
    // isSignedIn: state.authReducer.isSignedIn
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth)
// export default connect(mapStateToProps, { signIn, signOut, clicked })(GoogleAuth)
// export default GoogleAuth;