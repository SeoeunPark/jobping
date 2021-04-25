import React, { Component } from "react";
import Prepare from "./components/Prepare";
import "./style.css";

class App extends Component {
  handleCreate = (data) => {
    console.log(data);
  };
  render() {
    return (
      <div>
        <Prepare onCreate={this.handleCreate} />
      </div>
    );
  }
}

export default App;
