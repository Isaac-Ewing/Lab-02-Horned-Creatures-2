import React from "react";

export default class ImageItem extends React.Component {
    render() {
        return (
            <div className="image">
                <p>{this.props.title}</p>
                <img src={this.props.url} alt="" width="200px" height="200px"></img>
                <p className="para">{this.props.description}</p>
            </div>
        );
    }
}