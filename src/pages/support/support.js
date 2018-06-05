import React, { Component } from 'react';

class support extends Component {
    
    render() {
        return (
            <div>
                {this.props.match.params.id}
            </div>
        );
    }
}

export default support;