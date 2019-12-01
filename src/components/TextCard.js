import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { Card } from "@operational/components"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const TextCard = (props) => {
    return (
        <div className='full-card'>

            <Card>
                <br />
                <CardBody>
                    <CardText>
                        {props.text}

                    </CardText>

                </CardBody>
            </Card>
        </div>
    );
}

TextCard.propTypes = {
    text: PropTypes.string
}

export default TextCard;