import React, {Component} from "react";
import logo from '../../logo.svg';
import "./loading-spinner.css";

class LoadingSpinner extends Component {
    render() {
        return (
            <>
                <img src={logo} className="App-logo" alt="logo" />
            </>
        )
    }
}

export default LoadingSpinner;