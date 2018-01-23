import React from "react";
import { getUserData } from "../../utils/data_helpers";
import { UserInfo } from "./user_info";
import "./style.css";

export class Card extends React.Component {
  state = {
    data: {}
  };

  componentDidMount() {
    getUserData(`${username}`).then(data => this.setState({ data }));
  }

  render() {
    if (!this.state.data) return <h3>Loading...</h3>;
    return (
      <div>
        <UserInfo {...this.state.data} />
      </div>
    );
  }
}
