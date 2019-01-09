// react
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {

    componentDidUpdate() {
        window._aside();
    }

    render() {

        // transverse through config
        let modules = this.props.config.map((el, i) => {
            let title = el.name;
            if ("config" in el) {
                title = el.config.name;
            }

            let link_list = "/list/" + el.name;
            let link_add = "/add/" + el.name;

            return (
                <li key={i}>
                    <Link to="#">
                        <i className="fa fa-menu-arrow pull-right"></i>
                        <i className="main-icon fa fa-book"></i> <span>{title}</span>
                    </Link>
                    <ul>
                        <li><Link to={link_list}>List</Link></li>
                        <li><Link to={link_add}>Add</Link></li>
                    </ul>
                </li>
            )
        });

        return(
            <aside id="aside">
            <nav id="sideNav">
                <ul className="nav nav-list">
                    <li className="active">
                        <Link className="dashboard" to="/">
                            <i className="main-icon fa fa-dashboard"></i> <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <i className="fa fa-menu-arrow pull-right"></i>
                            <i className="main-icon fa fa-book"></i> <span>Pages</span>
                        </Link>
                        <ul>
                            <li><a href="page-invoice.html">Invoice</a></li>
                            <li><a href="page-login.html">Login</a></li>
                        </ul>
                    </li>
                    {modules}
                </ul>

                <h3>MORE</h3>
                <ul className="nav nav-list">
                    <li>
                        <Link to="/install">
                            <i className="main-icon fa fa-gears"></i>
                            {/* <span className="label label-warning pull-right">0</span> */} <span>Install</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/settings">
                            <i className="main-icon fa fa-code"></i>
                            {/*<span className="label label-danger pull-right">PRO</span>*/} <span>Settings</span>
                        </Link>
                    </li>
                </ul>

            </nav>

            <span id="asidebg"></span>
        </aside>
        )
    }
}

export default Menu;