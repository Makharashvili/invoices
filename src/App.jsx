import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import Register from './components/Register'
import MyNotification from './components/MyNotification'

import Invoices from './components/CreateInvoice'
import UserInvoices from './components/UserInvoices'
import InvoiceDetails from './components/InvoiceDetails'
import EditInvoice from './components/EditInvoice'
import CreateInvoiceDetail from './components/CreateInvoiceDetail'
import EditInvoiceDetail from './components/EditInvoiceDetail'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/">Main </Link>
          
          <Link to="/register">Register </Link>
          <Link to="/invoices/create">Create invoice </Link>
          <Link to="/user/5b40df1cf5906f2cc011dd46/invoices">My Invoices</Link>

          <Route exact path="/" component={() => <p>asdas</p>} />
          <Route path="/register" component={Register} />
          <Route path="/invoices/create" component={Invoices} />
          <Route path="/user/:id/invoices" component={UserInvoices} />
          <Route exact path="/invoices/:id/details" component={InvoiceDetails} />
          <Route exact path="/invoices/:id/details/create" component={CreateInvoiceDetail} />
          <Route exact path="/invoices/:invoiceId/details/:invoiceDetailId/edit" component = {EditInvoiceDetail} />
          <Route exact path="/invoices/:id/edit" component={EditInvoice} />

          <MyNotification />
        </div>
      </Router>
    )
  }
}

export default App
