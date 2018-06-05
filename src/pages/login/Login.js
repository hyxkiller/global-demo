import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Pagination } from 'antd'

class Login extends Component {
    render() {
        const intl = this.props.intl;
        return (
            <div>
                {intl.formatMessage({id: 'login'})}
                <Pagination defaultCurrent={1} total={50} showSizeChanger />
                
            </div>
        );
    }
}

export default injectIntl(Login);