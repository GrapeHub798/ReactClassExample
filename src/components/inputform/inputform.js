import React, { Component } from "react";
import { Form, Button, Row, Col } from 'react-bootstrap'

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
    }

    //generic onChange
    onChange = (e) => {
        if (!e.target.name) {
            return;
        }

        this.setState({ [e.target.name]: e.target.value });
    }

    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.search();
        }
    }

    search = () => {
        if (!this.state.searchTerm) {
            return;
        }

        this.props.doSearch(this.state.searchTerm);
    }


    render() {
        return (
            <>
                <Row className="m-3">
                    <Col md="8">
                        <Form.Control type="text" value={this.state.searchTerm} name="searchTerm" onChange={this.onChange} placeholder="Search for Images" onKeyDown={this._handleKeyDown}/>
                    </Col>
                    <Col md="4">
                        <Button variant="primary" onClick={this.search}>Search</Button>
                    </Col>
                </Row>
            </>
        )
    }
}

export default InputForm;