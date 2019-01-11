import React, { Component } from "react";
import "./App.css";
import CharacterList from "./components/CharacterList";
import Pagination from "react-js-pagination";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      activePage: 1
    };
  }
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }
  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people");
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList starwarsChars={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
