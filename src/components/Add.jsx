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
 * Add component.
 */
class Add extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleElementChange = this.handleElementChange.bind(this);
    }

    handleSubmit(event) {
        console.log(event);
        console.log(this);
        event.preventDefault();
    }

    /**
     * Data from subsequent form fields gets stored in this state here.
     *
     * @param {string} key Key (field) name.
     * @param {string} val Value.
     */
    handleElementChange(key, val) {
        this.setState({
            [key]: val
        });
    }

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
                <form className="validate" onSubmit={this.handleSubmit}>
                    <div id="content" className="padding-20">
                        <div className="row">
                            <div className="col-md-9 col-sm-12">
                                <Fields fields={fields} handleElementChange={this.handleElementChange} />
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