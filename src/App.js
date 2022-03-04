import './App.css';
import React, { Component } from "react";
import { Container } from 'react-bootstrap';
import InputForm  from './components/inputform/inputform';
import Grid from './components/grid/grid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  setSearchTerm = (search) => {
    this.setState({ searchTerm: search });
  }

  render() {
    const searchTerm = this.state.searchTerm;
    return (
      <div className="App">
        <Container>
          <InputForm doSearch={this.setSearchTerm} />
          <Grid searchValue={searchTerm} />
        </Container>
      </div>
    );
  }
}

export default App;
