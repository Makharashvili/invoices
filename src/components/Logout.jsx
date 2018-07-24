import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { userLogout } from '../actions/auth'

class Logout extends React.Component {
  componentDidMount(){
    localStorage.removeItem('token')
    this.props.userLogout()
    this.props.history.push('/login')
  }

  render() { return null }
}

export default withRouter(connect(undefined, { userLogout })(Logout))
