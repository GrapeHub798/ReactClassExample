import React, { Component } from "react";
import LoadingSpinner from "../loading-spinner/loading-spinner";
import { search } from "./getData";
import Cell from "../cell/cell";
import ImageModal from "../image-modal/image-modal";
import "./grid.css";

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            loading: false,
            currentImage: '',
            showModal: false,
        }
    }

    showLargerImage = (image) => {
        this.setState({ currentImage: image.src.large, showModal: true });
    }

    resetImage = () => {
        this.setState({ currentImage: '', showModal: false });
    }

    handleSearch = (searchTerm) => {
        search(searchTerm)
            .then(imageData => {
                setTimeout (() => {
                    this.setState({ loading: false, images: [] });
                    if (imageData && imageData.photos) {
                        this.setState({ images: imageData.photos });
                    }
                }, 3000)
            })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.searchValue !== this.props.searchValue) {
            if (this.props.searchValue) {
                //trigger the search
                this.setState({ loading: true, images: [] });
                this.handleSearch(this.props.searchValue);
            }
        }
    }

    render() {
        return <>
            {this.state.loading && <LoadingSpinner />}
            {!this.state.loading && <div className="row">
                {this.state.images && this.state.images.map((img, id) => (
                    <Cell key={img.id} image={img} setCurrentImage={this.showLargerImage} />
                ))}
            </div>}
            <ImageModal show={this.state.showModal} image={this.state.currentImage} imageClosed={this.resetImage} />
        </>
    }
}

export default Grid;