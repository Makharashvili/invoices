import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getUserInvoiceDetail, saveUserInvoiceDetail } from '../actions/invoices'

class EditInvoiceDetail extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      description: '',
      quantity: '',
      price: '',
      total: '',
      invoiceDetailId: '',
      invoiceId: ''
    }
  }

  componentDidMount() {
    this.props.getUserInvoiceDetail({ invoiceDetailId: this.props.match.params.invoiceDetailId })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.details !== this.props.details) {
      this.initializeForm(nextProps.details)
    }
  }

  initializeForm = (values) => {
    this.setState(values)
  }

  handleSaveClick = () => {
    const { invoiceId, invoiceDetailId } = this.props.match.params

    const params = {
      ...this.state,
      invoiceDetailId,
    }

    this.props.saveUserInvoiceDetail(
      params,
      {
        resolve: () => { this.props.history.push(`/user/${this.props.userId}/invoices/${invoiceId}/details`) },
        reject: () => {},
      }
    )
  }

  render() {
    return (
      <div>
        <div>
          <span>name: </span>
          <input value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}/>
        </div>
        <div>
          <span>description: </span>
          <input value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })}/>
        </div>
        <div>
          <span>quantity: </span>
          <input value={this.state.quantity} onChange={(e) => this.setState({ quantity: e.target.value })}/>
        </div>
        <div>
          <span>price: </span>
          <input value={this.state.price} onChange={(e) => this.setState({ price: e.target.value })}/>
        </div>
        <div>
          <span>total: </span>
          <input value={this.state.total} onChange={(e) => this.setState({ total: e.target.value })}/>
        </div>
        <div>
          <button onClick={this.handleSaveClick}>Save</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  details: state.invoiceDetails.details,
  userId: state.auth.data.Id
})

const mapDispatchToProps = { getUserInvoiceDetail, saveUserInvoiceDetail }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditInvoiceDetail))
