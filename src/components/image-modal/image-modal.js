import React, { Component } from "react";
import { Modal } from "react-bootstrap";

class ImageModal extends Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.imageClosed} size="xl">
                <Modal.Body className="text-center">
                    <img src={this.props.image} alt=""/>
                </Modal.Body>
            </Modal>
        )
    }
}

export default ImageModal;