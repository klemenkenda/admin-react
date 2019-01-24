// react
import React, { Component } from 'react';

// subcomponents
import Title from './Title';
import Fields from './Fields';
import ListTable from './ListTable';

// data models

// type definitions

// libraries
import Utils from '../lib/Utils';


/**
 * List component.
 */
class List extends Component {

    render() {
        let module = Utils.moduleId(this.props);
        let title = Utils.moduleTitle(this.props.config, module);
        let config = Utils.moduleConfig(this.props.config, module);

        let links = [
            { name: "Dashboard", url: "/" },
            { name: title, url: "/list/" + module },
            { name: "View" }
        ];

        // extract fields
        let tableConfig = [];

        if (config != null) {
            tableConfig = config.config[0];
        } else {
            return null;
        }
        console.log(config);

        let title_name = "View Data - " + title;

        return (
            <div>
                <Title name={title_name} links={JSON.stringify(links)} />
                <div id="content" className="padding-20">
                    <div className="row">
                        <ListTable config={tableConfig} />
                    </div>
                </div>
            </div>
        );
    }
}

export default List;