import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import {connect} from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'

import Login from './components/Login'
import Register from './components/Register'
import MyNotification from './components/MyNotification'

import PrivateRoute from './shared/PrivateRoute'

import Invoices from './components/CreateInvoice'
import UserInvoices from './components/UserInvoices'
import InvoiceDetails from './components/InvoiceDetails'
import EditInvoice from './components/EditInvoice'
import CreateInvoiceDetail from './components/CreateInvoiceDetail'
import EditInvoiceDetail from './components/EditInvoiceDetail'
import Logout from './components/Logout'

class App extends Component {
  render() {
    return (
      <Router>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ justifyContent: 'space-between' }}>
              <a className="navbar-brand" href="#">Invocies</a>

              <div>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Main</Link>
                  </li>

                  {!this.props.userId && <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>}

                  {!this.props.userId && <li className="nav-item">
                    <Link className="nav-link" to="/register">register</Link>
                  </li>}

                  <li className="nav-item">
                    <Link className="nav-link" to="/invoices/create">Create invoice </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to={`/user/${this.props.userId}/invoices`}>My Invoices</Link>
                  </li>

                  {this.props.userId && (
                    <li className="nav-item">
                      <Link className="nav-link" to="/logout">Logout </Link>
                    </li>
                  )}
                </ul>
              </div>
            </nav>

            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/register" component={Register} />
            <PrivateRoute exact path="/" component={() => <p>Ola amigo!</p>} />
            <PrivateRoute path="/invoices/create" component={Invoices} />
            <PrivateRoute path="/user/:id/invoices" component={UserInvoices} />
            <PrivateRoute exact path="/invoices/:id/details" component={InvoiceDetails} />
            <PrivateRoute exact path="/invoices/:id/details/create" component={CreateInvoiceDetail} />
            <PrivateRoute exact path="/invoices/:invoiceId/details/:invoiceDetailId/edit" component = {EditInvoiceDetail} />
            <PrivateRoute exact path="/invoices/:id/edit" component={EditInvoice} />

            <MyNotification />
          </div>
      </Router>
    )
  }
}

export default connect((state)=>({ userId: state.auth.data.Id }))(App)

