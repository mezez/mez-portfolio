import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { Card } from "@operational/components"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

class Fullcard extends Component {

    static propTypes = {
        aboutme: PropTypes.string.isRequired
    };


    render() {
        return (
            <div className='full-card'>

                <Card>
                    <br />
                    <CardBody>
                        <CardTitle>Dear Visitor,</CardTitle>
                        <CardText>
                            <p> A Little Bit About Me </p>
                            {this.props.aboutme}
                            <p></p>
                            <p> Now below, you can find a few of my projects. </p>
                        </CardText>

                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Fullcard;