import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchUserInvoices, userInvoiceDelete } from '../actions/invoices'

class UserInvoices extends React.Component {
  state = { searchValue: '' }

  componentDidMount() {
    this.fetchUserInvoices()
  }

  fetchUserInvoices = (searchValue, page, keepOldData = true) => {
    const { id } = this.props.match.params
    const actualPage = page || this.props.page
    const actualSearchValue = searchValue === undefined || typeof searchValue === 'object' ? this.state.searchValue : searchValue

    this.props.fetchUserInvoices({ userId: id, page: actualPage, searchValue: actualSearchValue, keepOldData })
  }

  deleteInvoice = invoiceId => () => {
    this.props.userInvoiceDelete(
      { invoiceId },
      {
        resolve: () => { this.fetchUserInvoices() },
        reject: ()=> {}
      }
    )
  }

  render() {
    const { fetching, invoices } = this.props

    if (fetching || !invoices) return <p>Loading....</p>

    return (
      <div>
        <h2>My Invoices</h2>

        <div>
          <input
            onChange={(e) => {
              this.fetchUserInvoices(e.target.value, 1, false)
              this.setState({ searchValue: e.target.value })
            }}
            type="text"
          />
        </div>

        <div style={{ padding: 10, margin: 10 }}>
          {invoices.map(invoice => (
            <div style={{ border: '1px solid lightgray', marginBottom: 5, padding: 10, borderRadius: 5 }} key={invoice._id}>
              <p>name: {invoice.name}</p>

              <div className="actions">
                <Link to={`/invoices/${invoice._id}/edit`}>edit</Link>
                <button onClick={this.deleteInvoice(invoice._id)}>delete</button>
                <Link to={`/invoices/${invoice._id}/details`}>details</Link>
              </div>
            </div>
          ))}
        </div>

        {invoices.length % 5 === 0 && <button onClick={this.fetchUserInvoices} style={{ marginLeft: 20 }}>Load more</button>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  invoices: state.invoices.items,
  fetching: state.invoices.fetching,
  page: state.invoices.page,
})

export default connect(mapStateToProps, { fetchUserInvoices, userInvoiceDelete })(UserInvoices)
