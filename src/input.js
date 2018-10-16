import React, { Component } from "react";
const { Provider, Consumer } = React.createContext("");

export default class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  render() {
    return (
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <br />
        <br />
        <Provider value={this.state.name}>
          <IntermediateContainer />
        </Provider>
      </div>
    );
  }
}

const IntermediateContainer = () => {
  return <DisplayComponent />;
};

const DisplayComponent = () => {
  return (
    <span>
      {" "}
      Welcome to Paradise, <Consumer>{name => name}</Consumer>{" "}
    </span>
  );
};
