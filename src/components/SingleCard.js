import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

class SingleCard extends Component {

    static propTypes = {
        color: PropTypes.string.isRequired,
        project: PropTypes.object.isRequired
    }

    render() {
        return (
            <div className='col-lg-3 below-header'>
                <Card body inverse color={this.props.color}>
                    <CardTitle>{this.props.project.title}</CardTitle>
                    <CardText>{this.props.project.description}</CardText>
                    <a className='btn btn-secondary' target='blank' href={`${this.props.project.url}`}>View {this.props.project.title}</a>
                </Card>

            </div>
        );
    }
}



export default SingleCard;