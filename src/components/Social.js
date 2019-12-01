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
                    <div className='social'>

                        {
                            props.socials.map(social => {
                                return <Button outline color="info">{social.name}</Button>
                            })
                        }
                    </div>

                </CardBody>
            </Card>
        </div>
    );
}

Social.propTypes = {
    //text: PropTypes.string
}

export default Social;