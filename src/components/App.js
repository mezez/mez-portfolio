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

    aboutRef = React.createRef();
    projectRef = React.createRef();
    contactRef = React.createRef();

    scrollToRef = (name) => {
        const ref = this[name];
        console.log(ref);

        if (ref.current) {
            ref.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            })
        }
    }

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
                <Header brand={this.state.config.brand} scrollToRef={this.scrollToRef} />
                <br />
                <div ref={this.aboutRef}><FullCard aboutme={this.state.config.aboutme} /></div>

                <div ref={this.projectRef} className='row spc'>
                    {defaultConfig.projects.map(project => {
                        return <SingleCard color='info' project={project} />
                    })}
                </div>

                <TextCard text={"Okay. So up next is my various professional profile... "} />
                <div ref={this.contactRef}><Socal socials={defaultConfig.socials} /></div>
                <TextCard text={"And finally, you can reach me on " + this.state.config.phone + " or email at " + this.state.config.email} />
                <Closure fullname={this.state.config.fullname} />

            </div>
        );
    }
}


export default App;