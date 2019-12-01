import React, { Component } from 'react';
import { HeaderBar, Logo, HeaderMenu, Avatar, ContextMenuProps } from "@operational/components"
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import Header from './Header';
import FullCard from './FullCard';
import SingleCard from './SingleCard';
import TextCard from './TextCard';
import Socal from './Social';
import Closure from './Closure';
import defaultConfig from '../config'
import { stat } from 'fs';


class App extends Component {


    state = {
        config: {}
    };

    componentDidMount() {

        this.setState({
            config: defaultConfig
        });
    }

    componentDidUpdate() {

    }

    componentWillUnmount() {
    }


    render() {

        return (
            <div>
                <Header brand={this.state.config.brand} />
                <br />
                <FullCard aboutme={this.state.config.aboutme} />

                <div className='row spc'>
                    {defaultConfig.projects.map(project => {
                        return <SingleCard color='info' project={project} />
                    })}
                </div>

                <TextCard text={"Okay. So up next is my various professional profile... "} />
                <Socal socials={defaultConfig.socials} />
                <TextCard text={"And finally, you can reach me on " + this.state.config.phone + " or email at " + this.state.config.email} />
                <Closure fullname={this.state.config.fullname} />

            </div>
        );
    }
}


export default App;