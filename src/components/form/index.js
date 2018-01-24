import React from "react";
import { token } from "../../../token";
import { UserInfo } from "../card/user_info";

export class Form extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    const value = event.target.username.value;
    fetch(`https://api.github.com/users/${value}?access_token=${token}`)
      .then(res => {
        if (res.status !== 200) {
          console.log("Something went wrong with the request");
        }
        return res.json();
      })
      .then(data => {
        this.props.info(data);
      })
      .catch(err => {
        throw new Error("Fetching failed");
      });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">GitHub Username:</label>
          <input type="text" id="username" />
          <button type="submit">Get my Tamagotchi</button>
        </form>
      </div>
    );
  }
}
