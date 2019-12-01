import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { Card } from "@operational/components"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Social = (props) => {

    return (
        <div>

            <Card>
                <br />
                <CardBody>
                    <div className='social '>

                        {
                            props.socials.map((social, key) => {
                                return <a key={key} target='blank' href={`http://${social.url}`}><Button outline color="info">{social.name}</Button></a>
                            })
                        }
                    </div>

                </CardBody>
            </Card>
        </div>
    );
}

Social.propTypes = {
    socials: PropTypes.array.isRequired,
    scrollToRef: PropTypes.func.isRequired,
}

export default Social;