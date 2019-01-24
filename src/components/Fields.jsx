// react
import React, { Component } from 'react';

// subcomponents
import Text from './form/Text';
import Textarea from './form/Textarea';

// data models

// type definitions


/**
 * Install component.
 */
class Fields extends Component {

    // rendering template specific calls after rendering of the component
    componentDidMount() {

    }

    componentDidUpdate() {
        window._editors();
    }

    render() {
        console.log(this.props.fields);

        let handleElementChange = this.props.handleElementChange;
        console.log(handleElementChange);

        let fields = this.props.fields.map((el, i) => {
            if (el.type === "text") {
                return (
                    <Text name={el.name} value={el.value} description={el.description} key={i} handleElementChange={handleElementChange} />
                )
            } else if (el.type === "textarea") {
                return (
                    <Textarea name={el.name} value={el.value} description={el.description} key={i} handleElementChange={handleElementChange} />
                )
            } else if (el.type === "richtextarea") {
                return (
                    <Textarea name={el.name} value={el.value} description={el.description} type="summernote" key={i} handleElementChange={handleElementChange} />
                )
            }
        });

        return (
            <fieldset>
                <div className="panel panel-default">
                    <div className="panel-body">
                        {fields}
                    </div>
                </div>
            </fieldset>
        )

    }
}

export default Fields;