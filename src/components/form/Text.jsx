// react
import React, { Component } from 'react';

// subcomponents

// data models

// type definitions


/**
 * Install component.
 */
class Text extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.handleElementChange(this.props.name, event.target.value);
    }

    render() {
        console.log(this.props);
        let name = this.props.name;
        let description = this.props.description;
        if (description === undefined) {
            description = name;
        };
        let value = this.props.value;

        return (
            <div className="row">
                <div className="form-group">
                    <div className="col-md-12 col-sm-12">
                        <label>{description}</label>
                        <input type="text" className="form-control" name={name} id={name} value={value} onChange={this.handleChange}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Text;