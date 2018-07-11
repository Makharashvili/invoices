import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchUserInvoiceDetails, userInvoiceDetailDelete } from '../actions/invoices'

class InvoiceDetails extends React.Component{
  componentDidMount() {
    this.fetchUserInvoiceDetails()
  }

  fetchUserInvoiceDetails = () => {
    this.props.fetchUserInvoiceDetails({ invoiceId: this.props.match.params.id })
  }

  deleteInvoiceDetail = invoiceDetailId => () => {
    this.props.userInvoiceDetailDelete
    (
      {invoiceDetailId},
      { 
        resolve: () => { this.fetchUserInvoiceDetails() },
        reject: ()=> {}
      }
    )
  }

  render(){
    const { fetching, invoiceDetails } = this.props

    if (fetching || !invoiceDetails){
      return(
        <div>
          <p>Loading...</p>
          {/* <Link to={`/invoices/${this.props.match.params.id}/details/create`}>create new detail</Link> */}
        </div>
      )
    }

    return (
      <div>
        <h2>My Invoice Details</h2>

        <div style={{ border: '1px solid lightgray', padding: 10, margin: 10 }}>
          {invoiceDetails.map(invoiceDetail => (
            <div key={invoiceDetail._id}>
              <p>name: {invoiceDetail.name}</p>
              <div className="actions">
                <Link to={`/invoices/${invoiceDetail.invoiceId}/details/${invoiceDetail._id}/edit`}>edit</Link>
                <button onClick={this.deleteInvoiceDetail(invoiceDetail._id)}>delete</button>
              </div>
            </div>
          ))}
          <Link to={`/invoices/${this.props.match.params.id}/details/create`}>create new detail</Link>
        </div>
    </div>
    )
  }
}

const mapStateToProps = state => ({
  invoiceDetails: state.invoiceDetails.items,
  fetching: state.invoiceDetails.fetching,
})

export default connect(mapStateToProps, { fetchUserInvoiceDetails, userInvoiceDetailDelete })(InvoiceDetails)

