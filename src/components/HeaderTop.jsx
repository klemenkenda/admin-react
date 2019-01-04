// react
import React, { Component } from 'react';

// subcomponents
import HeaderUser from './HeaderUser';
// data models

// type definitions

/**
 * Install component.
 */

class HeaderTop extends Component {
    render() {
        return(
            <header id="header">

                {/* Mobile Button */}
                <button id="mobileMenuBtn"></button>

                {/* Logo */}
                <span className="logo pull-left">
                    <img src="assets/images/logo_light.png" alt="admin panel" height="35" style={{marginTop: "8px"}} />
                </span>
                {/*
                <form method="get" action="page-search.html" className="search pull-left hidden-xs">
                    <input type="text" className="form-control" name="k" placeholder="Search for something..." />
                </form>
                */}

                <HeaderUser />

            </header>
        )
    }
}

export default HeaderTop;