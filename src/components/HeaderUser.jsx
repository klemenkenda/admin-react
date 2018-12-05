// react
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// subcomponents

// data models

// type definitions
type Props = {}

type State = {
    user: string
}

/**
 * User menu in the header.
 */
class HeaderUser extends Component<Props, State> {

    constructor() {
        super();

        this.state = {
            name: ""
        }
    }

    componentDidMount() {
        let user = JSON.parse(localStorage.getItem("user"));
        this.setState({name: user["name"]});
    }

    render() {
        return(
            <nav>

                {/* OPTIONS LIST */}
                <ul className="nav pull-right">

                    {/* USER OPTIONS */}
                    <li className="dropdown pull-left">
                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                            <img className="user-avatar" alt="" src="assets/images/noavatar.jpg" height="34" />
                            <span className="user-name">
                                <span className="hidden-xs">
                                    {this.state.name} <i className="fa fa-angle-down"></i>
                                </span>
                            </span>
                        </Link>
                        <ul className="dropdown-menu hold-on-click">
                            <li>{/* settings */}
                                <Link to="/settings" className="test"><i className="fa fa-cogs"></i> Settings</Link>
                            </li>

                            <li className="divider"></li>
                            <li>{/* logout */}
                                <Link to="/logout"><i className="fa fa-power-off"></i> Log Out</Link>
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