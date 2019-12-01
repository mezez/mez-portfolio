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
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">M</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={() => {
                                    handleClick(props, "aboutRef")
                                }}>About Me</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={() => {
                                    handleClick(props, "projectRef")
                                }}>My Projects</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={() => {
                                    handleClick(props, "contactRef")
                                }}>Social Links and Contact</NavLink>
                            </NavItem>

                        </Nav>

                    </Collapse>
                </Navbar>
            </div>
            <div className='header'>

                <div>
                    <NavbarBrand href="#">{props.brand}</NavbarBrand>
                    <img className='img img-responsive' src="images/welcome.png" />

                </div>
            </div>
            <div className='below-header'>
                <p>To My Page</p>

            </div>
        </>
    );
}

Header.propTypes = {
    brand: PropTypes.string.isRequired
};


export default Header;