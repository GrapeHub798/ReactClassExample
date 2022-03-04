import React, { Component } from "react";
import "./cell.css";

class Cell extends Component {
    render() {
        const image = this.props.image && this.props.image.src && this.props.image.src.small;
        const photographer = this.props.image && this.props.image.photographer;

        return (
            <div className="border d-inline-block pointer cell" onClick={()=> this.props.setCurrentImage(this.props.image)}>
                <div><img src={image} alt={`by: ${photographer}`} /></div>                
            </div>
        )
    }
}

export default Cell;