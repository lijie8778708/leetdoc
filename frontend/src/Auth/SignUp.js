import React, { Component } from 'react'

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      stage: 'sign-up',
      username: '',
      password: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleInputChange(event) {
    const k = event.target.name
    const v = event.target.value
    if (k === 'username') {
      this.setState({ username: v })
    } else {
      this.setState({ password: v })
    }
  }
  handleClick() {
    this.props.handler(this.state)
  }
  render() {
    return (
      <div>
        <h4>Sign Up</h4>

        <div className='form-group'>
          <label>Username</label>
          <input
            type='text'
            className='form-control'
            placeholder='Enter username'
            name='username'
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>Password</label>
          <input
            type='password'
            className='form-control'
            placeholder='Enter password'
            name='password'
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </div>
        <p className='forgot-password text-right'>
          Already registered <a onClick={this.handleClick}>login in?</a>
        </p>
        <button className='btn btn-primary btn-block'>Submit</button>
      </div>
    )
  }
}

export default SignUp
