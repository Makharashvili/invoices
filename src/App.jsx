import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import Register from './components/Register'
import MyNotification from './components/MyNotification'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/">Main</Link>

          <Route exact path="/" component={() => <p>asdas</p>} />
          <Route path="/register" component={Register} />

          <MyNotification />
        </div>
      </Router>
    )
  }
}

export default App
