import React from "react";
import { token } from "../../../token";
import { UserInfo } from "../card/user_info";

export class Form extends React.Component {
  state = {
    login: "",
    data: {}
  };
  handleChange = event => {
    const target = event.target;
    const value = target.value;
    console.log(target.name, value);
    this.setState({ login: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = JSON.stringify(this.state);
    console.log("state: ", this.state);
    fetch(
      `https://api.github.com/users/${this.state.login}?access_token=${token}`
    )
      .then(res => {
        if (res.status !== 200) {
          console.log("Something went wrong with the request");
        }
        return res.json();
      })
      .then(data => this.setState({ data }))
      .catch(err => {
        throw new Error("Fetching failed");
      });
    this.setState({ login: "" });
  };
  render() {
    return (
      <div>
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
        <UserInfo {...this.state.data} />
      </div>
    );
  }
}
