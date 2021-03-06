import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';




//stateless functional component. 
const handleClick = (props, name) => {
    props.scrollToRef(name);
};

const Header = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <>
            <div className='nv'>
                <Navbar color="light" light expand="md" >
                    <NavbarBrand href="/">{props.brand}</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem className='lk'>
                                <NavLink onClick={() => {
                                    handleClick(props, "homeRef")
                                }}>Home</NavLink>
                            </NavItem>
                            <NavItem className='lk'>
                                <NavLink onClick={() => {
                                    handleClick(props, "aboutRef")
                                }}>About Me</NavLink>
                            </NavItem>
                            <NavItem className='lk'>
                                <NavLink onClick={() => {
                                    handleClick(props, "projectRef")
                                }}>My Projects</NavLink>
                            </NavItem>
                            <NavItem className='lk'>
                                <NavLink onClick={() => {
                                    handleClick(props, "contactRef")
                                }}>Social/Contact</NavLink>
                            </NavItem>

                        </Nav>

                    </Collapse>
                </Navbar>
            </div>
            <div className='header'>
                <div className='below-header'>
                    <br />
                    <h3>Welcome,    Get comfortable!</h3>
                    <div className='me row  col-xs-12'>
                        <img className="img me img-responsive" src={`/images/${props.imgName}`} />
                    </div>

                </div>
            </div>

        </>
    );
}

Header.propTypes = {
    brand: PropTypes.string.isRequired,
    scrollToRef: PropTypes.func.isRequired
};


export default Header;