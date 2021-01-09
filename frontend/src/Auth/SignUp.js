import React, { Component } from 'react'
import axios from 'axios'
import Popup from '../Components/Popup'
class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      stage: 'sign-up',
      username: '',
      password: '',
      showPopup: false,
      msg: '',
      code: 0,
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.submit = this.submit.bind(this)
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
  submit() {
    if (this.state.username === '' || this.state.password == '') {
      this.setState({
        msg: 'Missing username or password',
        code: 400,
        showPopup: !this.state.showPopup,
      })
    } else {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const body = JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })

      try {
        axios.put('/user/signup', body, config).then((res) => {
          console.log(res.data.code)
          if (res.data.code === '200') {
            this.setState({
              msg: 'Signed Up!',
              showPopup: !this.state.showPopup,
              code: 200,
            })
            //   this.props.handler(this.state)
          } else if (res.data.code === '400') {
            this.setState({
              msg: res.data.data.msg,
              showPopup: !this.state.showPopup,
              code: 400,
            })
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    })
    if (this.state.code === 200) {
      this.props.handler(this.state)
    }
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
          Already registered{' '}
          <a style={{ color: 'blue' }} onClick={this.handleClick}>
            login in?
          </a>
        </p>
        <button className='btn btn-primary btn-block' onClick={this.submit}>
          Submit
        </button>
        {this.state.showPopup ? (
          <Popup
            text={this.state.msg}
            closePopup={this.togglePopup.bind(this)}
            button={this.state.code === 200 ? 'btn-primary' : 'btn-danger'}
          />
        ) : null}
      </div>
    )
  }
}

export default SignUp
