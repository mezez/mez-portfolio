import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavbarBrand } from 'reactstrap';




//stateless functional component. 
const Header = (props) => {
    return (
        <>
            <div className='header'>

                <div>
                    <NavbarBrand href="#">{props.brand}</NavbarBrand>
                    <img src="images/welcome.png" />

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