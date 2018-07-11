import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import {createInvoiceDetail} from '../actions/invoices'

class Invoices extends React.Component {
  state = {
    name: '',
    description: '',
    quantity: 0,
    price: 0,
    total: 0,
    invoiceId: this.props.match.params.id,
  }

  handleCreateClick = () => {
    this.props.createInvoiceDetail(
      this.state,
      {
        resolve: () => {
          this.props.history.push(`/invoices/${this.state.invoiceId}/details`)
        },
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
          <span>description: </span>
          <input onChange={(e) => this.setState({ description: e.target.value })}/>
        </div>
        <div>
          <span>quantity: </span>
          <input onChange={(e) => this.setState({ quantity: e.target.value })}/>
        </div>
        <div>
          <span>price: </span>
          <input onChange={(e) => this.setState({ price: e.target.value })}/>
        </div>
        <div>
          <span>total: </span>
          <input onChange={(e) => this.setState({ total: e.target.value })}/>
        </div>
        <div>
          <button disabled={loading} onClick={this.handleCreateClick}>Save</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.invoiceDetails.loading,
})

export default withRouter(connect(mapStateToProps, { createInvoiceDetail })(Invoices))