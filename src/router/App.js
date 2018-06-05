import React, { Component } from 'react';
import Index from '../pages/index/Index'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import Exchange from '../pages/exchange/Exchange'
import NotMatch from '../pages/404/404'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
          <Router>
            <div className="App">
              <Redirect from="/*" to="/index" />              
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/exchange" component={Exchange} />                
                <Route path="/" component={Index} />
                {/* <Route path="*" render={() => <Redirect to="/404" />} /> */}
                {/* <Route exact={true} path="*" component={NotMatch} /> */}
              </Switch>
            </div>
          </Router>
    );
  }
}

export default App;
