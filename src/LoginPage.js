import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import LoggedIn from './LoggedIn'
import {Mock} from './Mock'

export default class LoginPage extends Component {

  state={
    istoggle:false,
    mail:'',
    password:'',
    datas:Mock
  }
  mailChange=(e)=>{
    this.setState({
      mail:e.target.value
    })
  }
  passwordChange=(e)=>{
    this.setState({
      password:e.target.value
    })
  }
  submit=(e)=>{
    e.preventDefault();
    this.setState({
      istoggle:!this.state.istoggle
    })
    
  }
  render() {
    if(this.state.istoggle){
      if(this.state.datas.email===this.state.mail && this.state.datas.password===this.state.password ){
        return(
          <LoggedIn state={this.state}/>
        )
      }
     
    }
    return (
      <div className='main'>
        <div className='section'>
            <div className='newacount' id='signin'>Sign In</div>
            <div id='newacount'>
            <NavLink className='newacount' to="/newaccount">NewAccount</NavLink>
            </div>
        </div>
       <form onSubmit={this.submit} className='body'>
       <input required 
         id='mail' 
         className='input'
          type='text'
           placeholder='E-mail'
           value={this.state.mail}
           onChange={this.mailChange}/>
        <input required
         className='input'
          type='password'
           placeholder='password'
           value={this.state.password}
           onChange={this.passwordChange}/>
        <div className='checkbox'>
        <input id='chkbx' type='checkbox'/>
        <label id='chkbx'>Remember me</label>
        </div>
        <button type='submit' className='input'>Login</button>
        <div><NavLink to='/changepassword'>forgot password</NavLink></div>
       </form>
      </div>
    )
  }
}
