// react
import React, { Component } from 'react';


class Menu extends Component {
    render() {
        return(
            <aside id="aside">
            <nav id="sideNav">
                <ul className="nav nav-list">
                    <li className="active">
                        <a className="dashboard" href="/">
                            <i className="main-icon fa fa-dashboard"></i> <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-menu-arrow pull-right"></i>
                            <i className="main-icon fa fa-book"></i> <span>Pages</span>
                        </a>
                        <ul>
                            <li><a href="page-invoice.html">Invoice</a></li>
                            <li><a href="page-login.html">Login</a></li>
                            <li><a href="page-register.html">Register</a></li>
                            <li><a href="page-lock.html">Lock Screen</a></li>
                            <li><a href="page-forum.html">Forum</a></li>
                            <li><a href="page-404.html">Error 404</a></li>
                            <li><a href="page-500.html">Error 500</a></li>
                            <li><a href="page-pricing.html">Pricing Table</a></li>
                            <li><a href="page-search.html">Search Result</a></li>
                            <li><a href="page-sidebar.html">Sidebar Page</a></li>
                            <li><a href="page-user-profile.html">User Profile</a></li>
                            <li><a href="page-blank-1.html">Blank Page</a></li>
                        </ul>
                    </li>

                </ul>

                <h3>MORE</h3>
                <ul className="nav nav-list">
                    <li>
                        <a href="/install">
                            <i className="main-icon fa fa-gears"></i>
                            {/* <span className="label label-warning pull-right">0</span> */} <span>Install</span>
                        </a>
                    </li>
                    <li>
                        <a href="/settings">
                            <i className="main-icon fa fa-code"></i>
                            {/*<span className="label label-danger pull-right">PRO</span>*/} <span>Settings</span>
                        </a>
                    </li>
                </ul>

            </nav>

            <span id="asidebg"></span>
        </aside>
        )
    }
}

export default Menu;