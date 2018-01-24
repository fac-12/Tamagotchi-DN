import React from "react";
import { Form } from "./form";
import { Card } from "./card";
import { Bar } from "./bar";
export default class App extends React.Component {
  state = { data: {} };

  handleChange = data => {
    this.setState({ data });
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <Form info={this.handleChange} />

        {data ? <Card data={data} /> : null}
        <Bar />
      </div>
    );
  }
}
