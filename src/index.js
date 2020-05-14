import React from "react";
import ReactDOM from "react-dom";

import './styles/main.css'


class HelloMessage extends React.Component {
  render() {
    const d = new Date()
    console.log('reload at ' + d.toLocaleTimeString())
    return <div className='test'>Hello {this.props.name}</div>;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Daniel" />, mountNode);
