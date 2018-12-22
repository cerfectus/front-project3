import React, { Component } from "react";
import Router from "./Router";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";

class App extends Component {
  render() {
    return (
      <div className="casa">
        <div className="cambia">
          <Navbar />
        </div>
        <div className="App">
          <Router />
        </div>
      </div>
    );
  }
}

export default App;
