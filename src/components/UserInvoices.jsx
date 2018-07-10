import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchUserInvoices } from '../actions/invoices'

class UserInvoices extends React.Component {
  componentDidMount() {
    this.props.fetchUserInvoices({ userId: this.props.match.params.id })
  }

  render() {
    const { fetching, invoices } = this.props

    if (fetching) return <p>Loading....</p>

    return (
      <div>
        <h2>My Invoices</h2>

        <div style={{ border: '1px solid lightgray', padding: 10, margin: 10 }}>
          {invoices.map(invoice => (
            <div key={invoice._id}>
              <p>name: {invoice.name}</p>

              <div className="actions">
                <Link to={`/invoices/${invoice._id}/edit`}>edit</Link>
                <button onClick={() => console.log('delete fucking invoice')}>delete</button>
                <Link to={`/invoices/${invoice._id}/details`}>details</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  invoices: state.invoices.items,
  fetching: state.invoices.fetching,
})

export default connect(mapStateToProps, { fetchUserInvoices })(UserInvoices)
