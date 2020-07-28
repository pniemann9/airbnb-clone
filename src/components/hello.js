import React from "react";

export class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.firstName} {this.props.lastName}!</div>;
  }
}

