import React from "react";
import "./style.css";
export class Bar extends React.Component {
  move = () => {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    frame = () => {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + "%";
      }
    };
  };

  render() {
    return (
      <div>
        <div id="myProgress">
          <div id="myBar" />
        </div>
        <button onClick={this.move}>Click Me</button>
      </div>
    );
  }
}
