import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap'

class ClassName extends Component {
    static propTypes = {
        fullname: PropTypes.string.isRequired,
        scrollToRef: PropTypes.func.isRequired,
    }

    render() {
        return (
            <div className='closure row'>
                <div className='col-lg-10'>
                    <p>Regards,</p>
                    <p></p>
                    <p>{`${this.props.fullname}.`}</p>
                </div>
                <div className='col-lg-2'>
                    <Button onClick={() => {
                        this.props.scrollToRef('homeRef')
                    }} className='align-right' outline color="info">Back to Top</Button>
                </div>
            </div>
        );
    }
}

export default ClassName;