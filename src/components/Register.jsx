import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { registerUser } from '../actions/auth'

class Register extends React.Component {
  state = {
    username: '',
    email: '',
    error: '',
  }

  handleRegisterClick = () => {
    const { username, email } = this.state

    if (!username || !email) {
      this.setState({ error: 'fill all fields' })
    } else {
      this.setState({ error: '' })
      this.props.registerUser(
        this.state,
        {
          resolve: () => { this.props.history.replace('/') },
          reject: (error) => {
            console.log('registration failed')
            this.setState({ error })
          }
        }
      )
    }
  }

  render() {
    const { loading } = this.props

    return (
      <div>
        <div style={{ marginBottom: 10 }}>
          <span>Username: </span>
          <input onChange={e => this.setState({ username: e.target.value })} />
        </div>

        <div>
          <span>email: </span>
          <input onChange={e => this.setState({ email: e.target.value })} />
        </div>

        <div>
          <button disabled={loading} onClick={this.handleRegisterClick}>Register</button>
        </div>

        {this.state.error}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
})

export default withRouter(connect(mapStateToProps, { registerUser })(Register))
