import React from "react";
import { Form } from "./form";
import { Card } from "./card";
import { Bar } from "./bar";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }

  handleChange = data => {
    this.setState({ data });
  };

  render() {
    const { data } = this.state;

    return (
      <div>
        <Form info={this.handleChange} />

        {Object.keys(data).length !== 0 ? <Card data={data} /> : null}
        {Object.keys(data).length !== 0 ? <Bar /> : null}
      </div>
    );
  }
}
