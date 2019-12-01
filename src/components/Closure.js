import React, { Component } from 'react';

class ClassName extends Component {
    render() {
        return (
            <div className='closure'>
                <p>Regards</p>
                <p></p>
                <p>{this.props.fullname}</p>
            </div>
        );
    }
}

export default ClassName;