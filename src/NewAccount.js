import React, { Component } from 'react'
import LoginPage from './LoginPage'
import {Mock} from './Mock'

export default class Changepassword extends Component {
  state={
    email:'',
    password:'',
    toggle:false
  }
  changeemail=(e)=>{
    this.setState({
      email:e.target.value
    })
  }
  changepassword=(e)=>{
    this.setState({
      password:e.target.value
    })  
  }
  update=()=>{
    Mock.email=this.state.email
    Mock.password=this.state.password
    console.log(Mock.email,Mock.password)
    this.setState({
      toggle:!this.state.toggle
    }) 
  }


  render() {
    if(this.state.toggle){
      return(
        <LoginPage/>
      )
    }
    return (
      <div className='changepassword'>
         <h3>Create Your Account</h3>
        <div className='container'>
         
          <input 
          id='email'
          type='email'
           placeholder='Enter New email'
           value={this.state.text}
           onChange={this.changeemail}
           />
            <input 
          id='password'
          type='password'
           placeholder='Enter your password'
           value={this.state.password}
           onChange={this.changepassword}
           />
           <button onClick={this.update}>Update</button>
        </div>
      </div>
    )
  }
}
