import React from "react";
import "./style.css";
export class Bar extends React.Component {
  state = {
    health: 100
  };

  countdown() {
    this.setState(prevState => ({
      health: prevState.health - 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.countdown(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  reset = () => {
    this.setState({
      health:
        this.state.health > 90
          ? this.state.health + 100 - this.state.health
          : this.state.health + 10
    });
  };

  render() {
    if (this.state.health <= 0) {
      return <div>No job for you!</div>;
    } else {
      return (
        <div>
          <div className="Bar">
            Likelihood to get a job: {this.state.health} %
          </div>
          <button onClick={this.reset}>Add experience</button>
        </div>
      );
    }
  }
}
