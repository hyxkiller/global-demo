import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

class Register extends Component {
    render() {
        const intl = this.props.intl;
        return (
            <div>
                {intl.formatMessage({id: 'register'})}                
            </div>
        );
    }
}

export default injectIntl(Register);