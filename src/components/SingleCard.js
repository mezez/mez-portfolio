import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

class SingleCard extends Component {

    static propTypes = {
        color: PropTypes.string.isRequired
    }

    render() {
        return (
            <div className='col-lg-3'>
                <Card body inverse color={this.props.color}>
                    <CardTitle>{this.props.project.title}</CardTitle>
                    <CardText>{this.props.project.description}</CardText>
                    <Button color="secondary">View {this.props.project.title}</Button>
                </Card>

            </div>
        );
    }
}



export default SingleCard;