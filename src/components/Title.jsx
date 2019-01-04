// react
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// subcomponents

// data models

/**
 * Title component.
 */
class Title extends Component {
    constructor(props, state) {
        super(props);
        this.state = {
            title: "",
            breadcrumb: []
        }
    }

    render() {
        let links = JSON.parse(this.props.links);
        return (
            <header id="page-header">
                <h1>{this.props.name}</h1>
                <ol className="breadcrumb">
                    {links.map(function (object, i) {
                        if ("url" in object) {
                            return <li key={i}><Link to={object.url}>{object.name}</Link></li>;
                        };
                        return <li key={i} className="active">{object.name}</li>
                    })}
                </ol>
            </header>
        )
    }
}

export default Title;