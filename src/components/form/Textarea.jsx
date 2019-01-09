// react
import React, { Component } from 'react';

// subcomponents

// data models

// type definitions


/**
 * Install component.
 */
class Textarea extends Component {

    render() {
        console.log(this.props);
        let name = this.props.name;
        let description = this.props.description;
        if (description === undefined) {
            description = name;
        };
        let value = this.props.value;

        let textareaClass = "form-control";

        if (("type" in this.props) && (this.props.type === "summernote")) {
            textareaClass = "form-control summernote";
        }

        return (
            <div className="row">
                <div className="form-group">
                    <div className="col-md-12 col-sm-12">
                        <label>{description}</label>
                        <textarea name="content" rows="10" className={textareaClass} data-height="300" data-lang="en-US"></textarea>
                    </div>
                </div>
            </div>
        )
    }
}

export default Textarea;