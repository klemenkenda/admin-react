// react
import React, { Component } from 'react';

// subcomponents
import Text from './form/Text';

// data models

// type definitions


/**
 * Install component.
 */
class Fields extends Component {

    render() {
        console.log(this.props.fields);

        let fields = this.props.fields.map((el, i) => {
            if (el.type === "text") {
                return (
                    <Text name={el.name} value={el.value} description={el.description} key={i} />
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