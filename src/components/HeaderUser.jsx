// react
import React, { Component } from 'react';

// subcomponents

// data models

// type definitions

/**
 * User menu in the header.
 */
class HeaderUser extends Component {
    render() {
        let user = JSON.parse(localStorage.getItem("user"));
        let name = user["name"];
        return(
            <nav>

                {/* OPTIONS LIST */}
                <ul className="nav pull-right">

                    {/* USER OPTIONS */}
                    <li className="dropdown pull-left">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                            <img className="user-avatar" alt="" src="assets/images/noavatar.jpg" height="34" />
                            <span className="user-name">
                                <span className="hidden-xs">
                                    {name} <i className="fa fa-angle-down"></i>
                                </span>
                            </span>
                        </a>
                        <ul className="dropdown-menu hold-on-click">
                            <li>{/* settings */}
                                <a href="/settings"><i className="fa fa-cogs"></i> Settings</a>
                            </li>

                            <li className="divider"></li>
                            <li>{/* logout */}
                                <a href="/logout"><i className="fa fa-power-off"></i> Log Out</a>
                            </li>
                        </ul>
                    </li>
                    {/* /USER OPTIONS */}

                </ul>
                {/* /OPTIONS LIST */}

            </nav>
        )
    }
}

export default HeaderUser;