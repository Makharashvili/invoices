import React from 'react'
import { connect } from 'react-redux'

import { userAuth } from '../actions/auth'

class Login extends React.Component {
  state = {
    username: ''
  }

  handleInputChange = inputName => e => {
    this.setState({ [inputName]: e.target.value })
  }

  handleSubmit = () => {
    this.props.userAuth(
      this.state,
      {
        resolve: () => { this.props.history.replace('/') }
      }
    )
  }

  render() {
    return (
      <div>
        <br/>
        Username: <input style={{ marginLeft: 5}} type="text" name="username" onChange={this.handleInputChange('username')} />
        <br /><br />
        <button style={{ marginLeft: 5}} onClick={this.handleSubmit}>Log In</button>
      </div>
    )
  }
}

export default connect(undefined, { userAuth })(Login)
