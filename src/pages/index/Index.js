import React, { Component } from 'react';
import Header from '../common/Header'
import Footer from '../common/Footer'
import Exchange from '../exchange/Exchange'
import Funds from '../funds/Funds'
import User_center from '../user_center/User_center'
import Otc from '../otc/Otc'
import Notice from '../notice/Notice'
import support from '../support/support';
import Main from '../main/Main'
import './styles/index.scss'
import { BrowserRouter as Router, Redirect, Route, Switch, NavLink } from 'react-router-dom'

class Index extends Component {
    render() {
        return (
            <div className="index">
                <div className="header">
                    <Header history={this.props.history}/>
                </div>
                <div className="content">
                <Switch>
                    <Redirect exact from="/" to="/index" />
                    <Route path="/index" component={Main} />
                    <Route path="/funds" component={Funds} />
                    <Route path="/user" component={User_center} />
                    <Route path="/otc" component={Otc} />
                    <Route path="/notice" component={Notice} />
                    <Route path="/support/:id" component={support} />
                </Switch>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Index;