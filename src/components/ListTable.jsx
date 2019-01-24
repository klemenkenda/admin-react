// react
import React, { Component } from 'react';

// subcomponents

// data models

// type definitions


/**
 * List Table component.
 */
class ListTable extends Component {

    loadData() {
        if ((this.state != null) && (this.props.config.table == this.state.table)) {
            console.log("No need for reload!");
            return;
        }

        // this.setState({ data: [] });

        window._backend.getTableData(this.props.config.table,
            (data) => {
                this.setState({
                    data: data,
                    table: this.props.config.table
                });
                console.log(data);
            },
            (err) => {
                console.log("Error loading list table");
                // TODO
            }
        )
    }

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();
    }

    render() {
        let table = this.props.config.table;
        let fields = this.props.config.fields;

        if (this.state == null) return null;

        // render header
        let header = fields.map((el, i) => {
            return(<th key={i}>{el.description}</th>);
        })

        // render the lines
        let lines = this.state.data.map((line, i) => {

            let row = fields.map((el, i) => {
                if (el.name == "action") {
                    return(<td key={i}>
                        <a href="#" class="btn btn-warning btn-xs"><i class="fa fa-edit white"></i> Edit</a>
						<a href="#" class="btn btn-danger btn-xs"><i class="fa fa-times white"></i> Del</a>
                    </td>);
                } else {
                    return(<td key={i}>{line[el.name]}</td>);
                }
            });

            return(<tr>{row}</tr>);
        });



        return (
            <div className="table-responsive">
                <table className="table table-hover nomargin">
                    <thead>
                        <tr>
                            {header}
                        </tr>
                    </thead>
                    <tbody>
                        {lines}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ListTable;