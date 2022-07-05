import React, { Component } from 'react'

export default class LoggedIn extends Component {
  render() {
    return (
      <div><h1>Hi there,<br/> Welcome this is your<br/><br/> Email :
      <mark>{this.props.state.mail}</mark>
      <br/><br/>
      This is your password : <mark>{this.props.state.password}</mark>
      </h1></div>
    )
  }
}
