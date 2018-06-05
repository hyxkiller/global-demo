import React, { Component } from 'react';
import Header from '../common/Header'
import './styles/exchange.scss'

class Exchange extends Component {
    render() {
        return (
            <div>
                <div className="exchangeHeader">
                    <Header></Header>
                </div>
                Exchange
            </div>
        );
    }
}

export default Exchange;