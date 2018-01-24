import React from "react";
import { UserInfo } from "./user_info";
import "./style.css";

export class Card extends React.Component {
  render() {
    if (!this.props.data) return <h3>Loading...</h3>;
    return (
      <div>
        <UserInfo {...this.props.data} />
      </div>
    );
  }
}
