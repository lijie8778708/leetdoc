import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './Auth/Login'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import SignUp from './Auth/SignUp'
class App extends Component {
  constructor() {
    super()
    this.state = {
      stage: 0,
    }
    this.handler = this.handler.bind(this)
  }

  handler(state) {
    const { stage, param } = state
    if (stage === 'sign-in') {
      this.setState({ stage: 1 })
    } else if (stage === 'sign-up') {
      this.setState({ stage: 0 })
    } else {
      this.setState({ stage: 2 })
    }
  }
  render() {
    return (
      <div className='auth-wrapper'>
        <div className='auth-inner' style={{ height: '350px', width: '300px' }}>
          {this.state.stage === 0 && <Login handler={this.handler} />}
          {this.state.stage === 1 && <SignUp handler={this.handler} />}
        </div>
      </div>
    )
  }
}

export default App
