import React from 'react';

export default class Dropdown extends React.Component {
    render() {
        return (
            <label>
                <select onChange={this.props.handleChange}>
                    <option value="">--select--</option>
                    {this.props.options.map((data) => <option value={data} key={data}>{data}</option>)}
                </select>
            </label>
        )
    }
}
