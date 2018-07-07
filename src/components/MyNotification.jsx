import React from 'react'
import { connect } from 'react-redux'

import { hideNotification } from '../actions/notfications'

class MyNotification extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.open === false && this.props.open !== nextProps.open) {
      setTimeout(() => this.props.hideNotification(), 2000)
    }
  }

  render() {
    const { open, message } = this.props

    return (
      open ? <p>{message}</p> : null
    )
  }
}

const mapStateToProps = state => ({
  open: state.notifications.open,
  message: state.notifications.message,
})

export default connect(mapStateToProps, { hideNotification })(MyNotification)
