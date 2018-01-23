import React from "react";
import "./style.css";

class Form extends React.Component {
  state = {
    login: ""
  };
  handleChange = event => {
    const target = event.target;
    this.setState({ [target.name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = JSON.stringify(this.state);
    this.setState({ login: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">GitHub Username:</label>
        <input
          type="text"
          id="name"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <button type="submit">Get my Tamagotchi</button>
      </form>
    );
  }
}
