import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import {createInvoice} from '../actions/invoices'

class Invoices extends React.Component {
  state = {
    name: '',
    date: new Date(),
    description: '',
    contactName: '',
    address: '',
  }

  handleCreateClick = () => {
    this.props.createInvoice(
      this.state,
      {
        resolve: () => { this.props.history.push(`/user/${this.props.userId}/invoices`) },
        reject: () => {},
      }
    )
  }

  render(){
    const {loading} = this.props
    return(
      <div>
        <div>
          <span>name: </span>
          <input onChange={(e) => this.setState({ name: e.target.value })}/>
        </div>
        <div>
          <span>date: </span>
          <input type="date" onChange={(e) => this.setState({ date: e.target.value })}/>
        </div>
        <div>
          <span>description: </span>
          <input onChange={(e) => this.setState({ description: e.target.value })}/>
        </div>
        <div>
          <span>contactName: </span>
          <input onChange={(e) => this.setState({ contactName: e.target.value })}/>
        </div>
        <div>
          <span>address: </span>
          <input onChange={(e) => this.setState({ address: e.target.value })}/>
        </div>
        <div>
          <button disabled={loading} onClick={this.handleCreateClick}>Create</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.invoices.loading,
  userId: state.auth.data.Id
})

export default withRouter(connect(mapStateToProps, { createInvoice })(Invoices))