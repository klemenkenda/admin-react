// react
import React, { Component } from 'react';

// subcomponents
import Title from './Title';
import Fields from './Fields';

// data models

// type definitions

// libraries
import Utils from '../lib/Utils';

/**
 * Install component.
 */
class Add extends Component {

    render() {
        let module = Utils.moduleId(this.props);
        let title = Utils.moduleTitle(this.props.config, module);
        let config = Utils.moduleConfig(this.props.config, module);

        // extract fields
        let fields = [];
        if (config != null) {
            fields = config.config[0].fields
        }

        let links = [
            { name: "Dashboard", url: "/" },
            { name: title, url: "/view/" + module },
            { name: "Add" }
        ];

        let title_name = "Add Record - " + title;

        return(
            <div>
                <Title name={title_name} links={JSON.stringify(links)} />
                <form className="validate" action="php/contact.php" method="post" encType="multipart/form-data" data-success="Sent! Thank you!" data-toastr-position="top-right">
                    <div id="content" className="padding-20">
                        <div className="row">
                            <div className="col-md-9 col-sm-12">
                                <Fields fields={fields} />
                            </div>
                            <div className="col-md-3 col-sm-12">
                                <div className="panel panel-default">
                                    <div className="panel-body">
                                        <input type="submit" className="btn btn-3d btn-dirtygreen btn-block" value="Submit" />
                                        <input type="submit" className="btn btn-3d btn-purple btn-block" value="Submit &amp; edit" />
                                        <input type="submit" className="btn btn-3d btn-red btn-block" value="Discard" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Add;