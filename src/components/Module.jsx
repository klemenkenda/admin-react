// react
import React, { Component } from 'react';

// subcomponents

// data models

// type definitions


/**
 * Install component.
 */
class Template extends Component {
    constructor(props, state) {
        super(props);

        this.state =  {
            installed: props.data.installed
        };
    }

    render() {
        console.log(this.state.installed);
        let title = this.props.data.config ? this.props.data.config.name : "";
        let description = this.props.data.config ? this.props.data.config.description : "";
        if (description === "") description = "No description available ...";

        return (
            <div id="panel-misc-portlet-r8" className="panel panel-default">

                <div className="panel-heading">

                    <span className="elipsis">{/* panel title */}
                        <strong>{title} ({ this.props.data.name })</strong>
                    </span>

                    {/* right options */}
                    <ul className="options pull-right relative list-unstyled">
                        <li>
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown"><span className={ this.state.installed ? "label label-success" : "label label-danger" }>Status <span className="caret"></span></span></a>
                            <ul className="dropdown-menu pull-right" role="menu">
                                <li><a data-portlet="color_status_switch" data-action="path_to_chat.php?status=online" data-method="GET" href="#label-success"><i className="fa fa-dot-circle-o color-green"></i> Install</a></li>
                                <li><a data-portlet="color_status_switch" data-action="path_to_chat.php?status=busy" data-method="GET" href="#label-danger"><i className="fa fa-dot-circle-o color-red"></i> Broken</a></li>
                                <li><a data-portlet="color_status_switch" data-action="path_to_chat.php?status=away" data-method="GET" href="#label-warning"><i className="fa fa-dot-circle-o color-yellow"></i> Detach</a></li>
                                <li><a data-portlet="color_status_switch" data-action="path_to_chat.php?status=offline" data-method="GET" href="#label-disabled"><i className="fa fa-dot-circle-o color-gray"></i> Uninstall</a></li>
                            </ul>
                        </li>
                    </ul>
                    {/* /right options */}

                </div>

                {/* panel content */}
                <div className="panel-body">
                    <p>{description}</p>
                    <b>Integrity:</b>&nbsp;
                    <span className={ this.props.data.integrity.create ? "label label-success" : "label label-danger" }>Create</span>&nbsp;
                    <span className={ this.props.data.integrity.destroy ? "label label-success" : "label label-danger" }>Destroy</span>&nbsp;
                    <span className={ this.props.data.integrity.data ? "label label-success" : "label label-danger" }>Initial data</span>&nbsp;
                    <span className={ this.props.data.integrity.config ? "label label-success" : "label label-danger" }>Admin config</span>

                </div>
                {/* /panel content */}

            </div>
        );
    }
}

export default Template;