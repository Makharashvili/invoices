import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getUserInvoice, saveUserInvoice } from '../actions/invoices'

class EditInvoice extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      description: '',
      contactName: '',
      address: '',
      invoiceId: '',
    }
  }

  componentDidMount() {
    this.props.getUserInvoice({ invoiceId: this.props.match.params.id })
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
    this.state.invoiceId = this.props.match.params.id
    this.props.saveUserInvoice(
      this.state,
      {
        resolve: () => { this.props.history.push('/user/5b40df1cf5906f2cc011dd46/invoices') },
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
          <span>contactName: </span>
          <input value={this.state.contactName} onChange={(e) => this.setState({ contactName: e.target.value })}/>
        </div>
        <div>
          <span>address: </span>
          <input value={this.state.address} onChange={(e) => this.setState({ address: e.target.value })}/>
        </div>
        <div>
          <button onClick={this.handleSaveClick}>Save</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  details: state.invoices.details,
})

const mapDispatchToProps = { getUserInvoice, saveUserInvoice }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditInvoice))
